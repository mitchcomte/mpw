"use client";

import {useEffect} from "react";

export default function VendorPhotoManagerEnhancer(){
 useEffect(()=>{
  const section=document.getElementById("photos");
  if(!section||section.dataset.mainPhotoEnhanced==="1") return;
  const gallery=section.querySelector<HTMLElement>(".dashboardGallery");
  const cards=gallery?Array.from(gallery.querySelectorAll<HTMLElement>(".dashboardPhoto")):[];
  if(!gallery||!cards.length) return;
  section.dataset.mainPhotoEnhanced="1";
  section.classList.add("mainPhotoManager");

  const heading=section.querySelector("h2");
  if(heading) heading.textContent="Main profile photo & gallery";

  const first=cards[0];
  const firstImg=first.querySelector<HTMLImageElement>("img");
  if(firstImg){
   const hero=document.createElement("div");
   hero.className="mainPhotoHero";
   hero.innerHTML=`<div class="mainPhotoHeroImage"><img src="${firstImg.src}" alt="${firstImg.alt||"Main profile photo"}"><span class="mainPhotoBadge">✓ Main Profile Photo</span></div><div class="mainPhotoHeroCopy"><span class="eyebrow">Currently shown across MPW</span><h3>Your first impression</h3><p class="meta">Choose the image that best represents your business. This is the primary photo couples see on vendor cards, category pages, featured placements and Wedding Builder results.</p><div class="notice success">This photo is prioritized anywhere My Portland Wedding displays one image for your business.</div></div>`;
   gallery.parentElement?.insertBefore(hero,gallery);
  }

  cards.forEach((card,index)=>{
   card.classList.add("mainPhotoCard");
   if(index===0) card.classList.add("isMainPhoto");
   const img=card.querySelector("img");
   if(index===0&&img){
    const badge=document.createElement("span"); badge.className="mainPhotoBadge small"; badge.textContent="✓ Main";
    const wrap=document.createElement("div"); wrap.className="mainPhotoThumb";
    img.parentNode?.insertBefore(wrap,img); wrap.appendChild(img); wrap.appendChild(badge);
   }
   const removeForm=card.querySelector<HTMLFormElement>('form[action="/api/vendor/photo/delete"]');
   const actions=document.createElement("div"); actions.className="mainPhotoActions";
   if(index===0){
    const current=document.createElement("button"); current.type="button"; current.className="btn light"; current.disabled=true; current.textContent="Current Main Photo"; actions.appendChild(current);
   }else{
    const form=document.createElement("form"); form.action="/api/vendor/photo/main"; form.method="post";
    const input=document.createElement("input"); input.type="hidden"; input.name="photo_id";
    const idInput=removeForm?.querySelector<HTMLInputElement>('input[name="id"]'); input.value=idInput?.value||"";
    const button=document.createElement("button"); button.className="btn primary"; button.type="submit"; button.textContent="Set as Main Photo";
    form.append(input,button); actions.appendChild(form);
   }
   if(removeForm) actions.appendChild(removeForm);
   card.appendChild(actions);
  });
 },[]);
 return <style jsx global>{`
  #photos.mainPhotoManager{overflow:hidden}
  #photos.mainPhotoManager .mainPhotoHero{display:grid;grid-template-columns:minmax(220px,360px) minmax(0,1fr);gap:24px;align-items:center;margin:24px 0;padding:18px;border:1px solid rgba(70,55,40,.14);border-radius:18px;background:rgba(255,255,255,.45)}
  #photos.mainPhotoManager .mainPhotoHeroImage{position:relative;aspect-ratio:4/3;border-radius:16px;overflow:hidden;min-width:0}
  #photos.mainPhotoManager .mainPhotoHeroImage img,#photos.mainPhotoManager .mainPhotoThumb img{width:100%;height:100%;object-fit:cover;display:block}
  #photos.mainPhotoManager .mainPhotoHeroCopy{min-width:0;overflow-wrap:anywhere}
  #photos.mainPhotoManager .mainPhotoHeroCopy h3{font-size:1.65rem;margin:6px 0 8px}
  #photos.mainPhotoManager .mainPhotoBadge{position:absolute;left:12px;top:12px;background:#fff;padding:7px 11px;border-radius:999px;font-weight:800;font-size:13px;box-shadow:0 3px 12px rgba(0,0,0,.12);max-width:calc(100% - 24px)}
  #photos.mainPhotoManager .mainPhotoBadge.small{left:10px;top:10px;padding:6px 9px;font-size:12px}
  #photos.mainPhotoManager .dashboardGallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px;margin-top:20px}
  #photos.mainPhotoManager .mainPhotoCard{display:flex;flex-direction:column;border:1px solid rgba(70,55,40,.18);border-radius:16px;overflow:hidden;background:#fff;min-width:0}
  #photos.mainPhotoManager .mainPhotoCard.isMainPhoto{border:2px solid #7c6651;box-shadow:0 8px 24px rgba(70,55,40,.12)}
  #photos.mainPhotoManager .mainPhotoThumb{position:relative;aspect-ratio:4/3}
  #photos.mainPhotoManager .mainPhotoCard:not(.isMainPhoto)>img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block}
  #photos.mainPhotoManager .mainPhotoActions{display:flex;gap:8px;align-items:center;padding:12px;flex-wrap:wrap}
  #photos.mainPhotoManager .mainPhotoActions form:first-child{flex:1}
  #photos.mainPhotoManager .mainPhotoActions .btn{width:100%}
  #photos.mainPhotoManager .mainPhotoActions>button{flex:1}
  #photos.mainPhotoManager .mainPhotoActions form[action="/api/vendor/photo/delete"]{margin-left:auto}
  #photos.mainPhotoManager .mainPhotoActions form[action="/api/vendor/photo/delete"] .linkButton{min-height:40px;padding:8px 10px}
  @media(max-width:700px){
   #photos.mainPhotoManager{max-width:100%;box-sizing:border-box}
   #photos.mainPhotoManager .mainPhotoHero{grid-template-columns:minmax(0,1fr);gap:16px;padding:12px;width:100%;box-sizing:border-box}
   #photos.mainPhotoManager .mainPhotoHeroImage,#photos.mainPhotoManager .mainPhotoHeroCopy{width:100%;max-width:100%}
   #photos.mainPhotoManager .dashboardGallery{grid-template-columns:minmax(0,1fr);gap:14px}
   #photos.mainPhotoManager .mainPhotoCard{width:100%;max-width:100%}
   #photos.mainPhotoManager .mainPhotoActions{align-items:stretch}
   #photos.mainPhotoManager .mainPhotoActions form,#photos.mainPhotoManager .mainPhotoActions>button{width:100%;flex-basis:100%}
   #photos.mainPhotoManager .mainPhotoActions form[action="/api/vendor/photo/delete"]{margin-left:0;text-align:center}
  }
 `}</style>;
}
