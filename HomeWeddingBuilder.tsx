"use client";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";

type FeaturedMini={slug:string;business_name:string;photo_url?:string|null};
export default function HomeWeddingBuilder({featured=[]}:{featured?:FeaturedMini[]}){
 const router=useRouter();
 function start(){track("Wedding Builder Started",{source:"homepage_showcase"});router.push("/wedding-builder")}
 return <div className="homeBuilderShowcase">
  <div className="homeBuilderShowcaseCopy">
   <div className="homeBuilderShowcaseBrand"><img src="/brand/mpw-heart-sprig-clean.png" alt=""/><div><small>MY PORTLAND WEDDING PRESENTS</small><strong>Wedding Builder</strong></div><span>FREE</span></div>
   <span className="eyebrow">Your wedding. Built around you.</span>
   <h2>Meet the planning tool that actually gets personal.</h2>
   <p>Tell us your budget, vibe and priorities. We’ll turn them into a personalized Wedding Blueprint with local vendor matches, category-by-category spending and smart ways to make your money work harder.</p>
   <div className="homeBuilderMiniJourney" aria-label="Wedding Builder journey"><span><b>01</b>Basics</span><i>→</i><span><b>02</b>Vibe</span><i>→</i><span><b>03</b>Celebrate</span><i>→</i><span><b>04</b>Priorities</span><i>→</i><span><b>05</b>Blueprint ✨</span></div>
   <div className="homeBuilderShowcaseActions"><button type="button" className="btn primary" onClick={start}>Try Wedding Builder — Free ✨</button><a href="/vendors">Explore Local Vendors →</a></div>
   {featured.length>0&&<div className="homeBuilderPowered"><div className="homeBuilderPoweredFaces">{featured.slice(0,3).map(v=><a href={`/vendor/${v.slug}`} key={v.slug} aria-label={v.business_name}>{v.photo_url?<img src={v.photo_url} alt=""/>:<span>♥</span>}</a>)}</div><p><strong>Powered by Portland’s local wedding community.</strong><br/>Premium &amp; Founding vendors help bring your Blueprint to life.</p></div>}
  </div>
  <div className="homeBuilderBlueprintPreview" aria-label="Example Wedding Blueprint">
   <div className="blueprintPaperTop"><span>YOUR WEDDING BLUEPRINT</span><b>Perfect Match</b></div>
   <div className="blueprintPaperHero"><small>ROMANTIC · GARDEN · 100 GUESTS</small><h3>Your day is taking shape.</h3><p>A vendor team and flexible budget built around what matters to you.</p></div>
   <div className="blueprintPreviewStats"><div><small>Budget</small><strong>$30,000</strong></div><div><small>Local matches</small><strong>12</strong></div><div><small>Top priority</small><strong>Photography</strong></div></div>
   <div className="blueprintPreviewRows"><span><i>⌂</i><b>Venue</b><em>$8,100</em></span><span><i>▣</i><b>Photography</b><em>$4,200</em></span><span><i>✿</i><b>Flowers &amp; design</b><em>$2,350</em></span></div>
   <div className="blueprintPreviewNote">✨ Wedding Builder can rebalance smaller allocations into the things you care about most.</div>
  </div>
 </div>
}
