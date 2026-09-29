"use client";
import { useState } from "react";
import Link from "next/link";

export default function FavoriteButton({vendorId,initialFavorite,loggedIn,source="profile"}:{vendorId:string,initialFavorite:boolean,loggedIn:boolean,source?:"profile"|"wedding_builder"}){
  const [favorite,setFavorite]=useState(initialFavorite); const [busy,setBusy]=useState(false);
  if(!loggedIn) return <Link className="favoriteButton" href="/couple/login?message=Sign%20in%20to%20save%20vendors">♡ Save vendor</Link>;
  async function toggle(){setBusy(true); const next=!favorite; const res=await fetch("/api/couple/favorite",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_id:vendorId,favorite:next,source})}); if(res.ok)setFavorite(next); setBusy(false);}
  return <button className={`favoriteButton ${favorite?"isFavorite":""}`} onClick={toggle} disabled={busy}>{favorite?"♥ Saved":"♡ Save vendor"}</button>;
}
