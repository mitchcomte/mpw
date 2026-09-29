import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.myportlandwedding.com";
const title = "Portland Wedding Planner & Local Vendors | My Portland Wedding";
const description = "Plan your Portland wedding with Wedding Builder, local wedding vendors, realistic budgets, checklists and planning tools from My Portland Wedding.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | My Portland Wedding" },
  description,
  keywords: ["Portland wedding","Portland wedding vendors","Portland wedding venues","Oregon wedding planning","Portland wedding planner"],
  openGraph: {
    type:"website", siteName:"My Portland Wedding", url:"/", title, description,
    images:[{url:"/brand/mpw-social-share.png",width:1200,height:630,alt:"My Portland Wedding — Plan Local. Love Always."}]
  },
  twitter:{card:"summary_large_image",title,description,images:["/brand/mpw-social-share.png"]},
  manifest: "/manifest.webmanifest",
  other: {
    "color-scheme": "light",
    "supported-color-schemes": "light"
  },
  appleWebApp: { capable: true, title: "My Portland Wedding", statusBarStyle: "default" },
  icons: { apple: "/icon-192.png", shortcut: "/favicon.ico", icon: [{url:"/favicon.ico",sizes:"any"},{url:"/icon-192.png",sizes:"192x192",type:"image/png"},{url:"/icon-512.png",sizes:"512x512",type:"image/png"}] }
};

export const viewport: Viewport = {
  themeColor: "#fffaf6",
  colorScheme: "light"
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><Header/>{children}<Footer/><Analytics/></body></html>
}
