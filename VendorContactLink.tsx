"use client";
import type {ReactNode} from "react";
export default function VendorContactLink({vendorId,kind,source,href,platform,className,children,target,rel}:{vendorId:string,kind:"phone"|"email"|"website"|"social",source:"profile"|"wedding_builder",href:string,platform?:string,className?:string,children:ReactNode,target?:string,rel?:string}){
 const track=()=>{try{navigator.sendBeacon("/api/analytics/vendor-contact",new Blob([JSON.stringify({vendor_id:vendorId,kind,source,platform})],{type:"application/json"}))}catch{fetch("/api/analytics/vendor-contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({vendor_id:vendorId,kind,source,platform}),keepalive:true}).catch(()=>{})}};
 return <a href={href} className={className} target={target} rel={rel} onClick={track}>{children}</a>;
}
