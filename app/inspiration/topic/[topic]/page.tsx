import Link from "next/link";
import { notFound } from "next/navigation";
import { inspirationArticles } from "../../../../lib/content";

const topicMap: Record<string,{label:string;categories:string[];description:string}> = {
  planning:{label:"Planning & Timeline",categories:["Planning"],description:"Practical Portland wedding planning guides for timelines, checklists, priorities and the decisions that keep the day moving."},
  venues:{label:"Venues",categories:["Venues"],description:"Portland wedding venue guidance to help you compare spaces, contracts, logistics and the details that shape the whole celebration."},
  budget:{label:"Budget & Costs",categories:["Budget"],description:"Wedding budget guidance for setting priorities, understanding tradeoffs and making your Portland wedding dollars work harder."},
  photography:{label:"Photography & Video",categories:["Photography","Videography","Content Creation"],description:"Guidance for choosing photography, video and wedding content professionals and planning coverage that reflects what matters to you."},
  florists:{label:"Style & Décor",categories:["Florists","Rentals","Stationery"],description:"Wedding style, flowers, rentals and décor guidance for creating a celebration that feels cohesive and personal."},
  catering:{label:"Food & Drink",categories:["Catering","Cakes","Mobile Bars"],description:"Planning guidance for wedding catering, cakes, drinks and the guest experience around food and service."},
  bridal:{label:"Attire & Beauty",categories:["Bridal","Formalwear","Hair & Makeup","Jewelry"],description:"Wedding attire, beauty and jewelry guidance for planning the details you wear and carry through the day."},
  transportation:{label:"Guest Experience",categories:["Transportation","Lodging","DJs","Live Entertainment","Photo Booths"],description:"Ideas and practical guidance for transportation, lodging, entertainment and a smoother experience for your wedding guests."},
  honeymoons:{label:"Honeymoons & Travel",categories:["Honeymoons"],description:"Honeymoon and wedding travel guidance for planning the trip around your timing, priorities and practical requirements."}
};

export function generateStaticParams(){return Object.keys(topicMap).map(topic=>({topic}));}

export async function generateMetadata({params}:{params:Promise<{topic:string}>}){
  const {topic}=await params; const data=topicMap[topic]; if(!data)return {};
  return {title:`${data.label} Wedding Inspiration | My Portland Wedding`,description:data.description,alternates:{canonical:`/inspiration/topic/${topic}`}};
}

export default async function TopicPage({params}:{params:Promise<{topic:string}>}){
  const {topic}=await params; const data=topicMap[topic]; if(!data)notFound();
  const articles=inspirationArticles.filter(a=>data.categories.includes(a.category));
  return <main>
    <section className="articleHero"><div className="container narrow"><span className="eyebrow">Wedding inspiration</span><h1>{data.label}</h1><p className="articleDek">{data.description}</p><Link className="btn light" href="/inspiration">← Back to Inspiration</Link></div></section>
    <section className="section"><div className="container"><div className="inspirationHeading"><div><span className="eyebrow">Explore the topic</span><h2>{articles.length} helpful guides</h2></div><Link className="btn primary" href="/wedding-builder">Build My Wedding →</Link></div>
      <div className="featuredGuideGrid">{articles.map(a=><Link key={a.slug} href={`/inspiration/${a.slug}`} className="featuredGuide"><span className="eyebrow">{a.category}</span><h3>{a.title}</h3><p>{a.dek}</p><div><span>{a.readTime}</span><strong>Read guide →</strong></div></Link>)}</div>
    </div></section>
  </main>;
}