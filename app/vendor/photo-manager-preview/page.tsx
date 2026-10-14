import Link from "next/link";

const samplePhotos=[
 {id:"1",src:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",alt:"Outdoor Portland wedding ceremony"},
 {id:"2",src:"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",alt:"Wedding reception tables"},
 {id:"3",src:"https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",alt:"Wedding rings and florals"},
 {id:"4",src:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",alt:"Elegant wedding reception"}
];

export default function PhotoManagerPreview(){
 return <main className="container photoManagerPreview">
  <style>{`
   .photoManagerPreview{padding:40px 20px 80px;max-width:1100px;overflow:hidden}
   .photoPreviewHeader{display:flex;justify-content:space-between;gap:16px;align-items:flex-end;flex-wrap:wrap;margin-bottom:22px}
   .photoPreviewHero{display:grid;grid-template-columns:minmax(220px,360px) minmax(0,1fr);gap:24px;align-items:center}
   .photoPreviewImage{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:4/3;min-width:0}
   .photoPreviewImage img,.photoGridImage img{width:100%;height:100%;object-fit:cover;display:block}
   .photoPreviewCopy{min-width:0;overflow-wrap:anywhere}
   .photoPreviewBadge{position:absolute;left:12px;top:12px;background:#fff;padding:7px 11px;border-radius:999px;font-weight:800;font-size:13px;max-width:calc(100% - 24px);box-shadow:0 3px 12px rgba(0,0,0,.12)}
   .photoPreviewBadge.gallery{top:auto;bottom:12px;background:#f8f1e7}
   .photoGridHeader{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
   .photoPreviewGrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px;margin-top:18px}
   .photoPreviewCard{border:1px solid rgba(70,55,40,.18);border-radius:16px;overflow:hidden;background:#fff;min-width:0}
   .photoPreviewCard.main{border:2px solid #7c6651;box-shadow:0 8px 24px rgba(70,55,40,.12)}
   .photoGridImage{position:relative;aspect-ratio:4/3}
   .photoActions{padding:12px;display:grid;gap:8px}
   .galleryActions{display:grid;grid-template-columns:1fr 1fr;gap:8px}
   .galleryActions .wide{grid-column:1/-1}
   .previewDivider{height:1px;background:rgba(70,55,40,.12);margin:4px 0}
   @media(max-width:700px){
    .photoManagerPreview{padding:24px 14px 56px;width:100%;max-width:100%;box-sizing:border-box}
    .photoPreviewHeader{align-items:stretch;margin-bottom:16px}
    .photoPreviewHeader>div,.photoPreviewHeader>a{width:100%;max-width:100%;box-sizing:border-box}
    .photoPreviewHero{grid-template-columns:minmax(0,1fr);gap:16px;width:100%}
    .photoPreviewImage{width:100%;max-width:100%;aspect-ratio:4/3}
    .photoPreviewCopy{width:100%;max-width:100%}
    .photoPreviewCopy h2{font-size:clamp(24px,8vw,34px)}
    .photoPreviewCopy .notice{width:100%;max-width:100%;box-sizing:border-box}
    .photoGridHeader{align-items:stretch}
    .photoGridHeader>div,.photoGridHeader>button{width:100%;max-width:100%;box-sizing:border-box}
    .photoPreviewGrid{grid-template-columns:minmax(0,1fr);gap:14px}
    .photoPreviewCard{width:100%;max-width:100%}
   }
  `}</style>
  <div className="notice" style={{marginBottom:22}}><strong>Preview only · No vendor login required</strong><br/>This demonstrates both photo controls. Nothing you click here changes a real vendor profile.</div>
  <div className="photoPreviewHeader"><div><span className="eyebrow">Vendor Portal · Photos</span><h1 style={{marginBottom:8}}>Control how couples see your photos</h1><p className="meta" style={{maxWidth:780,margin:0}}>Choose a Main Profile Photo for cards and Wedding Builder results, then separately choose which image appears first when a couple opens your full vendor profile.</p></div><Link className="btn light" href="/">← Back to MPW</Link></div>
  <section className="panel dashboardPanel" style={{marginBottom:22}}><div className="photoPreviewHero"><div className="photoPreviewImage"><img src={samplePhotos[0].src} alt={samplePhotos[0].alt}/><span className="photoPreviewBadge">✓ Main Profile Photo</span><span className="photoPreviewBadge gallery">#1 First on Profile</span></div><div className="photoPreviewCopy"><span className="eyebrow">Two independent controls</span><h2 style={{margin:"6px 0 8px"}}>Your first impression, your way</h2><p className="meta"><strong>Main Profile Photo</strong> is used around MPW. <strong>First on Profile</strong> controls the first image in the gallery after a couple clicks into your profile. They can be the same photo or completely different photos.</p><div className="notice success" style={{marginTop:14}}>Changing your profile gallery order will not change your Main Profile Photo.</div></div></div></section>
  <section className="panel dashboardPanel"><div className="photoGridHeader"><div><h2 style={{marginBottom:5}}>Your photos</h2><p className="meta" style={{marginTop:0}}>Use the controls under each photo to choose its role and change the order couples see inside your profile.</p></div><button className="btn primary" type="button">+ Upload Photo</button></div><div className="photoPreviewGrid">{samplePhotos.map((p,i)=><article key={p.id} className={`photoPreviewCard${i===0?" main":""}`}><div className="photoGridImage"><img src={p.src} alt={p.alt}/>{i===0&&<><span className="photoPreviewBadge" style={{left:10,top:10,padding:"6px 9px",fontSize:12}}>✓ Main</span><span className="photoPreviewBadge gallery" style={{left:10,bottom:10,padding:"6px 9px",fontSize:12}}>#1 Profile</span></>}</div><div className="photoActions">{i===0?<button className="btn light" type="button" disabled>Current Main Photo</button>:<button className="btn primary" type="button">Set as Main Photo</button>}<div className="previewDivider"/><div className="galleryActions">{i===0?<button className="btn light wide" type="button" disabled>✓ First on Profile</button>:<button className="btn light wide" type="button">Make First on Profile</button>}<button className="btn light" type="button" disabled={i===0}>← Earlier</button><button className="btn light" type="button" disabled={i===samplePhotos.length-1}>Later →</button></div></div></article>)}</div></section>
 </main>
}
