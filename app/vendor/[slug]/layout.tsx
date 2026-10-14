import ProfileGalleryOrderEnhancer from "./ProfileGalleryOrderEnhancer";

export default async function VendorProfileLayout({children,params}:{children:React.ReactNode,params:Promise<{slug:string}>}){
 const {slug}=await params;
 return <><ProfileGalleryOrderEnhancer slug={slug}/>{children}</>;
}
