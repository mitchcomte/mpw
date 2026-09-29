import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { createAdminClient } from "../../../../lib/supabase/admin";
import { createStripe } from "../../../../lib/stripe";
import { site } from "../../../../lib/site";
import { sendEmailOnce, emailButton, escapeHtml } from "../../../../lib/email";

function makePhoneSaleCode(){
  return `PHONE-${Math.random().toString(36).slice(2,8).toUpperCase()}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
}

export async function POST(req: NextRequest){
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/admin?message=Preview%20mode%3A%20vendor%20invite%20simulated",req.url),303);
  const form=await req.formData();
  const supabase=await createSupabaseServerClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.redirect(new URL("/admin/login",req.url),303);
  const {data:admin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle();
  if(!admin) return NextResponse.redirect(new URL("/admin?message=Admin%20access%20required",req.url),303);

  const workflow=String(form.get("workflow")||"");
  const isPhoneSale=workflow==="phone_sale";
  const plan=String(form.get("plan")||"professional");
  const allowedPlans=isPhoneSale?["basic","professional","premium"]:["free","basic","professional","premium"];
  const foundingChoice=isPhoneSale?String(form.get("founding_vendor_requested")||"no")==="yes":null;
  const secondMonthFree=isPhoneSale&&String(form.get("second_month_free")||"")==="yes";
  const businessName=String(form.get("business_name")||"").trim();
  const email=String(form.get("email")||"").trim().toLowerCase();
  const primaryCategory=String(form.get("primary_category")||"venues");

  if(!businessName||!email) return NextResponse.redirect(new URL("/admin?message=Business%20name%20and%20email%20are%20required",req.url),303);

  // A phone-sale Founding offer should never be promised when the category is already full.
  if(foundingChoice===true){
    const db=createAdminClient();
    const {data:claimed}=await db.from("founding_vendor_memberships").select("position").eq("market_slug",site.marketSlug).eq("category",primaryCategory).in("status",["reserved","active","forfeited"]);
    const used=new Set((claimed||[]).map((r:any)=>Number(r.position)));
    const remaining=[1,2,3,4,5].filter(n=>!used.has(n)).length;
    if(remaining<=0) return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent("That category no longer has a Founding Vendor spot available. Choose regular membership instead.")}`,req.url),303);
  }

  let promoCode:string|null=null;
  let stripeCouponId:string|null=null;
  let promoRecordId:string|null=null;
  if(secondMonthFree){
    const stripe=createStripe();
    if(!stripe) return NextResponse.redirect(new URL("/admin?message=Stripe%20is%20not%20configured%2C%20so%20the%202nd-month-free%20offer%20could%20not%20be%20created",req.url),303);
    const db=createAdminClient();
    promoCode=makePhoneSaleCode();
    try{
      const couponName=`MPW Phone Offer · ${promoCode}`.slice(0,40);
      const coupon=await stripe.coupons.create({percent_off:100,duration:"once",name:couponName,metadata:{purpose:"second_month_free",code:promoCode,sales_channel:"phone_sale"}});
      stripeCouponId=coupon.id;
      const {data:promo,error:promoError}=await db.from("vendor_promo_codes").insert({code:promoCode,discount_type:"second_month_free",stripe_coupon_id:coupon.id,max_redemptions:1,created_by:user.id,active:true}).select("id").single();
      if(promoError||!promo) throw promoError||new Error("Could not save phone-sale promotion");
      promoRecordId=promo.id;
    }catch(error:any){
      if(stripeCouponId){try{await stripe.coupons.del(stripeCouponId)}catch{}}
      return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(error?.message||"Could not create the second-month-free offer")}`,req.url),303);
    }
  }

  const row={
    created_by:user.id,
    market_slug:site.marketSlug,
    business_name:businessName,
    contact_name:String(form.get("contact_name")||"").trim()||null,
    email,
    phone:String(form.get("phone")||"").trim()||null,
    website:String(form.get("website")||"").trim()||null,
    primary_category:primaryCategory,
    plan:allowedPlans.includes(plan)?plan:(isPhoneSale?"professional":"professional"),
    service_cities:form.getAll("service_cities").map(String),
    status:"setup_sent",
    sales_channel:isPhoneSale?"phone_sale":null,
    founding_vendor_requested:foundingChoice,
    promo_code:promoCode
  };

  const {data,error}=await supabase.from("vendor_sales_invites").insert(row).select("id,token").single();
  if(error||!data){
    if(promoRecordId){const db=createAdminClient();await db.from("vendor_promo_codes").delete().eq("id",promoRecordId);}
    if(stripeCouponId){const stripe=createStripe();if(stripe){try{await stripe.coupons.del(stripeCouponId)}catch{}}}
    return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(error?.message||"Could not create setup link")}`,req.url),303);
  }

  const setupUrl=`${site.url}/vendor/finish-setup?token=${data.token}`;
  const phoneOffer=isPhoneSale
    ? `<p><strong>Your phone-sale offer:</strong> ${foundingChoice?"Founding Vendor · Premium access at $35/month":"the selected monthly membership"}${secondMonthFree?", plus your second month free":""}.</p>`
    : "";
  await sendEmailOnce({
    eventKey:`vendor_setup:${data.id}`,
    to:row.email,
    subject:`Finish setting up ${row.business_name} on My Portland Wedding`,
    title:isPhoneSale?"Your vendor offer is ready":"Your vendor setup is ready",
    body:`<p>Hi ${escapeHtml(row.contact_name||"there")},</p><p>${isPhoneSale?"Thanks for speaking with us. We saved the offer discussed on the phone. Create your password, review the recurring membership terms, and continue to secure payment.":"Your My Portland Wedding vendor account is ready for secure setup. Create your password, review your membership, and continue to payment."}</p>${phoneOffer}${emailButton("Finish Vendor Setup",setupUrl)}<p style="font-size:13px;color:#756b67">This setup link expires in 30 days. Recurring billing is authorized only when you accept the billing terms at checkout.</p>`
  });

  const message=isPhoneSale
    ? `${businessName} phone sale saved and setup email sent${secondMonthFree?` with 2nd month free (${promoCode})`:""}.`
    : "Vendor setup link created and email queued";
  return NextResponse.redirect(new URL(`/admin?message=${encodeURIComponent(message)}&invite=${data.id}`,req.url),303);
}
