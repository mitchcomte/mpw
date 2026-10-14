"use client";

import { useEffect } from "react";

export default function VendorMainPhotoSelector(){
  useEffect(()=>{
    if(!window.location.pathname.startsWith("/vendor/dashboard")) return;
    const gallery=document.querySelector("#photos .dashboardGallery");
    if(!gallery||gallery.getAttribute("data-main-photo-ready")==="1") return;
    gallery.setAttribute("data-main-photo-ready","1");
    const cards=Array.from(gallery.querySelectorAll<HTMLElement>(".dashboardPhoto"));
    if(!cards.length) return;

    const intro=document.createElement("div");
    intro.style.cssText="grid-column:1/-1;padding:12px 14px;border:1px solid rgba(116,91,61,.22);border-radius:12px;background:#fffaf6;margin-bottom:4px";
    intro.innerHTML='<strong style="display:block;margin-bottom:3px">Choose your main profile photo</strong><span style="font-size:.9rem;opacity:.78">Your Main photo is shown first across vendor listings, Wedding Builder results, featured placements and your public profile.</span>';
    gallery.prepend(intro);

    cards.forEach((card,index)=>{
      card.style.position="relative";
      if(index===0){
        card.style.outline="2px solid rgba(116,91,61,.55)";
        card.style.outlineOffset="2px";
        const badge=document.createElement("span");
        badge.textContent="★ Main profile photo";
        badge.style.cssText="position:absolute;left:10px;top:10px;z-index:2;background:rgba(255,255,255,.95);color:#493c2e;border:1px solid rgba(116,91,61,.28);border-radius:999px;padding:6px 10px;font-size:.78rem;font-weight:800;box-shadow:0 4px 14px rgba(0,0,0,.12)";
        card.appendChild(badge);
        return;
      }
      const removeForm=card.querySelector<HTMLFormElement>('form[action="/api/vendor/photo/delete"]');
      const photoId=removeForm?.querySelector<HTMLInputElement>('input[name="id"]')?.value;
      if(!photoId) return;
      const form=document.createElement("form");
      form.action="/api/vendor/photo/main";
      form.method="post";
      form.style.margin="8px 0 0";
      const input=document.createElement("input");
      input.type="hidden"; input.name="id"; input.value=photoId;
      const button=document.createElement("button");
      button.type="submit"; button.className="btn light"; button.textContent="Make Main Photo";
      button.style.cssText="width:100%;padding:8px 10px;font-size:.82rem";
      form.append(input,button);
      card.insertBefore(form,removeForm||null);
    });
  },[]);
  return null;
}
