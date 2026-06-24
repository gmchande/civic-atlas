import { existsSync, statSync } from "node:fs";
import { extname, join, normalize, sep } from "node:path";

const host = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? "8129");
const basePath = normalizeBasePath(process.env.CIVIC_ATLAS_BASE_PATH ?? "/civic-atlas");
const distDir = normalize(process.env.CIVIC_ATLAS_DIST_DIR ?? join(import.meta.dir, "dist"));
const distRoot = distDir.endsWith(sep) ? distDir : `${distDir}${sep}`;
const publicUrl = process.env.CIVIC_ATLAS_PUBLIC_URL ?? `http://${host}:${port}${basePath}/`;

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".geojson": "application/geo+json; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function normalizeBasePath(value: string) {
  const path = `/${value.trim().replace(/^\/+|\/+$/g, "")}`;
  return path === "/" ? "" : path;
}

function isHealthPath(pathname: string) {
  return pathname === "/up" || pathname === `${basePath}/up`;
}

function fileResponse(pathname: string, method: string) {
  const stat = statSync(pathname);
  const headers = new Headers({
    "Cache-Control": pathname.includes(`${sep}assets${sep}`)
      ? "public, max-age=31536000, immutable"
      : "no-cache",
    "Content-Length": String(stat.size),
    "Content-Type": contentTypes[extname(pathname)] ?? "application/octet-stream",
  });

  return new Response(method === "HEAD" ? null : Bun.file(pathname), { headers });
}

function safeDistPath(relativePath: string) {
  const decoded = decodeURIComponent(relativePath);
  const candidate = normalize(join(distDir, decoded));
  if (candidate !== distDir && !candidate.startsWith(distRoot)) return null;
  return candidate;
}

const server = Bun.serve({
  hostname: host,
  port,
  async fetch(request) {
    const url = new URL(request.url);
    const { method } = request;

    if (method !== "GET" && method !== "HEAD") {
      return new Response("Method not allowed\n", { status: 405 });
    }

    if (isHealthPath(url.pathname)) {
      return new Response(method === "HEAD" ? null : "OK\n", {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    if (url.pathname === "/") {
      return Response.redirect(`${basePath}/`, 302);
    }

    if (url.pathname === basePath) {
      return Response.redirect(`${basePath}/`, 301);
    }

    if (!url.pathname.startsWith(`${basePath}/`)) {
      return new Response("Not found\n", { status: 404 });
    }

    const relativePath = url.pathname.slice(basePath.length + 1) || "index.html";
    const candidate = safeDistPath(relativePath);
    if (!candidate) return new Response("Forbidden\n", { status: 403 });

    if (existsSync(candidate) && statSync(candidate).isFile()) {
      return fileResponse(candidate, method);
    }

    return fileResponse(join(distDir, "index.html"), method);
  },
});

console.log(`Civic Atlas listening on ${server.hostname}:${server.port}`);
console.log(`Public URL: ${publicUrl}`);
