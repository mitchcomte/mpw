create table if not exists public.inspiration_article_features (
  id uuid primary key default gen_random_uuid(),
  article_slug text not null,
  vendor_id uuid not null references public.vendor_profiles(id) on delete cascade,
  eyebrow text not null default 'Featured Portland Wedding Pro',
  headline text,
  blurb text,
  image_url text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  unique(article_slug,vendor_id)
);
alter table public.inspiration_article_features enable row level security;
grant select on public.inspiration_article_features to anon, authenticated;
create policy "active article vendor features are public" on public.inspiration_article_features for select to anon, authenticated using (active=true);
create index inspiration_article_features_slug_idx on public.inspiration_article_features(article_slug,active,sort_order);