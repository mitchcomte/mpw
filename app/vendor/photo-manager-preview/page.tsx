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
   .photoPreviewBadge{position:absolute;left:12px;top:12px;background:#fff;padding:7px 11px;border-radius:999px;font-weight:800;font-size:13px;max-width:calc(100% - 24px)}
   .photoGridHeader{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
   .photoPreviewGrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px;margin-top:18px}
   .photoPreviewCard{border:1px solid rgba(70,55,40,.18);border-radius:16px;overflow:hidden;background:#fff;min-width:0}
   .photoPreviewCard.main{border:2px solid #7c6651;box-shadow:0 8px 24px rgba(70,55,40,.12)}
   .photoGridImage{position:relative;aspect-ratio:4/3}
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
  <div className="notice" style={{marginBottom:22}}><strong>Preview only · No vendor login required</strong><br/>This page demonstrates the new Main Profile Photo experience. Nothing you click here changes a real vendor profile.</div>
  <div className="photoPreviewHeader"><div><span className="eyebrow">Vendor Portal · Photos</span><h1 style={{marginBottom:8}}>Choose your main profile photo</h1><p className="meta" style={{maxWidth:760,margin:0}}>Your main profile photo is the first image couples see across My Portland Wedding — including vendor cards, category pages, featured placements and Wedding Builder results.</p></div><Link className="btn light" href="/">← Back to MPW</Link></div>
  <section className="panel dashboardPanel" style={{marginBottom:22}}><div className="photoPreviewHero"><div className="photoPreviewImage"><img src={samplePhotos[0].src} alt={samplePhotos[0].alt}/><span className="photoPreviewBadge">✓ Main Profile Photo</span></div><div className="photoPreviewCopy"><span className="eyebrow">Currently shown across MPW</span><h2 style={{margin:"6px 0 8px"}}>Your first impression</h2><p className="meta">Choose the image that best represents your business. You can change it anytime without deleting or re-uploading your gallery.</p><div className="notice success" style={{marginTop:14}}>This photo will be prioritized anywhere MPW displays one image for your business.</div></div></div></section>
  <section className="panel dashboardPanel"><div className="photoGridHeader"><div><h2 style={{marginBottom:5}}>Your photos</h2><p className="meta" style={{marginTop:0}}>Select any photo below to make it your main profile photo.</p></div><button className="btn primary" type="button">+ Upload Photo</button></div><div className="photoPreviewGrid">{samplePhotos.map((p,i)=><article key={p.id} className={`photoPreviewCard${i===0?" main":""}`}><div className="photoGridImage"><img src={p.src} alt={p.alt}/>{i===0&&<span className="photoPreviewBadge" style={{left:10,top:10,padding:"6px 9px",fontSize:12}}>✓ Main</span>}</div><div style={{padding:12}}>{i===0?<button className="btn light" type="button" disabled style={{width:"100%"}}>Current Main Photo</button>:<button className="btn primary" type="button" style={{width:"100%"}}>Set as Main Photo</button>}</div></article>)}</div></section>
 </main>
}
