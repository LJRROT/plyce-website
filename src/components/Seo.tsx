import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSiteUrl } from "@/lib/siteUrl";

/** Primary copy targets: ATS/CRM, Personalberatungen, Recruiter, Bewerbermanagement (DE search intent). ~155 Zeichen für SERP-Snippets. */
const defaultDescription =
  "plyce – ATS & CRM für Personalberatungen und Recruiter: Kandidaten, Projekte, Kunden und KI in einer Plattform. Bewerbermanagement mit EU-Hosting und Fokus auf DSGVO.";

type RouteSeo = {
  title: string;
  description: string;
  breadcrumbLabel: string;
  /** Wenn gesetzt: Seite nicht in Suchmaschinen indexieren (z. B. versteckte Landingpages). */
  noindex?: boolean;
  jsonLdExtra?: () => Record<string, unknown>[];
};

/* ---------- FAQ structured data (Google rich snippets) ---------- */
const faqStructuredData = (): Record<string, unknown>[] => [
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist plyce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ein cloudbasiertes ATS und CRM für Personalberatungen und Recruiter. Sie führen Kandidaten, Projekte, Kunden und Kommunikation in einem System – ergänzt um integrierte KI-Funktionen z. B. für Parsing, Matching, Texte und Reporting sowie vieles mehr.",
        },
      },
      {
        "@type": "Question",
        name: "Für wen eignet sich plyce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Für Personalberatungen und Recruiter, die Kandidaten, Projekte, Kunden und Kommunikation in einem System bündeln wollen. Ideal für alle, die KI gezielt einsetzen, Prozesse automatisieren und ohne Toolwechsel effizient arbeiten möchten.",
        },
      },
      {
        "@type": "Question",
        name: "Wo werden meine Daten gespeichert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ihre Daten werden bei Amazon Web Services (AWS) in der Region eu-central-1 (Frankfurt) in der EU gespeichert und verarbeitet und unterliegen damit den Anforderungen der EU-DSGVO. Abweichungen nur bei ausdrücklicher Vereinbarung (z. B. bestimmte KI-Anbindungen).",
        },
      },
      {
        "@type": "Question",
        name: "Welche KI-Funktionen bietet plyce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "plyce unterstützt u. a. CV-Parsing, Zusammenfassungen, Matching-Vorschläge, Textgenerierung (z. B. Anschreiben, Reports) und weitere Automatisierungen. Technisch sind u. a. Anbindungen an OpenAI (https://openai.com) und Mistral AI (https://mistral.ai) vorgesehen. Die eingesetzten AI Agents und ihre Leistungsfähigkeit sind auf der Produktseite AI Agents beschrieben.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich plyce testen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Ja. Fordern Sie über \u201ERequest Demo\u201C eine persönliche Vorstellung an \u2013 wir zeigen Ihnen die Module, die für Sie relevant sind.',
        },
      },
    ],
  },
];

const routeSeo: Record<string, RouteSeo> = {
  "/": {
    title: "plyce – ATS & CRM für Personalberatungen und Recruiter | Software",
    description: defaultDescription,
    breadcrumbLabel: "Startseite",
  },
  "/features": {
    title: "ATS & CRM Funktionen für Personalberatungen und Recruiter | plyce",
    description:
      "Alle Funktionen: Kandidatenmanagement, Bewerbermanagement, Suchmandate, CRM für Kunden, E-Mail, Karriereseite, Reporting und KI – ATS/CRM für Personalberatungen und Recruiter.",
    breadcrumbLabel: "Features",
  },
  "/ai-agents": {
    title: "AI Agents im Recruiting: ATS-Automatisierung | plyce",
    description:
      "AI Agents für CV-Parsing, Matching, Dossiers und Sourcing – integriert in Ihr ATS/CRM für Personalberatungen und Recruiter.",
    breadcrumbLabel: "AI Agents",
  },
  "/data-protection": {
    title: "DSGVO & Sicherheit für Recruiting-Software | plyce",
    description:
      "Datenschutz, EU-Hosting und sichere Datenhaltung für ATS/CRM in Personalberatungen – Compliance beim Bewerbermanagement.",
    breadcrumbLabel: "Data Protection",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung | plyce ATS/CRM",
    description: "Datenschutzerklärung für plyce – Recruiting-Software und Website der WECO Experts GmbH.",
    breadcrumbLabel: "Datenschutzerklärung",
  },
  "/impressum": {
    title: "Impressum | plyce",
    description: "Impressum und Kontakt der WECO Experts GmbH (Marke plyce, ATS/CRM für Personalberatungen und Recruiter).",
    breadcrumbLabel: "Impressum",
  },
  "/agb": {
    title: "AGB | plyce",
    description: "Allgemeine Geschäftsbedingungen für die Nutzung der plyce Recruiting-Software (ATS/CRM).",
    breadcrumbLabel: "AGB",
  },
  "/faq": {
    title: "FAQ: ATS, CRM & Einführung | plyce",
    description:
      "Antworten zu plyce als ATS und CRM für Personalberatungen und Recruiter: Funktionen, Daten, KI, Integrationen, Vertrag und Einführung.",
    breadcrumbLabel: "FAQ",
    jsonLdExtra: faqStructuredData,
  },
  "/implementierung": {
    title: "Einführung ATS/CRM in der Personalberatung | plyce",
    description:
      "So starten Sie mit plyce: Onboarding, Datenübernahme und produktiver Einsatz Ihres ATS/CRM für Personalberatungen und Recruiter.",
    breadcrumbLabel: "Implementierung",
  },
  "/partnerprogramm": {
    title: "Partnerprogramm | plyce ATS & CRM",
    description:
      "Partnerprogramm für plyce: Empfehlung, Projektbegleitung oder Technologiepartnerschaft für Personalberatungen und Recruiter, mit klarem Ablauf und Regeln.",
    breadcrumbLabel: "Partnerprogramm",
  },
  "/sitemap": {
    title: "Sitemap | plyce",
    description: "Alle Seiten von plyce – ATS und CRM Software für Personalberatungen und Recruiter.",
    breadcrumbLabel: "Sitemap",
  },
  "/pricing": {
    title: "Preise – ATS & CRM für Recruiter | plyce",
    description:
      "Transparente Preise für plyce ATS & CRM: ein Produkt, ein Preis, alle Features und AI Agents inklusive. Market-Entry-Angebot mit 20 % Rabatt in 2026.",
    breadcrumbLabel: "Preise",
  },
};

/** Öffentliche Seiten in logischer Reihenfolge (Produkt → Service → Rechtliches) für strukturierte Daten / Google. */
const SITE_STRUCTURE_PATHS = [
  "/",
  "/features",
  "/ai-agents",
  "/pricing",
  "/faq",
  "/implementierung",
  "/data-protection",
  "/partnerprogramm",
  "/impressum",
  "/datenschutz",
  "/agb",
  "/sitemap",
] as const;

const seoKeywords =
  "ATS, CRM, Recruiting Software, Applicant Tracking System, Personalberatung, Personalberatungen, Recruiter, Recruiting-Agentur, Bewerbermanagement, Kandidatenmanagement, Headhunter Software, HR Software Agentur";

/* ---------- helpers ---------- */

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkRel(rel: string, href: string, extraAttrs?: Record<string, string>) {
  const selector = extraAttrs
    ? `link[rel="${rel}"]${Object.entries(extraAttrs).map(([k, v]) => `[${k}="${v}"]`).join("")}`
    : `link[rel="${rel}"]`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    if (extraAttrs) Object.entries(extraAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.href = href;
}

function buildSiteStructureItemList(base: string): Record<string, unknown> {
  const itemListElement: Record<string, unknown>[] = [];
  let position = 1;
  for (const p of SITE_STRUCTURE_PATHS) {
    const conf = routeSeo[p];
    if (!conf || conf.noindex) continue;
    const url = p === "/" ? `${base}/` : `${base}${p}`;
    itemListElement.push({
      "@type": "ListItem",
      position: position++,
      name: conf.breadcrumbLabel,
      item: url,
    });
  }
  return {
    "@type": "ItemList",
    "@id": `${base}/#site-structure`,
    name: "plyce – Seiten und Bereiche",
    description:
      "Strukturierte Übersicht der Website: Produkt (ATS, CRM, KI), Hilfe, Implementierung, Datenschutz sowie Impressum und weitere rechtliche Informationen.",
    numberOfItems: itemListElement.length,
    itemListElement,
  };
}

/** Kürzerer Seitentitel für JSON-LD name/headline (ohne Pipe-Suffix). */
function jsonLdPageName(seo: RouteSeo): string {
  const t = seo.title;
  const pipe = t.indexOf("|");
  return (pipe === -1 ? t : t.slice(0, pipe)).trim();
}

function setJsonLd(base: string, pathname: string, seo: RouteSeo, isKnownRoute: boolean) {
  const id = "plyce-schema-org";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script") as HTMLScriptElement;
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }

  const pageUrl = pathname === "/" ? `${base}/` : `${base}${pathname}`;
  const ogImage = `${base}/og-image.png`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: `${base}/`,
      name: "plyce",
      alternateName: ["plyce ATS", "plyce CRM"],
      inLanguage: "de-DE",
      description: defaultDescription,
      publisher: { "@id": `${base}/#organization` },
      about: { "@id": `${base}/#software` },
    },
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: "WECO Experts GmbH",
      alternateName: "plyce",
      url: `${base}/`,
      logo: {
        "@type": "ImageObject",
        url: `${base}/plyce-logo-mark.png`,
      },
      brand: { "@type": "Brand", name: "plyce" },
      sameAs: ["https://weco-experts.com"],
      knowsAbout: [
        "Applicant Tracking System",
        "Recruiting-Software",
        "Personalberatung",
        "Customer-Relationship-Management",
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${base}/#software`,
      name: "plyce",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: `${base}/`,
      description: defaultDescription,
      featureList: [
        "Applicant Tracking System (ATS)",
        "CRM für Kunden und Kontakte",
        "Kandidaten- und Bewerbermanagement",
        "Recruiting-Pipeline und Projekte",
        "E-Mail-Integration",
        "KI-gestützte Automatisierung",
      ],
      provider: { "@id": `${base}/#organization` },
      image: ogImage,
    },
    buildSiteStructureItemList(base),
    {
      "@type": "SiteNavigationElement",
      "@id": `${base}/#site-navigation`,
      name: "Hauptnavigation",
      hasPart: [
        { "@type": "WebPage", name: "AI Agents", url: `${base}/ai-agents` },
        { "@type": "WebPage", name: "Features", url: `${base}/features` },
        { "@type": "WebPage", name: "Preise", url: `${base}/pricing` },
        { "@type": "WebPage", name: "FAQ", url: `${base}/faq` },
      ],
    },
  ];

  if (isKnownRoute && seo.breadcrumbLabel !== "" && !seo.noindex) {
    const webPage: Record<string, unknown> = {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: jsonLdPageName(seo),
      headline: seo.title,
      description: seo.description,
      isPartOf: { "@id": `${base}/#website` },
      about: { "@id": `${base}/#software` },
      inLanguage: "de-DE",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
        width: 1200,
        height: 630,
      },
    };
    if (pathname !== "/") {
      webPage.breadcrumb = { "@id": `${pageUrl}#breadcrumb` };
    }
    graph.push(webPage);
  }

  if (pathname !== "/" && isKnownRoute && seo.breadcrumbLabel !== "" && !seo.noindex) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: `${base}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: seo.breadcrumbLabel,
          item: pageUrl,
        },
      ],
    });
  }

  if (seo.jsonLdExtra) {
    graph.push(...seo.jsonLdExtra());
  }

  el.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

/* ---------- component ---------- */

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const base = getSiteUrl();
    const isKnownRoute = Object.prototype.hasOwnProperty.call(routeSeo, pathname);
    const seo: RouteSeo =
      routeSeo[pathname] ??
      ({ title: "plyce – Seite nicht gefunden", description: defaultDescription, breadcrumbLabel: "" });
    const url = `${base}${pathname}`;
    const imageUrl = `${base}/og-image.png`;

    document.title = seo.title;

    setMetaByName("description", seo.description);
    setMetaByName("keywords", seoKeywords);
    setMetaByName(
      "robots",
      seo.noindex
        ? "noindex, nofollow"
        : isKnownRoute
          ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          : "noindex, nofollow",
    );

    // OG
    setMetaByProperty("og:title", seo.title);
    setMetaByProperty("og:description", seo.description);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:image", imageUrl);
    setMetaByProperty("og:image:width", "1200");
    setMetaByProperty("og:image:height", "630");
    setMetaByProperty("og:image:alt", "plyce – ATS und CRM für Personalberatungen und Recruiter");
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:locale", "de_DE");
    setMetaByProperty("og:site_name", "plyce");

    // Twitter
    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", seo.title);
    setMetaByName("twitter:description", seo.description);
    setMetaByName("twitter:image", imageUrl);

    // Canonical
    setLinkRel("canonical", url);

    // hreflang tags
    setLinkRel("alternate", url, { hreflang: "de" });
    setLinkRel("alternate", url, { hreflang: "x-default" });

    // JSON-LD
    setJsonLd(base, pathname, seo, isKnownRoute);
  }, [pathname]);

  return null;
};

export default Seo;
