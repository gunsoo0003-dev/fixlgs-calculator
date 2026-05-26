import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-logo-link" aria-label="FIXLGS Calculator Home">
          <Image
            src="/fl-logo-horizontal.png"
            alt="FIXLGS"
            width={132}
            height={40}
            priority
            className="site-logo-image"
          />
          <span className="site-logo-divider" />
          <span className="site-logo-text">Calculator</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="site-nav-link">
            Home
          </Link>
          <Link href="/area-calculator" className="site-nav-link">
            Area
          </Link>
          <Link href="/en" className="site-nav-link">
            English
          </Link>
        </nav>
      </div>
    </header>
  );
}