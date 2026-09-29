import { categories } from "../../lib/site";
import { createSupabaseServerClient } from "../../lib/supabase/server";
import { decodeDisplayText } from "../../lib/text";
import Link from "next/link";
const weight:Record<string,number>={premium:4,professional:3,basic:2,free:1};
export const metadata = {
  title: 'Portland Wedding Vendors & Venues',
  description: 'Browse Portland-area wedding vendors and venues by category and location. Discover local professionals and build a wedding team that fits your plans.',
  alternates: { canonical: '/vendors' },
  openGraph: { title: 'Portland Wedding Vendors & Venues', description: 'Browse Portland-area wedding vendors and venues by category and location. Discover local professionals and build a wedding team that fits your plans.', url: '/vendors', images: [{ url: '/brand/mpw-social-share.png', width: 1200, height: 630, alt: 'My Portland Wedding — Plan Local. Love Always.' }] }
};

export default async function Vendors(){
 return <main>
  <section className="pagehero"><div className="container"><span className="eyebrow">Portland wedding professionals</span><h1>Find Wedding Vendors</h1><p className="meta">Explore local wedding professionals by category and find the people who fit your celebration.</p></div></section>
  <section className="section"><div className="container"><div className="grid cats">{categories.map(([s,n])=><Link className="cat" href={`/vendors/${s}`} key={s}>{n}</Link>)}</div></div></section>
 </main>
}
