type Props={
  plan?:string|null;
  foundingVendor?:boolean|null;
  className?:string;
};

export default function VendorTierBadge({plan,foundingVendor,className=""}:Props){
  const extra=className?` ${className}`:"";
  if(foundingVendor) return <span className={`badge foundingVendorBadge${extra}`}>✦ Founding Vendor</span>;
  if(plan==="basic") return <span className={`badge mpwVendorBadge${extra}`}>Supported Vendor</span>;
  if(plan==="professional") return <span className={`badge proVendorBadge${extra}`}>Professional Vendor</span>;
  if(plan==="premium") return <span className={`badge premiumBadge${extra}`}>Premium Vendor</span>;
  return null;
}
