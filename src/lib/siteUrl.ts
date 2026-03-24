/** Production site origin, no trailing slash. Set VITE_SITE_URL in .env (e.g. https://plyce.io). */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL as string | undefined;
  const base = (raw && raw.trim() !== "" ? raw : "https://plyce.io").replace(/\/$/, "");
  return base;
}
