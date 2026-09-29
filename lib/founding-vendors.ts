import { createAdminClient } from "./supabase/admin";
import { categories, site } from "./site";

export const FOUNDING_VENDOR_LIMIT = 5;
export const FOUNDING_VENDOR_PRICE = 35;

export type FoundingAvailability = {
  category: string;
  categoryName: string;
  claimed: number;
  reserved: number;
  remaining: number;
  available: boolean;
};

export async function getFoundingAvailability(category: string): Promise<FoundingAvailability> {
  const categoryName = categories.find(([slug]) => slug === category)?.[1] || category;
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { category, categoryName, claimed: 0, reserved: 0, remaining: 0, available: false };
  }

  const db = createAdminClient();
  const now = new Date().toISOString();
  const { data } = await db
    .from("founding_vendor_memberships")
    .select("status,reserved_until")
    .eq("market_slug", site.marketSlug)
    .eq("category", category);

  const rows = data || [];
  const claimed = rows.filter((row: any) => ["active", "forfeited"].includes(row.status)).length;
  const reserved = rows.filter((row: any) => row.status === "reserved" && (!row.reserved_until || row.reserved_until >= now)).length;
  const occupied = Math.min(FOUNDING_VENDOR_LIMIT, claimed + reserved);
  const remaining = Math.max(0, FOUNDING_VENDOR_LIMIT - occupied);

  return { category, categoryName, claimed, reserved, remaining, available: remaining > 0 };
}

export async function getAllFoundingAvailability() {
  return Promise.all(categories.map(([slug]) => getFoundingAvailability(slug)));
}
