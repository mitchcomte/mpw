import type { MetadataRoute } from "next";
export default function manifest():MetadataRoute.Manifest{return{
  name:"My Portland Wedding",
  short_name:"Portland Wedding",
  description:"Build your Portland wedding and match with local vendors.",
  start_url:"/",
  display:"standalone",
  background_color:"#fffaf8",
  theme_color:"#c98f96",
  icons:[{src:"/icon-192.png",sizes:"192x192",type:"image/png"},{src:"/icon-512.png",sizes:"512x512",type:"image/png"}]
}}
