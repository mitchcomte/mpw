# MPW v33.3 — Wedding Builder Conversion Analytics

- Adds source attribution to Wedding Builder vendor-profile clicks going forward.
- Tracks Builder-attributed profile views separately while preserving total vendor profile views.
- Tracks Builder-attributed vendor saves going forward.
- Profile inquiry submissions reached from Wedding Builder are stored with `source = wedding_builder`.
- Admin Analytics vendor table now shows Builder profile views, Builder saves, Builder leads, and appearance-to-view/save/lead conversion rates.
- Wedding Builder funnel now uses Builder-attributed downstream actions instead of implying all MPW profile activity came from Wedding Builder.
- Historical activity is preserved and is not retroactively fabricated; source-specific metrics begin accumulating after this release.
