# MPW v32.0
- Site Health: added downloadable human-readable TXT report and full JSON report so scan results can be shared for diagnosis.
- Header: replaced the decorative outline heart next to My Portland Wedding with the approved heart-and-sprig image only. No other header branding was changed.
- Admin: added Analytics Center with 7/30/90/365-day views for vendor profile views, Wedding Builder completed roster sessions, vendor appearances, qualified leads, Builder lead conversion, saves, vendor/couple counts, estimated MRR, average Builder budget, category demand and funnel.
- Analytics Center uses MPW's existing Supabase event/match/lead/subscription data. It explicitly does not fabricate historical Wedding Builder starts because those starts were only sent to Vercel Analytics and were not persisted in Supabase.
