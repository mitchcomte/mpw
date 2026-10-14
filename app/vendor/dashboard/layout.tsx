import type {ReactNode} from "react";
import VendorPhotoManagerEnhancer from "./VendorPhotoManagerEnhancer";

export default function VendorDashboardLayout({children}:{children:ReactNode}){
 return <><VendorPhotoManagerEnhancer/>{children}</>;
}
