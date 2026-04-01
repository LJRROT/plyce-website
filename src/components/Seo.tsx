import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSiteUrl } from "@/lib/siteUrl";

/** Primary copy targets: ATS/CRM, Recruiting-Agenturen, Personalberatung, Bewerbermanagement (DE search intent). */
const defaultDescription =
  "plyce: ATS und CRM speziell für Recruiting-Agenturen und Personalberater. Applicant Tracking System (ATS) mit Kandidatenmanagement, Projekten, Pipeline, E-Mail und KI – für kleine bis mittlere Agenturen in Deutschland.";

type RouteSeo = {
  title: string;
  description: string;
  breadcrumbLabel: string;
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
          text: "plyce ist ein cloudbasiertes ATS und CRM für Personalberatungen und kleinere bis mittlere Recruiting-Agenturen. Sie führen Kandidaten, Projekte, Kunden und Kommunikation in einem System – ergänzt um integrierte KI-Funktionen für Parsing, Matching, Texte und Reporting.",
        },
      },
      {
        "@type": "Question",
        name: "Für wen eignet sich plyce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Für Teams, die strukturiert arbeiten möchten: von der Kandidatenakte über die Suchmandate bis zu E-Mail, Aufgaben und Auswertungen. plyce richtet sich an Agenturen, die weniger Tool-Wechsel und mehr durchgängige Prozesse wollen.",
        },
      },
      {
        "@type": "Question",
        name: "Wo werden meine Daten gespeichert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Verarbeitung erfolgt in professioneller Cloud-Infrastruktur innerhalb der EU bzw. des EWR, soweit nicht im Einzelfall etwas anderes ausdrücklich vereinbart ist.",
        },
      },
      {
        "@type": "Question",
        name: "Welche KI-Funktionen bietet plyce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "plyce unterstützt u. a. bei CV-Parsing, Zusammenfassungen, Matching-Vorschlägen, Textgenerierung (z. B. Anschreiben, Reports) und weiteren Agenten-Funktionen.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich plyce testen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Fordern Sie über „Request Demo" eine persönliche Vorstellung an – wir zeigen Ihnen die Module, die für Ihre Agentur relevant sind.",
        },
      },
    ],
  },
];

const routeSeo: Record<string, RouteSeo> = {
  "/": {
    title: "plyce – ATS & CRM für Recruiting-Agenturen | Personalberatung Software",
    description: defaultDescription,
    breadcrumbLabel: "Startseite",
  },
  "/features": {
    title: "ATS & CRM Funktionen für Agenturen | plyce",
    description:
      "Alle Funktionen: Kandidatenmanagement, Bewerbermanagement, Suchmandate, CRM für Kunden, E-Mail, Karriereseite, Reporting und KI – ATS/CRM für Personalberatung und Recruiting-Agenturen.",
    breadcrumbLabel: "Features",
  },
  "/ai-agents": {
    title: "KI im Recruiting: ATS-Automatisierung | plyce",
    description:
      "KI-Agenten für CV-Parsing, Matching, Dossiers und Sourcing – integriert in Ihr ATS/CRM für effizienteres Recruiting in der Agentur.",
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
    description: "Impressum und Kontakt der WECO Experts GmbH (Marke plyce, ATS/CRM für Recruiting-Agenturen).",
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
      "Antworten zu plyce als ATS und CRM für Agenturen: Funktionen, Daten, KI, Integrationen, Vertrag und Einführung.",
    breadcrumbLabel: "FAQ",
    jsonLdExtra: faqStructuredData,
  },
  "/implementierung": {
    title: "Einführung ATS/CRM in der Agentur | plyce",
    description:
      "So starten Sie mit plyce: Onboarding, Datenübernahme und produktiver Einsatz Ihres ATS/CRM für Recruiting.",
    breadcrumbLabel: "Implementierung",
  },
  "/partnerprogramm": {
    title: "Partnerprogramm Recruiting-Software | plyce",
    description:
      "Partner für Beratungen und Netzwerke: gemeinsam Agenturen bei ATS, CRM und digitalem Recruiting unterstützen.",
    breadcrumbLabel: "Partnerprogramm",
  },
  "/sitemap": {
    title: "Sitemap | plyce",
    description: "Alle Seiten von plyce – ATS und CRM Software für Personalberatung und Recruiting-Agenturen.",
    breadcrumbLabel: "Sitemap",
  },
};

const seoKeywords =
  "ATS, CRM, Recruiting Software, Applicant Tracking System, Personalberatung, Recruiting-Agentur, Bewerbermanagement, Kandidatenmanagement, Headhunter Software, HR Software Agentur";

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

function setJsonLd(base: string, pathname: string, seo: RouteSeo) {
  const id = "plyce-schema-org";
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script") as HTMLScriptElement;
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: "plyce",
      inLanguage: "de-DE",
      description: defaultDescription,
      publisher: { "@id": `${base}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: "WECO Experts GmbH",
      url: base,
      logo: `${base}/plyce-logo-mark.png`,
      brand: { "@type": "Brand", name: "plyce" },
      sameAs: ["https://weco-experts.com"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${base}/#software`,
      name: "plyce",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: base,
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
    },
  ];

  // BreadcrumbList for every page
  if (pathname !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
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
          item: `${base}${pathname}`,
        },
      ],
    });
  }

  // Page-specific extra structured data (e.g. FAQPage)
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
      isKnownRoute
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
    setMetaByProperty("og:image:alt", "plyce – ATS und CRM für Recruiting-Agenturen");
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
    setJsonLd(base, pathname, seo);
  }, [pathname]);

  return null;
};

export default Seo;
