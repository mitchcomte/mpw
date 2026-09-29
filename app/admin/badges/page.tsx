import {redirect} from "next/navigation";
import {createSupabaseServerClient} from "../../../lib/supabase/server";
import BadgeBacklinkCenter from "../../../components/BadgeBacklinkCenter";
export default async function BadgePage(){
 const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user) redirect('/admin/login');
 const {data:admin}=await supabase.from('admin_users').select('user_id').eq('user_id',user.id).maybeSingle(); if(!admin) redirect('/admin/login?error=Admin%20access%20required');
 const {data:vendors}=await supabase.from('vendor_profiles').select('id,business_name,email,plan,status,primary_category,website,instagram,facebook,tiktok,pinterest,youtube').eq('market_slug','portland').order('business_name');
 const ids=(vendors||[]).map((v:any)=>v.id); const {data:badgeEvents}=ids.length?await supabase.from('analytics_events').select('vendor_id,event_type,created_at').in('vendor_id',ids).in('event_type',['badge_pack_download','badge_embed_copied','badge_pack_sent']).order('created_at',{ascending:false}):{data:[] as any[]};
 return <main><section className="pagehero"><div className="container"><span className="eyebrow">Administration</span><h1>Badge & Backlink Center</h1><p>See who is promoting My Portland Wedding, where it was found, and who still needs attention.</p></div></section><section className="section"><div className="container"><BadgeBacklinkCenter vendors={vendors||[]} badgeEvents={badgeEvents||[]}/></div></section></main>
}
