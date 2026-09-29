import { redirect } from "next/navigation";
import FoundingVendorSignupForm from "../../../components/FoundingVendorSignupForm";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

export default async function Signup({searchParams}:{searchParams:Promise<{plan?:string,error?:string,ref?:string,preview?:string}>}){
 const q=await searchParams;
 const supabase=await createSupabaseServerClient();
 const {data:{user}}=await supabase.auth.getUser();
 if(user){
  const {data:vendor}=await supabase.from("vendor_profiles").select("plan").eq("user_id",user.id).maybeSingle();
  if(vendor?.plan==="free"&&q.plan&&["basic","professional","premium"].includes(q.plan)) redirect(`/vendor/checkout?plan=${q.plan}`);
  if(vendor) redirect("/vendor/dashboard#membership");
 }
 return <main className="vendorSignupPage"><div className="container"><div className="formCard foundingSignupCard"><span className="eyebrow">Vendor signup</span><h1>Join My Portland Wedding</h1><p className="meta">Choose your category first. If one of the five Founding Vendor spots is still open, your Premium-for-Basic launch offer appears automatically.</p>{q.preview==="1"&&<div className="notice success">Preview mode: vendor signup was simulated. No live vendor account or Founding Vendor spot was created.</div>}{q.error&&<div className="notice error">{q.error}</div>}<FoundingVendorSignupForm defaultPlan={q.plan||"professional"} referralCode={q.ref||""}/></div></div></main>
}
