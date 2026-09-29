# V11 — Consumer Terms + Legal Consent

- Added `/consumer-terms` with consumer-specific account, vendor relationship, inquiry, review, planning-tool, content, transaction, acceptable-use, and liability terms.
- Added Consumer Terms link to the global footer alongside Terms of Use, Vendor Terms, and Privacy Policy.
- Couple signup now requires an unchecked affirmative consent box linking to Consumer Terms, Terms of Use, and Privacy Policy.
- Couple signup server route rejects account creation when legal consent is absent.
- Consent/version is also placed in Supabase Auth signup metadata (`consumer_terms_consent`, `consumer_terms_version`).
- Clarifies that a free couple account does not enroll a consumer in a vendor membership or recurring vendor subscription.
- Cross-linked Consumer Terms from general Terms and Privacy Policy.
- Existing vendor recurring-billing disclosures, mandatory checkbox authorization, cancellation policy, and vendor legal pages remain intact.

Legal text is a product draft and should be reviewed by qualified counsel before public launch.
