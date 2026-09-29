import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";
export async function POST(request: Request) {
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/vendor/dashboard?preview=1",request.url),303);
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL("/vendor/login", request.url), 303);
  const { data: current } = await supabase.from("vendor_profiles").select("plan").eq("user_id",user.id).single();
  const plan=current?.plan||"free"; const hasSocial=plan==="professional"||plan==="premium"; const hasVideo=plan==="premium";
  const form = await request.formData();
  const requested=[String(form.get("secondary_1")||""),String(form.get("secondary_2")||"")].filter(Boolean);
  const serviceCities=form.getAll("service_cities").map(v=>String(v)).filter(Boolean);
  const weddingStyles=form.getAll("wedding_styles").map(v=>String(v)).filter(Boolean);
  const pricingPackages=[0,1,2].map(i=>({name:String(form.get(`package_name_${i}`)||"").trim(),price:Number(form.get(`package_price_${i}`)||0),description:String(form.get(`package_description_${i}`)||"").trim(),includes:String(form.get(`package_includes_${i}`)||"").split("\n").map(x=>x.trim()).filter(Boolean).slice(0,12),popular:String(form.get("popular_package")||"")===String(i)})).filter(p=>p.name&&p.price>0);
  const unavailableDates=String(form.get("unavailable_dates")||"").split(",").map(x=>x.trim()).filter(x=>/^\d{4}-\d{2}-\d{2}$/.test(x)).slice(0,100);
  const vendorAttributes={specialties:String(form.get("specialties")||"").split(",").map(x=>x.trim()).filter(Boolean).slice(0,12),turnaround:String(form.get("turnaround")||"").trim(),inclusions:String(form.get("key_inclusions")||"").split("\n").map(x=>x.trim()).filter(Boolean).slice(0,15)};
  const videoUrls=[0,1,2].map(i=>String(form.get(`video_url_${i}`)||"").trim()).filter(Boolean);
  const maxSecondary=plan==="premium"?2:plan==="professional"?1:0;
  const payload:any = {
    business_name: String(form.get("business_name") || "").trim(), primary_category: String(form.get("primary_category") || "venues"), secondary_categories: requested.slice(0,maxSecondary),
    description: String(form.get("description") || "").trim(), email: String(form.get("email") || "").trim(), phone: String(form.get("phone") || "").trim(), website: String(form.get("website") || "").trim(), city: String(form.get("city") || "").trim(), state: String(form.get("state") || "OR").trim(),
    service_cities: serviceCities, service_radius: Number(form.get("service_radius") || 0) || null, pricing_from: Number(form.get("pricing_from") || 0) || null, pricing_typical: Number(form.get("pricing_typical") || 0) || null, pricing_max: Number(form.get("pricing_max") || 0) || null, guest_capacity_min: Number(form.get("guest_capacity_min") || 0) || null, guest_capacity_max: Number(form.get("guest_capacity_max") || 0) || null, wedding_styles: weddingStyles, pricing_packages: pricingPackages, availability_status:String(form.get("availability_status")||"available"), unavailable_dates:unavailableDates, vendor_attributes:vendorAttributes, updated_at: new Date().toISOString()
  };
  if(hasSocial){Object.assign(payload,{instagram:String(form.get("instagram")||"").trim(),facebook:String(form.get("facebook")||"").trim(),tiktok:String(form.get("tiktok")||"").trim(),pinterest:String(form.get("pinterest")||"").trim(),youtube:String(form.get("youtube")||"").trim()});}
  else Object.assign(payload,{instagram:null,facebook:null,tiktok:null,pinterest:null,youtube:null});
  payload.video_urls=hasVideo?videoUrls:[];
  const { error } = await supabase.from("vendor_profiles").update(payload).eq("user_id", user.id);
  return NextResponse.redirect(new URL(error?`/vendor/dashboard?error=${encodeURIComponent(error.message)}`:"/vendor/dashboard?message=Profile%20saved", request.url), 303);
}
