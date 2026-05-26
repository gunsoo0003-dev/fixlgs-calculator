import type { Metadata } from 'next';
import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: 'FIXLGS Calculator | Simple Standard-Based Calculators',
  description:
    'FIXLGS Calculator provides simple web calculators based on clear standards, fixed values, and practical unit conversions.',
};

export default function EnglishHomePage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="hero-section home-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow home-hero-eyebrow">FIXLGS CALCULATOR</p>

            <p className="home-brand-line">Keep your FIX</p>

            <h1 className="hero-title home-hero-title">
              Calculate numbers
              <br />
              <span>with clear standards.</span>
            </h1>

            <p className="hero-description home-hero-description">
              FIXLGS Calculator organizes everyday numbers such as area, units, money,
              and dates into simple web calculators based on clear standards.
            </p>
          </div>
        </section>

        <section className="calculator-grid-section home-calculator-section">
          <div className="section-container">
            <div className="section-heading-row home-section-heading-row">
              <div>
                <p className="section-kicker">CALCULATORS</p>
                <h2 className="section-title home-list-title">Calculator List</h2>
              </div>

              <p className="section-description">
                The global area calculator is available first. More calculators will be
                added with the same standard-based structure.
              </p>
            </div>

            <div className="calculator-grid home-feature-grid">
              <Link className="calculator-card-link" href="/en/area-calculator">
                <article className="calculator-card is-active">
                  <div className="calculator-card-top">
                    <span className="calculator-card-badge active">Available</span>
                  </div>

                  <h3 className="calculator-card-title">Area Size Calculator</h3>

                  <p className="calculator-card-description">
                    Convert square meters, square feet, acres, hectares, and square yards
                    with a simple unit selector.
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

        <section className="standard-section home-standard-section">
          <div className="section-container">
            <div className="standard-panel home-standard-panel">
              <p className="section-kicker">SEO LINKS</p>
              <h2 className="section-title">Area Conversion Pages</h2>
              <p className="section-description">
                Focused pages for common search needs such as sqm to sqft, sqft to sqm,
                and global area size conversion.
              </p>

              <div className="standard-grid">
                <Link className="calculator-card-link" href="/en/square-meter-to-square-feet">
                  <article className="standard-card home-standard-card">
                    <h3 className="standard-card-title">sqm to sqft calculator</h3>
                    <p className="standard-card-value">Square meters → square feet</p>
                  </article>
                </Link>

                <Link className="calculator-card-link" href="/en/square-feet-to-square-meter">
                  <article className="standard-card home-standard-card">
                    <h3 className="standard-card-title">sqft to sqm calculator</h3>
                    <p className="standard-card-value">Square feet → square meters</p>
                  </article>
                </Link>

                <Link className="calculator-card-link" href="/en/area-size-calculator">
                  <article className="standard-card home-standard-card">
                    <h3 className="standard-card-title">Area size calculator</h3>
                    <p className="standard-card-value">sqm · sqft · acre · hectare</p>
                  </article>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="standard-section home-standard-section">
          <div className="section-container">
            <div className="standard-panel home-standard-panel">
              <p className="section-kicker">STANDARD</p>
              <h2 className="section-title">First Calculator Standards</h2>
              <p className="section-description">
                The area calculator uses fixed unit values for square meters, square feet,
                acres, hectares, square yards, and parking-space comparison.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}