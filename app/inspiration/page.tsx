import Link from "next/link";
import { inspirationArticles } from "../../lib/content";
export const metadata = {
  title: 'Portland Wedding Ideas, Guides & Inspiration',
  description: 'Explore Portland wedding planning guides, local ideas and practical advice for venues, vendors, budgets and creating a celebration that feels like you.',
  alternates: { canonical: '/inspiration' },
  openGraph: { title: 'Portland Wedding Ideas, Guides & Inspiration', description: 'Explore Portland wedding planning guides, local ideas and practical advice for venues, vendors, budgets and creating a celebration that feels like you.', url: '/inspiration', images: [{ url: '/brand/mpw-social-share.png', width: 1200, height: 630, alt: 'My Portland Wedding — Plan Local. Love Always.' }] }
};

export default function Page(){return <main>
<section className="pagehero"><div className="container"><span className="eyebrow">Ideas for the day</span><h1>Portland Wedding Inspiration</h1><p className="meta">Practical local guidance for planning a celebration that feels unmistakably yours.</p></div></section>
<section className="section"><div className="container"><div className="articleGrid">{inspirationArticles.map((a,i)=><Link key={a.slug} href={`/inspiration/${a.slug}`} className={`articleCard articleCard${(i%3)+1}`}><span className="eyebrow">{a.category}</span><h2>{a.title}</h2><p>{a.dek}</p><div className="articleMeta"><span>{a.readTime}</span><span>Read guide →</span></div></Link>)}</div></div></section>
<section className="section sageSection"><div className="container editorialCta"><div><span className="eyebrow">Ready to organize the details?</span><h2>Turn inspiration into a plan.</h2><p className="meta">Use our interactive wedding checklists and planning tools, then create or sign into your couple account when you want to save your progress.</p></div><Link className="btn primary" href="/planning-tools">Open Planning Tools</Link></div></section>
</main>}
