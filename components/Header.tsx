"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header(){
  const pathname=usePathname();
  const [open,setOpen]=useState(false);
  useEffect(()=>setOpen(false),[pathname]);
  return <header className="siteHeader"><div className="container navWrap">
    <Link href="/" className="brand" aria-label="My Portland Wedding home"><img src="/brand/My-Portland-Wedding-TRANSPARENT-APPROVED.png" alt="My Portland Wedding" className="brandLogo" /></Link>
    <button className="menuToggle" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>☰</button>
    <nav className={open?"nav open":"nav"} aria-label="Main navigation">
      <Link href="/vendors">Vendors</Link><Link href="/inspiration">Inspiration</Link><Link href="/planning-tools">Planning Tools</Link><Link href="/about">About</Link><Link href="/for-vendors">For Vendors</Link>
      <Link className="btn navCta" href="/wedding-builder">Wedding Builder</Link>
    </nav>
  </div></header>
}
