# syntax=docker/dockerfile:1

FROM docker.io/oven/bun:1.3.14 AS build

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY index.html vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json ./
COPY public ./public
COPY src ./src

ENV VITE_BASE_PATH=/civic-atlas/
RUN bun run build:public

FROM docker.io/oven/bun:1.3.14

WORKDIR /app

ENV HOST=0.0.0.0 \
    PORT=8128 \
    CIVIC_ATLAS_BASE_PATH=/civic-atlas \
    CIVIC_ATLAS_PUBLIC_URL=https://grv.codes/civic-atlas/

COPY server.ts ./
COPY --from=build /app/dist ./dist

EXPOSE 8128

CMD ["bun", "run", "server.ts"]
