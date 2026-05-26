import type { Metadata } from 'next';

import GlobalAreaCalculator from '@/components/calculators/area-calculator/GlobalAreaCalculator';
import { areaCalculatorText } from '@/components/calculators/area-calculator/areaCalculatorText';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: 'Area Size Calculator | Square Meter, Square Feet, Acre Converter | FIXLGS',
  description:
    'Convert square meters, square feet, acres, hectares, and square yards with a simple global area calculator based on clear standards.',
};

export default function GlobalAreaCalculatorPage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="area-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow">{areaCalculatorText.en.eyebrow}</p>

            <h1 className="area-hero-title">{areaCalculatorText.en.title}</h1>

            <p className="area-hero-description">{areaCalculatorText.en.description}</p>

            <div className="hero-note">
              <span className="hero-note-dot" />
              <span>{areaCalculatorText.en.principle}</span>
            </div>
          </div>
        </section>

        <section className="area-calculator-section">
          <div className="section-container">
            <GlobalAreaCalculator />
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">STANDARD</p>
              <h2 className="section-title">Calculation Standards</h2>
              <p className="section-description">
                This calculator converts area values using fixed unit standards and displays
                comparable results without subjective interpretation.
              </p>

              <div className="standard-grid">
                <article className="standard-card">
                  <h3 className="standard-card-title">1 square meter</h3>
                  <p className="standard-card-value">10.7639 sq ft</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">1 square foot</h3>
                  <p className="standard-card-value">0.092903㎡</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">1 acre</h3>
                  <p className="standard-card-value">4,046.8564㎡</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">1 hectare</h3>
                  <p className="standard-card-value">10,000㎡</p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}