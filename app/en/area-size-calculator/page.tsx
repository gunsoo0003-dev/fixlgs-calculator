import type { Metadata } from 'next';
import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: 'Area Size Calculator | sqm sqft acre hectare converter | FIXLGS',
  description:
    'Area size calculator for square meters, square feet, acres, hectares, and square yards. Compare area values using clear standard-based conversions.',
};

export default function AreaSizeCalculatorSeoPage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="area-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow">AREA SIZE CALCULATOR</p>

            <h1 className="area-hero-title">Area Size Calculator</h1>

            <p className="area-hero-description">
              Calculate and compare area values across square meters, square feet, acres,
              hectares, and square yards using fixed conversion standards.
            </p>

            <div className="hero-note">
              <span className="hero-note-dot" />
              <span>Simple area conversion based on clear unit standards.</span>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">SUPPORTED UNITS</p>
              <h2 className="section-title">Area units supported</h2>
              <p className="section-description">
                The global area calculator supports common metric, US, and land-size units.
              </p>

              <div className="standard-grid">
                <article className="standard-card">
                  <h3 className="standard-card-title">Square meters</h3>
                  <p className="standard-card-value">sqm / ㎡</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">Square feet</h3>
                  <p className="standard-card-value">sq ft</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">Acres</h3>
                  <p className="standard-card-value">land size unit</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">Hectares</h3>
                  <p className="standard-card-value">metric land unit</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">CALCULATOR</p>
              <h2 className="section-title">Open the global area calculator</h2>
              <p className="section-description">
                Enter one area value, select the input unit, and check multiple converted
                results at once.
              </p>

              <Link className="calculator-card-link" href="/en/area-calculator">
                <article className="calculator-card is-active">
                  <div className="calculator-card-top">
                    <span className="calculator-card-badge active">Available</span>
                  </div>

                  <h3 className="calculator-card-title">Area Size Calculator</h3>

                  <p className="calculator-card-description">
                    A global area converter with a unit selector and quick examples.
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