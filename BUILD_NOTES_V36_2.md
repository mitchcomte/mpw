# v36.2 — Social Contact Analytics Build Fix

- Fixes the TypeScript build failure in `components/VendorContactLink.tsx`.
- Adds the optional `platform` prop to the component parameter destructuring so social click analytics can include the social platform in the analytics payload.
- Preserves all v36.1 contact-action analytics and the v36.0 mobile color-scheme fix.
- No Supabase migration required.
