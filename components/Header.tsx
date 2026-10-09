"use client";
import Link from "next/link";
import { useState } from "react";
import { categories } from "../lib/site";

export function Header(){
  const [open,setOpen]=useState(false);
  const close=()=>setOpen(false);
  return <header className="siteHeader"><style>{`
    .mpwHeaderLogo{display:block!important;width:300px!important;max-width:300px!important;height:76px!important;overflow:hidden!important;flex:0 0 300px!important;position:relative!important}
    .mpwHeaderLogo>img{position:absolute!important;inset:0!important;width:300px!important;height:76px!important;max-width:300px!important;max-height:76px!important;object-fit:contain!important;object-position:center center!important;display:block!important;margin:0!important;padding:0!important;transform:none!important}
    @media(max-width:1180px) and (min-width:801px){.mpwHeaderLogo{width:245px!important;max-width:245px!important;height:66px!important;flex-basis:245px!important}.mpwHeaderLogo>img{width:245px!important;height:66px!important;max-width:245px!important;max-height:66px!important}}
    @media(max-width:800px){.mpwHeaderLogo{width:205px!important;max-width:205px!important;height:58px!important;flex-basis:205px!important}.mpwHeaderLogo>img{width:205px!important;height:58px!important;max-width:205px!important;max-height:58px!important}}
  `}</style><div className="container nav mpwNav">
    <Link className="logo brandLogo mpwHeaderLogo" href="/" aria-label="My Portland Wedding home" onClick={close}><img src="/brand/My-Portland-Wedding-TRANSPARENT-APPROVED.png" alt="My Portland Wedding — Plan Local. Love Always." /></Link>
    <nav className="consumerNav" aria-label="Main navigation"><div className="vendorNavDropdown"><Link className="vendorNavTrigger" href="/vendors">Find Vendors <span className="navChevron">⌄</span></Link><div className="vendorNavMenu"><Link className="vendorNavAll" href="/vendors">Browse All Vendors</Link><div className="vendorNavGrid">{categories.map(([slug,label])=><Link key={slug} href={`/vendors/${slug}`}>{label}</Link>)}</div></div></div><Link href="/vendors/venues">Venues</Link><Link href="/inspiration">Inspiration</Link><Link className="builderNavBrand" href="/wedding-builder"><span>Wedding Builder<sup>™</sup></span><small>by My Portland Wedding</small></Link><Link href="/planning-tools">Planning Tools</Link><Link href="/about">About</Link></nav>
    <div className="navActions"><Link className="planningPill" href="/couple/dashboard">♡ My Wedding</Link><Link className="btn vendorPill" href="/for-vendors">For Vendors</Link></div>
    <div className="mobileNavActions"><Link className="mobileWedding" href="/couple/dashboard" onClick={close}>♡ My Wedding</Link><button className="mobileMenuButton" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span></span><span></span><span></span></button></div>
    {open&&<div className="mobileMenu"><Link href="/vendors" onClick={close}>Find Vendors</Link><Link href="/vendors/venues" onClick={close}>Venues</Link><Link href="/inspiration" onClick={close}>Inspiration</Link><Link className="mobileBuilderLink" href="/wedding-builder" onClick={close}>Wedding Builder<sup>™</sup> <small>by My Portland Wedding</small></Link><Link href="/planning-tools" onClick={close}>Planning Tools</Link><Link href="/about" onClick={close}>About</Link><Link className="mobileVendorLink" href="/for-vendors" onClick={close}>For Vendors</Link></div>}
  </div><Link className="siteBuilderRail" href="/wedding-builder" onClick={close}><span><strong>Wedding Builder</strong> <em>by My Portland Wedding</em><i>Build around your budget, style &amp; priorities.</i></span><b>Build My Wedding →</b></Link></header>;
}
