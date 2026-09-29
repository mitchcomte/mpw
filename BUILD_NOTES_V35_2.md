# My Portland Wedding v35.2 — Vendor Referral Program

- Added Vendor Dashboard **Refer & Earn** center.
- Reward: one free month of the referring vendor's current paid membership for each qualified new paid vendor.
- Personal referral links prefill/track attribution at vendor signup.
- Referral reward qualifies after the referred vendor's first successful paid Stripe invoice.
- Reward is issued as a Stripe customer balance credit equal to the referrer's current subscription monthly price, so Founding Vendor and normal tier pricing are respected.
- Rewards stack. No self-referrals. One reward per new vendor. Referrer must have an active paid membership when reward is issued.
- Added referral status/history and automated reward email.
- Added `vendor_referrals` migration with RLS; service-role server logic manages referral data/rewards.
- No Wedding Builder matching, homepage circulation, vendor rating, SEO article, or existing subscription pricing logic changed.

Deployment requirement: apply `supabase/migrations/20260917_v35_2_vendor_referrals.sql` before or with deployment.
