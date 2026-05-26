import type { Metadata } from 'next';
import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: '평수 환산 계산기 | ㎡ 평 변환 | FIXLGS Calculator',
  description:
    '평수 환산 계산기입니다. ㎡를 평으로 바꾸는 기준과 자주 쓰는 면적의 평수 변환 값을 확인할 수 있습니다.',
};

export default function SquareMeterToPyeongPage() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <section className="area-hero-section">
          <div className="section-container">
            <p className="hero-eyebrow">PYEONG CALCULATOR</p>

            <h1 className="area-hero-title">평수 환산 계산기</h1>

            <p className="area-hero-description">
              ㎡를 평으로 바꿀 때는 1㎡ = 약 0.3025평 기준으로 계산합니다.
              평수 계산기에서 자주 쓰는 면적은 아래 기준값으로 빠르게 확인할 수 있습니다.
            </p>

            <div className="hero-note">
              <span className="hero-note-dot" />
              <span>1㎡ = 약 0.3025평, 1평 = 약 3.3058㎡ 기준입니다.</span>
            </div>
          </div>
        </section>

        <section className="area-standard-section">
          <div className="section-container">
            <div className="standard-panel">
              <p className="section-kicker">FORMULA</p>
              <h2 className="section-title">㎡를 평으로 바꾸는 계산식</h2>
              <p className="section-description">
                제곱미터 면적에 0.3025를 곱하면 대략적인 평수 환산 값이 나옵니다.
              </p>

              <div className="standard-grid">
                <article className="standard-card">
                  <h3 className="standard-card-title">계산식</h3>
                  <p className="standard-card-value">㎡ × 0.3025 = 평</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">59㎡</h3>
                  <p className="standard-card-value">약 17.85평</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">84㎡</h3>
                  <p className="standard-card-value">약 25.41평</p>
                </article>

                <article className="standard-card">
                  <h3 className="standard-card-title">100㎡</h3>
                  <p className="standard-card-value">약 30.25평</p>
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
                원하는 면적을 직접 입력해서 평수, 정사각형 기준, 주차면 기준까지 함께
                확인하려면 평수/면적 체감 계산기를 사용하면 됩니다.
              </p>

              <Link className="calculator-card-link" href="/area-calculator">
                <article className="calculator-card is-active">
                  <div className="calculator-card-top">
                    <span className="calculator-card-badge active">사용 가능</span>
                  </div>

                  <h3 className="calculator-card-title">평수/면적 체감 계산기</h3>

                  <p className="calculator-card-description">
                    ㎡, 평, 가로×세로 면적을 기준값으로 환산합니다.
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