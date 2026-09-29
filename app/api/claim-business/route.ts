import { NextResponse } from "next/server";
import { createAdminClient } from "../../../lib/supabase/admin";
export async function POST(req:Request){
 const f=await req.formData(); const vendor_id=String(f.get("vendor_id")||""); const vendor_slug=String(f.get("vendor_slug")||"");
 if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL(`/claim-business?vendor=${encodeURIComponent(vendor_slug)}&preview=1`,req.url),303);
 const claimant_name=String(f.get("claimant_name")||"").trim(); const claimant_email=String(f.get("claimant_email")||"").trim().toLowerCase(); const claimant_phone=String(f.get("claimant_phone")||"").trim(); const verification_note=String(f.get("verification_note")||"").trim();
 if(!vendor_id||!claimant_name||!claimant_email||!claimant_phone||!verification_note) return NextResponse.redirect(new URL(`/claim-business?vendor=${encodeURIComponent(vendor_slug)}`,req.url),303);
 const db=createAdminClient(); const {data:v}=await db.from("vendor_profiles").select("id,listing_state").eq("id",vendor_id).maybeSingle();
 if(!v||v.listing_state!=="unclaimed") return NextResponse.redirect(new URL(`/claim-business?vendor=${encodeURIComponent(vendor_slug)}`,req.url),303);
 await db.from("vendor_claim_requests").insert({vendor_id,claimant_name,claimant_email,claimant_phone,verification_note});
 return NextResponse.redirect(new URL(`/claim-business?vendor=${encodeURIComponent(vendor_slug)}&sent=1`,req.url),303);
}
