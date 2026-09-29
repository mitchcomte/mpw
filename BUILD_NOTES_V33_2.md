# MPW v33.2 — Email Badge Image Reliability Fix

- Vendor Badge Package emails now use a fixed, absolute production-domain image URL for the badge artwork.
- This prevents preview/local/NEXT_PUBLIC_SITE_URL values from producing broken badge images in email clients.
- The badge remains clickable and links to the vendor’s MPW profile.
- All v33.1 guided linked-badge functionality remains included.
