# Civic Atlas

An unofficial visual companion for people studying the Canadian citizenship guide. The app turns the history-heavy parts of Discover Canada into an interactive map and timeline, with short explanations for boundary changes, colonial names, Confederation milestones, and key events.

This is not an official Government of Canada study guide. Learners should still use the official Discover Canada guide as the source of truth:

https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html

## Stack

- Vite
- React
- TypeScript
- MapLibre GL
- Bun
- Static GeoJSON under `public/data/geojson`

No backend is needed for the current app. Add persistence only if the product grows progress tracking, editable study notes, quizzes with saved state, or an admin workflow.

## Commands

```sh
bun install
bun run dev
bun run lint
bun run build
bun run build:public
bun run preview
bun run preview:public
bun audit
```

## Public Path

Local development runs at `/`.

For the public path `https://grv.codes/civic-atlas/`, build with:

```sh
bun run build:public
```

Then preview the production output:

```sh
bun run preview:public
```

## Notes

- `public/data/geojson` is the runtime map dataset.
- `docs/discover-canada-content.md` and `docs/discover-canada-timeline.md` are source/reference material for extraction and copy review.
- Keep the app honest about unfinished sections; the map explorer is the primary experience.
