import type { Metadata } from 'next';
import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: 'Square Feet to Square Meter Converter | sqft to sqm | FIXLGS',
  description:
    'Convert square feet to square meters using the standard conversion value. 1 square foot equals 0.092903 square meters.',
};

export default function SquareFeetToSquareMeterPage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="area-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow">SQFT TO SQM</p>

            <h1 className="area-hero-title">Square Feet to Square Meter Converter</h1>

            <p className="area-hero-description">
              Convert square feet into square meters using the standard conversion value.
              1 square foot equals 0.092903 square meters.
            </p>

            <div className="hero-note">
              <span className="hero-note-dot" />
              <span>1 sq ft = 0.092903㎡</span>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">FORMULA</p>
              <h2 className="section-title">How to convert sqft to sqm</h2>
              <p className="section-description">
                Multiply square feet by 0.092903 to convert the value into square meters.
              </p>

              <div className="standard-grid">
                <article className="standard-card">
                  <h3 className="standard-card-title">Formula</h3>
                  <p className="standard-card-value">sq ft × 0.092903 = sqm</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">500 sq ft</h3>
                  <p className="standard-card-value">46.45㎡</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">1,000 sq ft</h3>
                  <p className="standard-card-value">92.9㎡</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">2,000 sq ft</h3>
                  <p className="standard-card-value">185.81㎡</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">CALCULATOR</p>
              <h2 className="section-title">Use the area calculator</h2>
              <p className="section-description">
                Use the global area calculator to convert square feet into other area units.
              </p>

              <Link className="calculator-card-link" href="/en/area-calculator">
                <article className="calculator-card is-active">
                  <div className="calculator-card-top">
                    <span className="calculator-card-badge active">Available</span>
                  </div>

                  <h3 className="calculator-card-title">Area Size Calculator</h3>

                  <p className="calculator-card-description">
                    Convert square feet, square meters, acres, hectares, and square yards.
                  </p>

                  <div className="calculator-card-footer">
                    <span>Open calculator</span>
                    <span>→</span>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}