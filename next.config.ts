import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "Content-Security-Policy", value: "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self' https://checkout.stripe.com; img-src 'self' data: blob: https:; font-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://*.vercel-scripts.com https://vercel.live; frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://checkout.stripe.com https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com; connect-src 'self' https: wss:; worker-src 'self' blob:; upgrade-insecure-requests" }
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      { source: "/admin/:path*", headers: [{key:"X-Robots-Tag",value:"noindex, nofollow, noarchive"}] },
      { source: "/vendor/dashboard/:path*", headers: [{key:"X-Robots-Tag",value:"noindex, nofollow, noarchive"}] },
      { source: "/couple/dashboard/:path*", headers: [{key:"X-Robots-Tag",value:"noindex, nofollow, noarchive"}] },
      { source: "/api/:path*", headers: [{key:"X-Robots-Tag",value:"noindex, nofollow, noarchive"}] },
      { source: "/:path*.(png|jpg|jpeg|webp|avif|svg|ico)", headers: [{key:"Cache-Control",value:"public, max-age=31536000, immutable"}] }
    ];
  },
  async redirects() {
    return [
      { source:"/index.html",destination:"/",permanent:true },
      { source:"/index.php",destination:"/",permanent:true }
    ];
  }
};
export default nextConfig;
