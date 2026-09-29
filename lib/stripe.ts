import Stripe from "stripe";

export function createStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export const stripePrices = {
  basic: process.env.STRIPE_PRICE_BASIC,
  professional: process.env.STRIPE_PRICE_PROFESSIONAL,
  premium: process.env.STRIPE_PRICE_PREMIUM
};
