import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "My Portland Wedding — Plan Local. Love Always.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image(){
 return new ImageResponse(
  <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fffaf3",fontFamily:"serif",padding:"70px"}}>
   <div style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
    <div style={{fontSize:78,color:"#315a48",fontStyle:"italic",lineHeight:1.05}}>My Portland Wedding</div>
    <div style={{marginTop:28,fontSize:28,letterSpacing:8,color:"#65776e"}}>PLAN LOCAL. LOVE ALWAYS.</div>
    <div style={{marginTop:38,fontSize:30,color:"#e96b70"}}>♡</div>
    <div style={{marginTop:24,fontSize:26,color:"#465c53"}}>Portland wedding planning, local vendors & Wedding Builder</div>
   </div>
  </div>, size
 );
}
