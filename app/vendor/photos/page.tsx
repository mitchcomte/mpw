import { redirect } from "next/navigation";
import Link from "next/link";
import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { decodeDisplayText } from "../../../lib/text";

function photoUrl(path:string){return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/vendor-media/${path}`}

export default async function VendorPhotosPage({searchParams}:{searchParams:Promise<{message?:string,error?:string,preview?:string}>}){
  const q=await searchParams;
  const supabase=await createSupabaseServerClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) redirect("/vendor/login");
  const {data:vendor}=await supabase.from("vendor_profiles").select("id,slug,business_name").eq("user_id",user.id).maybeSingle();
  if(!vendor) redirect("/vendor/signup?error=Vendor%20profile%20not%20found");
  const {data:photos}=await supabase.from("vendor_photos").select("id,storage_path,alt_text,sort_order,created_at").eq("vendor_id",vendor.id).order("sort_order").order("created_at");
  const mainPhoto=photos?.[0];

  return <main className="container" style={{maxWidth:1100,paddingTop:36,paddingBottom:64}}>
    <div style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"center",flexWrap:"wrap",marginBottom:24}}>
      <div><span className="eyebrow">Vendor photos</span><h1 style={{marginBottom:8}}>Choose your main profile photo</h1><p className="meta" style={{maxWidth:760}}>This is the image couples see first across My Portland Wedding — including vendor cards, category results, Wedding Builder matches and your public profile.</p></div>
      <Link className="btn light" href="/vendor/dashboard#photos">← Back to Vendor Portal</Link>
    </div>
    {q.message&&<div className="notice success">{q.message}</div>}{q.error&&<div className="notice error">{q.error}</div>}{q.preview==="1"&&<div className="notice">Preview mode: no live photo selection was changed.</div>}
    {mainPhoto&&<section className="panel" style={{marginBottom:24}}><span className="eyebrow">Currently displayed across the site</span><div style={{display:"grid",gridTemplateColumns:"minmax(220px,360px) 1fr",gap:24,alignItems:"center",marginTop:14}}><img src={photoUrl(mainPhoto.storage_path)} alt={decodeDisplayText(mainPhoto.alt_text||vendor.business_name)} style={{width:"100%",height:240,objectFit:"cover",borderRadius:16}}/><div><h2 style={{marginTop:0}}>Main profile photo</h2><p>This photo is prioritized anywhere MPW needs a single image for your business.</p><p className="meta">To change it, choose any photo below and tap <strong>Make Main Profile Photo</strong>.</p></div></div></section>}
    <section className="panel"><h2>Your gallery</h2><p className="meta">Your main photo is clearly marked. Choosing a different photo does not delete or duplicate anything in your gallery.</p>
      {photos?.length?<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18,marginTop:20}}>{photos.map((p:any,i:number)=><article key={p.id} style={{border:i===0?"2px solid currentColor":"1px solid rgba(0,0,0,.12)",borderRadius:16,padding:12,position:"relative",background:"#fff"}}>
        <div style={{position:"relative"}}><img src={photoUrl(p.storage_path)} alt={decodeDisplayText(p.alt_text||vendor.business_name)} style={{width:"100%",height:190,objectFit:"cover",borderRadius:12}}/>{i===0&&<strong style={{position:"absolute",top:10,left:10,background:"#fff",padding:"7px 10px",borderRadius:999,fontSize:12}}>✓ MAIN PROFILE PHOTO</strong>}</div>
        <div style={{paddingTop:12}}>{i===0?<div className="notice success" style={{margin:0}}>Currently shown first across MPW</div>:<form action="/api/vendor/photo/primary" method="post"><input type="hidden" name="photo_id" value={p.id}/><button className="btn primary" style={{width:"100%"}}>Make Main Profile Photo</button></form>}</div>
      </article>)}</div>:<div className="notice">You do not have any gallery photos yet. <Link href="/vendor/dashboard#photos">Upload photos in your Vendor Portal →</Link></div>}
    </section>
  </main>
}
