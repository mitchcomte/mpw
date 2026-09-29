# My Portland Wedding v12 — Dedicated Admin Login

## Added
- Dedicated `/admin/login` page with separate administrator branding and messaging.
- Dedicated `/api/admin/login` authentication endpoint.
- Admin credentials are validated against Supabase Auth and then against `public.admin_users` before access is granted.
- Non-admin users are immediately signed back out of the admin flow and shown a clear access error.
- `/admin` now redirects unauthenticated users to `/admin/login` instead of the vendor login page.
- Existing vendor login and vendor account flows remain unchanged.

## Important
An administrator still needs a valid Supabase Auth user whose user ID is present in `public.admin_users`.
