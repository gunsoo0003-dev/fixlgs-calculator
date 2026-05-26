'use client';

import { useMemo, useState } from 'react';

import { calculateAreaResults } from '@/lib/calculators/area/calculateAreaResults';
import type { AreaInputUnit, AreaResult } from '@/lib/calculators/area/areaConstants';

import { koreanAreaPresets } from './areaCalculatorPresets';

type InputMode = AreaInputUnit;

function formatNumber(value: number): string {
  return value.toLocaleString('ko-KR', {
    maximumFractionDigits: 2,
  });
}

function ResultCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <article className="area-result-card">
      <p className="area-result-card-title">{title}</p>
      <p className="area-result-card-value">{value}</p>
      <p className="area-result-card-description">{description}</p>
    </article>
  );
}

export default function AreaCalculator() {
  const [mode, setMode] = useState<InputMode>('sqm');
  const [squareMeterInput, setSquareMeterInput] = useState('59');
  const [pyeongInput, setPyeongInput] = useState('');
  const [widthInput, setWidthInput] = useState('');
  const [heightInput, setHeightInput] = useState('');

  const result: AreaResult | null = useMemo(() => {
    if (mode === 'sqm') {
      const value = Number(squareMeterInput);
      if (!Number.isFinite(value) || value <= 0) return null;

      return calculateAreaResults({
        unit: 'sqm',
        value,
      });
    }

    if (mode === 'pyeong') {
      const value = Number(pyeongInput);
      if (!Number.isFinite(value) || value <= 0) return null;

      return calculateAreaResults({
        unit: 'pyeong',
        value,
      });
    }

    const width = Number(widthInput);
    const height = Number(heightInput);

    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
      return null;
    }

    return calculateAreaResults({
      unit: 'widthHeight',
      width,
      height,
    });
  }, [heightInput, mode, pyeongInput, squareMeterInput, widthInput]);

  function handlePresetClick(unit: Exclude<AreaInputUnit, 'widthHeight'>, value: number) {
    setMode(unit);

    if (unit === 'sqm') {
      setSquareMeterInput(String(value));
      setPyeongInput('');
    }

    if (unit === 'pyeong') {
      setPyeongInput(String(value));
      setSquareMeterInput('');
    }

    setWidthInput('');
    setHeightInput('');
  }

  return (
    <section className="area-calculator-shell">
      <div className="area-calculator-layout">
        <div className="area-input-panel">
          <div className="area-tabs" role="tablist" aria-label="면적 입력 방식">
            <button
              type="button"
              className={`area-tab ${mode === 'sqm' ? 'active' : ''}`}
              onClick={() => setMode('sqm')}
            >
              ㎡ 입력
            </button>
            <button
              type="button"
              className={`area-tab ${mode === 'pyeong' ? 'active' : ''}`}
              onClick={() => setMode('pyeong')}
            >
              평 입력
            </button>
            <button
              type="button"
              className={`area-tab ${mode === 'widthHeight' ? 'active' : ''}`}
              onClick={() => setMode('widthHeight')}
            >
              가로×세로
            </button>
          </div>

          {mode === 'sqm' && (
            <div className="area-input-group">
              <label htmlFor="square-meter-input">면적 입력</label>
              <div className="area-input-row">
                <input
                  id="square-meter-input"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={squareMeterInput}
                  onChange={(event) => setSquareMeterInput(event.target.value)}
                  placeholder="예: 59"
                />
                <span>㎡</span>
              </div>
            </div>
          )}

          {mode === 'pyeong' && (
            <div className="area-input-group">
              <label htmlFor="pyeong-input">평수 입력</label>
              <div className="area-input-row">
                <input
                  id="pyeong-input"
                  type="number"
                  min="0"
                  inputMode="decimal"
                  value={pyeongInput}
                  onChange={(event) => setPyeongInput(event.target.value)}
                  placeholder="예: 30"
                />
                <span>평</span>
              </div>
            </div>
          )}

          {mode === 'widthHeight' && (
            <div className="area-size-input-grid">
              <div className="area-input-group">
                <label htmlFor="width-input">가로</label>
                <div className="area-input-row">
                  <input
                    id="width-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    value={widthInput}
                    onChange={(event) => setWidthInput(event.target.value)}
                    placeholder="예: 5"
                  />
                  <span>m</span>
                </div>
              </div>

              <div className="area-input-group">
                <label htmlFor="height-input">세로</label>
                <div className="area-input-row">
                  <input
                    id="height-input"
                    type="number"
                    min="0"
                    inputMode="decimal"
                    value={heightInput}
                    onChange={(event) => setHeightInput(event.target.value)}
                    placeholder="예: 4"
                  />
                  <span>m</span>
                </div>
              </div>
            </div>
          )}

          <div className="area-preset-section">
            <p className="area-preset-title">자주 쓰는 면적 빠른 선택</p>
            <div className="area-preset-grid">
              {koreanAreaPresets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className="area-preset-button"
                  onClick={() => handlePresetClick(preset.unit, preset.value)}
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
                <p className="area-result-eyebrow">입력값</p>
                <h2>{result.inputLabel}</h2>
              </div>

              <div className="area-result-grid">
                <ResultCard
                  title="환산 결과"
                  value={`${formatNumber(result.squareMeters)}㎡ / ${formatNumber(result.pyeong)}평`}
                  description="1평 = 약 3.3058㎡ 기준"
                />

                <ResultCard
                  title="정사각형 기준"
                  value={`${formatNumber(result.squareSideMeters)}m × ${formatNumber(
                    result.squareSideMeters,
                  )}m`}
                  description="입력 면적을 정사각형으로 환산한 값"
                />

                <ResultCard
                  title="일반형 주차면 기준"
                  value={`약 ${formatNumber(result.parkingSpaces)}면`}
                  description="1면 = 2.5m × 5.0m = 12.5㎡ 기준"
                />

                <ResultCard
                  title="승용차 주차공간 기준"
                  value={`약 ${formatNumber(result.carSpaces)}대분`}
                  description="승용차 1대 주차공간 = 일반형 주차면 1면 기준"
                />
              </div>
            </>
          ) : (
            <div className="area-empty-result">
              <p>면적을 입력하면 계산 결과가 표시됩니다.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}