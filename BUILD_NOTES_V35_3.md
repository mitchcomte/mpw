# v35.3 — Admin Vendor Dashboard Preview

- Adds a safe, read-only **Preview Vendor Dashboard** action to each vendor CRM record.
- Adds a **Preview** shortcut in the main Admin Vendor CRM table.
- Admin preview loads the selected vendor through the server-side admin client after verifying the current user is an MPW admin.
- Preview mode shows the real vendor dashboard data, including Refer & Earn, badges, performance, profile, photos, notifications, leads and membership state.
- A persistent **Admin Preview · Read Only** banner identifies preview mode and links back to that vendor's CRM record.
- Vendor forms, buttons, inputs and account actions are disabled while previewing, preventing accidental edits, uploads, billing actions or logout.
- Normal vendor authentication and dashboard behavior are unchanged.
- No database migration required.
