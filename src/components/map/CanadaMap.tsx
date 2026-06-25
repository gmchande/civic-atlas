import { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { HistoricalEvent } from '../../types';
import { eras } from '../../data/eras';
import { publicPath } from '../../public-path';
import './CanadaMap.css';

// Per-province colors — each province/territory gets a unique, saturated color
const PROVINCE_COLORS: Record<string, string> = {
  'Ontario':                   '#1e40af', // Royal blue
  'Quebec':                    '#7e22ce', // Violet
  'Nova Scotia':               '#b45309', // Amber
  'New Brunswick':             '#047857', // Emerald
  'Manitoba':                  '#0369a1', // Ocean blue
  'Northwest Territories':     '#64748b', // Slate
  'British Columbia':          '#be123c', // Ruby
  'Prince Edward Island':      '#c2410c', // Burnt orange
  'Yukon Territory':           '#7c3aed', // Purple
  'Yukon':                     '#7c3aed', // Purple (alt name)
  'Alberta':                   '#0d9488', // Teal
  'Saskatchewan':              '#ca8a04', // Gold
  'Newfoundland':              '#2563eb', // Blue
  'Newfoundland and Labrador': '#2563eb', // Blue (alt name)
  'Nunavut':                   '#4338ca', // Indigo
};

const COLONY_COLOR = '#e8b1b1';
const COLONY_STROKE = '#d38f8f';
const PROVINCE_STROKE = '#ffffff';
const TERRITORY_COLOR = '#deb3b3';
const EXTERNAL_CONTEXT_COLOR = '#d9d4c9';
const EXTERNAL_CONTEXT_STROKE = '#bdb6a8';
const DISPUTED_OUTLINE_COLOR = '#8a5d00';
const INDIGENOUS_OVERLAY_COLOR = '#22824f';
const INDIGENOUS_OVERLAY_STROKE = '#19663c';
const EXTERNAL_STATUSES = new Set(['united-states', 'mexico', 'foreign']);
const TERRITORY_HIGHLIGHT_COLORS: Record<string, string> = {
  'Northwest Territories': '#64748b',
  'Yukon Territory': '#7c3aed',
  'Yukon': '#7c3aed',
  'Nunavut': '#4338ca',
};
const HISTORICAL_STATUS_COLORS: Record<string, string> = {
  'new-france': '#1d4ed8',
  'french-territory': '#3b82f6',
  'british-colony': '#b91c1c',
  'british-territory': '#ef4444',
  'province-of-quebec': '#7c3aed',
  'lower-canada': '#7c3aed',
  'canada-east': '#7c3aed',
  'upper-canada': '#ea580c',
  'canada-west': '#ea580c',
  'indigenous': '#ef4444',
  'disputed': '#ca8a04',
  'united-states': '#6b7280',
  'mexico': '#92400e',
  'foreign': '#9ca3af',
};
const HISTORICAL_STATUS_LABELS: Record<string, string> = {
  'new-france': 'New France',
  'french-territory': 'French Territory',
  'british-colony': 'British Colony',
  'british-territory': 'British Territory',
  'province-of-quebec': 'Province of Quebec',
  'lower-canada': 'Lower Canada',
  'upper-canada': 'Upper Canada',
  'canada-east': 'Canada East',
  'canada-west': 'Canada West',
  'indigenous': 'Indigenous Territory',
  'disputed': 'Disputed Region',
  'united-states': 'United States',
  'mexico': 'Mexico',
  'foreign': 'Other Territory',
};

interface CanadaMapProps {
  selectedYear: number;
  showExternalContext?: boolean;
  events?: HistoricalEvent[];
  activeEventIds?: string[];
  onProvinceClick?: (provinceName: string, year: number) => void;
  onEventClick?: (event: HistoricalEvent) => void;
}

export default function CanadaMap({
  selectedYear,
  showExternalContext = true,
  events,
  activeEventIds = [],
  onProvinceClick,
  onEventClick,
}: CanadaMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const regionPopupRef = useRef<maplibregl.Popup | null>(null);
  const eventPopupRef = useRef<maplibregl.Popup | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'carto-tiles': {
            type: 'raster',
            tiles: [
              'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png',
              'https://b.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png',
              'https://c.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png',
            ],
            tileSize: 256,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
          },
        },
        layers: [
          {
            id: 'carto-tiles',
            type: 'raster',
            source: 'carto-tiles',
            minzoom: 0,
            maxzoom: 18,
          },
        ],
      },
      center: [-95, 57],
      zoom: 3.8,
      minZoom: 2.8,
      maxZoom: 10,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setMapLoaded(true);
      map.current!.fitBounds(
        [[-141, 42], [-52, 72]],
        {
          padding: { top: 40, bottom: 60, left: 40, right: 40 },
          maxZoom: 5.5,
          duration: 0,
        }
      );
    });

    return () => {
      regionPopupRef.current?.remove();
      regionPopupRef.current = null;
      eventPopupRef.current?.remove();
      eventPopupRef.current = null;
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Toggle external context visibility without reloading all map data
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    const m = map.current;
    const visibility = showExternalContext ? 'visible' : 'none';
    if (m.getLayer('external-context-fill')) {
      m.setLayoutProperty('external-context-fill', 'visibility', visibility);
    }
    if (m.getLayer('external-context-stroke')) {
      m.setLayoutProperty('external-context-stroke', 'visibility', visibility);
    }
  }, [mapLoaded, showExternalContext]);

  // Load/update boundary layer when year changes
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const m = map.current;
    const sourceId = 'boundaries';
    const fillLayerId = 'boundaries-fill';
    const strokeLayerId = 'boundaries-stroke';
    const indigenousOverlayFillLayerId = 'boundaries-indigenous-overlay-fill';
    const indigenousOverlayStrokeLayerId = 'boundaries-indigenous-overlay-stroke';
    const disputedLayerId = 'boundaries-disputed-outline';
    const labelSourceId = 'boundaries-label-points';
    const labelLayerId = 'boundaries-labels';
    const externalSourceId = 'external-context';
    const externalFillLayerId = 'external-context-fill';
    const externalStrokeLayerId = 'external-context-stroke';

    const eraYears = eras.map((e) => e.year);
    const closestYear = eraYears.reduce((prev, curr) =>
      curr <= selectedYear ? curr : prev
    );

    const geojsonPath = publicPath(`data/geojson/${closestYear}.json`);
    let cancelled = false;

    const fillClickHandler = (e: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }) => {
      const eventFeaturesAtPoint = m.queryRenderedFeatures(e.point, {
        layers: ['event-markers'],
      });
      if (eventFeaturesAtPoint.length > 0) {
        return;
      }

      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const name = feature.properties?.PROV_NAME || 'Unknown';
        const status = feature.properties?.status || '';
        const sourceYear = Number(feature.properties?.SOURCE_YEAR || closestYear);

        if (onProvinceClick) {
          onProvinceClick(name, closestYear);
        }

        eventPopupRef.current?.remove();
        eventPopupRef.current = null;
        regionPopupRef.current?.remove();

        const popup = new maplibregl.Popup({ closeButton: true, maxWidth: '300px' })
          .setLngLat(e.lngLat)
          .setHTML(buildPopupHTML(name, status, closestYear, sourceYear))
          .addTo(m);

        popup.on('close', () => {
          if (regionPopupRef.current === popup) {
            regionPopupRef.current = null;
          }
        });
        regionPopupRef.current = popup;
      }
    };

    const fillMouseEnterHandler = () => {
      m.getCanvas().style.cursor = 'pointer';
    };
    const fillMouseLeaveHandler = () => {
      m.getCanvas().style.cursor = '';
    };

    fetch(geojsonPath)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        const timelineData = toTimelineData(data);
        const externalData = toExternalContextData(data);
        const labelPointData = buildLabelPointCollection(timelineData);

        if (m.getLayer(labelLayerId)) m.removeLayer(labelLayerId);
        if (m.getSource(labelSourceId)) m.removeSource(labelSourceId);
        if (m.getLayer(indigenousOverlayFillLayerId)) m.removeLayer(indigenousOverlayFillLayerId);
        if (m.getLayer(indigenousOverlayStrokeLayerId)) m.removeLayer(indigenousOverlayStrokeLayerId);
        if (m.getLayer(disputedLayerId)) m.removeLayer(disputedLayerId);
        if (m.getLayer(fillLayerId)) m.removeLayer(fillLayerId);
        if (m.getLayer(strokeLayerId)) m.removeLayer(strokeLayerId);
        if (m.getSource(sourceId)) m.removeSource(sourceId);
        if (m.getLayer(externalFillLayerId)) m.removeLayer(externalFillLayerId);
        if (m.getLayer(externalStrokeLayerId)) m.removeLayer(externalStrokeLayerId);
        if (m.getSource(externalSourceId)) m.removeSource(externalSourceId);

        if (externalData.features.length > 0) {
          m.addSource(externalSourceId, {
            type: 'geojson',
            data: externalData,
          });

          m.addLayer({
            id: externalFillLayerId,
            type: 'fill',
            source: externalSourceId,
            layout: {
              visibility: showExternalContext ? 'visible' : 'none',
            },
            paint: {
              'fill-color': EXTERNAL_CONTEXT_COLOR,
              'fill-opacity': 0.86,
            },
          });

          m.addLayer({
            id: externalStrokeLayerId,
            type: 'line',
            source: externalSourceId,
            layout: {
              visibility: showExternalContext ? 'visible' : 'none',
            },
            paint: {
              'line-color': EXTERNAL_CONTEXT_STROKE,
              'line-width': 1,
              'line-opacity': 0.65,
            },
          });
        }

        m.addSource(sourceId, {
          type: 'geojson',
          data: timelineData,
        });

        // Fill layer
        m.addLayer({
          id: fillLayerId,
          type: 'fill',
          source: sourceId,
          paint: {
            'fill-color': historicalFillColorExpression(),
            'fill-opacity': 0.82,
          },
        });

        // Stroke layer
        m.addLayer({
          id: strokeLayerId,
          type: 'line',
          source: sourceId,
          paint: {
            'line-color': [
              'case',
              ['==', ['get', 'status'], 'colony'],
              COLONY_STROKE,
              PROVINCE_STROKE,
            ],
            'line-width': [
              'case',
              ['==', ['get', 'status'], 'colony'],
              0.5,
              2,
            ],
            'line-opacity': [
              'case',
              ['==', ['get', 'status'], 'colony'],
              0.6,
              0.9,
            ],
          },
        });

        // Governance overlay: indigenous reserve regions remain distinct from control colors
        m.addLayer({
          id: indigenousOverlayFillLayerId,
          type: 'fill',
          source: sourceId,
          filter: ['==', ['get', 'status'], 'indigenous'],
          paint: {
            'fill-color': INDIGENOUS_OVERLAY_COLOR,
            'fill-opacity': 0.28,
          },
        });

        m.addLayer({
          id: indigenousOverlayStrokeLayerId,
          type: 'line',
          source: sourceId,
          filter: ['==', ['get', 'status'], 'indigenous'],
          paint: {
            'line-color': INDIGENOUS_OVERLAY_STROKE,
            'line-width': 1.8,
            'line-dasharray': [1, 1.5],
            'line-opacity': 0.9,
          },
        });

        if (m.getLayer(strokeLayerId)) {
          m.moveLayer(strokeLayerId);
        }

        // Highlight disputed claims distinctly from external context
        m.addLayer({
          id: disputedLayerId,
          type: 'line',
          source: sourceId,
          filter: ['==', ['get', 'status'], 'disputed'],
          paint: {
            'line-color': DISPUTED_OUTLINE_COLOR,
            'line-width': 2,
            'line-dasharray': [2, 2],
            'line-opacity': 0.9,
          },
        });

        m.addSource(labelSourceId, {
          type: 'geojson',
          data: labelPointData,
        });

        // In-map labels for current boundaries
        m.addLayer({
          id: labelLayerId,
          type: 'symbol',
          source: labelSourceId,
          layout: {
            'text-field': ['get', 'label'],
            'text-font': ['Noto Sans Regular'],
            'text-size': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3, 11,
              5, 13,
              7, 15,
            ],
            'text-max-width': 9,
            'text-allow-overlap': false,
            'text-ignore-placement': false,
            'symbol-sort-key': ['get', 'priority'],
          },
          paint: {
            'text-color': '#2b2f3a',
            'text-halo-color': '#ffffff',
            'text-halo-width': 1.2,
            'text-opacity': 0.9,
          },
        });

        m.off('click', fillLayerId, fillClickHandler);
        m.off('mouseenter', fillLayerId, fillMouseEnterHandler);
        m.off('mouseleave', fillLayerId, fillMouseLeaveHandler);
        m.on('click', fillLayerId, fillClickHandler);
        m.on('mouseenter', fillLayerId, fillMouseEnterHandler);
        m.on('mouseleave', fillLayerId, fillMouseLeaveHandler);

        // Ensure event markers always render on top of boundary fills
        if (m.getLayer('event-markers')) {
          m.moveLayer('event-markers');
        }
      })
      .catch((err) => {
        console.error(`Failed to load boundaries for ${closestYear}:`, err);
      });

    return () => {
      cancelled = true;
      m.off('click', fillLayerId, fillClickHandler);
      m.off('mouseenter', fillLayerId, fillMouseEnterHandler);
      m.off('mouseleave', fillLayerId, fillMouseLeaveHandler);
    };
  }, [selectedYear, mapLoaded, onProvinceClick, showExternalContext]);

  // Event markers
  useEffect(() => {
    if (!map.current || !mapLoaded || !events) return;

    const m = map.current;
    const sourceId = 'events';
    const layerId = 'event-markers';
    const eraYears = eras.map((e) => e.year);
    const eraIndex = eraYears.findIndex((year) => year === selectedYear);
    const previousEraYear = eraIndex > 0 ? eraYears[eraIndex - 1] : Number.NEGATIVE_INFINITY;
    const sliceStart = previousEraYear + 1;
    const sliceEnd = selectedYear;
    const activeEventIdSet = new Set(activeEventIds);

    // Era-slice mode plus reader highlights: keep active reading events visible.
    const filteredEvents = events.filter((e) => {
      const eventStart = e.year;
      const eventEnd = e.endYear ?? e.year;
      const inEraSlice = eventStart <= sliceEnd && eventEnd >= sliceStart;
      return inEraSlice || activeEventIdSet.has(e.id);
    });
    const hasActiveEvents = activeEventIdSet.size > 0;

    const geojsonData: GeoJSON.FeatureCollection = {
      type: 'FeatureCollection',
      features: filteredEvents.map((e) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [e.lng, e.lat],
        },
        properties: {
          id: e.id,
          title: e.title,
          year: e.year,
          category: e.category,
          description: e.description,
          keyPeople: e.keyPeople?.join(', ') || '',
          active: activeEventIdSet.has(e.id) ? 1 : 0,
        },
      })),
    };

    if (m.getLayer(layerId)) m.removeLayer(layerId);
    if (m.getSource(sourceId)) m.removeSource(sourceId);

    m.addSource(sourceId, { type: 'geojson', data: geojsonData });

    m.addLayer({
      id: layerId,
      type: 'circle',
      source: sourceId,
      layout: {
        'circle-sort-key': ['get', 'active'],
      },
      paint: {
        'circle-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          3,
          ['case', ['==', ['get', 'active'], 1], 7, 5],
          6,
          ['case', ['==', ['get', 'active'], 1], 11, 8],
          10,
          ['case', ['==', ['get', 'active'], 1], 15, 12],
        ],
        'circle-color': [
          'match',
          ['get', 'category'],
          'exploration', '#2563eb',
          'military', '#dc2626',
          'political', '#b45309',
          'cultural', '#7c3aed',
          'infrastructure', '#0f766e',
          'settlement', '#c2410c',
          '#6b7280',
        ],
        'circle-stroke-width': [
          'case',
          ['==', ['get', 'active'], 1],
          4,
          2.5,
        ],
        'circle-stroke-color': [
          'case',
          ['==', ['get', 'active'], 1],
          '#111827',
          '#ffffff',
        ],
        'circle-opacity': [
          'case',
          ['==', ['get', 'active'], 1],
          1,
          hasActiveEvents ? 0.38 : 0.92,
        ],
        'circle-stroke-opacity': [
          'case',
          ['==', ['get', 'active'], 1],
          1,
          hasActiveEvents ? 0.55 : 0.9,
        ],
      },
    });

    const eventClickHandler = (e: maplibregl.MapMouseEvent & { features?: maplibregl.MapGeoJSONFeature[] }) => {
      if (e.originalEvent) {
        e.originalEvent.stopPropagation();
        e.originalEvent.preventDefault();
      }
      if (e.features && e.features.length > 0) {
        const props = e.features[0].properties;
        if (props) {
          regionPopupRef.current?.remove();
          regionPopupRef.current = null;
          eventPopupRef.current?.remove();

          const popup = new maplibregl.Popup({ closeButton: true, maxWidth: '320px' })
            .setLngLat(e.lngLat)
            .setHTML(buildEventPopupHTML(props))
            .addTo(m);

          popup.on('close', () => {
            if (eventPopupRef.current === popup) {
              eventPopupRef.current = null;
            }
          });
          eventPopupRef.current = popup;

          if (onEventClick) {
            const found = events.find((ev) => ev.id === props.id);
            if (found) onEventClick(found);
          }
        }
      }
    };

    const eventMouseEnterHandler = () => {
      m.getCanvas().style.cursor = 'pointer';
    };
    const eventMouseLeaveHandler = () => {
      m.getCanvas().style.cursor = '';
    };

    m.off('click', layerId, eventClickHandler);
    m.off('mouseenter', layerId, eventMouseEnterHandler);
    m.off('mouseleave', layerId, eventMouseLeaveHandler);
    m.on('click', layerId, eventClickHandler);
    m.on('mouseenter', layerId, eventMouseEnterHandler);
    m.on('mouseleave', layerId, eventMouseLeaveHandler);

    return () => {
      m.off('click', layerId, eventClickHandler);
      m.off('mouseenter', layerId, eventMouseEnterHandler);
      m.off('mouseleave', layerId, eventMouseLeaveHandler);
    };
  }, [selectedYear, mapLoaded, events, activeEventIds, onEventClick]);

  return (
    <div className="canada-map-container">
      <div ref={mapContainer} className="canada-map" />
      {!mapLoaded && (
        <div className="map-loading">
          <div className="map-loading-inner">
            <div className="map-loading-spinner" />
            <span>Loading atlas...</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Color expression for provinces — each province gets its own unique color
function colorForProvince(): maplibregl.ExpressionSpecification {
  const matchPairs: string[] = [];

  for (const [name, color] of Object.entries(PROVINCE_COLORS)) {
    matchPairs.push(name, color);
  }

  return [
    'match',
    ['get', 'PROV_NAME'],
    ...matchPairs,
    '#1e40af',
  ] as unknown as maplibregl.ExpressionSpecification;
}

function historicalFillColorExpression(): maplibregl.ExpressionSpecification {
  const matchPairs: string[] = [];

  for (const [status, color] of Object.entries(HISTORICAL_STATUS_COLORS)) {
    matchPairs.push(status, color);
  }

  return [
    'match',
    ['get', 'status'],
    ...matchPairs,
    'territory',
    highlightedTerritoryColor(),
    'colony',
    COLONY_COLOR,
    colorForProvince(),
  ] as unknown as maplibregl.ExpressionSpecification;
}

function highlightedTerritoryColor(): maplibregl.ExpressionSpecification {
  const matchPairs: string[] = [];

  for (const [name, color] of Object.entries(TERRITORY_HIGHLIGHT_COLORS)) {
    matchPairs.push(name, color);
  }

  return [
    'match',
    ['get', 'PROV_NAME'],
    ...matchPairs,
    TERRITORY_COLOR,
  ] as unknown as maplibregl.ExpressionSpecification;
}

function toTimelineData(data: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection {
  return {
    type: 'FeatureCollection',
    features: data.features.filter((feature) => {
      const status = String(feature.properties?.status || '');
      return !EXTERNAL_STATUSES.has(status);
    }),
  };
}

function toExternalContextData(data: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection {
  return {
    type: 'FeatureCollection',
    features: data.features.filter((feature) => {
      const status = String(feature.properties?.status || '');
      return EXTERNAL_STATUSES.has(status);
    }),
  };
}

function buildLabelPointCollection(data: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection {
  const labelMap = new Map<string, GeoJSON.Feature<GeoJSON.Point>>();

  data.features.forEach((feature) => {
    const name = String(feature.properties?.PROV_NAME || '').trim();
    if (!name) return;

    const normalizedLabel = normalizeLabel(name);
    const status = String(feature.properties?.status || '');
    const candidate = representativeLabelPoint(feature, normalizedLabel, status);
    if (!candidate) return;

    const existing = labelMap.get(normalizedLabel);
    const existingArea = Number(existing?.properties?.area ?? 0);
    const candidateArea = Number(candidate.properties?.area ?? 0);

    if (!existing || candidateArea > existingArea) {
      labelMap.set(normalizedLabel, candidate);
    }
  });

  return {
    type: 'FeatureCollection',
    features: Array.from(labelMap.values()),
  };
}

function representativeLabelPoint(
  feature: GeoJSON.Feature,
  label: string,
  status: string
): GeoJSON.Feature<GeoJSON.Point> | null {
  const geom = feature.geometry;
  if (!geom) return null;

  const best = largestPolygonFromGeometry(geom);
  if (!best) return null;

  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: best.centroid,
    },
    properties: {
      label,
      priority: labelPriority(status),
      area: best.area,
    },
  };
}

function largestPolygonFromGeometry(
  geometry: GeoJSON.Geometry
): { area: number; centroid: [number, number] } | null {
  if (geometry.type === 'Polygon') {
    const ring = geometry.coordinates[0];
    const area = ringArea(ring);
    if (area <= 0) return null;
    return { area, centroid: ringCentroid(ring) };
  }

  if (geometry.type === 'MultiPolygon') {
    let best: { area: number; centroid: [number, number] } | null = null;
    geometry.coordinates.forEach((poly) => {
      const ring = poly[0];
      const area = ringArea(ring);
      if (area <= 0) return;
      if (!best || area > best.area) {
        best = { area, centroid: ringCentroid(ring) };
      }
    });
    return best;
  }

  return null;
}

function ringArea(ring: number[][]): number {
  if (ring.length < 3) return 0;
  let sum = 0;
  for (let i = 0; i < ring.length; i += 1) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % ring.length];
    sum += (x1 * y2) - (x2 * y1);
  }
  return Math.abs(sum) / 2;
}

function ringCentroid(ring: number[][]): [number, number] {
  let twiceArea = 0;
  let x = 0;
  let y = 0;

  for (let i = 0; i < ring.length; i += 1) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % ring.length];
    const cross = (x1 * y2) - (x2 * y1);
    twiceArea += cross;
    x += (x1 + x2) * cross;
    y += (y1 + y2) * cross;
  }

  if (Math.abs(twiceArea) < 1e-12) return ringCenterByBounds(ring);

  const factor = 1 / (3 * twiceArea);
  return [x * factor, y * factor];
}

function ringCenterByBounds(ring: number[][]): [number, number] {
  let minX = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  ring.forEach(([x, y]) => {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  });

  return [(minX + maxX) / 2, (minY + maxY) / 2];
}

function labelPriority(status: string): number {
  if (status === 'province') return 100;
  if (status === 'canada-east' || status === 'canada-west') return 95;
  if (status === 'upper-canada' || status === 'lower-canada') return 92;
  if (status === 'province-of-quebec') return 90;
  if (status === 'new-france' || status === 'british-colony') return 85;
  if (status === 'territory' || status === 'british-territory') return 82;
  return 75;
}

function normalizeLabel(name: string): string {
  if (name === 'Northwest Territories') return 'NWT';
  if (name === 'Yukon Territory') return 'Yukon';
  if (name === 'Prince Edward Island') return 'PEI';
  if (name === 'Newfoundland and Labrador') return 'Newfoundland & Labrador';
  if (name === 'British Colonies') return 'British colonies (Atlantic)';
  if (name === '13 Colonies') return 'British colonies (south, partial)';
  if (name === 'Indian Territory') return 'Indigenous reserve';
  if (name === 'Claimed by US and Britain') return 'Disputed';
  return name;
}

function buildPopupHTML(name: string, status: string, year: number, sourceYear: number): string {
  const era = eras.find((e) => e.year === year);
  const statusLabel = HISTORICAL_STATUS_LABELS[status]
    || (status === 'colony' ? 'British Colony' : status === 'territory' ? 'Territory' : 'Province');
  const badgePalette = HISTORICAL_STATUS_COLORS[status];
  const badgeColor = status === 'colony'
    ? 'background:#fce8e8;color:#9f4b4b;border:1px solid #e6bcbc'
    : status === 'territory'
    ? 'background:#f7e7e7;color:#8d5b5b;border:1px solid #e4c1c1'
    : badgePalette
    ? `background:${badgePalette}1A;color:${badgePalette};border:1px solid ${badgePalette}55`
    : 'background:#e8edf5;color:#1e40af;border:1px solid #c5d0e8';

  return `
    <div style="font-family:Figtree,system-ui,sans-serif;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <strong style="font-size:17px;font-family:'Crimson Pro',Georgia,serif;font-weight:600;color:#1f1d2b;">${name}</strong>
      </div>
      <div style="display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;${badgeColor};margin-bottom:8px;">
        ${statusLabel}
      </div>
      <div style="font-size:12.5px;color:#5a576a;line-height:1.5;">
        ${statusLabel} as of ${year}${era ? ` — ${era.label}` : ''}
      </div>
      ${sourceYear !== year ? `<div style="font-size:11.5px;color:#908d9b;margin-top:6px;">Boundary geometry from official ${sourceYear} historical snapshot.</div>` : ''}
    </div>
  `;
}

function buildEventPopupHTML(props: Record<string, unknown>): string {
  const categoryColors: Record<string, string> = {
    exploration: '#2563eb', military: '#dc2626', political: '#b45309',
    cultural: '#7c3aed', infrastructure: '#0f766e', settlement: '#c2410c',
  };
  const color = categoryColors[props.category as string] || '#6b7280';

  return `
    <div style="font-family:Figtree,system-ui,sans-serif;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;box-shadow:0 0 0 3px ${color}22;"></span>
        <strong style="font-size:16px;font-family:'Crimson Pro',Georgia,serif;font-weight:600;color:#1f1d2b;">${props.title}</strong>
      </div>
      <div style="font-family:'Crimson Pro',Georgia,serif;font-size:14px;color:#b45309;font-weight:600;margin-bottom:6px;">${props.year}</div>
      <div style="font-size:12.5px;color:#5a576a;line-height:1.55;">${props.description}</div>
      ${props.keyPeople ? `<div style="font-size:11.5px;color:#908d9b;margin-top:8px;padding-top:8px;border-top:1px solid #e2ddd5;">Key figures: ${props.keyPeople}</div>` : ''}
    </div>
  `;
}
