import Link from "next/link";
import { inspirationArticles } from "../../lib/content";

export const metadata = {
  title: "Portland Wedding Ideas, Guides & Inspiration",
  description: "Explore Portland wedding planning guides, local ideas and practical advice for venues, vendors, budgets and creating a celebration that feels like you.",
  alternates: { canonical: "/inspiration" },
  openGraph: { title: "Portland Wedding Ideas, Guides & Inspiration", description: "Explore Portland wedding planning guides, local ideas and practical advice for venues, vendors, budgets and creating a celebration that feels like you.", url: "/inspiration", images: [{ url: "/brand/mpw-social-share.png", width: 1200, height: 630, alt: "My Portland Wedding — Plan Local. Love Always." }] }
};

const topics = [
  ["Planning & Timeline","Planning"],["Venues","Venues"],["Budget & Costs","Budget"],
  ["Photography & Video","Photography"],["Style & Décor","Florists"],["Food & Drink","Catering"],
  ["Attire & Beauty","Bridal"],["Guest Experience","Transportation"],["Honeymoons & Travel","Honeymoons"]
] as const;

const featuredSlugs = [
  "portland-wedding-planning-checklist",
  "best-portland-wedding-venues-guide",
  "how-much-does-a-wedding-cost-in-portland"
];

export default function Page(){
  const featured=featuredSlugs.map(slug=>inspirationArticles.find(a=>a.slug===slug)).filter(Boolean) as typeof inspirationArticles;
  return <main>
    <section className="inspirationHubHero"><div className="container inspirationHeroGrid">
      <div><span className="eyebrow">Wedding inspiration</span><h1>Ideas. Guidance.<br/><em>Portland inspiration</em> for your day.</h1><p className="inspirationLead">Practical local advice, planning ideas and thoughtful guides to help you create a celebration that feels unmistakably yours.</p>
      <div className="inspirationSearch"><span aria-hidden="true">⌕</span><span>Explore by topic below</span><Link href="#topics">Browse guides</Link></div>
      <div className="popularTopics">Popular topics: <Link href="#venues">Venues</Link><Link href="#budget">Budget</Link><Link href="#planning">Planning</Link><Link href="#travel">Honeymoons</Link></div></div>
      <aside className="inspirationBuilder"><span className="eyebrow">Plan smarter</span><h2>Build your wedding vision in one place.</h2><p>Turn the ideas you love into a personalized plan based on your budget, guest count, location, style and priorities.</p><Link className="btn primary" href="/wedding-builder">Open Wedding Builder →</Link></aside>
    </div></section>

    <section className="section inspirationTopics" id="topics"><div className="container">
      <div className="inspirationHeading"><div><span className="eyebrow">Browse by topic</span><h2>Explore wedding ideas by category</h2></div><span className="meta">270 in-depth guides, organized for easy browsing</span></div>
      <div className="topicGrid">{topics.map(([label,category])=>{const count=inspirationArticles.filter(a=>a.category===category).length;return <Link key={label} href={"/inspiration/topic/"+encodeURIComponent(category.toLowerCase().replace(/ & /g,"-").replace(/\s+/g,"-"))} className="topicCard"><span>{label}</span><small>{count} guides</small></Link>})}</div>
    </div></section>

    <section className="section featuredGuides"><div className="container">
      <div className="inspirationHeading"><div><span className="eyebrow">Featured articles</span><h2>Start with these planning essentials</h2><p className="meta">Useful, local guidance for the decisions couples make first.</p></div><Link className="btn primary" href="/wedding-builder">Turn Inspiration Into My Wedding →</Link></div>
      <div className="featuredGuideGrid">{featured.map((a,i)=><Link key={a.slug} href={"/inspiration/"+a.slug} className={"featuredGuide featuredGuide"+(i+1)}><span className="eyebrow">{a.category}</span><h3>{a.title}</h3><p>{a.dek}</p><div><span>{a.readTime}</span><strong>Read guide →</strong></div></Link>)}</div>
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
  </main>
}