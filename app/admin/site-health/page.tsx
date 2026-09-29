import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../lib/supabase/server";
import SiteHealthScanner from "../../../components/SiteHealthScanner";
export default async function SiteHealthPage(){
 const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user) redirect("/admin/login");
 const {data:admin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle(); if(!admin) return <main><div className="container"><div className="formCard"><h1>Admin access required.</h1></div></div></main>;
 return <main><section className="pagehero"><div className="container"><span className="eyebrow">My Portland Wedding</span><h1>Site Health</h1><p>Production diagnostics, smoke checks and repair guidance.</p></div></section><section className="section"><div className="container"><div className="adminCrmTopbar"><a className="btn light" href="/admin">← Marketplace Admin</a></div><SiteHealthScanner/></div></section></main>;
}
