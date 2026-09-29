import Link from "next/link";
import { notFound } from "next/navigation";
import Checklist from "../../../components/Checklist";
import { planningChecklists } from "../../../lib/content";
export function generateStaticParams(){return planningChecklists.map(t=>({slug:t.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const tool=planningChecklists.find(x=>x.slug===slug);if(!tool)notFound();return <main>
<section className="checklistHero"><div className="narrow"><span className="eyebrow">{tool.eyebrow}</span><h1>{tool.title}</h1><p>{tool.intro}</p><div className="checkHeroActions"><Link className="btn light" href="/planning-tools">← All Planning Tools</Link><Link className="btn primary" href="/vendors">Find Vendors</Link></div></div></section>
<div className="narrow checklistWrap"><Checklist slug={tool.slug} sections={tool.sections}/></div>
</main>}
