import type { Metadata } from 'next';
import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: '면적 체감 계산기 | ㎡ 평 주차면 기준 비교 | FIXLGS Calculator',
  description:
    '면적을 ㎡, 평, 정사각형 한 변 길이, 일반형 주차면 기준으로 비교하는 면적 체감 계산 기준 페이지입니다.',
};

export default function AreaSizeComparisonPage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="area-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow">AREA SIZE COMPARISON</p>

            <h1 className="area-hero-title">면적 체감 계산기</h1>

            <p className="area-hero-description">
              같은 면적도 ㎡, 평, 정사각형 한 변 길이, 주차면 기준으로 보면 체감이
              달라집니다. 이 페이지는 기준값이 명확한 면적 비교 방식만 정리합니다.
            </p>

            <div className="hero-note">
              <span className="hero-note-dot" />
              <span>주관적 해석 없이 기준값 기반으로만 비교합니다.</span>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">STANDARD</p>
              <h2 className="section-title">면적 체감 기준</h2>
              <p className="section-description">
                FIXLGS Calculator는 아래 기준값을 바탕으로 면적을 비교합니다.
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
                  <h3 className="standard-card-title">정사각형 기준</h3>
                  <p className="standard-card-value">면적의 제곱근</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">CALCULATOR</p>
              <h2 className="section-title">면적 직접 비교하기</h2>
              <p className="section-description">
                ㎡, 평, 가로×세로 값을 입력하면 여러 기준으로 한 번에 환산할 수 있습니다.
              </p>

              <Link className="calculator-card-link" href="/area-calculator">
                <article className="calculator-card is-active">
                  <div className="calculator-card-top">
                    <span className="calculator-card-badge active">사용 가능</span>
                  </div>

                  <h3 className="calculator-card-title">평수/면적 체감 계산기</h3>

                  <p className="calculator-card-description">
                    입력한 면적을 평, 정사각형 기준, 주차면 기준으로 함께 확인합니다.
                  </p>

                  <div className="calculator-card-footer">
                    <span>계산기 열기</span>
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