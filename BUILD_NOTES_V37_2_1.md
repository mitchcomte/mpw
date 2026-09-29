# v37.2.1 — Wedding Builder Preview Build Fix

- Fixed a TypeScript/TSX syntax error in `components/WeddingBuilder.tsx` where a React `useEffect` call was accidentally written as `const useEffect(...)`.
- No feature, styling, database, pricing, vendor-package, or Wedding Builder behavior changes.
- This build remains the v37.2 build-first platform preview with only the compile-blocking syntax corrected.
- No Supabase migration required.
