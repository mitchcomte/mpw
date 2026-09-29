import { NextRequest, NextResponse } from "next/server";
import { categories } from "../../../../lib/site";
import { getFoundingAvailability } from "../../../../lib/founding-vendors";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category") || "venues";
  if (!categories.some(([slug]) => slug === category)) {
    return NextResponse.json({ error: "Invalid vendor category." }, { status: 400 });
  }
  const availability = await getFoundingAvailability(category);
  return NextResponse.json(availability, {
    headers: { "Cache-Control": "no-store, max-age=0" }
  });
}
