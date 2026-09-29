import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
import { categories, plans, site } from "../../../../lib/site";
import { sendEmailOnce, emailButton, escapeHtml } from "../../../../lib/email";

export async function POST(req:NextRequest){
  const form=await req.formData();
  const supabase=await createSupabaseServerClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.redirect(new URL("/admin/login",req.url),303);
  const {data:isAdmin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle();
  if(!isAdmin) return new NextResponse("Forbidden",{status:403});

  const businessName=String(form.get("business_name")||"").trim();
  const contactName=String(form.get("contact_name")||"").trim();
  const email=String(form.get("email")||"").trim().toLowerCase();
  const phone=String(form.get("phone")||"").trim()||null;
  const website=String(form.get("website")||"").trim()||null;
  const requestedPlan=String(form.get("plan")||"premium");
  const allowedPlans=Object.keys(plans);
  const primaryCategory=String(form.get("primary_category")||"venues");
  const foundingRequested=String(form.get("founding_vendor")||"no")==="yes";
  const serviceCities=form.getAll("service_cities").map(String);
  if(!businessName||!email) return NextResponse.redirect(new URL("/admin?message=Business%20name%20and%20email%20are%20required",req.url),303);
  if(!allowedPlans.includes(requestedPlan)) return NextResponse.redirect(new URL("/admin?message=Invalid%20membership",req.url),303);
  if(!categories.some(([slug])=>slug===primaryCategory)) return NextResponse.redirect(new URL("/admin?message=Invalid%20category",req.url),303);

  const db=createAdminClient();
  let foundingPosition:number|null=null;
  if(foundingRequested){
    const {data:reserved,error}=await db.rpc("reserve_founding_vendor_offer",{p_market_slug:site.marketSlug,p_category:primaryCategory,p_email:email});
    if(error||!reserved) return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(error?.message||"No Founding Vendor spots remain in that category")}`,req.url),303);
    foundingPosition=Number(reserved);
  }

  const slugBase=businessName.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,55)||"vendor";
  const slug=`${slugBase}-${Math.random().toString(36).slice(2,7)}`;
  const effectivePlan=foundingPosition?"premium":requestedPlan;
  const randomPassword=`MPW-${crypto.randomUUID()}-${Math.random().toString(36).slice(2)}!`;
  const {data:created,error:createError}=await db.auth.admin.createUser({email,password:randomPassword,email_confirm:true,user_metadata:{account_type:"vendor",business_name:businessName,plan:effectivePlan,primary_category:primaryCategory}});
  if(createError||!created.user){
    if(foundingPosition) await db.rpc("release_founding_vendor_offer",{p_market_slug:site.marketSlug,p_category:primaryCategory,p_email:email});
    return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(createError?.message||"Could not create vendor login")}`,req.url),303);
  }

  const now=new Date().toISOString();
  const {data:existing}=await db.from("vendor_profiles").select("id").eq("user_id",created.user.id).maybeSingle();
  let vendorId=existing?.id||null;
  if(vendorId){
    const {error}=await db.from("vendor_profiles").update({business_name:businessName,email,phone,website,plan:effectivePlan,primary_category:primaryCategory,service_cities:serviceCities,status:"active",crm_stage:"active",admin_payment_exempt:true,founding_vendor:Boolean(foundingPosition),founding_vendor_position:foundingPosition,founding_vendor_category:foundingPosition?primaryCategory:null,founding_vendor_activated_at:foundingPosition?now:null,updated_at:now}).eq("id",vendorId);
    if(error) return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(error.message)}`,req.url),303);
  } else {
    const {data:vendor,error}=await db.from("vendor_profiles").insert({user_id:created.user.id,market_slug:site.marketSlug,slug,business_name:businessName,email,phone,website,plan:effectivePlan,primary_category:primaryCategory,service_cities:serviceCities,status:"active",crm_stage:"active",admin_payment_exempt:true,founding_vendor:Boolean(foundingPosition),founding_vendor_position:foundingPosition,founding_vendor_category:foundingPosition?primaryCategory:null,founding_vendor_activated_at:foundingPosition?now:null}).select("id").single();
    if(error||!vendor){await db.auth.admin.deleteUser(created.user.id); if(foundingPosition) await db.rpc("release_founding_vendor_offer",{p_market_slug:site.marketSlug,p_category:primaryCategory,p_email:email}); return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(error?.message||"Could not create vendor profile")}`,req.url),303);}
    vendorId=vendor.id;
  }

  if(foundingPosition&&vendorId){
    await db.from("founding_vendor_memberships").update({vendor_id:vendorId,status:"active",reservation_email:email,reserved_until:null,activated_at:now,updated_at:now}).eq("market_slug",site.marketSlug).eq("category",primaryCategory).eq("position",foundingPosition);
  }

  let actionLink=`${site.url}/vendor/forgot-password`;
  try{
    const {data:linkData}=await db.auth.admin.generateLink({type:"recovery",email,options:{redirectTo:`${site.url}/auth/callback?next=/vendor/reset-password`}});
    if(linkData?.properties?.action_link) actionLink=linkData.properties.action_link;
  }catch{}

  await sendEmailOnce({eventKey:`admin_force_vendor:${created.user.id}`,to:email,subject:"Your My Portland Wedding vendor account is ready",title:"Your vendor account is ready",body:`<p>Hi ${escapeHtml(contactName||businessName)},</p><p>We created your ${escapeHtml(plans[effectivePlan as keyof typeof plans].name)} vendor account and activated it for you. No payment is required at this time.</p>${foundingPosition?`<p><strong>Founding Vendor #${foundingPosition}</strong> has been assigned to your business.</p>`:""}<p>Use the button below to choose your password, then complete your profile.</p>${emailButton("Set My Password",actionLink)}${emailButton("Open Vendor Dashboard",`${site.url}/vendor/dashboard`)}`});

  return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(`${businessName} created as an active ${foundingPosition?`Founding Vendor #${foundingPosition}`:"payment-exempt vendor"}. Password setup email sent.`)}`,req.url),303);
}
