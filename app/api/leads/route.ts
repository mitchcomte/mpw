import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "../../../lib/supabase/admin";
import { consumeBuilderQuota } from "../../../lib/wedding-builder-guard";
import { sendEmailOnce, emailButton, escapeHtml, siteUrl } from "../../../lib/email";
import { sendVendorPush } from "../../../lib/web-push";

export async function POST(req: NextRequest) {
  if(!(await consumeBuilderQuota(req,"lead"))) return NextResponse.redirect(new URL("/vendors?error=Too%20many%20inquiries.%20Please%20try%20again%20later.",req.url),303);
  const form = await req.formData();
  const vendorSlug = String(form.get("vendor_slug") || "");
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL(`/vendor/${encodeURIComponent(vendorSlug)}?lead=preview#contact`,req.url),303);
  const db = createAdminClient();
  const { data: vendor } = await db.from("vendor_profiles").select("id,slug,business_name,email,user_id,plan").eq("market_slug", "portland").eq("slug", vendorSlug).eq("status","active").maybeSingle();
  if (!vendor) return NextResponse.redirect(new URL(`/vendor/${encodeURIComponent(vendorSlug)}?lead=vendor-not-found`, req.url), 303);
  if (vendor.plan === "free") return NextResponse.redirect(new URL(`/vendor/${encodeURIComponent(vendorSlug)}?lead=upgrade-required`, req.url), 303);
  const source=String(form.get("source")||"")==="wedding_builder"?"wedding_builder":"profile";
  const name=String(form.get("name")||"").trim().slice(0,120), email=String(form.get("email")||"").trim().toLowerCase().slice(0,254), phone=String(form.get("phone")||"").trim().slice(0,40)||null, message=String(form.get("message")||"").trim().slice(0,3000);
  if(!name||!email||!email.includes("@")||!message)return NextResponse.redirect(new URL(`/vendor/${encodeURIComponent(vendorSlug)}?lead=error#contact`,req.url),303);
  const { data:lead,error } = await db.from("leads").insert({vendor_id:vendor.id,vendor_slug:vendor.slug,market_slug:"portland",name,email,phone,wedding_date:String(form.get("wedding_date")||"")||null,message,source,contact_method:phone?"phone_or_email":"email"}).select("id").single();
  if(!error&&lead){
    if(vendor.user_id){
      await db.from("vendor_notifications").insert({vendor_id:vendor.id,user_id:vendor.user_id,type:"profile_lead",title:"New vendor inquiry 💌",body:`${name} sent an inquiry from your public profile.`,href:"/vendor/dashboard#leads"});
      await sendVendorPush(vendor.user_id,{title:"New vendor inquiry 💌",body:`${name} sent an inquiry from your My Portland Wedding profile.`,url:"/vendor/dashboard#leads",tag:`profile-lead-${lead.id}`});
    }
    const {data:account}=vendor.user_id?await db.auth.admin.getUserById(vendor.user_id):{data:{user:null}};
    const notificationEmail=account?.user?.email||vendor.email;
    if(notificationEmail) await sendEmailOnce({eventKey:`profile_lead:${lead.id}`,to:notificationEmail,subject:`New inquiry for ${vendor.business_name}`,title:"You have a new wedding inquiry",body:`<p><strong>${escapeHtml(name)}</strong> contacted you through your My Portland Wedding profile.</p><p>${escapeHtml(message)}</p><p><strong>Email:</strong> ${escapeHtml(email)}${phone?`<br><strong>Phone:</strong> ${escapeHtml(phone)}`:""}</p>${emailButton("Open Lead Center",`${siteUrl}/vendor/dashboard#leads`)}`});
  }
  return NextResponse.redirect(new URL(`/vendor/${encodeURIComponent(vendorSlug)}?lead=${error?"error":"sent"}#contact`, req.url), 303);
}
