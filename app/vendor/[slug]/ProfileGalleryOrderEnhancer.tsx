"use client";
import {useEffect} from "react";

export default function ProfileGalleryOrderEnhancer({slug}:{slug:string}){
 useEffect(()=>{
  fetch(`/api/vendor/photo/gallery-order?slug=${encodeURIComponent(slug)}`).then(r=>r.ok?r.json():Promise.reject()).then(({photos}:{photos:{id:string,storage_path:string}[]})=>{
   if(!Array.isArray(photos)||!photos.length) return;
   const base=`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/vendor-media/`;
   const urls=photos.map(p=>base+p.storage_path); const first=urls[0];
   const hero=document.querySelector<HTMLElement>(".vendorProfileHero.hasImage");
   if(hero&&first) hero.style.backgroundImage=`linear-gradient(90deg,rgba(24,32,27,.78),rgba(24,32,27,.28)),url(${JSON.stringify(first).slice(1,-1)})`;
   const reorder=(selector:string)=>{const box=document.querySelector<HTMLElement>(selector); if(!box) return; const imgs=Array.from(box.querySelectorAll<HTMLImageElement>("img")); const byPath=new Map(imgs.map(img=>[decodeURI(img.src),img])); urls.forEach(url=>{const img=byPath.get(decodeURI(url)); if(img){const node=img.closest("figure")||img; box.appendChild(node);}});};
   reorder(".vendorProfilePhotoRibbon"); reorder(".vendorGalleryExpanded");
  }).catch(()=>{});
 },[slug]);
 return null;
}
