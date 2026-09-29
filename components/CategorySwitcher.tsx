"use client";

import { useRouter } from "next/navigation";
import { categories } from "../lib/site";

export default function CategorySwitcher({ currentCategory = "" }: { currentCategory?: string }) {
  const router = useRouter();

  return (
    <label className="categorySwitcher">
      <span>Browse category</span>
      <select
        aria-label="Browse vendor category"
        value={currentCategory}
        onChange={(event) => {
          const value = event.target.value;
          router.push(value ? `/vendors/${value}` : "/vendors");
        }}
      >
        <option value="">All vendor categories</option>
        {categories.map(([slug, name]) => (
          <option key={slug} value={slug}>{name}</option>
        ))}
      </select>
    </label>
  );
}
