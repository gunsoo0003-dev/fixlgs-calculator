'use client';

import { useMemo, useState } from 'react';

import { calculateAreaResults } from '@/lib/calculators/area/calculateAreaResults';

import {
  globalAreaPresets,
  globalAreaUnitOptions,
  type GlobalAreaUnit,
} from './globalAreaCalculatorText';

function formatAreaNumber(value: number): string {
  if (value >= 1000) {
    return Math.round(value).toLocaleString('en-US');
  }

  if (value >= 1) {
    return value.toLocaleString('en-US', {
      maximumFractionDigits: 2,
    });
  }

  return value.toLocaleString('en-US', {
    maximumFractionDigits: 4,
  });
}

export default function GlobalAreaCalculator() {
  const [value, setValue] = useState('100');
  const [unit, setUnit] = useState<GlobalAreaUnit>('sqm');

  const numericValue = Number(value);

  const result = useMemo(() => {
    if (!Number.isFinite(numericValue) || numericValue <= 0) {
      return null;
    }

    return calculateAreaResults({
      unit,
      value: numericValue,
    });
  }, [numericValue, unit]);

  return (
    <div className="area-calculator-shell">
      <div className="area-calculator-layout">
        <div className="area-input-panel">
          <div className="area-input-group" style={{ marginTop: 0 }}>
            <label htmlFor="global-area-value">Enter area value</label>

            <div className="area-input-row">
              <input
                id="global-area-value"
                inputMode="decimal"
                min="0"
                type="number"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />

              <select
                aria-label="Select area unit"
                className="area-unit-select"
                value={unit}
                onChange={(event) => setUnit(event.target.value as GlobalAreaUnit)}
              >
                {globalAreaUnitOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="area-preset-section">
            <p className="area-preset-title">Quick examples</p>

            <div className="area-preset-grid">
              {globalAreaPresets.map((preset) => (
                <button
                  key={preset.label}
                  className="area-preset-button"
                  type="button"
                  onClick={() => {
                    setValue(String(preset.value));
                    setUnit(preset.unit);
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="area-result-panel">
          {result ? (
            <>
              <div className="area-result-summary">
                <p className="area-result-eyebrow">RESULT</p>
                <h2>{result.inputLabel}</h2>
              </div>

              <div className="area-result-grid">
                <article className="area-result-card">
                  <p className="area-result-card-title">Square meters</p>
                  <p className="area-result-card-value">
                    {formatAreaNumber(result.squareMeters)}㎡
                  </p>
                  <p className="area-result-card-description">Metric area standard.</p>
                </article>

                <article className="area-result-card">
                  <p className="area-result-card-title">Square feet</p>
                  <p className="area-result-card-value">
                    {formatAreaNumber(result.squareFeet)} sq ft
                  </p>
                  <p className="area-result-card-description">Common US area unit.</p>
                </article>

                <article className="area-result-card">
                  <p className="area-result-card-title">Acres</p>
                  <p className="area-result-card-value">
                    {formatAreaNumber(result.acres)} acres
                  </p>
                  <p className="area-result-card-description">Often used for land size.</p>
                </article>

                <article className="area-result-card">
                  <p className="area-result-card-title">Hectares</p>
                  <p className="area-result-card-value">
                    {formatAreaNumber(result.hectares)} ha
                  </p>
                  <p className="area-result-card-description">Metric land area unit.</p>
                </article>

                <article className="area-result-card">
                  <p className="area-result-card-title">Square yards</p>
                  <p className="area-result-card-value">
                    {formatAreaNumber(result.squareYards)} sq yd
                  </p>
                  <p className="area-result-card-description">
                    Useful for yard-based measurements.
                  </p>
                </article>

                <article className="area-result-card">
                  <p className="area-result-card-title">Square side length</p>
                  <p className="area-result-card-value">
                    {formatAreaNumber(result.squareSideMeters)}m ×{' '}
                    {formatAreaNumber(result.squareSideMeters)}m
                  </p>
                  <p className="area-result-card-description">
                    Side length if the area is converted into a square.
                  </p>
                </article>

                <article className="area-result-card">
                  <p className="area-result-card-title">Parking spaces</p>
                  <p className="area-result-card-value">
                    {formatAreaNumber(result.parkingSpaces)}
                  </p>
                  <p className="area-result-card-description">
                    Based on one 2.5m × 5.0m standard parking space.
                  </p>
                </article>
              </div>
            </>
          ) : (
            <div className="area-empty-result">Enter a number greater than 0 to calculate.</div>
          )}
        </div>
      </div>
    </div>
  );
}