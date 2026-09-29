import Link from "next/link";
import { categories } from "../lib/site";

export function Header(){
  return <header className="siteHeader"><div className="container nav">
    <Link className="logo brandLogo" href="/" aria-label="My Portland Wedding home">
      <img className="heartMarkImage" src="/brand/mpw-heart-sprig-clean.png" alt="" aria-hidden="true"/>
      <span className="brandLockup"><span className="brandName">My Portland Wedding</span><small>PLAN LOCAL. LOVE ALWAYS.</small></span>
    </Link>
    <nav className="consumerNav" aria-label="Main navigation">
      <div className="vendorNavDropdown">
        <Link className="vendorNavTrigger" href="/vendors">Find Vendors <span className="navChevron" aria-hidden="true">⌄</span></Link>
        <div className="vendorNavMenu" aria-label="Vendor categories">
          <Link className="vendorNavAll" href="/vendors">Browse All Vendors</Link>
          <div className="vendorNavGrid">
            {categories.map(([slug,label]) => <Link key={slug} href={`/vendors/${slug}`}>{label}</Link>)}
          </div>
        </div>
      </div>
      <Link href="/vendors/venues">Venues</Link>
      <Link href="/inspiration">Inspiration</Link>
      <Link className="builderNavBrand" href="/wedding-builder"><span>Wedding Builder</span><small>by My Portland Wedding</small></Link>
      <Link href="/planning-tools">Planning Tools</Link>
      <Link href="/about">About</Link>
    </nav>
    <div className="navActions"><Link className="planningPill" href="/couple/dashboard">♡ My Wedding</Link><Link className="btn vendorPill" href="/for-vendors">For Vendors</Link></div>
  </div></header>
}
