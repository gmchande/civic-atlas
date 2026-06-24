import { useState, useEffect, useRef, useCallback } from 'react';
import type { Era } from '../../types';
import './TimelineSlider.css';

const PRIMARY_MILESTONE_YEARS = new Set([1763, 1774, 1791, 1867, 1870, 1905, 1949, 1999]);

interface TimelineSliderProps {
  eras: Era[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export default function TimelineSlider({
  eras,
  selectedYear,
  onYearChange,
}: TimelineSliderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentIndex = eras.findIndex((e) => e.year === selectedYear);
  const currentEra = eras.find((e) => e.year === selectedYear);

  const goToNext = useCallback(() => {
    const idx = eras.findIndex((e) => e.year === selectedYear);
    if (idx < eras.length - 1) {
      onYearChange(eras[idx + 1].year);
    } else {
      // Loop back to start
      onYearChange(eras[0].year);
      setIsPlaying(false);
    }
  }, [eras, selectedYear, onYearChange]);

  // Play/pause auto-advance
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(goToNext, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, goToNext]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idx = parseInt(e.target.value, 10);
    onYearChange(eras[idx].year);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    // If at the end, restart
    if (currentIndex === eras.length - 1 && !isPlaying) {
      onYearChange(eras[0].year);
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="timeline-slider">
      <button
        className="timeline-play-btn"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause timeline' : 'Play timeline'}
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="3" y="2" width="4" height="12" rx="1" />
            <rect x="9" y="2" width="4" height="12" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <polygon points="3,1 14,8 3,15" />
          </svg>
        )}
      </button>

      <div className="timeline-track-wrapper">
        <input
          type="range"
          className="timeline-range"
          min={0}
          max={eras.length - 1}
          step={1}
          value={currentIndex >= 0 ? currentIndex : 0}
          onChange={handleSliderChange}
          aria-label="Timeline year selector"
          aria-valuetext={currentEra ? `${currentEra.year} — ${currentEra.label}` : ''}
          style={{
            background: `linear-gradient(90deg, rgba(30, 64, 175, 0.35) ${(Math.max(0, currentIndex) / (eras.length - 1)) * 100}%, var(--color-border) ${(Math.max(0, currentIndex) / (eras.length - 1)) * 100}%)`,
          }}
        />
        <div className="timeline-pips">
          {eras.map((era, idx) => {
            const importanceClass = getEraImportanceClass(era.year);
            return (
              <button
                key={era.year}
                className={`timeline-pip ${idx === currentIndex ? 'active' : ''} ${importanceClass}`}
                onClick={() => {
                  onYearChange(era.year);
                  setIsPlaying(false);
                }}
                aria-label={`${era.year}: ${era.label}`}
                title={PRIMARY_MILESTONE_YEARS.has(era.year) ? `${era.year} (Core test milestone)` : `${era.year}`}
                style={{
                  left: `${(idx / (eras.length - 1)) * 100}%`,
                }}
              >
                <span className="pip-dot" />
                <span className="pip-year">{era.year}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="timeline-current">
        <span className="timeline-current-year">{selectedYear}</span>
      </div>
    </div>
  );
}

function getEraImportanceClass(year: number): string {
  if (PRIMARY_MILESTONE_YEARS.has(year)) return 'pip-primary';
  return '';
}
