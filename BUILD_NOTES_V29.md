# V29 — Admin Phone Sale Workflow

Builds on V28 and keeps all V27/V28 functionality.

## Admin phone-sale flow
- Adds a dedicated **Close a vendor by phone** panel to Marketplace Admin.
- Capture business/contact/email/phone/website/category/service cities while the decision-maker is on the call.
- Choose Basic, Pro or Premium.
- Explicitly choose whether the sale includes a **Founding Vendor** offer.
- Optional **Include 2nd month free** checkbox.
- Clicking **Close Sale & Send Setup Link** immediately emails a secure setup link; the admin never collects card details.

## Second-month-free behavior
- Phone-sale checkbox automatically creates a single-use internal promotion and Stripe coupon.
- The promotion is attached to that specific sales invite.
- At checkout it is already shown as applied; the vendor does not need to type a code.
- First month bills normally. The one-time 100% coupon is applied to the next monthly invoice.
- Separate admin coupon-code generation from V27 remains available for campaigns and ad-hoc offers.

## Founding Vendor behavior
- Phone sales can explicitly opt in or out of Founding Vendor status.
- Selecting Founding is blocked if the category is already full at sale creation.
- Explicitly non-founding phone sales do not consume or reserve a Founding Vendor spot.
- Existing non-phone sales preserve the prior automatic Founding behavior when a spot is available.

## Database
Migration `20260914_v29_phone_sales_workflow.sql` adds phone-sale metadata to `vendor_sales_invites`:
- `sales_channel`
- `founding_vendor_requested`
- `promo_code`
