"use client";

import { useMemo, useState } from "react";

const normals = [
  [47,36,5.4,"cool + wet"],[51,37,3.9,"cool + wet"],[57,41,3.7,"mild + showery"],
  [62,44,2.7,"mild + changeable"],[68,49,2.5,"mild + greener"],[74,54,1.7,"warmer + drier"],
  [82,58,0.5,"warm + dry"],[82,58,0.5,"warm + dry"],[76,54,1.5,"warm + shifting"],
  [63,47,3.4,"cooler + wetter"],[52,41,5.5,"cool + wet"],[46,36,5.8,"cool + wet"]
];

function sunTimes(date: string) {
  const d = new Date(date + "T12:00:00Z");
  if (Number.isNaN(d.getTime())) return null;
  const day = Math.floor((d.getTime() - Date.UTC(d.getUTCFullYear(),0,0)) / 86400000);
  const lat = 45.5152 * Math.PI / 180;
  const decl = -23.44 * Math.cos((2*Math.PI/365)*(day+10)) * Math.PI / 180;
  const hourAngle = Math.acos(Math.max(-1,Math.min(1,-Math.tan(lat)*Math.tan(decl))));
  const daylight = 24 * hourAngle / Math.PI;
  const dstApprox = d.getUTCMonth() >= 2 && d.getUTCMonth() <= 10;
  const noon = 12 + (dstApprox ? 1 : 0);
  const fmt = (v:number) => {
    let hr=Math.floor(v), min=Math.round((v-hr)*60);
    if(min===60){hr++;min=0}
    const ap=hr>=12?"PM":"AM"; let h12=hr%12; if(!h12)h12=12;
    return h12+":"+String(min).padStart(2,"0")+" "+ap;
  };
  return { sunrise:fmt(noon-daylight/2), sunset:fmt(noon+daylight/2), daylight:Math.floor(daylight)+"h "+Math.round((daylight%1)*60)+"m" };
}

export default function VenueDateTools(){
  const [date,setDate]=useState("");
  const sun=useMemo(()=>date?sunTimes(date):null,[date]);
  const weather=useMemo(()=>date?normals[new Date(date+"T12:00:00Z").getUTCMonth()]:null,[date]);
  return <section className="venueDateTools">
    <div className="venueToolsIntro"><span className="eyebrow">Try your wedding date</span><h2>What will your Portland wedding day feel like?</h2><p>Pick your ceremony date for a quick planning snapshot.</p><label>Wedding date <input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label></div>
    <div className="venueToolGrid">
      <article className="venueToolCard"><span className="toolIcon">☀️</span><small>LIGHT CHECK</small><h3>Will you catch the glow?</h3>{sun?<><div className="toolResult"><b>{sun.sunset}</b><span>approx. sunset</span></div><p>Sunrise about <strong>{sun.sunrise}</strong> · roughly <strong>{sun.daylight}</strong> of daylight. A useful starting point for ceremony and portrait timing.</p></>:<p>Choose your date to see approximate Portland sunrise, sunset and daylight.</p>}</article>
      <article className="venueToolCard"><span className="toolIcon">☂️</span><small>WEATHER VIBE</small><h3>What is Portland usually like?</h3>{weather?<><div className="toolResult"><b>{weather[0]}° / {weather[1]}°</b><span>normal high / low</span></div><p>Historically this month is <strong>{weather[3]}</strong>, with about <strong>{weather[2]} inches</strong> of precipitation. Actual wedding-day weather can vary.</p></>:<p>Choose your date for historical Portland temperature and precipitation context.</p>}</article>
    </div>
    <p className="venueToolsNote">Planning guidance, not a forecast. Weather uses NOAA 1991–2020 climate normals. Full methodology and sources are at the bottom of this guide.</p>
  </section>;
}