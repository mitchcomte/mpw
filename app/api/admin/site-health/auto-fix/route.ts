import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../../lib/supabase/server";
type RequestedCheck={id:string;status:string;name:string;group:string;url?:string;autoFix?:boolean};
export async function POST(req:Request){
 const supabase=await createSupabaseServerClient();
 const {data:{user}}=await supabase.auth.getUser();
 if(!user) return NextResponse.json({error:"Unauthorized"},{status:401});
 const {data:admin}=await supabase.from("admin_users").select("user_id").eq("user_id",user.id).maybeSingle();
 if(!admin) return NextResponse.json({error:"Admin access required"},{status:403});
 const body=await req.json().catch(()=>({}));
 const checks:Array<RequestedCheck>=Array.isArray(body?.checks)?body.checks:[];
 const candidates=checks.filter(c=>c.status!=="pass"&&c.autoFix);
 const fixed:string[]=[]; const skipped:Array<{id:string;reason:string}>=[];
 for(const c of candidates) skipped.push({id:c.id,reason:"Requires application source or deployment configuration; production code is immutable and is not edited by Auto Fix."});
 return NextResponse.json({ok:true,fixed,skipped,message:fixed.length?`${fixed.length} safe repair${fixed.length===1?"":"s"} applied.`:"No detected issue can be safely changed inside the running production deployment. Source-level fixes require a validated deployment."});
}
