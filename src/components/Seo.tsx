import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageSeo } from "@/lib/seo";

function setMeta(kind: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${kind}="${key}"]`) as HTMLMetaElement | null;
  if (!el) { el = document.createElement("meta"); el.setAttribute(kind, key); document.head.appendChild(el); }
  el.content = content;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) { el = document.createElement("link"); el.rel = rel; if (hreflang) el.hreflang = hreflang; document.head.appendChild(el); }
  el.href = href;
}

const Seo = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const { isEn, seo, known, currentUrl, deUrl, enUrl, imageUrl, graph } = getPageSeo(pathname);
    document.title = seo.title;
    document.documentElement.lang = isEn ? "en" : "de";
    setMeta("name", "description", seo.description);
    setMeta("name", "robots", seo.noindex || !known ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", currentUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", isEn ? "en_GB" : "de_DE");
    setMeta("property", "og:site_name", "plyce");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);
    setMeta("name", "twitter:image", imageUrl);

    setLink("canonical", currentUrl);
    setLink("alternate", deUrl, "de");
    setLink("alternate", enUrl, "en");
    setLink("alternate", deUrl, "x-default");

    let schema = document.getElementById("plyce-schema-org") as HTMLScriptElement | null;
    if (!schema) { schema = document.createElement("script"); schema.id = "plyce-schema-org"; schema.type = "application/ld+json"; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  }, [pathname]);
  return null;
};

export default Seo;
