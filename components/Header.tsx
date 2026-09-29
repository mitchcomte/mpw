"use client";
import Link from "next/link";
import { useState } from "react";
import { categories } from "../lib/site";

export function Header(){
  const [vendorsOpen,setVendorsOpen]=useState(false);
  const closeVendors=()=>setVendorsOpen(false);
  return <header className="siteHeader"><div className="container nav">
    <Link className="logo brandLogo" href="/" aria-label="My Portland Wedding home">
      <img className="heartMarkImage" src="/brand/mpw-heart-sprig-clean.png" alt="" aria-hidden="true"/>
      <span className="brandLockup"><span className="brandName">My Portland Wedding</span><small>PLAN LOCAL. LOVE ALWAYS.</small></span>
    </Link>
    <nav className="consumerNav" aria-label="Main navigation">
      <div className={`vendorNavDropdown ${vendorsOpen?"isOpen":""}`}>
        <button className="vendorNavTrigger" type="button" aria-expanded={vendorsOpen} onClick={()=>setVendorsOpen(v=>!v)}>Find Vendors <span className="navChevron" aria-hidden="true">⌄</span></button>
        <div className="vendorNavMenu" aria-label="Vendor categories">
          <Link onClick={closeVendors} className="vendorNavAll" href="/vendors">Browse All Vendors</Link>
          <div className="vendorNavGrid">
            {categories.map(([slug,label]) => <Link onClick={closeVendors} key={slug} href={`/vendors/${slug}`}>{label}</Link>)}
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
