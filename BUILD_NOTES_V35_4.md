# v35.4 — Vendor Marketplace Category Pages

- Fixed missing vendor imagery on category pages by loading each vendor's first `vendor_photos` image from Supabase storage.
- Uses the approved uncropped image presentation: a sharp `object-fit: contain` foreground over a soft same-photo backdrop.
- Reworked category results into a polished two-column desktop / one-column mobile marketplace grid.
- Added category-page filters for search, service area, wedding style, price range, availability, and sorting.
- Venue pages swap availability for guest-capacity filtering.
- Preserved existing My Portland Wedding branding, VendorTierBadge, vendor descriptions, ratings, membership ranking, profile URLs, and SEO metadata.
- No database migration required.
