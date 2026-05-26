import type { Metadata } from 'next';
import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: '평수 계산기 | 평 ㎡ 변환 | FIXLGS Calculator',
  description:
    '평수 계산기입니다. 평을 ㎡로 바꾸는 기준과 10평, 30평, 50평 등 자주 쓰는 평수의 제곱미터 변환 값을 확인할 수 있습니다.',
};

export default function PyeongToSquareMeterPage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="area-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow">PYEONG TO SQUARE METER</p>

            <h1 className="area-hero-title">평수 계산기</h1>

            <p className="area-hero-description">
              평을 제곱미터로 바꿀 때는 1평 = 약 3.3058㎡ 기준으로 계산합니다.
              평수 기준 면적을 ㎡ 단위로 확인할 때 사용할 수 있습니다.
            </p>

            <div className="hero-note">
              <span className="hero-note-dot" />
              <span>1평 = 약 3.3058㎡ 기준입니다.</span>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">FORMULA</p>
              <h2 className="section-title">평을 ㎡로 바꾸는 계산식</h2>
              <p className="section-description">
                평수에 3.3058을 곱하면 대략적인 제곱미터 면적이 나옵니다.
              </p>

              <div className="standard-grid">
                <article className="standard-card">
                  <h3 className="standard-card-title">계산식</h3>
                  <p className="standard-card-value">평 × 3.3058 = ㎡</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">10평</h3>
                  <p className="standard-card-value">약 33.06㎡</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">30평</h3>
                  <p className="standard-card-value">약 99.17㎡</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">50평</h3>
                  <p className="standard-card-value">약 165.29㎡</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">CALCULATOR</p>
              <h2 className="section-title">평수 직접 계산하기</h2>
              <p className="section-description">
                원하는 평수를 직접 입력해서 ㎡, 정사각형 기준, 주차면 기준까지 함께
                확인할 수 있습니다.
              </p>

              <Link className="calculator-card-link" href="/area-calculator">
                <article className="calculator-card is-active">
                  <div className="calculator-card-top">
                    <span className="calculator-card-badge active">사용 가능</span>
                  </div>

                  <h3 className="calculator-card-title">평수/면적 체감 계산기</h3>

                  <p className="calculator-card-description">
                    평 입력을 선택하면 평수를 ㎡ 기준으로 환산할 수 있습니다.
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