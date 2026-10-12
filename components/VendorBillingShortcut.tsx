"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function VendorBillingShortcut(){
 const pathname=usePathname();
 if(pathname!=="/vendor/dashboard") return null;
 return <Link className="vendorBillingShortcut" href="/vendor/billing" aria-label="Manage billing and payment information">Billing & Payment</Link>;
}
