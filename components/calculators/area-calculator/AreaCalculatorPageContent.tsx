import AreaCalculator from './AreaCalculator';
import { areaCalculatorText } from './areaCalculatorText';

export default function AreaCalculatorPageContent() {
  return (
    <main>
      <section className="area-hero-section">
        <div className="section-container">
          <p className="hero-eyebrow">{areaCalculatorText.ko.eyebrow}</p>

          <h1 className="area-hero-title">{areaCalculatorText.ko.title}</h1>

          <p className="area-hero-description">{areaCalculatorText.ko.description}</p>

          <div className="hero-note">
            <span className="hero-note-dot" />
            <span>{areaCalculatorText.ko.principle}</span>
          </div>
        </div>
      </section>

      <section className="area-calculator-section">
        <div className="section-container">
          <AreaCalculator />
        </div>
      </section>

      <section className="area-standard-section">
        <div className="section-container">
          <div className="standard-panel">
            <p className="section-kicker">STANDARD</p>
            <h2 className="section-title">계산 기준</h2>
            <p className="section-description">
              아래 기준값을 바탕으로 면적, 평수, 정사각형 기준, 일반형 주차면 기준,
              승용차 주차공간 기준을 계산합니다.
            </p>

            <div className="standard-grid">
              <article className="standard-card">
                <h3 className="standard-card-title">1㎡</h3>
                <p className="standard-card-value">1m × 1m</p>
              </article>

              <article className="standard-card">
                <h3 className="standard-card-title">1평</h3>
                <p className="standard-card-value">
                  약 3.3058㎡
                  <br />
                  약 1.8m × 1.8m
                </p>
              </article>

              <article className="standard-card">
                <h3 className="standard-card-title">일반형 주차면 1면</h3>
                <p className="standard-card-value">
                  2.5m × 5.0m
                  <br />
                  약 12.5㎡
                </p>
              </article>

              <article className="standard-card">
                <h3 className="standard-card-title">승용차 주차공간</h3>
                <p className="standard-card-value">
                  승용차 1대 주차공간
                  <br />
                  일반형 주차면 1면 기준
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}