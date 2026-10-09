"use client";
import Link from "next/link";
import { useState } from "react";
import { categories } from "../lib/site";

export function Header(){
  const [open,setOpen]=useState(false);
  const close=()=>setOpen(false);
  return <header className="siteHeader"><style>{`
    .mpwCompositeLogo{display:flex!important;align-items:center!important;width:280px!important;max-width:280px!important;height:74px!important;overflow:hidden!important;gap:0!important}
    .mpwHeartClip{position:relative;width:82px;height:74px;overflow:hidden;flex:none}
    .mpwWordmarkClip{position:relative;width:198px;height:74px;overflow:hidden;flex:none}
    .mpwHeartClip img,.mpwWordmarkClip img{position:absolute;top:-10px;width:280px!important;max-width:none!important;height:auto!important;display:block!important}
    .mpwHeartClip img{left:0;transform:translateX(8.2px) scale(.9);transform-origin:left center}
    .mpwWordmarkClip img{left:-82px}
    @media(max-width:1180px) and (min-width:801px){.mpwCompositeLogo{width:245px!important;max-width:245px!important;height:68px!important}.mpwHeartClip{width:72px;height:68px}.mpwWordmarkClip{width:173px;height:68px}.mpwHeartClip img,.mpwWordmarkClip img{width:245px!important;top:-8px}.mpwHeartClip img{transform:translateX(7.2px) scale(.9)}.mpwWordmarkClip img{left:-72px}}
    @media(max-width:800px){.mpwCompositeLogo{width:190px!important;max-width:190px!important;height:58px!important}.mpwHeartClip{width:56px;height:58px}.mpwWordmarkClip{width:134px;height:58px}.mpwHeartClip img,.mpwWordmarkClip img{width:190px!important;top:-3px}.mpwHeartClip img{transform:translateX(5.6px) scale(.9)}.mpwWordmarkClip img{left:-56px}}
  `}</style><div className="container nav mpwNav">
    <Link className="logo brandLogo mpwCompositeLogo" href="/" aria-label="My Portland Wedding home" onClick={close}><span className="mpwHeartClip" aria-hidden="true"><img src="/brand/My-Portland-Wedding-TRANSPARENT-APPROVED.png" alt="" /></span><span className="mpwWordmarkClip" aria-hidden="true"><img src="/brand/My-Portland-Wedding-TRANSPARENT-APPROVED.png" alt="" /></span></Link>
    <nav className="consumerNav" aria-label="Main navigation"><div className="vendorNavDropdown"><Link className="vendorNavTrigger" href="/vendors">Find Vendors <span className="navChevron">⌄</span></Link><div className="vendorNavMenu"><Link className="vendorNavAll" href="/vendors">Browse All Vendors</Link><div className="vendorNavGrid">{categories.map(([slug,label])=><Link key={slug} href={`/vendors/${slug}`}>{label}</Link>)}</div></div></div><Link href="/vendors/venues">Venues</Link><Link href="/inspiration">Inspiration</Link><Link className="builderNavBrand" href="/wedding-builder"><span>Wedding Builder<sup>™</sup></span><small>by My Portland Wedding</small></Link><Link href="/planning-tools">Planning Tools</Link><Link href="/about">About</Link></nav>
    <div className="navActions"><Link className="planningPill" href="/couple/dashboard">♡ My Wedding</Link><Link className="btn vendorPill" href="/for-vendors">For Vendors</Link></div>
    <div className="mobileNavActions"><Link className="mobileWedding" href="/couple/dashboard" onClick={close}>♡ My Wedding</Link><button className="mobileMenuButton" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span></span><span></span><span></span></button></div>
    {open&&<div className="mobileMenu"><Link href="/vendors" onClick={close}>Find Vendors</Link><Link href="/vendors/venues" onClick={close}>Venues</Link><Link href="/inspiration" onClick={close}>Inspiration</Link><Link className="mobileBuilderLink" href="/wedding-builder" onClick={close}>Wedding Builder<sup>™</sup> <small>by My Portland Wedding</small></Link><Link href="/planning-tools" onClick={close}>Planning Tools</Link><Link href="/about" onClick={close}>About</Link><Link className="mobileVendorLink" href="/for-vendors" onClick={close}>For Vendors</Link></div>}
  </div><Link className="siteBuilderRail" href="/wedding-builder" onClick={close}><span><strong>Wedding Builder</strong> <em>by My Portland Wedding</em><i>Build around your budget, style &amp; priorities.</i></span><b>Build My Wedding →</b></Link></header>;
}
