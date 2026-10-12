"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function VendorBillingShortcut(){
 const pathname=usePathname();
 const [adminPreview,setAdminPreview]=useState<string|null>(null);
 useEffect(()=>{
  if(pathname!=="/vendor/dashboard") return;
  setAdminPreview(new URLSearchParams(window.location.search).get("admin_preview"));
 },[pathname]);
 if(pathname!=="/vendor/dashboard") return null;
 const href=adminPreview?`/vendor/billing?admin_preview=${encodeURIComponent(adminPreview)}`:"/vendor/billing";
 return <Link href={href} aria-label="Manage billing and payment information" style={{position:"fixed",right:20,bottom:20,zIndex:60,padding:"11px 16px",borderRadius:999,background:"#334c3c",color:"#fff",fontWeight:700,textDecoration:"none",boxShadow:"0 8px 24px rgba(0,0,0,.16)"}}>Billing & Payment</Link>;
}
