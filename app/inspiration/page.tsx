import Link from "next/link";
import { inspirationArticles } from "../../lib/content";

export const metadata = {
  title: "Portland Wedding Ideas, Guides & Inspiration",
  description: "Explore Portland wedding planning guides, local ideas and practical advice for venues, vendors, budgets and creating a celebration that feels like you.",
  alternates: { canonical: "/inspiration" },
  openGraph: { title: "Portland Wedding Ideas, Guides & Inspiration", description: "Explore Portland wedding planning guides, local ideas and practical advice for venues, vendors, budgets and creating a celebration that feels like you.", url: "/inspiration", images: [{ url: "/brand/mpw-social-share.png", width: 1200, height: 630, alt: "My Portland Wedding — Plan Local. Love Always." }] }
};

const topics = [
  ["Planning & Timeline",["Planning"],"planning","https://images.unsplash.com/photo-1758825178518-ca48833a6c57?auto=format&fit=crop&w=900&q=82"],
  ["Venues",["Venues"],"venues","https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&h=600&q=82"],
  ["Budget & Costs",["Budget"],"budget","https://images.unsplash.com/photo-1741207154948-66f7fa63c35a?auto=format&fit=crop&w=900&q=82"],
  ["Photography & Video",["Photography","Videography","Content Creation"],"photography","https://images.unsplash.com/photo-1786206432186-f0201a7056bd?auto=format&fit=crop&w=900&q=82"],
  ["Style & Décor",["Florists","Rentals","Stationery"],"florists","https://images.unsplash.com/photo-1785672951683-dba4e3867b8a?auto=format&fit=crop&w=900&q=82"],
  ["Food & Drink",["Catering","Cakes","Mobile Bars"],"catering","https://images.unsplash.com/photo-1768594266667-50aaa727ebf5?auto=format&fit=crop&w=900&q=82"],
  ["Attire & Beauty",["Bridal","Formalwear","Hair & Makeup","Jewelry"],"bridal","https://images.unsplash.com/photo-gSQBy3PDprY?auto=format&fit=crop&w=900&h=600&q=82"],
  ["Guest Experience",["Transportation","Lodging","DJs","Live Entertainment","Photo Booths"],"transportation","https://images.unsplash.com/photo-1764593823886-6cd9af7f8a5c?auto=format&fit=crop&w=900&q=82"],
  ["Honeymoons & Travel",["Honeymoons"],"honeymoons","https://images.unsplash.com/photo-1780929007351-bc285312da4c?auto=format&fit=crop&w=900&q=82"]
] as const;

const featuredSlugs = [
  "portland-wedding-planning-checklist",
  "best-portland-wedding-venues-guide",
  "how-much-does-a-wedding-cost-in-portland"
];

export default function Page(){
  const featured=featuredSlugs.map(slug=>inspirationArticles.find(a=>a.slug===slug)).filter(Boolean) as typeof inspirationArticles;
  return <main>
    <section className="inspirationHubHero inspirationHubHeroPhoto"><div className="container inspirationHeroGrid">
      <div className="inspirationHeroCopy"><span className="eyebrow">Wedding inspiration</span><h1>Ideas. Guidance. Real Inspiration for Your Perfect Day.</h1><p className="inspirationLead">Expert advice, planning tips, and Portland wedding ideas to help you create a celebration that feels uniquely yours.</p>
      <div className="inspirationSearch"><span aria-hidden="true">⌕</span><span>Search wedding inspiration...</span><Link href="#topics">Search</Link></div>
      <div className="popularTopics">Popular topics: <Link href="#venues">Venues</Link><Link href="#budget">Budget</Link><Link href="#planning">Planning</Link><Link href="/inspiration/topic/honeymoons">Honeymoons</Link></div></div>
      <aside className="inspirationBuilder"><span className="eyebrow">Plan smarter</span><h2>Build your wedding vision in one place.</h2><p>Turn the ideas you love into a personalized plan based on your budget, guest count, location, style and priorities.</p><Link className="btn primary" href="/wedding-builder">Open Wedding Builder →</Link></aside>
    </div></section>

    <section className="section inspirationTopics" id="topics"><div className="container">
      <div className="inspirationHeading"><div><span className="eyebrow">Browse by topic</span><h2>Explore wedding ideas by category</h2></div><span className="meta">{inspirationArticles.length} in-depth guides, organized for easy browsing</span></div>
      <div className="topicGrid">{topics.map(([label,categories,slug,image])=>{const count=inspirationArticles.filter(a=>(categories as readonly string[]).includes(a.category)).length;return <Link key={label} href={`/inspiration/topic/${slug}`} className="topicCard topicCardVisual"><img src={image} alt={`${label} wedding inspiration`} /><span>{label}</span><small>{count} guides</small></Link>})}</div>
    </div></section>

    <section className="section featuredGuides"><div className="container">
      <div className="inspirationHeading"><div><span className="eyebrow">Featured articles</span><h2>Start with these planning essentials</h2><p className="meta">Useful, local guidance for the decisions couples make first.</p></div><Link className="btn primary" href="/wedding-builder">Turn Inspiration Into My Wedding →</Link></div>
      <div className="featuredGuideGrid">{featured.map((a,i)=>{const imgs=["/about/couple-moment.jpg","/about/vendor-moment.jpg","/about/hero-couple.jpg"];return <Link key={a.slug} href={"/inspiration/"+a.slug} className={"featuredGuide featuredGuide"+(i+1)}><img className="featuredGuideImage" src={imgs[i]} alt="" /><span className="eyebrow">{a.category}</span><h3>{a.title}</h3><p>{a.dek}</p><div><span>{a.readTime}</span><strong>Read guide →</strong></div></Link>})}</div>
    </div></section>

    <section className="section inspirationPathways"><div className="container"><div className="inspirationHeading"><div><span className="eyebrow">Helpful resources</span><h2>Find guidance for where you are now</h2></div></div>
      <div className="pathwayGrid">
        <Link href="/inspiration/portland-wedding-planning-checklist" className="pathwayCard" id="planning"><strong>Just engaged?</strong><span>Start with the Portland planning checklist.</span></Link>
        <Link href="/inspiration/best-portland-wedding-venues-guide" className="pathwayCard" id="venues"><strong>Choosing a venue?</strong><span>Compare the details that shape the whole day.</span></Link>
        <Link href="/inspiration/how-much-does-a-wedding-cost-in-portland" className="pathwayCard" id="budget"><strong>Building a budget?</strong><span>Plan around priorities instead of averages.</span></Link>
        <Link href="/planning-tools" className="pathwayCard"><strong>Ready to organize?</strong><span>Open MPW's interactive planning tools.</span></Link>
      </div>
    </div></section>

    <section className="section sageSection"><div className="container editorialCta"><div><span className="eyebrow">From inspiration to a real plan</span><h2>Make the ideas work together.</h2><p className="meta">Use the Wedding Builder to shape a personalized Portland wedding plan, then create or sign into your couple account when you want to save your progress.</p></div><Link className="btn primary" href="/wedding-builder">Build My Wedding</Link></div></section>
  </main>;
}