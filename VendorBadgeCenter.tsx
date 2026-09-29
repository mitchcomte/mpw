"use client";
import {useMemo,useState} from "react";

type Props={plan:string;foundingVendor?:boolean;slug:string};
const badgeFor=(plan:string,founding?:boolean)=> founding?"founding":plan==="free"?"listed":plan==="basic"?"supported":plan==="professional"?"professional":"premium";
const labelFor=(key:string)=>({listed:"Listed Vendor",supported:"Supported Vendor",professional:"Professional Vendor",premium:"Premium Vendor",founding:"Founding Vendor"} as Record<string,string>)[key]||"Vendor";
const builders=["Wix","Squarespace","WordPress","Showit","GoDaddy","Shopify","Other / Not sure"];
const instructions:Record<string,string>= {
 Wix:"Add an Embed Code element, choose Embed HTML, paste your copied MPW badge code, then publish.",
 Squarespace:"Add a Code block where you want the badge, paste your copied MPW badge code, then save and publish.",
 WordPress:"Add a Custom HTML block, paste your copied MPW badge code, then update or publish the page.",
 Showit:"Add an Embed Code box, paste your copied MPW badge code, then publish your site.",
 GoDaddy:"Add an HTML section, paste your copied MPW badge code, then publish your website.",
 Shopify:"Add a Custom Liquid block or section, paste your copied MPW badge code, then save.",
 "Other / Not sure":"Look for an HTML, Embed, Code, or Custom Code block in your website editor, paste your copied MPW badge code, then publish."
};
export default function VendorBadgeCenter({plan,foundingVendor,slug}:Props){
 const key=badgeFor(plan,foundingVendor), label=labelFor(key); const [copied,setCopied]=useState(false); const [builder,setBuilder]=useState("Other / Not sure");
 const profile=`https://www.myportlandwedding.com/vendor/${slug}`;
 const embed=useMemo(()=>`<a href="${profile}" target="_blank" rel="noopener"><img src="https://www.myportlandwedding.com/badges/mpw-${key}-vendor.png" alt="${label} — My Portland Wedding" width="220" /></a>`,[profile,key,label]);
 async function track(action:string){fetch("/api/vendor/badge-access",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({action})}).catch(()=>{})}
 async function copy(){await navigator.clipboard.writeText(embed);track("embed");setCopied(true);setTimeout(()=>setCopied(false),1800)}
 return <div className="vendorBadgeCenter"><div className="vendorBadgeDownload"><img src={`/badges/mpw-${key}-vendor.png`} alt={`${label} — My Portland Wedding`}/><div className="badgeDownloadActions"><strong>{label}</strong><p className="meta">Plan Local. Love Always.</p><button type="button" className="btn primary" onClick={copy}>{copied?"Copied! ✓":"📋 Copy My Linked Badge"}</button><p className="meta"><strong>Your MPW profile link is already built in.</strong> You do not need to create or configure a backlink.</p></div></div><div className="badgeEmbedBox"><h3>Add your MPW badge to your website</h3><p className="meta">Choose your website builder and follow the short instructions. Your badge automatically sends couples to your MPW profile.</p><div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"14px 0"}}>{builders.map(b=><button key={b} type="button" className={builder===b?"btn primary":"btn light"} onClick={()=>setBuilder(b)}>{b}</button>)}</div><div style={{background:"#fbf7f3",border:"1px solid #eadfd8",borderRadius:14,padding:16,marginBottom:14}}><strong>{builder}</strong><p className="meta" style={{marginBottom:0}}>1. Click <strong>Copy My Linked Badge</strong> above.<br/>2. {instructions[builder]}<br/>3. Done — the badge and MPW profile link work together automatically.</p></div><details><summary>Website developer / advanced setup</summary><textarea readOnly rows={5} value={embed} style={{marginTop:10}}/><button type="button" className="btn light" onClick={copy}>{copied?"Copied! ✓":"Copy website badge code"}</button></details><div style={{marginTop:22,paddingTop:18,borderTop:"1px solid #eadfd8"}}><h3 style={{marginBottom:4}}>Social & marketing use</h3><p className="meta">These image files are for Instagram, Facebook, Canva, email signatures or printed materials. For your website, use the linked badge above so couples can click through to your MPW profile.</p><div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:10}}><a className="btn light" download onClick={()=>track("download")} href={`/badges/mpw-${key}-vendor.png`}>PNG ↓</a><a className="btn light" download onClick={()=>track("download")} href={`/badges/mpw-${key}-vendor.jpg`}>JPG ↓</a><a className="btn light" download onClick={()=>track("download")} href={`/badges/mpw-${key}-vendor.webp`}>WebP ↓</a></div></div></div></div>
}
