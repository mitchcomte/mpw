import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

async function getUser(){ const supabase=await createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); return {supabase,user}; }
export async function POST(request: Request){
  const {supabase,user}=await getUser(); if(!user) return NextResponse.json({error:"Sign in required"},{status:401});
  const body=await request.json();
  const row={user_id:user.id,name:String(body.name||"").trim(),email:String(body.email||"").trim()||null,phone:String(body.phone||"").trim()||null,party_size:Math.max(1,Number(body.party_size||1)),rsvp_status:["pending","yes","no"].includes(body.rsvp_status)?body.rsvp_status:"pending",meal_choice:String(body.meal_choice||"").trim()||null,group_name:String(body.group_name||"").trim()||null,table_name:String(body.table_name||"").trim()||null,notes:String(body.notes||"").trim()||null,updated_at:new Date().toISOString()};
  if(!row.name) return NextResponse.json({error:"Guest name is required"},{status:400});
  const {data,error}=body.id
    ? await supabase.from("planning_guests").update(row).eq("id",body.id).eq("user_id",user.id).select().single()
    : await supabase.from("planning_guests").insert(row).select().single();
  if(error) return NextResponse.json({error:error.message},{status:400}); return NextResponse.json({guest:data});
}
export async function DELETE(request: Request){
  const {supabase,user}=await getUser(); if(!user) return NextResponse.json({error:"Sign in required"},{status:401});
  const {id}=await request.json(); const {error}=await supabase.from("planning_guests").delete().eq("id",String(id)).eq("user_id",user.id);
  if(error) return NextResponse.json({error:error.message},{status:400}); return NextResponse.json({ok:true});
}
