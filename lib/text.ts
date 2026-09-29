export function decodeDisplayText(value: string | null | undefined) {
  if (!value) return "";
  try {
    return decodeURIComponent(value.replace(/\+/g, "%20"));
  } catch {
    return value.replace(/%26/gi, "&").replace(/%27/gi, "'").replace(/%22/gi, '"');
  }
}

export function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
