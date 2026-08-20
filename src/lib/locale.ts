export type Locale = "de" | "en";

export const getLocaleFromPath = (pathname: string): Locale =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";

export const stripLocalePrefix = (pathname: string) => {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname || "/";
};

export const localizePath = (pathname: string, locale: Locale) => {
  const base = stripLocalePrefix(pathname);
  if (locale === "en") return base === "/" ? "/en" : `/en${base}`;
  return base;
};

export const localizeHref = (href: string, locale: Locale) => {
  if (!href.startsWith("/")) return href;
  const [path, hash] = href.split("#");
  const localized = localizePath(path, locale);
  return hash ? `${localized}#${hash}` : localized;
};
