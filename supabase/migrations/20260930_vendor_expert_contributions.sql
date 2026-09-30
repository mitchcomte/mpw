create table if not exists public.expert_questions (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  prompt text not null,
  article_slug text,
  status text not null default 'active' check (status in ('active','paused','archived')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.vendor_expert_contributions (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.expert_questions(id) on delete cascade,
  vendor_id uuid not null references public.vendor_profiles(id) on delete cascade,
  response text not null check (char_length(response) between 20 and 1200),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  editor_note text,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  unique(question_id,vendor_id)
);

alter table public.expert_questions enable row level security;
alter table public.vendor_expert_contributions enable row level security;
grant select on public.expert_questions to authenticated;
grant select on public.vendor_expert_contributions to anon, authenticated;

create policy "authenticated vendors can view active expert questions"
on public.expert_questions for select to authenticated using (status='active');

create policy "approved expert contributions are public"
on public.vendor_expert_contributions for select to anon, authenticated using (status='approved');

create index expert_questions_category_status_idx on public.expert_questions(category,status,sort_order);
create index vendor_expert_contributions_vendor_status_idx on public.vendor_expert_contributions(vendor_id,status,created_at desc);

insert into public.expert_questions(category,prompt,article_slug,sort_order) values
('venues','What is one question every couple should ask before signing a wedding venue contract?','questions-to-ask-portland-wedding-venue',10),
('photography','What should couples look for when comparing wedding photographers?','how-to-choose-portland-wedding-photographer',10),
('florists','What is one floral expense couples commonly underestimate?','portland-wedding-flower-cost-guide',10),
('planners','What is one wedding expense or planning detail couples commonly forget?','portland-wedding-planning-mistakes',10),
('djs','What helps create a wedding reception dance floor guests actually want to join?','how-to-choose-portland-wedding-dj',10),
('cakes','How much wedding cake or dessert should couples plan per guest?','portland-wedding-cake-guide',10),
('transportation','When does a wedding actually need professional transportation?','portland-wedding-transportation-guide',10),
('jewelry','What should couples consider when choosing a wedding band they will wear for years?','how-to-choose-wedding-ring',10);
