export const site = {
  name: "My Portland Wedding",
  domain: "myportlandwedding.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  marketSlug: "portland",
  city: "Portland",
  state: "OR",
  region: "Portland Metro + Vancouver",
  tagline: "Plan Local. Love Always."
};

export const oregonServiceCities = [
  "Portland", "Beaverton", "Hillsboro", "Gresham", "Tigard", "Lake Oswego",
  "Oregon City", "Tualatin", "Milwaukie", "Happy Valley", "West Linn", "Wilsonville",
  "Sherwood", "Forest Grove", "Cornelius", "Troutdale", "Sandy", "Canby",
  "Newberg", "McMinnville", "Woodburn", "St. Helens", "Scappoose", "Salem",
  "Keizer", "Silverton", "Dallas", "Monmouth", "Independence", "Albany",
  "Corvallis", "Hood River", "The Dalles", "Tillamook", "Seaside", "Astoria",
  "Eugene"
] as const;

export const plans = {
  free: {
    name: "Free",
    price: 0,
    features: [
      "Basic business listing",
      "One primary category",
      "Business name, city and state",
      "One profile photo",
      "Short business description",
      "Website or phone link",
      "Standard directory visibility",
      "Downloadable Listed Vendor badge"
    ]
  },
  basic: {
    name: "Basic",
    price: 35,
    features: [
      "Everything in Free",
      "Full business profile",
      "Up to 5 gallery photos",
      "Pricing and service-area details",
      "Direct couple inquiry form",
      "Wedding Builder by My Portland Wedding eligibility",
      "Vendor dashboard and lead center",
      "Email and push lead notifications",
      "Supported Vendor badge",
      "Downloadable Supported Vendor badge"
    ]
  },
  professional: {
    name: "Pro",
    price: 45,
    features: [
      "Everything in Basic",
      "Up to 10 gallery photos",
      "Instagram, Facebook, TikTok, Pinterest & YouTube links",
      "One secondary service category",
      "Priority category search placement",
      "Professional Vendor badge",
      "Lead and profile-view analytics",
      "Expanded service details",
      "Browse opted-in Match Opportunities",
      "Up to 5 couple introductions per month",
      "Downloadable Professional Vendor badge"
    ]
  },
  premium: {
    name: "Premium",
    price: 55,
    features: [
      "Everything in Pro",
      "Up to 20 gallery photos",
      "Featured videos on your profile",
      "Rotating homepage circulation",
      "Highest search priority",
      "Up to 3 service categories",
      "Premium Vendor badge",
      "Editorial feature eligibility",
      "Quarterly social-media vendor shoutout",
      "Early access to promotions and new features",
      "Browse opted-in Match Opportunities",
      "Up to 15 couple introductions per month",
      "Downloadable Premium Vendor badge"
    ]
  }
} as const;

export const categories = [
  ["venues","Wedding Venues"],["photography","Photographers"],["videography","Videographers"],
  ["planners","Planners & Coordinators"],["florists","Florists & Flowers"],["catering","Catering"],
  ["djs","DJs, Bands & Musicians"],["hair-makeup","Hair & Makeup"],["cakes","Cakes & Desserts"],
  ["rentals","Rentals, Lighting & Décor"],["officiants","Officiants"],["transportation","Transportation"],
  ["stationery","Invitations & Stationery"],["bridal","Dresses & Bridal Boutiques"],["formalwear","Suits & Tuxedos"],
  ["jewelry","Jewelry"],["photo-booths","Photo Booths"],["lodging","Guest Accommodations"],
  ["mobile-bars","Bartenders & Mobile Bars"],["content-creation","Wedding Content Creators"],
  ["live-entertainment","Live Entertainment"],["honeymoons","Honeymoons & Travel"]
] as const;
