import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";

export async function POST(request:Request){
 if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1")return NextResponse.redirect(new URL("/vendor/dashboard?preview=1&message=Main%20photo%20selection%20previewed",request.url),303);
 const supabase=await createSupabaseServerClient();
 const {data:{user}}=await supabase.auth.getUser();
 if(!user)return NextResponse.redirect(new URL("/vendor/login",request.url),303);
 const form=await request.formData(); const id=String(form.get("id")||"");
 const {data:vendor}=await supabase.from("vendor_profiles").select("id").eq("user_id",user.id).single();
 if(!vendor)return NextResponse.redirect(new URL("/vendor/dashboard?error=Vendor%20profile%20not%20found",request.url),303);
 const {data:photos,error:photoError}=await supabase.from("vendor_photos").select("id,sort_order,created_at").eq("vendor_id",vendor.id).order("sort_order",{ascending:true}).order("created_at",{ascending:true});
 if(photoError||!photos?.some((p:any)=>p.id===id))return NextResponse.redirect(new URL("/vendor/dashboard?error=Photo%20not%20found",request.url),303);
 const ordered=[photos.find((p:any)=>p.id===id)!,...photos.filter((p:any)=>p.id!==id)];
 for(let i=0;i<ordered.length;i++){
  const {error}=await supabase.from("vendor_photos").update({sort_order:i}).eq("id",ordered[i].id).eq("vendor_id",vendor.id);
  if(error)return NextResponse.redirect(new URL(`/vendor/dashboard?error=${encodeURIComponent(error.message)}`,request.url),303);
 }
 return NextResponse.redirect(new URL("/vendor/dashboard?message=Main%20profile%20photo%20updated",request.url),303);
}
