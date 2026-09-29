import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { getAllAuthUsers } from "../../../lib/admin/couples";
import { decodeDisplayText } from "../../../lib/text";

const stages=["new","planning","contacting_vendors","booked_vendors","married","inactive"];
const statuses=["active","paused","archived"];

export default async function AdminCouples({searchParams}:{searchParams:Promise<{q?:string,status?:string,stage?:string,message?:string}>}){
 const params=await searchParams; const supabase=await createSupabaseServerClient();
 const {data:{user}}=await supabase.auth.getUser(); if(!user) redirect("/admin/login");
 const {data:admin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle(); if(!admin) redirect("/admin/login?error=Admin%20access%20required");
 let query=supabase.from("couple_profiles").select("user_id,first_name,partner_name,wedding_date,market_slug,account_status,couple_stage,last_contact_at,next_follow_up_at,created_at,updated_at").eq("market_slug","portland").order("created_at",{ascending:false});
 if(params.status) query=query.eq("account_status",params.status); if(params.stage) query=query.eq("couple_stage",params.stage);
 const [{data:profiles},authUsers]=await Promise.all([query,getAllAuthUsers()]);
 let rows=(profiles||[]).map((p:any)=>({...p,email:authUsers.get(p.user_id)?.email||"",last_sign_in_at:authUsers.get(p.user_id)?.last_sign_in_at||null}));
 if(params.q){const q=params.q.toLowerCase().trim();rows=rows.filter((r:any)=>[r.first_name,r.partner_name,r.email].some(v=>String(v||"").toLowerCase().includes(q)));}
 const userIds=rows.map((r:any)=>r.user_id); let favoriteCounts=new Map<string,number>(), leadCounts=new Map<string,number>();
 if(userIds.length){
   const [{data:favs},{data:leads}]=await Promise.all([supabase.from("favorites").select("user_id").in("user_id",userIds),supabase.from("leads").select("couple_user_id").in("couple_user_id",userIds)]);
   for(const f of favs||[]) favoriteCounts.set(f.user_id,(favoriteCounts.get(f.user_id)||0)+1);
   for(const l of leads||[]) if(l.couple_user_id) leadCounts.set(l.couple_user_id,(leadCounts.get(l.couple_user_id)||0)+1);
 }
 return <main><section className="pagehero"><div className="container"><span className="eyebrow">Administration</span><h1>Couple Accounts</h1><p>Monitor account activity, wedding planning progress and customer follow-up from one place.</p></div></section><section className="section"><div className="container">
   <div className="adminCrmTopbar"><Link className="btn light" href="/admin">← Admin Home</Link><Link className="btn light" href="/admin/vendors">Vendor CRM</Link></div>
   {params.message&&<div className="notice success">{params.message}</div>}
   <form className="crmFilters coupleCrmFilters" method="get"><input name="q" defaultValue={params.q||""} placeholder="Search name, partner or email"/><select name="status" defaultValue={params.status||""}><option value="">All account statuses</option>{statuses.map(s=><option key={s}>{s}</option>)}</select><select name="stage" defaultValue={params.stage||""}><option value="">All planning stages</option>{stages.map(s=><option key={s} value={s}>{s.replaceAll("_"," ")}</option>)}</select><button className="btn primary">Filter</button><Link className="btn light" href="/admin/couples">Clear</Link></form>
   <div className="panel dashboardPanel"><div className="crmSectionHeader"><div><span className="eyebrow">Consumer accounts</span><h2>{rows.length} couples</h2></div></div><div className="tableWrap"><table className="crmTable"><thead><tr><th>Couple</th><th>Wedding</th><th>Stage</th><th>Activity</th><th>Next follow-up</th><th></th></tr></thead><tbody>{rows.map((c:any)=><tr key={c.user_id}><td><strong>{decodeDisplayText(c.first_name||"Couple account")}{c.partner_name?` & ${decodeDisplayText(c.partner_name)}`:""}</strong><br/><span className="meta">{c.email||"No email available"}</span></td><td>{c.wedding_date?new Date(`${c.wedding_date}T12:00:00`).toLocaleDateString():"Not set"}</td><td><span className={`pipelineStatus status-${c.couple_stage||"new"}`}>{(c.couple_stage||"new").replaceAll("_"," ")}</span><br/><span className="meta">{c.account_status||"active"}</span></td><td><span className="meta">{favoriteCounts.get(c.user_id)||0} saved · {leadCounts.get(c.user_id)||0} inquiries<br/>{c.last_sign_in_at?`Last sign-in ${new Date(c.last_sign_in_at).toLocaleDateString()}`:"No sign-in recorded"}</span></td><td>{c.next_follow_up_at?new Date(`${c.next_follow_up_at}T12:00:00`).toLocaleDateString():"—"}</td><td><Link className="btn light" href={`/admin/couples/${c.user_id}`}>Manage</Link></td></tr>)}</tbody></table></div>{!rows.length&&<p className="meta">No couple accounts match those filters.</p>}</div>
 </div></section></main>
}
