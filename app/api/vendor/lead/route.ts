import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
export async function POST(req:NextRequest){
 if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1")return NextResponse.redirect(new URL("/vendor/dashboard?preview=1#leads",req.url),303);
 const db=await createSupabaseServerClient(); const {data:{user}}=await db.auth.getUser(); if(!user)return NextResponse.redirect(new URL("/vendor/login",req.url),303);
 const form=await req.formData(); const id=String(form.get("lead_id")||""); const status=String(form.get("status")||"new"); const notes=String(form.get("vendor_notes")||"").trim();
 if(!["new","contacted","qualified","booked","closed_lost"].includes(status))return NextResponse.redirect(new URL("/vendor/dashboard?error=Invalid%20lead%20status#leads",req.url),303);
 const {data:vendor}=await db.from("vendor_profiles").select("id").eq("user_id",user.id).single(); if(!vendor)return NextResponse.redirect(new URL("/vendor/dashboard?error=Vendor%20profile%20not%20found#leads",req.url),303);
 const {error}=await db.from("leads").update({status,vendor_notes:notes,updated_at:new Date().toISOString()}).eq("id",id).eq("vendor_id",vendor.id);
 return NextResponse.redirect(new URL(error?`/vendor/dashboard?error=${encodeURIComponent(error.message)}#leads`:`/vendor/dashboard?message=Lead%20updated#leads`,req.url),303);
}
