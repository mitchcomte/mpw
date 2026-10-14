import {NextResponse} from "next/server";
import {createSupabaseServerClient} from "../../../../../lib/supabase/server";

export async function POST(request:Request){
 if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return NextResponse.redirect(new URL("/vendor/dashboard?preview=1#photos",request.url),303);
 const supabase=await createSupabaseServerClient();
 const {data:{user}}=await supabase.auth.getUser();
 if(!user) return NextResponse.redirect(new URL("/vendor/login",request.url),303);
 const form=await request.formData();
 const photoId=String(form.get("photo_id")||"");
 const {data:vendor}=await supabase.from("vendor_profiles").select("id").eq("user_id",user.id).single();
 if(!vendor) return NextResponse.redirect(new URL("/vendor/dashboard?error=Vendor%20profile%20not%20found#photos",request.url),303);
 const {data:photo}=await supabase.from("vendor_photos").select("id").eq("id",photoId).eq("vendor_id",vendor.id).maybeSingle();
 if(!photo) return NextResponse.redirect(new URL("/vendor/dashboard?error=Photo%20not%20found#photos",request.url),303);
 const {data:all}=await supabase.from("vendor_photos").select("id,sort_order,created_at").eq("vendor_id",vendor.id).order("sort_order").order("created_at");
 const others=(all||[]).filter((p:any)=>p.id!==photoId);
 const updates=[supabase.from("vendor_photos").update({sort_order:-1000}).eq("id",photoId).eq("vendor_id",vendor.id),...others.map((p:any,i:number)=>supabase.from("vendor_photos").update({sort_order:i}).eq("id",p.id).eq("vendor_id",vendor.id))];
 const results=await Promise.all(updates);
 const failed=results.find((r:any)=>r.error);
 return NextResponse.redirect(new URL(failed?`/vendor/dashboard?error=${encodeURIComponent(failed.error.message)}#photos`:"/vendor/dashboard?message=Main%20profile%20photo%20updated#photos",request.url),303);
}
