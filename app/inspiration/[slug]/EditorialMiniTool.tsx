"use client";
import {useMemo,useState} from "react";

const money=(n:number)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n);

export default function EditorialMiniTool({kind}:{kind:string}){
 const [budget,setBudget]=useState(35000),[guests,setGuests]=useState(100),[date,setDate]=useState("");
 const days=useMemo(()=>date?Math.ceil((new Date(date+"T12:00:00").getTime()-Date.now())/86400000):null,[date]);
 if(kind==="budget") return <section className="editorialMiniTool"><span className="eyebrow">Make it yours</span><h2>What does your budget look like per guest?</h2><div className="miniToolInputs"><label>Total wedding budget<input type="number" min="1000" step="500" value={budget} onChange={e=>setBudget(Math.max(0,Number(e.target.value)||0))}/></label><label>Guest count<input type="number" min="1" max="1000" value={guests} onChange={e=>setGuests(Math.max(1,Number(e.target.value)||1))}/></label></div><div className="miniToolResult"><b>{money(budget/guests)}</b><span>total budget per guest</span></div><p>This is not a catering quote—it is a quick perspective check. Changing the guest count can affect several categories at once.</p></section>;
 if(kind==="cake") return <section className="editorialMiniTool"><span className="eyebrow">Dessert math, simplified</span><h2>How many servings should you plan?</h2><label>Guests<input type="number" min="1" max="1000" value={guests} onChange={e=>setGuests(Math.max(1,Number(e.target.value)||1))}/></label><div className="miniToolResult"><b>{Math.ceil(guests*1.05)}</b><span>servings with a small cushion</span></div><p>Use this as a conversation starter with your baker; serving style, other desserts and vendor guidance can change the final number.</p></section>;
 if(kind==="stationery") return <section className="editorialMiniTool"><span className="eyebrow">Put it on the calendar</span><h2>How far away is your wedding?</h2><label>Wedding date<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label>{days!==null&&<div className="miniToolResult"><b>{days>0?days:0}</b><span>days until the wedding</span></div>}<p>Use the timeline in this guide to work backward from your date for invitations, RSVPs and final counts.</p></section>;
 return null;
}