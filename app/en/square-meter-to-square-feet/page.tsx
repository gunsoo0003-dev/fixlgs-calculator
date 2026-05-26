import type { Metadata } from 'next';
import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: 'Square Meter to Square Feet Converter | sqm to sqft | FIXLGS',
  description:
    'Convert square meters to square feet using the standard conversion value. 1 square meter equals 10.7639 square feet.',
};

export default function SquareMeterToSquareFeetPage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="area-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow">SQM TO SQFT</p>

            <h1 className="area-hero-title">Square Meter to Square Feet Converter</h1>

            <p className="area-hero-description">
              Convert square meters into square feet using the standard conversion value.
              1 square meter equals 10.7639 square feet.
            </p>

            <div className="hero-note">
              <span className="hero-note-dot" />
              <span>1㎡ = 10.7639 sq ft</span>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">FORMULA</p>
              <h2 className="section-title">How to convert sqm to sqft</h2>
              <p className="section-description">
                Multiply square meters by 10.7639 to convert the value into square feet.
              </p>

              <div className="standard-grid">
                <article className="standard-card">
                  <h3 className="standard-card-title">Formula</h3>
                  <p className="standard-card-value">sqm × 10.7639 = sq ft</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">20 sqm</h3>
                  <p className="standard-card-value">215.28 sq ft</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">50 sqm</h3>
                  <p className="standard-card-value">538.2 sq ft</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">100 sqm</h3>
                  <p className="standard-card-value">1,076.39 sq ft</p>
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
                Use the global area calculator to convert square meters, square feet, acres,
                hectares, and square yards.
              </p>

              <Link className="calculator-card-link" href="/en/area-calculator">
                <article className="calculator-card is-active">
                  <div className="calculator-card-top">
                    <span className="calculator-card-badge active">Available</span>
                  </div>

                  <h3 className="calculator-card-title">Area Size Calculator</h3>

                  <p className="calculator-card-description">
                    Enter a value and choose a unit to calculate area conversions.
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