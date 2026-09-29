# MPW v32.8 — Badge Package Email Build Fix

- Fixed incorrect relative imports in `app/api/admin/badge-package-email/route.ts`.
- The route is four directories below the project root, so imports now use `../../../../lib/...` instead of `../../../../../lib/...`.
- Corrected imports for Supabase server client, Supabase admin client, and email helpers.
- No functional/UI changes beyond the compile fix.
