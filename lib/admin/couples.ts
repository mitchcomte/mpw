import { createAdminClient } from "../supabase/admin";

export type AdminAuthUser = {
  id: string;
  email: string | null;
  created_at: string | null;
  last_sign_in_at: string | null;
  email_confirmed_at: string | null;
};

export async function getAllAuthUsers(): Promise<Map<string, AdminAuthUser>> {
  const admin = createAdminClient();
  const users = new Map<string, AdminAuthUser>();
  const perPage = 1000;
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage });
    if (error) break;
    const batch = data?.users || [];
    for (const u of batch) {
      users.set(u.id, {
        id: u.id,
        email: u.email || null,
        created_at: u.created_at || null,
        last_sign_in_at: u.last_sign_in_at || null,
        email_confirmed_at: u.email_confirmed_at || null,
      });
    }
    if (batch.length < perPage) break;
  }
  return users;
}
