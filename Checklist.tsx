"use client";
import { useEffect, useMemo, useState } from "react";

type Section={title:string;items:string[]};
export default function Checklist({slug,sections}:{slug:string;sections:Section[]}){
 const storageKey=`mpw-checklist-${slug}`;
 const all=useMemo(()=>sections.flatMap((s,si)=>s.items.map((_,ii)=>`${si}-${ii}`)),[sections]);
 const [checked,setChecked]=useState<string[]>([]);
 useEffect(()=>{try{const saved=localStorage.getItem(storageKey);if(saved)setChecked(JSON.parse(saved))}catch{}},[storageKey]);
 function toggle(key:string){setChecked(prev=>{const next=prev.includes(key)?prev.filter(x=>x!==key):[...prev,key];try{localStorage.setItem(storageKey,JSON.stringify(next))}catch{}return next})}
 function reset(){setChecked([]);try{localStorage.removeItem(storageKey)}catch{}}
 const pct=all.length?Math.round((checked.length/all.length)*100):0;
 return <div className="checklistShell">
  <div className="checkProgress"><div><strong>{checked.length} of {all.length} complete</strong><span>{pct}%</span></div><div className="progressTrack"><i style={{width:`${pct}%`}}/></div><button className="textButton" onClick={reset} type="button">Reset checklist</button></div>
  {sections.map((section,si)=><section className="checkSection" key={section.title}><h2>{section.title}</h2><div className="checkItems">{section.items.map((item,ii)=>{const key=`${si}-${ii}`;const on=checked.includes(key);return <label className={`checkItem ${on?"done":""}`} key={item}><input type="checkbox" checked={on} onChange={()=>toggle(key)}/><span className="fakeCheck">✓</span><span>{item}</span></label>})}</div></section>)}
 </div>
}
