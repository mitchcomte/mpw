import { createHash } from "crypto";
import { createAdminClient } from "./supabase/admin";

export async function consumeBuilderQuota(req: Request, kind: "match" | "lead") {
  if(process.env.VERCEL_ENV==="preview"||process.env.MPW_PREVIEW_MODE==="1") return true;
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const ua = req.headers.get("user-agent") || "unknown";
  const fingerprint = createHash("sha256").update(`${forwarded}|${ua}`).digest("hex");
  const limit = kind === "lead" ? 6 : 30;
  const db = createAdminClient();
  const { data, error } = await db.rpc("consume_wedding_builder_quota", {
    p_fingerprint: fingerprint,
    p_kind: kind,
    p_limit: limit
  });
  if (error) throw error;
  return data === true;
}
