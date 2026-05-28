export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container site-footer-inner fix-footer-layout">
        <div className="fix-footer-left">
          <p className="site-footer-brand">FIXLGS Calculator</p>
          <p className="site-footer-text">
            필요한 숫자를 기준값이 명확한 계산 결과로 정리합니다.
          </p>
        </div>

        <div className="fix-footer-right">
          <a href="https://www.fixlgs.com/privacy">개인정보처리방침</a>
          <a href="https://www.fixlgs.com/terms">이용약관</a>

          <span className="fix-footer-copy">© FIXLGS. Keep your FIX.</span>
        </div>
      </div>
    </footer>
  );
}