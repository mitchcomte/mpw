"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VendorPrimaryPhotoEnhancer(){
 const pathname=usePathname();
 useEffect(()=>{
  if(!pathname.startsWith("/vendor/dashboard"))return;
  const timer=window.setTimeout(()=>{
   const panel=document.querySelector<HTMLElement>("#photos");
   const cards=Array.from(document.querySelectorAll<HTMLElement>("#photos .dashboardPhoto"));
   if(!panel||!cards.length||panel.dataset.primaryPhotoReady==="1")return;
   panel.dataset.primaryPhotoReady="1";
   const intro=document.createElement("div");
   intro.className="primaryPhotoHelp";
   intro.innerHTML='<strong>Choose your main profile photo</strong><span>This is the image couples see first across vendor listings, Wedding Builder matches and other MPW placements. You can change it anytime.</span>';
   const gallery=panel.querySelector(".dashboardGallery");
   if(gallery)panel.insertBefore(intro,gallery);
   cards.forEach((card,index)=>{
    const id=(card.querySelector('input[name="id"]') as HTMLInputElement|null)?.value;
    if(!id)return;
    const controls=document.createElement("div");
    controls.className="primaryPhotoControls";
    if(index===0){
      card.classList.add("isPrimaryPhoto");
      controls.innerHTML='<span class="primaryPhotoBadge">★ Main profile photo</span><small>Shown first across My Portland Wedding</small>';
    }else{
      controls.innerHTML=`<form action="/api/vendor/photo/set-primary" method="post"><input type="hidden" name="id" value="${id}"><button class="primaryPhotoButton" type="submit">Set as main photo</button></form>`;
    }
    const removeForm=card.querySelector('form[action="/api/vendor/photo/delete"]');
    card.insertBefore(controls,removeForm||null);
   });
  },0);
  return()=>window.clearTimeout(timer);
 },[pathname]);
 return <style jsx global>{`
  .primaryPhotoHelp{display:flex;gap:8px;flex-direction:column;padding:15px 17px;margin:16px 0;background:#f5f1e8;border:1px solid #d8c9a4;border-radius:10px;color:#343a30}.primaryPhotoHelp strong{font-family:Georgia,serif;font-size:1.08rem}.primaryPhotoHelp span{font-size:.88rem;line-height:1.45;color:#65685f}.dashboardPhoto.isPrimaryPhoto{border:2px solid #9a8150;box-shadow:0 0 0 3px rgba(179,155,98,.14)}.primaryPhotoControls{padding:10px 10px 3px;display:flex;flex-direction:column;gap:5px}.primaryPhotoBadge{display:inline-flex;align-items:center;justify-content:center;background:#53634a;color:#fff;border-radius:999px;padding:7px 9px;font-size:.76rem;font-weight:800}.primaryPhotoControls small{text-align:center;color:#727369;line-height:1.3}.primaryPhotoButton{width:100%;border:1px solid #53634a;background:#fff;color:#43513d;border-radius:8px;padding:8px 9px;font-weight:800;cursor:pointer}.primaryPhotoButton:hover{background:#eef1e8}.dashboardPhoto .linkButton{width:100%;text-align:center}
 `}</style>;
}
