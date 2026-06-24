# Civic Atlas Guidance

## Stack

- Use Bun for install, scripts, dependency changes, and ad hoc JS tooling.
- Keep this a static Vite/React/MapLibre explorable unless persistence or editing earns a backend.
- Runtime map data lives in `public/data/geojson`; avoid adding duplicate source copies.
- Treat the app as an unofficial visual companion to the official Discover Canada guide.

## Commands

- Install: `bun install`
- Develop: `bun run dev`
- Verify: `bun run lint && bun run build`
- Public build: `bun run build:public`
- Audit: `bun audit`

## Deployment

- Target `https://grv.codes/civic-atlas/`, not the root domain.
- Configure Vite/router/data URLs through `VITE_BASE_PATH`; keep local dev working at `/`.
- Before a Kamal/grv.codes deploy, verify the production build through `bun run preview:public`.

## Product

- Make the map explorer the first screen.
- Do not advertise unfinished pages as working features.
- Prefer concise learner-facing explanations beside the map over long reproduced source text.
