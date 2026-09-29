import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { site } from "../../../../lib/site";
import { sendEmailOnce, emailButton, escapeHtml } from "../../../../lib/email";

export const runtime="nodejs";

export async function POST(req:NextRequest){
 if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/vendor/finish-setup?preview=1",req.url),303);
 const form=await req.formData(); const token=String(form.get("token")||""); const password=String(form.get("password")||"");
 const back=(msg:string)=>NextResponse.redirect(new URL(`/vendor/finish-setup?token=${encodeURIComponent(token)}&error=${encodeURIComponent(msg)}`,req.url),303);
 if(!process.env.SUPABASE_SERVICE_ROLE_KEY) return back("Vendor onboarding is not configured yet."); if(password.length<8) return back("Please create a password with at least 8 characters.");
 const db=createAdminClient(); const {data:invite}=await db.from("vendor_sales_invites").select("*").eq("token",token).maybeSingle();
 if(!invite||new Date(invite.expires_at)<new Date()||invite.status==="active") return back("This setup link is no longer valid.");

 let foundingPosition:number|null=null;
 const foundingRequested=invite.founding_vendor_requested===true;
 const foundingExplicitlyDeclined=invite.founding_vendor_requested===false;
 if(!foundingExplicitlyDeclined){
  const {data:reserved,error:reserveError}=await db.rpc("reserve_founding_vendor_offer",{p_market_slug:site.marketSlug,p_category:invite.primary_category,p_email:invite.email});
  if(!reserveError) foundingPosition=typeof reserved==="number"?reserved:Number(reserved||0)||null;
 }
 if(foundingRequested&&!foundingPosition) return back("The Founding Vendor spots in this category were just filled. Please contact My Portland Wedding so we can update your offer before payment.");
 const effectivePlan=foundingPosition?"premium":invite.plan;

 const {data:created,error}=await db.auth.admin.createUser({email:invite.email,password,email_confirm:true,user_metadata:{account_type:"vendor",business_name:invite.business_name,plan:effectivePlan,primary_category:invite.primary_category,phone:invite.phone||"",website:invite.website||"",sales_invite_id:invite.id,founding_vendor:foundingPosition?"yes":"no",founding_vendor_position:foundingPosition?String(foundingPosition):""}});
 if(error||!created.user){if(foundingPosition) await db.rpc("release_founding_vendor_offer",{p_market_slug:site.marketSlug,p_category:invite.primary_category,p_email:invite.email}); return back(error?.message||"Could not create your account.");}

 const {data:vendor}=await db.from("vendor_profiles").select("id").eq("user_id",created.user.id).maybeSingle();
 await db.from("vendor_profiles").update({phone:invite.phone,website:invite.website,service_cities:invite.service_cities||[],plan:effectivePlan,status:"pending",sales_invite_id:invite.id,...(foundingPosition?{founding_vendor:true,founding_vendor_position:foundingPosition,founding_vendor_category:invite.primary_category,founding_vendor_forfeited_at:null}:{}),updated_at:new Date().toISOString()}).eq("user_id",created.user.id);

 if(foundingPosition&&vendor?.id){
  await db.from("founding_vendor_memberships").update({vendor_id:vendor.id,reservation_email:String(invite.email).toLowerCase(),reserved_until:null,updated_at:new Date().toISOString()}).eq("market_slug",site.marketSlug).eq("category",invite.primary_category).eq("position",foundingPosition).eq("status","reserved");
  await db.from("vendor_sales_invites").update({plan:"premium",status:"payment_pending",updated_at:new Date().toISOString()}).eq("id",invite.id);
 }else{
  await db.from("vendor_sales_invites").update({status:"payment_pending",updated_at:new Date().toISOString()}).eq("id",invite.id);
 }

 await sendEmailOnce({eventKey:`vendor_welcome:${created.user.id}`,to:invite.email,subject:"Welcome to My Portland Wedding",title:"Your vendor account is ready",body:`<p>Hi ${escapeHtml(invite.contact_name||invite.business_name)},</p><p>Your secure account setup is complete. Continue to checkout to activate your listing, then complete your profile so Wedding Builder by My Portland Wedding can match you accurately.</p>${emailButton("Activate Membership",`${site.url}/vendor/checkout`)}`});
 const supabase=await createSupabaseServerClient(); const {error:signInError}=await supabase.auth.signInWithPassword({email:invite.email,password}); if(signInError) return NextResponse.redirect(new URL("/vendor/login?message=Account%20created.%20Sign%20in%20to%20finish%20payment.",req.url),303);
 return NextResponse.redirect(new URL("/vendor/checkout",req.url),303);
}
