import Link from "next/link";
export function Footer(){return <footer className="siteFooter"><div className="container">
  <div className="footerTop">
    <Link className="logo brandLogo footerBrand" href="/"><img className="heartMarkImage" src="/brand/mpw-heart-sprig-clean.png" alt="" aria-hidden="true"/><span className="brandLockup"><span className="brandName">My Portland Wedding</span><small>PLAN LOCAL. LOVE ALWAYS.</small></span></Link>
    <div className="footerLinks"><Link href="/vendors">Find Vendors</Link><Link href="/vendors/venues">Venues</Link><Link href="/inspiration">Inspiration</Link><Link href="/planning-tools">Planning Tools</Link><Link href="/couple/dashboard">My Planning</Link><Link href="/about">About</Link><Link href="/for-vendors">For Vendors</Link></div>
  </div>
  <div className="footerBottom"><span>© 2026 My Portland Wedding. All rights reserved.</span><span className="legalLinks"><Link href="/terms-of-use">Terms of Use</Link><Link href="/consumer-terms">Consumer Terms</Link><Link href="/vendor-terms">Vendor Terms</Link><Link href="/privacy-policy">Privacy Policy</Link></span><span>Portland, OR · Plan Local. Love Always.</span></div>
</div></footer>}
