import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

export async function POST(request: Request){
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/admin?message=Preview%20mode%3A%20review%20status%20change%20simulated",request.url),303);
  const form=await request.formData(); const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser();
  if(!user) return NextResponse.redirect(new URL("/vendor/login",request.url),303);
  const {data:admin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle();
  if(!admin) return new NextResponse("Forbidden",{status:403});
  const reviewId=String(form.get("review_id")||""); const status=String(form.get("status")||""); if(!["approved","rejected"].includes(status)) return new NextResponse("Invalid status",{status:400});
  const {data:review,error}=await supabase.from("reviews").update({status}).eq("id",reviewId).select("vendor_id").single();
  if(!error && review?.vendor_id){
    const {data:approved}=await supabase.from("reviews").select("rating").eq("vendor_id",review.vendor_id).eq("status","approved");
    const ratings=(approved||[]).map((x:any)=>Number(x.rating)); const count=ratings.length; const avg=count?ratings.reduce((a,b)=>a+b,0)/count:0;
    await supabase.from("vendor_profiles").update({review_count:count,rating:count?Number(avg.toFixed(2)):null}).eq("id",review.vendor_id);
  }
  const returnTo=String(form.get("return_to")||"");
  const safeReturn=returnTo.startsWith("/admin/vendors/")?returnTo:"/admin";
  const target=new URL(safeReturn,request.url); target.searchParams.set("message","Review updated");
  return NextResponse.redirect(target,303);
}
