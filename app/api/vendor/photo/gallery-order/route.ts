import {NextResponse} from "next/server";
import {createSupabaseServerClient} from "../../../../../../lib/supabase/server";
import {createAdminClient} from "../../../../../../lib/supabase/admin";

export async function GET(request:Request){
 const url=new URL(request.url); const slug=url.searchParams.get("slug");
 if(slug){
  const admin=createAdminClient(); const {data:vendor}=await admin.from("vendor_profiles").select("id").eq("slug",slug).eq("market_slug","portland").eq("status","active").maybeSingle();
  if(!vendor) return NextResponse.json({photoIds:[],photos:[]},{status:404});
  const {data}=await admin.from("vendor_photos").select("id,storage_path").eq("vendor_id",vendor.id).order("gallery_sort_order",{ascending:true,nullsFirst:false}).order("created_at",{ascending:true});
  return NextResponse.json({photoIds:(data||[]).map((p:any)=>p.id),photos:data||[]});
 }
 const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user) return NextResponse.json({photoIds:[]},{status:401});
 const {data:vendor}=await supabase.from("vendor_profiles").select("id").eq("user_id",user.id).maybeSingle(); if(!vendor) return NextResponse.json({photoIds:[]},{status:404});
 const {data}=await supabase.from("vendor_photos").select("id").eq("vendor_id",vendor.id).order("gallery_sort_order",{ascending:true,nullsFirst:false}).order("created_at",{ascending:true}); return NextResponse.json({photoIds:(data||[]).map((p:any)=>p.id)});
}

export async function POST(request:Request){
 if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/vendor/dashboard?preview=1#photos",request.url),303);
 const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user) return NextResponse.redirect(new URL("/vendor/login",request.url),303);
 const form=await request.formData(); const photoId=String(form.get("photo_id")||""); const action=String(form.get("action")||"first"); const {data:vendor}=await supabase.from("vendor_profiles").select("id").eq("user_id",user.id).maybeSingle();
 if(!vendor) return NextResponse.redirect(new URL("/vendor/dashboard?error=Vendor%20profile%20not%20found#photos",request.url),303);
 const {data:rows}=await supabase.from("vendor_photos").select("id,gallery_sort_order,created_at").eq("vendor_id",vendor.id).order("gallery_sort_order",{ascending:true,nullsFirst:false}).order("created_at",{ascending:true}); const ordered=(rows||[]).map((p:any)=>p.id); const from=ordered.indexOf(photoId);
 if(from<0) return NextResponse.redirect(new URL("/vendor/dashboard?error=Photo%20not%20found#photos",request.url),303);
 const next=[...ordered]; next.splice(from,1); if(action==="first") next.unshift(photoId); else if(action==="up") next.splice(Math.max(0,from-1),0,photoId); else if(action==="down") next.splice(Math.min(next.length,from+1),0,photoId); else next.splice(from,0,photoId);
 const results=await Promise.all(next.map((id,i)=>supabase.from("vendor_photos").update({gallery_sort_order:i}).eq("id",id).eq("vendor_id",vendor.id))); const failed=results.find((r:any)=>r.error); const msg=failed?.error?.message;
 return NextResponse.redirect(new URL(msg?`/vendor/dashboard?error=${encodeURIComponent(msg)}#photos`:`/vendor/dashboard?message=${encodeURIComponent("Profile gallery order updated")}#photos`,request.url),303);
}
