"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function VendorBillingShortcut(){
 const pathname=usePathname();
 const searchParams=useSearchParams();
 if(pathname!=="/vendor/dashboard") return null;
 const adminPreview=searchParams.get("admin_preview");
 const href=adminPreview?`/vendor/billing?admin_preview=${encodeURIComponent(adminPreview)}`:"/vendor/billing";
 return <Link href={href} aria-label="Manage billing and payment information" style={{position:"fixed",right:20,bottom:20,zIndex:60,padding:"11px 16px",borderRadius:999,background:"#334c3c",color:"#fff",fontWeight:700,textDecoration:"none",boxShadow:"0 8px 24px rgba(0,0,0,.16)"}}>Billing & Payment</Link>;
}
