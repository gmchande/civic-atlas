# Guided History Reading Plan

## Purpose

Civic Atlas already explains Canadian territorial history through a map, timeline,
events, and an era companion panel. The next product step is to turn that panel
into a guided reading experience for the history-heavy parts of Discover Canada.

The target learner is reading the official citizenship guide and getting stuck on
names, boundaries, dates, and repeated uses of words like Canada, Quebec, and
province. The app should make those concepts visual, sequential, and easier to
remember without pretending to replace the official guide.

## Source Grounding

Primary source:

- Official Discover Canada guide:
  https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html
- Official online table of contents:
  https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online.html
- Canada's History chapter:
  https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/canadas-history.html
- Modern Canada chapter:
  https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/modern-canada.html
- Citizenship test study guidance:
  https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/test/study.html
- Canada.ca terms:
  https://www.canada.ca/en/transparency/terms.html

Local source material:

- `docs/discover-canada-content.md` is the cleaned project-local Markdown copy of
  the guide.
- `docs/discover-canada-timeline.md` extracts dated and geographic events from
  the guide.
- `src/data/eras.ts` defines the current map timeline snap points.
- `src/data/eraGuides.ts` defines the current side-panel explanations.
- `src/data/events.ts` defines the current mapped event markers.
- `/Users/gaurav/Obsidian/gaurav-os/bets/discover-canada/discover-canada-text.md`
  is the fuller vault extraction, but it appears older and more raw.

Important caveat: the local extracted copies should not be treated as canonical.
For example, Canada.ca now notes that the Oath refers to King Charles III, while
older local text still contains Queen Elizabeth II wording. For learner-facing
copy, use the live official guide as the source of truth and keep local Markdown
as extraction scaffolding.

## Product Positioning

The app should remain:

- Unofficial.
- Read-only.
- Static.
- Publicly shareable.
- A visual companion, not a replacement study guide.

The reader should include a clear source note:

> Civic Atlas is an unofficial visual companion. Use the official Discover Canada
> guide as the source of truth for the citizenship test.

Avoid large-scale reproduction of the official guide in-app. Prefer short source
references, tiny excerpts where useful, and our own plain-language explanations.
Canada.ca terms allow non-commercial reproduction with conditions, but the safest
and most useful product shape is a companion that cites and links back.

## Learning Problem

The hard part is not that the guide lacks facts. The hard part is that the facts
are compressed into text while the concepts are spatial and temporal.

Common learner confusions:

- New France, Acadia, Province of Quebec, Upper Canada, Lower Canada, Province
  of Canada, Canada East, Canada West, Dominion of Canada, and modern Canada are
  different historical meanings, not interchangeable labels.
- Province of Quebec in 1763/1774 is not the same as modern Quebec.
- Province of Canada is not the modern country of Canada.
- Confederation begins with four provinces, not the current map.
- Prince Edward Island is the birthplace of Confederation but joins later.
- Newfoundland and Labrador is the last province to join, not an original
  province.
- Western expansion involves Manitoba, the Northwest Territories, Louis Riel,
  British Columbia's railway promise, Yukon, Alberta, and Saskatchewan in a
  sequence.
- Some history events are domestic map events, while others are overseas events
  important to Canadian identity and test memory.

## Product Goal

Build a guided reading layer that answers, for each history section:

- What part of the official guide am I reading?
- What should I look at on the map?
- What changed at this moment?
- What names or boundaries are easy to mix up?
- What dates and facts are test-relevant?
- What should I remember in plain language?

The current app is year-driven: pick a map year, then read the companion note.
The new layer should also support a passage-driven flow: move through the
history in guide order, and the map follows along.

## Proposed Content Model

Add a new data file:

- `src/data/readingSections.ts`

Add types in `src/types/index.ts`:

```ts
export type ReadingChapter =
  | 'who-we-are'
  | 'canadas-history'
  | 'modern-canada'
  | 'symbols'
  | 'regions';

export interface ReadingSection {
  id: string;
  title: string;
  chapter: ReadingChapter;
  sourceTitle: string;
  sourceUrl: string;
  sourceAnchor?: string;
  sourceVersionDate?: string;
  guideLocation: string;
  year?: number;
  endYear?: number;
  mapYear: number;
  eventIds: string[];
  guideSummary: string;
  plainExplanation: string;
  mapFocus: string;
  testMemory: string[];
  terms: { term: string; meaning: string }[];
  confusionBuster?: string;
}
```

Field intent:

- `sourceTitle`: official guide page or chapter title.
- `sourceUrl`: direct Canada.ca source link for the relevant official guide page.
- `sourceAnchor`: optional in-page anchor if it is stable and manually verified.
- `sourceVersionDate`: optional note for the guide version checked.
- `guideLocation`: human label such as `Canada's History > Confederation`.
- `year` and `endYear`: display range for the guide event or period being
  explained.
- `mapYear`: the timeline snap point the map should show for this reading step.
- `eventIds`: existing markers to highlight while this section is active.
- `guideSummary`: short paraphrase of what the official guide says.
- `plainExplanation`: the app's own explanation.
- `mapFocus`: what to visually inspect on the map.
- `testMemory`: concise facts and traps.
- `confusionBuster`: optional direct clarification for terms that commonly get
  mixed up.

Do not store the entire book in this model. Store curated sections that benefit
from map-linked explanation.

Event-window rule:

- The current map renders event markers by era slice: events from the previous
  map snap point plus one year through the selected `mapYear`.
- Until active-event rendering is decoupled from that slice, each section's
  `eventIds` must refer only to events visible at its `mapYear`.
- Phase 2 should change `CanadaMap` so active reading events render as the union
  of the normal era-slice events and `activeEventIds`. That lets a section show
  the historically right boundary map while still highlighting later or earlier
  markers that explain the passage.

## Reading Path

Start with a single `history` reading path. It should use the guide's order, not
only the map timeline order.

### 1. Before Europeans

Source sections:

- `Who We Are > Aboriginal Peoples`
- `Canada's History > Aboriginal Peoples`

Map behavior:

- Use a broad early context state rather than pretending to show exhaustive
  Indigenous territorial boundaries.
- Keep the map language careful: this app's current colonial boundary data does
  not represent the full Indigenous presence.

Reader focus:

- Indigenous peoples were present across all regions before European arrival.
- The guide names regional examples: Huron-Wendat, Iroquois, Cree, Dene, Sioux,
  Inuit, and West Coast peoples.
- European arrival changed Indigenous life through trade, missions, military
  alliances, disease, and colonization.

Need:

- Possibly add an introductory map overlay note rather than a hard boundary
  layer.

### 2. First European Contact

Source sections:

- `Canada's History > The First Europeans`
- `Canada's History > Exploring a River, Naming Canada`

Map behavior:

- Highlight L'Anse aux Meadows, Atlantic shore, and St. Lawrence route markers.
- Use events: `vikings-lanse`, `cabot-1497`, `cartier-1534`.

Reader focus:

- Vikings reached Newfoundland/Labrador about 1,000 years ago.
- Cabot mapped the Atlantic shore in 1497.
- Cartier explored the St. Lawrence and the word `kanata` becomes Canada.

Need:

- The current map starts with a 1608 era, but the event markers already support
  earlier dates. The reading path can show 1608 map geometry while highlighting
  earlier contact events, or we can add an explicit `contact` mode later.

### 3. New France and Acadia

Source sections:

- `Canada's History > Royal New France`
- `Who We Are > English and French`

Map behavior:

- Select map year `1608`.
- Highlight Port-Royal and Quebec City.
- Use events: `port-royal-1604`, `quebec-city-1608`.

Reader focus:

- Acadia and the St. Lawrence colony are related but distinct.
- Quebec City anchors New France.
- Fur trade, river routes, and alliances explain why early Canada is not just a
  coastline story.

Need:

- Use current `eraGuides[1608]` as the base.

### 4. French and British North America

Source sections:

- `Canada's History > Struggle for a Continent`

Map behavior:

- Select map years `1670`, then `1713`, then `1763` across substeps.
- Highlight Hudson Bay, Atlantic claims, and Quebec City.
- Use events: `hbc-1670`, `frontenac-1690`, `plains-of-abraham-1759`.

Reader focus:

- Hudson's Bay Company introduces a major British commercial geography.
- New France and British Atlantic colonies coexist and compete.
- The Battle of the Plains of Abraham ends France's empire in America.

Need:

- Keep this as multiple reading sections rather than one large block.

### 5. Province of Quebec and the Quebec Act

Source sections:

- `Canada's History > The Province of Quebec`
- `Canada's History > A Tradition of Accommodation`

Map behavior:

- Select map year `1763`, then `1774`.
- Highlight Province of Quebec shape and its expansion.
- Use event: `quebec-act-1774`.

Reader focus:

- Province of Quebec is a British colony after the conquest of New France.
- The Quebec Act protects Catholic religious freedom and French civil law while
  British criminal law remains.
- This is one of the guide's key examples of accommodation.

Confusion buster:

- "Province of Quebec" here is not the same as modern Quebec.

Need:

- This should be one of the most polished early sections because it solves a
  core naming problem.

### 6. Loyalists and the Two Canadas

Source sections:

- `Canada's History > United Empire Loyalists`
- `Canada's History > The Beginnings of Democracy`

Map behavior:

- Select map year `1791`.
- Highlight migration destinations and Upper/Lower Canada.
- Use events: `american-independence-1776`, `constitutional-act-1791`.

Reader focus:

- Loyalists move north after American independence.
- The Constitutional Act divides Quebec into Upper Canada and Lower Canada.
- Upper Canada later becomes Ontario; Lower Canada later becomes Quebec.
- The name Canada becomes official at this time.

Confusion buster:

- Upper/Lower are based on river direction, not north/south on the map.

Need:

- Add direct "modern names" chips: Upper Canada -> Ontario, Lower Canada ->
  Quebec.

### 7. War of 1812

Source sections:

- `Canada's History > The War of 1812: The Fight for Canada`

Map behavior:

- Use `1841` in the current implementation so the 1812-1814 battle markers are
  visible under the map's era-slice filtering.
- The reader copy must explicitly say this is the closest available colonial map
  context, and that the Province of Canada did not exist during the War of 1812.
- After Phase 2 decouples active-event rendering from the era slice, prefer the
  `1791` boundary context with 1812-1814 battle markers rendered as active
  events.
- Highlight battle markers: Detroit, Queenston Heights, Chateauguay, York,
  Beaver Dams, Washington.
- Use events: `war-1812-detroit`, `war-1812-queenston`,
  `war-1812-chateauguay`, `war-1812-york`, `war-1812-beaver-dams`,
  `war-1812-washington`.

Reader focus:

- The U.S. invasion failed.
- British troops, First Nations, and Canadian volunteers defended Canada.
- The present Canada-U.S. border is partly an outcome of the war.

Need:

- Consider a "battle trail" visual mode later, but do not block the first
  reading implementation on route animations.

### 8. Rebellions and Responsible Government

Source sections:

- `Canada's History > Rebellions of 1837-38`
- `Canada's History > Responsible Government`

Map behavior:

- Select map year `1841`.
- Highlight Montreal/Toronto rebellion marker and Province of Canada.
- Use `rebellions-1837` in the 1841 section.
- Use `responsible-gov-1847` and `responsible-gov-canada-1849` only after
  splitting responsible government into a follow-up section whose map year makes
  those events visible, or after Phase 2 active-event rendering bypasses the
  era-slice limitation.

Reader focus:

- Reformers wanted fuller democracy.
- Durham recommended merging Upper and Lower Canada.
- Province of Canada means Canada West plus Canada East, not the modern country.
- Responsible government means ministers must keep the support of elected
  representatives.

Confusion buster:

- Province of Canada is a pre-Confederation colony, not modern Canada.

Need:

- This is the second highest-value naming section after Quebec Act.

### 9. Confederation

Source sections:

- `Canada's History > Confederation`, including the "Dominion from Sea to Sea"
  callout.
- `Canada's History > Canada's First Prime Minister`

Map behavior:

- Select map year `1867`.
- Highlight Ontario, Quebec, Nova Scotia, and New Brunswick.
- Use events: `confederation-conferences-1864`, `confederation-1867`.

Reader focus:

- Province of Canada splits into Ontario and Quebec.
- Ontario, Quebec, Nova Scotia, and New Brunswick form the Dominion of Canada.
- The country exists, but the map is still geographically incomplete.
- Sir John A. Macdonald becomes first prime minister.
- Sir George-Etienne Cartier helps bring Quebec into Confederation and negotiate
  later western expansion.

Test memory:

- Original four provinces: Ontario, Quebec, Nova Scotia, New Brunswick.
- July 1, 1867.
- Dominion Day was renamed Canada Day later.

Need:

- Keep the current 1867 transition hint.
- Add a stronger "not yet" list: not PEI, not Newfoundland, not the West.

### 10. Expansion West and North

Source sections:

- `Canada's History > Expansion of the Dominion`
- `Canada's History > Challenge in the West`
- `Canada's History > A Railway from Sea to Sea`
- `Canada's History > Moving Westward`

Map behavior:

- Step through map years `1870`, `1871`, `1873`, `1898`, `1905`.
- Highlight Manitoba, Northwest Territories, British Columbia, PEI, Yukon,
  Alberta, and Saskatchewan.
- Use events: `red-river-1869`, `manitoba-1870`, `bc-joins-1871`,
  `pei-joins-1873`, `nwmp-1873`, `northwest-rebellion-1885`,
  `cpr-last-spike-1885`, `yukon-created-1898`, `ab-sk-created-1905`.

Reader focus:

- Manitoba enters after the Red River conflict and Louis Riel.
- British Columbia joins because of the railway promise.
- PEI is the birthplace of Confederation but joins in 1873.
- The CPR makes coast-to-coast union concrete.
- Yukon is tied to the Gold Rush.
- Alberta and Saskatchewan are carved from the Northwest Territories in 1905.

Need:

- This can become a "Confederation expansion ladder" visual in the reader.

### 11. First World War and Suffrage

Source sections:

- `Canada's History > The First World War`
- `Canada's History > Women Get the Vote`
- `Canada's History > Remembrance Day`

Map behavior:

- Keep Canada map at `1905` or add a "world events" event view.
- Highlight overseas event markers for Vimy, Amiens, and domestic markers for
  Manitoba/Ottawa.
- Use events: `wwi-begins-1914`, `women-vote-manitoba-1916`,
  `vimy-ridge-1917`, `women-federal-vote-1917`, `battle-amiens-1918`.

Reader focus:

- More than 600,000 Canadians served in WWI.
- Vimy Ridge is a national memory event.
- Manitoba grants women voting rights first; federal vote expands in 1917-18.
- Remembrance Day is November 11.

Need:

- Overseas events should visually feel different from domestic map-boundary
  steps.

### 12. Depression and Second World War

Source sections:

- `Canada's History > Between the Wars`
- `Canada's History > The Second World War`

Map behavior:

- Highlight domestic and overseas events.
- Use events: `great-depression-1929`, `wwii-begins-1939`,
  `hong-kong-1941`, `dieppe-1942`, `juno-beach-1944`,
  `liberation-netherlands-1945`.

Reader focus:

- Great Depression produces demand for social safety-net institutions.
- More than one million Canadians and Newfoundlanders serve in WWII.
- Canada contributes through air, navy, army, D-Day, and liberation of the
  Netherlands.
- Japanese-Canadian internment and later apology should be included as
  historical memory, even if current event data may need another marker.

Need:

- Add missing event marker for Japanese-Canadian internment/apology if it is not
  already represented.

### 13. Modern Canada

Source sections:

- `Modern Canada > Trade and Economic Growth`
- `Modern Canada > International Engagement`
- `Modern Canada > Canada and Quebec`
- `Modern Canada > A Changing Society`

Map behavior:

- Select map years `1949` and `1999`.
- Highlight modern political and cultural events.
- Use events: `oil-alberta-1947`, `newfoundland-joins-1949`,
  `korean-war-1950`, `aboriginal-vote-1960`, `official-languages-1969`,
  `o-canada-anthem-1980`, `constitution-1982`, `free-trade-1988`,
  `nunavut-1999`.

Reader focus:

- Newfoundland and Labrador is the last province to join.
- Postwar prosperity grows social programs.
- Canada joins NATO, NORAD, UN, Korean War, peacekeeping.
- Quebec's Quiet Revolution, Official Languages Act, referendums, and 1982
  Constitution explain modern federal identity tensions.
- Aboriginal people gain the federal vote in 1960.
- Nunavut is created in 1999.

Need:

- Add missing events for Quiet Revolution, 1980 referendum, 1995 referendum,
  and perhaps 2006 Quebecois nation recognition if we want this section to match
  the source more closely.

## UI Plan

Keep the existing map-left, panel-right layout. Upgrade the right panel.

### Reader Mode vs Map Explorer Mode

Phase 1 should add an explicit `History Path` reader state rather than stacking
new reading content below the current era guide.

- Default the right panel to `History Path` for first-time learners.
- Reuse the strongest current `eraGuides` copy inside reading sections where it
  fits.
- When a reading section is active, show reader content and use `selectedYear`
  as the map sync point.
- When the user directly explores the timeline without a reading section, keep a
  `Map Explorer` state that shows the existing era-oriented companion content.
- Do not render the reader and the old era panel as two competing panels at the
  same time.

### Panel Header

Show:

- Current path label: `History Path`.
- Section title.
- Guide location.
- Year or date range.
- Progress count, such as `5 of 13`.

### Panel Tabs

Use a segmented control:

- `Guide`
- `Explain`
- `Remember`

`Guide`:

- Show the official chapter and section name.
- Include a short paraphrase or very short excerpt when useful.
- Include a direct link to the relevant official guide page.
- Include a source note that the app is unofficial.

`Explain`:

- Plain-language explanation.
- What changed.
- Why the map looks the way it does.
- Confusion buster.
- Terms.

`Remember`:

- Test memory bullets.
- Dates.
- People.
- "Do not mix this up with..." notes.

### Reading Navigation

Add:

- Previous section button.
- Next section button.
- Compact section list or timeline rail.
- Keyboard-friendly focus order.

When the user changes reading section:

- Update `selectedYear` to `section.mapYear`.
- In Phase 1, show matching `eventIds` as section-linked events in the reader.
- Include the active marker rendering from Phase 2 in Phase 1 so the first
  shared version already connects reader sections to visible map events.
- Scroll the panel to the top of the new section.

When the user changes map year directly:

- Keep current behavior.
- Optionally jump to the nearest reading section or show "Map Explorer" mode.

### Map Integration

Add optional props to `CanadaMap`:

```ts
activeEventIds?: string[];
mapFocusLabel?: string;
```

Behavior:

- Build marker data from the union of the normal era-slice events and
  `activeEventIds`.
- Highlight active events with stronger marker treatment, even when they fall
  outside the normal era slice.
- Dim non-active event markers slightly while reading mode is active.
- Keep all events available when the user switches back to exploration.

Avoid:

- Route animations in the first pass.
- Full-text search.
- Quizzes.
- User accounts or saved progress.

## Implementation Phases

### Phase 1: Data and Reader Skeleton

Files:

- Add `src/data/readingSections.ts`.
- Add reading types to `src/types/index.ts`.
- Update `src/pages/MapExplorerPage.tsx`.
- Update `src/pages/MapExplorerPage.css`.

Scope:

- Add 8-10 highly polished reading sections from New France through PEI joining.
- Add reader navigation.
- Add `Guide / Explain / Remember` tabs.
- Add active-event map highlighting for the current reading section.
- Keep current map controls and timeline.
- Preserve current map explorer behavior for direct year selection.

Recommended first section set:

1. New France and Acadia
2. Hudson's Bay Company and colonial competition
3. Province of Quebec after conquest
4. Quebec Act
5. Loyalists and the two Canadas
6. Province of Canada and responsible government
7. Confederation
8. Manitoba and the Northwest
9. British Columbia and the railway promise
10. Prince Edward Island

Acceptance criteria:

- A learner can click Next from 1604/1608 through 1873 and understand each map
  transition.
- The app clearly explains Province of Quebec, Upper/Lower Canada, Province of
  Canada, and Dominion of Canada.
- Official guide links are visible and accurate.
- No backend is introduced.
- Active reading markers are visible without changing the normal Map Explorer
  event behavior.
- `bun run lint` and `bun run build:public` pass.
- Visual check on desktop and mobile confirms no overlapping controls or
  unreadable panel text.

### Phase 2: Map Highlighting

Files:

- Update `src/components/map/CanadaMap.tsx`.
- Update `src/components/map/CanadaMap.css`.
- Possibly update `src/data/events.ts` with missing source-backed events.

Scope:

- Add active-event highlighting.
- Dim non-active events in reading mode.
- Make current reading section's event markers easier to see.
- Refine event click -> reading section lookup only if there is a clear reader
  affordance; keep Map Explorer clicks focused on map exploration.

Acceptance criteria:

- Reading steps visually correspond to the highlighted map markers.
- Active event markers render even when they fall outside the normal era slice.
- Marker highlighting works for both domestic and international events.
- Existing event toggle still works.

### Phase 3: Complete History and Modern Canada Path

Files:

- Expand `src/data/readingSections.ts`.
- Add missing `events.ts` entries as needed.

Scope:

- Add War of 1812.
- Add WWI and suffrage.
- Add Depression and WWII.
- Add Modern Canada.
- Add Newfoundland and Nunavut path sections.

Acceptance criteria:

- The path covers the guide's history and map-relevant modern-history sections
  from first contact through Nunavut.
- All sections cite the official guide chapter.
- No section relies only on the stale local extraction.

### Phase 4: Polish and Study Flow

Scope:

- Add a compact progress rail.
- Add "common confusions" callouts.
- Add responsive refinements.
- Add optional print/share-friendly section anchors.
- Consider a short "What to memorize" end screen.

Acceptance criteria:

- The app feels like a guided study aid, not just a data viewer.
- A friend studying for the test can read the history path in one sitting.
- The reader works on a phone without losing the map-first identity.

## Content Rules

- Prefer paraphrase and explanation over reproducing long official text.
- Keep any official excerpts short and attributed.
- Link to the official guide from every section or chapter group.
- Include source chapter names so learners can cross-check.
- Mark the app as unofficial in persistent but unobtrusive UI.
- Keep old local extraction out of learner-facing copy unless checked against
  Canada.ca.
- Use "Indigenous peoples" in new app copy unless quoting or naming older guide
  terminology.
- Explain outdated guide terms when the official text uses them.

## Design Rules

- Keep the map as a first-class surface.
- Do not turn the app into a static article page.
- Keep the right panel dense but readable.
- Use segmented controls for reader modes.
- Use icon buttons only where icons are familiar.
- Avoid nested cards.
- Avoid hero/marketing treatment.
- Keep typography compact enough for study use.
- On mobile, stack map then reader, with reader navigation always reachable.

## Technical Notes

- This remains a static Vite app deployed under `/civic-atlas/`.
- Use Bun for JS workflows.
- No SQLite, Ruby, Roda, Sinatra, Rails, or API layer is needed for this phase.
- Data can live in TypeScript because it is small, reviewed, and source-backed.
- If the reading data grows substantially, consider JSON generated from Markdown,
  but do not add that complexity for Phase 1.

## Testing Plan

Automated:

- `bun run lint`
- `bun run build:public`

Manual:

- Desktop visual check at `/civic-atlas/`.
- Mobile visual check.
- Click through the full Phase 1 reading path.
- Toggle events on/off.
- Click timeline years manually after using reading navigation.
- Confirm official links open in a new tab.
- Confirm app still works on direct `/civic-atlas/explore`.

Review:

- Fresh review of the data model and content plan before implementation.
- Fresh visual audit after implementation, ideally with browser automation.

## Open Questions

- Should Phase 1 include short official excerpts or only paraphrased guide
  summaries plus links?
- Should map-year changes from the timeline also change the reading section, or
  should reading mode and map exploration mode be explicitly separate?
- Should overseas events appear on the same map, a small inset/world mode, or
  simply as event cards in the reader?
- Should "History Path" include the `Who We Are` background sections, or should
  those be a separate prelude?
- Should local Markdown extraction be refreshed from the current Canada.ca pages
  before implementation?

## Recommended Next Step

Implement Phase 1. It is the best small slice because it solves the highest-value
learning problem: the changing meaning of Canada and Quebec over time.

The first release should make these concepts obvious:

- New France is not modern Canada.
- Province of Quebec is not modern Quebec.
- Upper Canada becomes Ontario.
- Lower Canada becomes Quebec.
- Province of Canada is not modern Canada.
- Confederation starts with four provinces.
- PEI is the birthplace of Confederation but joins later.
