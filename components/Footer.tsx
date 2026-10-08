import Link from "next/link";

export default function Footer(){
  return <footer className="footer"><div className="container footerGrid">
    <div><Link href="/" aria-label="My Portland Wedding home"><img src="/brand/My-Portland-Wedding-TRANSPARENT-APPROVED.png" alt="My Portland Wedding" className="footerLogo" /></Link><p className="small">A Portland-area wedding planning platform connecting couples with local wedding professionals.</p></div>
    <div><strong>Plan</strong><Link href="/vendors">Find Vendors</Link><Link href="/wedding-builder">Wedding Builder</Link><Link href="/inspiration">Inspiration</Link><Link href="/planning-tools">Planning Tools</Link></div>
    <div><strong>For Vendors</strong><Link href="/for-vendors">Join My Portland Wedding</Link><Link href="/vendor/login">Vendor Login</Link></div>
    <div><strong>Company</strong><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
  </div><div className="container footerBottom"><span>© {new Date().getFullYear()} My Portland Wedding</span></div></footer>
}
