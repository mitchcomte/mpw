"use client";
import Link from "next/link";
import { useState } from "react";
import { categories } from "../lib/site";

export function Header(){
  const [open,setOpen]=useState(false);
  const close=()=>setOpen(false);
  return <header className="siteHeader"><style>{`
    .mpwCompositeLogo{display:flex!important;align-items:center!important;gap:3px!important;width:260px!important;max-width:260px!important;height:70px!important;overflow:hidden!important}
    .mpwCompositeHeart,.mpwCompositeWordmark{display:block;background-image:url('/brand/My-Portland-Wedding-TRANSPARENT-APPROVED.png');background-repeat:no-repeat;background-size:260px auto;flex:none}
    .mpwCompositeHeart{width:52px;height:64px;background-size:225px auto;background-position:-3px -8px}
    .mpwCompositeWordmark{width:201px;height:70px;background-position:-70px -7px}
    @media(max-width:1180px) and (min-width:801px){.mpwCompositeLogo{width:225px!important;max-width:225px!important}.mpwCompositeHeart{width:45px;height:58px;background-size:195px auto;background-position:-3px -7px}.mpwCompositeWordmark{width:174px;height:62px;background-size:225px auto;background-position:-61px -6px}}
    @media(max-width:800px){.mpwCompositeLogo{width:min(50vw,180px)!important;max-width:min(50vw,180px)!important;height:58px!important;gap:2px!important}.mpwCompositeHeart{width:36px;height:50px;background-size:156px auto;background-position:-2px -5px}.mpwCompositeWordmark{width:140px;height:52px;background-size:180px auto;background-position:-49px -5px}}
  `}</style><div className="container nav mpwNav">
    <Link className="logo brandLogo mpwCompositeLogo" href="/" aria-label="My Portland Wedding home" onClick={close}><span className="mpwCompositeHeart" aria-hidden="true"></span><span className="mpwCompositeWordmark" aria-hidden="true"></span></Link>
    <nav className="consumerNav" aria-label="Main navigation"><div className="vendorNavDropdown"><Link className="vendorNavTrigger" href="/vendors">Find Vendors <span className="navChevron">⌄</span></Link><div className="vendorNavMenu"><Link className="vendorNavAll" href="/vendors">Browse All Vendors</Link><div className="vendorNavGrid">{categories.map(([slug,label])=><Link key={slug} href={`/vendors/${slug}`}>{label}</Link>)}</div></div></div><Link href="/vendors/venues">Venues</Link><Link href="/inspiration">Inspiration</Link><Link className="builderNavBrand" href="/wedding-builder"><span>Wedding Builder<sup>™</sup></span><small>by My Portland Wedding</small></Link><Link href="/planning-tools">Planning Tools</Link><Link href="/about">About</Link></nav>
    <div className="navActions"><Link className="planningPill" href="/couple/dashboard">♡ My Wedding</Link><Link className="btn vendorPill" href="/for-vendors">For Vendors</Link></div>
    <div className="mobileNavActions"><Link className="mobileWedding" href="/couple/dashboard" onClick={close}>♡ My Wedding</Link><button className="mobileMenuButton" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span></span><span></span><span></span></button></div>
    {open&&<div className="mobileMenu"><Link href="/vendors" onClick={close}>Find Vendors</Link><Link href="/vendors/venues" onClick={close}>Venues</Link><Link href="/inspiration" onClick={close}>Inspiration</Link><Link className="mobileBuilderLink" href="/wedding-builder" onClick={close}>Wedding Builder<sup>™</sup> <small>by My Portland Wedding</small></Link><Link href="/planning-tools" onClick={close}>Planning Tools</Link><Link href="/about" onClick={close}>About</Link><Link className="mobileVendorLink" href="/for-vendors" onClick={close}>For Vendors</Link></div>}
  </div><Link className="siteBuilderRail" href="/wedding-builder" onClick={close}><span><strong>Wedding Builder</strong> <em>by My Portland Wedding</em><i>Build around your budget, style &amp; priorities.</i></span><b>Build My Wedding →</b></Link></header>;
}
