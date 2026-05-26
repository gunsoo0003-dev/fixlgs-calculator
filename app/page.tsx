import Link from 'next/link';

import CalculatorCard from '@/components/common/CalculatorCard';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import { calculatorList } from '@/data/calculatorList';

export default function Home() {
  const activeCalculators = calculatorList.filter((item) => item.status === 'active');

  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="hero-section home-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow home-hero-eyebrow">FIXLGS CALCULATOR</p>

            <p className="home-brand-line">나의 기준을 FIX</p>

            <h1 className="hero-title home-hero-title">
              필요한 숫자를
              <br />
              <span>기준값으로 계산합니다.</span>
            </h1>

            <p className="hero-description home-hero-description">
              FIXLGS Calculator는 면적, 단위, 금액, 날짜처럼 자주 확인하는 숫자를
              명확한 기준값과 계산식으로 정리하는 웹계산기입니다.
            </p>
          </div>
        </section>

        <section className="calculator-grid-section home-calculator-section">
          <div className="section-container">
            <div className="section-heading-row home-section-heading-row">
              <div>
                <p className="section-kicker">CALCULATORS</p>
                <h2 className="section-title home-list-title">계산기 목록</h2>
              </div>

              <p className="section-description">
                현재는 평수/면적 체감 계산기부터 제공합니다. 이후 필요한 계산기는
                같은 기준 구조로 순차적으로 추가합니다.
              </p>
            </div>

            <div className="calculator-grid home-feature-grid">
              {activeCalculators.map((item) => (
                <CalculatorCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="standard-section home-standard-section">
          <div className="section-container">
            <div className="standard-panel home-standard-panel">
              <p className="section-kicker">SEO LINKS</p>
              <h2 className="section-title">면적 계산 바로가기</h2>
              <p className="section-description">
                평수 환산, 평수 계산, 면적 체감 비교처럼 자주 찾는 계산 기준을
                별도 페이지로 정리했습니다.
              </p>

              <div className="standard-grid">
                <Link className="calculator-card-link" href="/square-meter-to-pyeong">
                  <article className="standard-card home-standard-card">
                    <h3 className="standard-card-title">평수 환산 계산기</h3>
                    <p className="standard-card-value">㎡ → 평</p>
                  </article>
                </Link>

                <Link className="calculator-card-link" href="/pyeong-to-square-meter">
                  <article className="standard-card home-standard-card">
                    <h3 className="standard-card-title">평수 계산기</h3>
                    <p className="standard-card-value">평 → ㎡</p>
                  </article>
                </Link>

                <Link className="calculator-card-link" href="/area-size-comparison">
                  <article className="standard-card home-standard-card">
                    <h3 className="standard-card-title">면적 체감 계산기</h3>
                    <p className="standard-card-value">㎡ · 평 · 주차면 기준</p>
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
              <h2 className="section-title">첫 계산기의 기준값</h2>
              <p className="section-description">
                평수/면적 체감 계산기는 주관적 해석 없이, 아래 기준값을 바탕으로
                면적을 환산합니다.
              </p>

              <div className="standard-grid">
                <article className="standard-card home-standard-card">
                  <h3 className="standard-card-title">1㎡</h3>
                  <p className="standard-card-value">1m × 1m</p>
                </article>

                <article className="standard-card home-standard-card">
                  <h3 className="standard-card-title">1평</h3>
                  <p className="standard-card-value">
                    약 3.3058㎡
                    <br />
                    약 1.8m × 1.8m
                  </p>
                </article>

                <article className="standard-card home-standard-card">
                  <h3 className="standard-card-title">일반형 주차면 1면</h3>
                  <p className="standard-card-value">
                    2.5m × 5.0m
                    <br />
                    약 12.5㎡
                  </p>
                </article>

                <article className="standard-card home-standard-card">
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

        <section className="standard-section home-next-section">
          <div className="section-container">
            <div className="standard-panel home-next-panel">
              <p className="section-kicker">NEXT</p>
              <h2 className="section-title">계산기는 순차적으로 추가됩니다.</h2>
              <p className="section-description">
                부가세 계산기, 할인율 계산기, 날짜 계산기, 대출 이자 계산기 등은
                같은 기준 구조를 유지하면서 하나씩 추가할 예정입니다.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}