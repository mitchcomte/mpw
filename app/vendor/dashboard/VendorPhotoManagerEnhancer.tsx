"use client";

import {useEffect} from "react";

export default function VendorPhotoManagerEnhancer(){
 useEffect(()=>{
  const section=document.getElementById("photos");
  if(!section||section.dataset.mainPhotoEnhanced==="1") return;
  const gallery=section.querySelector<HTMLElement>(".dashboardGallery");
  const cards=gallery?Array.from(gallery.querySelectorAll<HTMLElement>(".dashboardPhoto")):[];
  if(!gallery||!cards.length) return;
  section.dataset.mainPhotoEnhanced="1"; section.classList.add("mainPhotoManager");
  const heading=section.querySelector("h2"); if(heading) heading.textContent="Main profile photo & profile gallery";
  const intro=document.createElement("p"); intro.className="meta galleryOrderIntro"; intro.textContent="Your Main Profile Photo is used across MPW. Separately, choose which image appears first when couples open your full profile, and adjust the profile gallery order."; heading?.insertAdjacentElement("afterend",intro);

  const first=cards[0]; const firstImg=first.querySelector<HTMLImageElement>("img");
  if(firstImg){const hero=document.createElement("div"); hero.className="mainPhotoHero"; hero.innerHTML=`<div class="mainPhotoHeroImage"><img src="${firstImg.src}" alt="${firstImg.alt||"Main profile photo"}"><span class="mainPhotoBadge">✓ Main Profile Photo</span></div><div class="mainPhotoHeroCopy"><span class="eyebrow">Currently shown across MPW</span><h3>Your first impression</h3><p class="meta">This is the primary photo couples see on vendor cards, category pages, featured placements and Wedding Builder results.</p><div class="notice success">Your profile's first image can be different. Use the Profile Gallery controls below.</div></div>`; gallery.parentElement?.insertBefore(hero,gallery);}

  const cardId=(card:HTMLElement)=>card.querySelector<HTMLInputElement>('form[action="/api/vendor/photo/delete"] input[name="id"]')?.value||"";
  cards.forEach((card,index)=>{
   card.classList.add("mainPhotoCard"); if(index===0) card.classList.add("isMainPhoto"); const img=card.querySelector("img");
   if(index===0&&img){const badge=document.createElement("span"); badge.className="mainPhotoBadge small"; badge.textContent="✓ Main"; const wrap=document.createElement("div"); wrap.className="mainPhotoThumb"; img.parentNode?.insertBefore(wrap,img); wrap.appendChild(img); wrap.appendChild(badge);}
   const removeForm=card.querySelector<HTMLFormElement>('form[action="/api/vendor/photo/delete"]'); const actions=document.createElement("div"); actions.className="mainPhotoActions";
   if(index===0){const current=document.createElement("button"); current.type="button"; current.className="btn light"; current.disabled=true; current.textContent="Current Main Photo"; actions.appendChild(current);}else{const form=document.createElement("form"); form.action="/api/vendor/photo/main"; form.method="post"; const input=document.createElement("input"); input.type="hidden"; input.name="photo_id"; input.value=cardId(card); const button=document.createElement("button"); button.className="btn primary"; button.type="submit"; button.textContent="Set as Main Photo"; form.append(input,button); actions.appendChild(form);}
   const galleryActions=document.createElement("div"); galleryActions.className="profileGalleryActions"; galleryActions.dataset.photoId=cardId(card); actions.appendChild(galleryActions);
   if(removeForm) actions.appendChild(removeForm); card.appendChild(actions);
  });

  fetch("/api/vendor/photo/gallery-order").then(r=>r.ok?r.json():Promise.reject()).then(({photoIds}:{photoIds:string[]})=>{
   const order=Array.isArray(photoIds)?photoIds:[];
   cards.forEach(card=>{
    const id=cardId(card), holder=card.querySelector<HTMLElement>(".profileGalleryActions"); if(!holder||!id) return; const pos=order.indexOf(id);
    if(pos===0){card.classList.add("isGalleryFirst"); const badge=document.createElement("span"); badge.className="galleryFirstBadge"; badge.textContent="★ First on Profile"; const imageWrap=card.querySelector(".mainPhotoThumb")||card; imageWrap.appendChild(badge); const label=document.createElement("button"); label.type="button"; label.className="btn light"; label.disabled=true; label.textContent="First on Profile"; holder.appendChild(label);}
    else {const makeForm=(action:string,label:string,disabled=false)=>{const form=document.createElement("form"); form.action="/api/vendor/photo/gallery-order"; form.method="post"; const p=document.createElement("input"); p.type="hidden"; p.name="photo_id"; p.value=id; const a=document.createElement("input"); a.type="hidden"; a.name="action"; a.value=action; const b=document.createElement("button"); b.className="btn light"; b.type="submit"; b.textContent=label; b.disabled=disabled; form.append(p,a,b); return form;}; holder.appendChild(makeForm("first","Make First on Profile")); if(pos>0) holder.appendChild(makeForm("up","← Earlier")); if(pos>=0&&pos<order.length-1) holder.appendChild(makeForm("down","Later →"));}
   });
  }).catch(()=>{});
 },[]);
 return <style jsx global>{`
  #photos.mainPhotoManager{overflow:hidden}.galleryOrderIntro{max-width:760px}
  #photos.mainPhotoManager .mainPhotoHero{display:grid;grid-template-columns:minmax(220px,360px) minmax(0,1fr);gap:24px;align-items:center;margin:24px 0;padding:18px;border:1px solid rgba(70,55,40,.14);border-radius:18px;background:rgba(255,255,255,.45)}
  #photos.mainPhotoManager .mainPhotoHeroImage{position:relative;aspect-ratio:4/3;border-radius:16px;overflow:hidden;min-width:0}#photos.mainPhotoManager .mainPhotoHeroImage img,#photos.mainPhotoManager .mainPhotoThumb img{width:100%;height:100%;object-fit:cover;display:block}#photos.mainPhotoManager .mainPhotoHeroCopy{min-width:0;overflow-wrap:anywhere}#photos.mainPhotoManager .mainPhotoHeroCopy h3{font-size:1.65rem;margin:6px 0 8px}
  #photos.mainPhotoManager .mainPhotoBadge,#photos.mainPhotoManager .galleryFirstBadge{position:absolute;left:12px;top:12px;background:#fff;padding:7px 11px;border-radius:999px;font-weight:800;font-size:13px;box-shadow:0 3px 12px rgba(0,0,0,.12);max-width:calc(100% - 24px);z-index:2}#photos.mainPhotoManager .mainPhotoBadge.small{left:10px;top:10px;padding:6px 9px;font-size:12px}#photos.mainPhotoManager .galleryFirstBadge{top:auto;bottom:10px;left:10px;background:#f6f0e7}
  #photos.mainPhotoManager .dashboardGallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px;margin-top:20px}#photos.mainPhotoManager .mainPhotoCard{display:flex;flex-direction:column;border:1px solid rgba(70,55,40,.18);border-radius:16px;overflow:hidden;background:#fff;min-width:0;position:relative}#photos.mainPhotoManager .mainPhotoCard.isMainPhoto{border:2px solid #7c6651;box-shadow:0 8px 24px rgba(70,55,40,.12)}#photos.mainPhotoManager .mainPhotoThumb{position:relative;aspect-ratio:4/3}#photos.mainPhotoManager .mainPhotoCard:not(.isMainPhoto)>img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block}
  #photos.mainPhotoManager .mainPhotoActions{display:flex;gap:8px;align-items:center;padding:12px;flex-wrap:wrap}#photos.mainPhotoManager .mainPhotoActions form:first-child{flex:1}#photos.mainPhotoManager .mainPhotoActions .btn{width:100%}#photos.mainPhotoManager .mainPhotoActions>button{flex:1}#photos.mainPhotoManager .profileGalleryActions{width:100%;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;padding-top:8px;border-top:1px solid rgba(70,55,40,.12)}#photos.mainPhotoManager .profileGalleryActions form:first-child,#photos.mainPhotoManager .profileGalleryActions>button:first-child{grid-column:1/-1}#photos.mainPhotoManager .mainPhotoActions form[action="/api/vendor/photo/delete"]{margin-left:auto}#photos.mainPhotoManager .mainPhotoActions form[action="/api/vendor/photo/delete"] .linkButton{min-height:40px;padding:8px 10px}
  @media(max-width:700px){#photos.mainPhotoManager{max-width:100%;box-sizing:border-box}#photos.mainPhotoManager .mainPhotoHero{grid-template-columns:minmax(0,1fr);gap:16px;padding:12px;width:100%;box-sizing:border-box}#photos.mainPhotoManager .mainPhotoHeroImage,#photos.mainPhotoManager .mainPhotoHeroCopy{width:100%;max-width:100%}#photos.mainPhotoManager .dashboardGallery{grid-template-columns:minmax(0,1fr);gap:14px}#photos.mainPhotoManager .mainPhotoCard{width:100%;max-width:100%}#photos.mainPhotoManager .mainPhotoActions{align-items:stretch}#photos.mainPhotoManager .mainPhotoActions form,#photos.mainPhotoManager .mainPhotoActions>button{width:100%;flex-basis:100%}#photos.mainPhotoManager .mainPhotoActions form[action="/api/vendor/photo/delete"]{margin-left:0;text-align:center}}
 `}</style>;
}
