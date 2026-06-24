import { useEffect, useMemo, useState } from 'react';
import CanadaMap from '../components/map/CanadaMap';
import TimelineSlider from '../components/map/TimelineSlider';
import { eras } from '../data/eras';
import { eraGuides } from '../data/eraGuides';
import { events } from '../data/events';
import { publicPath } from '../public-path';
import './MapExplorerPage.css';

const OFFICIAL_GUIDE_URL = 'https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada.html';

// Per-province colors matching CanadaMap.tsx
const PROVINCE_LEGEND: { color: string; label: string }[] = [
  { color: '#1e40af', label: 'Ontario' },
  { color: '#7e22ce', label: 'Quebec' },
  { color: '#b45309', label: 'Nova Scotia' },
  { color: '#047857', label: 'New Brunswick' },
  { color: '#0369a1', label: 'Manitoba' },
  { color: '#be123c', label: 'British Columbia' },
  { color: '#c2410c', label: 'Prince Edward Island' },
  { color: '#7c3aed', label: 'Yukon' },
  { color: '#0d9488', label: 'Alberta' },
  { color: '#ca8a04', label: 'Saskatchewan' },
  { color: '#2563eb', label: 'Newfoundland' },
  { color: '#4338ca', label: 'Nunavut' },
  { color: '#64748b', label: 'NWT' },
];

const HISTORICAL_LEGEND_GROUPS: Record<string, { color: string; label: string }> = {
  'new-france': { color: '#1d4ed8', label: 'New France' },
  'french-territory': { color: '#3b82f6', label: 'French Territory' },
  'british-colony': { color: '#b91c1c', label: 'British Colony' },
  'british-territory': { color: '#ef4444', label: 'British Territory' },
  'quebec-east-family': { color: '#7c3aed', label: 'Province of Quebec / Canada East' },
  'west-family': { color: '#ea580c', label: 'Upper Canada / Canada West' },
  'indigenous': { color: '#166534', label: 'Indigenous reserve overlay' },
  'disputed': { color: '#ca8a04', label: 'Disputed Region' },
  'us-other': { color: '#6b7280', label: 'United States / Other' },
};

const HISTORICAL_GROUP_ORDER = [
  'new-france',
  'french-territory',
  'british-colony',
  'british-territory',
  'quebec-east-family',
  'west-family',
  'indigenous',
  'disputed',
  'us-other',
];

const HISTORICAL_STATUS_TO_GROUP: Record<string, string> = {
  'new-france': 'new-france',
  'french-territory': 'french-territory',
  'british-colony': 'british-colony',
  'british-territory': 'british-territory',
  'province-of-quebec': 'quebec-east-family',
  'lower-canada': 'quebec-east-family',
  'canada-east': 'quebec-east-family',
  'upper-canada': 'west-family',
  'canada-west': 'west-family',
  'indigenous': 'indigenous',
  'disputed': 'disputed',
  'united-states': 'us-other',
  'mexico': 'us-other',
  'foreign': 'us-other',
};

const CATEGORY_COLORS: Record<string, { color: string; label: string }> = {
  exploration: { color: '#2563eb', label: 'Exploration' },
  military: { color: '#dc2626', label: 'Military' },
  political: { color: '#b45309', label: 'Political' },
  cultural: { color: '#7c3aed', label: 'Cultural' },
  infrastructure: { color: '#0f766e', label: 'Infrastructure' },
  settlement: { color: '#c2410c', label: 'Settlement' },
};

export default function MapExplorerPage() {
  const [selectedYear, setSelectedYear] = useState(eras[0]?.year ?? 1867);
  const [showEvents, setShowEvents] = useState(true);
  const [showExternalContext, setShowExternalContext] = useState(true);
  const [legendTab, setLegendTab] = useState<'provinces' | 'events'>('provinces');
  const [mapKeyEntries, setMapKeyEntries] = useState<{ color: string; label: string }[]>([]);
  const [hasExternalContextForYear, setHasExternalContextForYear] = useState(false);
  const [hasIndigenousOverlayForYear, setHasIndigenousOverlayForYear] = useState(false);

  const currentEra = eras.find((e) => e.year === selectedYear);
  const currentGuide = eraGuides[selectedYear];
  const currentEraIndex = eras.findIndex((e) => e.year === selectedYear);
  const previousEraYear = currentEraIndex > 0 ? eras[currentEraIndex - 1].year : 0;
  const currentEraEvents = useMemo(() => {
    const matchingEvents = events.filter((event) => {
      const eventEndYear = event.endYear ?? event.year;
      return event.year <= selectedYear && eventEndYear >= previousEraYear;
    });

    return matchingEvents.slice(-4);
  }, [previousEraYear, selectedYear]);
  const eraYears = useMemo(() => eras.map((e) => e.year), []);
  const closestYear = useMemo(
    () => eraYears.reduce((prev, curr) => (curr <= selectedYear ? curr : prev), eraYears[0]),
    [eraYears, selectedYear]
  );

  useEffect(() => {
    let isActive = true;
    const geojsonPath = publicPath(`data/geojson/${closestYear}.json`);

    fetch(geojsonPath)
      .then((res) => res.json())
      .then((data) => {
        if (!isActive) return;

        const features = (data?.features || []) as Array<{ properties?: Record<string, unknown> }>;
        const externalStatuses = features
          .map((f) => String(f.properties?.status || ''))
          .filter((status) => Boolean(status) && isExternalStatus(status));
        setHasExternalContextForYear(externalStatuses.length > 0);

        const statuses = new Set(
          features
            .map((f) => String(f.properties?.status || ''))
            .filter((status) => Boolean(status) && !isExternalStatus(status))
        );
        setHasIndigenousOverlayForYear(statuses.has('indigenous'));

        if (closestYear < 1867) {
          const groups = new Set(
            Array.from(statuses)
              .map((status) => HISTORICAL_STATUS_TO_GROUP[status])
              .filter(Boolean)
          );

          const entries = HISTORICAL_GROUP_ORDER
            .filter((group) => group !== 'indigenous' && groups.has(group))
            .map((group) => HISTORICAL_LEGEND_GROUPS[group]);

          setMapKeyEntries(entries);
          return;
        }

        const visibleProvinceLabels = new Set(
          features
            .filter((f) => f.properties?.status === 'province')
            .map((f) => normalizeProvinceLabel(String(f.properties?.PROV_NAME || '')))
            .filter(Boolean)
        );

        const entries = PROVINCE_LEGEND.filter((entry) => visibleProvinceLabels.has(entry.label));

        if (statuses.has('colony')) {
          entries.push({ color: '#e8b1b1', label: 'Colony' });
        }
        if (statuses.has('territory')) {
          entries.push({ color: '#deb3b3', label: 'Territory' });
        }

        setMapKeyEntries(entries);
      })
      .catch(() => {
        if (!isActive) return;
        setMapKeyEntries(selectedYear < 1867 ? historicalFallbackLegend() : PROVINCE_LEGEND);
      });

    return () => {
      isActive = false;
    };
  }, [closestYear, selectedYear]);

  const showConfederationTransitionHint = selectedYear === 1867;

  return (
    <div className="page-full map-explorer">
      <div className="explorer-content">
        <section className="map-column" aria-label="Historical map">
          <div className="map-area">
            <CanadaMap
              selectedYear={selectedYear}
              events={showEvents ? events : undefined}
              showExternalContext={showExternalContext}
            />

            {/* Era info — key forces remount for slide-in animation */}
            {currentEra && (
              <div className="era-info" key={currentEra.year}>
                <div className="era-info-year">{currentEra.year}</div>
                <div className="era-info-label">{currentEra.label}</div>
                <div className="era-info-desc">{currentEra.description}</div>
                {currentEra.newEntities.length > 0 && (
                  <div className="era-info-entities">
                    {currentEra.newEntities.map((entity) => (
                      <span key={entity} className="era-entity-badge">
                        {entity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Legend */}
            <div className="map-legend">
              <div className="map-legend-tabs">
                <button
                  className={`map-legend-tab ${legendTab === 'provinces' ? 'active' : ''}`}
                  onClick={() => setLegendTab('provinces')}
                >
                  Map Key
                </button>
                <button
                  className={`map-legend-tab ${legendTab === 'events' ? 'active' : ''}`}
                  onClick={() => setLegendTab('events')}
                >
                  Events
                </button>
              </div>

              {legendTab === 'provinces' ? (
                <div className="map-legend-items">
                  <div className="map-legend-section-title">
                    {selectedYear < 1867 ? 'Control / Claims' : 'Canada Status'}
                  </div>
                  {mapKeyEntries.map(({ color, label }) => (
                    <div key={label} className="map-legend-item">
                      <span className="map-legend-swatch" style={{ background: color }} />
                      <span>{label}</span>
                    </div>
                  ))}
                  {selectedYear < 1867 && hasIndigenousOverlayForYear && (
                    <>
                      <div className="map-legend-section-title">Governance Overlays</div>
                      <div className="map-legend-item">
                        <span
                          className="map-legend-swatch"
                          style={{
                            background:
                              'repeating-linear-gradient(135deg, #d78600 0 4px, #22824f 4px 8px)',
                          }}
                        />
                        <span>Indigenous reserve (Royal Proclamation context)</span>
                      </div>
                    </>
                  )}
                  {showExternalContext && hasExternalContextForYear && (
                    <>
                      <div className="map-legend-section-title">Context</div>
                      <div className="map-legend-item">
                        <span className="map-legend-swatch" style={{ background: '#d9d4c9' }} />
                        <span>External context (US/Mexico)</span>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="map-legend-items">
                  {Object.entries(CATEGORY_COLORS).map(([key, { color, label }]) => (
                    <div key={key} className="map-legend-item">
                      <span
                        className="map-legend-swatch"
                        style={{ background: color, borderRadius: '50%' }}
                      />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="map-controls">
            <TimelineSlider
              eras={eras}
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
            />
            {showConfederationTransitionHint && (
              <div className="timeline-transition-hint">
                1867: Dominion formed (Ontario, Quebec, Nova Scotia, New Brunswick); western and
                northern lands are still non-province regions at this point.
              </div>
            )}
            <div className="map-controls-options">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={showEvents}
                  onChange={(e) => setShowEvents(e.target.checked)}
                />
                <span className="toggle-switch" />
                <span>Show events</span>
              </label>
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={showExternalContext}
                  onChange={(e) => setShowExternalContext(e.target.checked)}
                />
                <span className="toggle-switch" />
                <span>Show external context</span>
              </label>
            </div>
          </div>
        </section>

        <aside className="study-panel" aria-label="Study companion">
          {currentEra && currentGuide && (
            <>
              <div className="study-kicker">Civic Atlas</div>
              <h1 className="study-title">{currentEra.year}: {currentEra.label}</h1>
              <p className="study-question">{currentGuide.question}</p>
              <p className="study-summary">{currentEra.description}</p>

              <section className="study-section">
                <h2>What Changed</h2>
                <ul>
                  {currentGuide.whatChanged.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="study-section">
                <h2>Why It Matters</h2>
                <p>{currentGuide.whyItMatters}</p>
              </section>

              {currentEraEvents.length > 0 && (
                <section className="study-section">
                  <h2>Featured Events</h2>
                  <div className="study-events">
                    {currentEraEvents.map((event) => (
                      <article key={event.id} className="study-event">
                        <div className="study-event-year">{event.year}</div>
                        <div>
                          <h3>{event.title}</h3>
                          <p>{event.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              <section className="study-section">
                <h2>Terms</h2>
                <dl className="study-terms">
                  {currentGuide.terms.map((item) => (
                    <div key={item.term} className="study-term">
                      <dt>{item.term}</dt>
                      <dd>{item.meaning}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="study-section">
                <h2>Remember</h2>
                <ul>
                  {currentGuide.remember.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <a className="official-guide-link" href={OFFICIAL_GUIDE_URL} target="_blank" rel="noreferrer">
                Official Discover Canada guide
              </a>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

function normalizeProvinceLabel(name: string): string {
  if (name === 'Northwest Territories') return 'NWT';
  if (name === 'Yukon Territory') return 'Yukon';
  if (name === 'PEI') return 'Prince Edward Island';
  if (name === 'Newfoundland and Labrador') return 'Newfoundland';
  return name;
}

function historicalFallbackLegend(): { color: string; label: string }[] {
  return HISTORICAL_GROUP_ORDER
    .filter((group) => group !== 'us-other' && group !== 'indigenous')
    .map((group) => HISTORICAL_LEGEND_GROUPS[group]);
}

function isExternalStatus(status: string): boolean {
  return status === 'united-states'
    || status === 'mexico'
    || status === 'foreign';
}
