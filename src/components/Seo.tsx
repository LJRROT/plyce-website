import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSiteUrl } from "@/lib/siteUrl";

/** Primary copy targets: ATS/CRM, Recruiting-Agenturen, Personalberatung, Bewerbermanagement (DE search intent). */
const defaultDescription =
  "plyce: ATS und CRM speziell für Recruiting-Agenturen und Personalberater. Applicant Tracking System (ATS) mit Kandidatenmanagement, Projekten, Pipeline, E-Mail und KI – für kleine bis mittlere Agenturen in Deutschland.";

type RouteSeo = { title: string; description: string };

const routeSeo: Record<string, RouteSeo> = {
  "/": {
    title: "plyce – ATS & CRM für Recruiting-Agenturen | Personalberatung Software",
    description: defaultDescription,
  },
  "/features": {
    title: "ATS & CRM Funktionen für Agenturen | plyce",
    description:
      "Alle Funktionen: Kandidatenmanagement, Bewerbermanagement, Suchmandate, CRM für Kunden, E-Mail, Karriereseite, Reporting und KI – ATS/CRM für Personalberatung und Recruiting-Agenturen.",
  },
  "/ai-agents": {
    title: "KI im Recruiting: ATS-Automatisierung | plyce",
    description:
      "KI-Agenten für CV-Parsing, Matching, Dossiers und Sourcing – integriert in Ihr ATS/CRM für effizienteres Recruiting in der Agentur.",
  },
  "/data-protection": {
    title: "DSGVO & Sicherheit für Recruiting-Software | plyce",
    description:
      "Datenschutz, EU-Hosting und sichere Datenhaltung für ATS/CRM in Personalberatungen – Compliance beim Bewerbermanagement.",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung | plyce ATS/CRM",
    description: "Datenschutzerklärung für plyce – Recruiting-Software und Website der WECO Experts GmbH.",
  },
  "/impressum": {
    title: "Impressum | plyce",
    description: "Impressum und Kontakt der WECO Experts GmbH (Marke plyce, ATS/CRM für Recruiting-Agenturen).",
  },
  "/agb": {
    title: "AGB | plyce",
    description: "Allgemeine Geschäftsbedingungen für die Nutzung der plyce Recruiting-Software (ATS/CRM).",
  },
  "/faq": {
    title: "FAQ: ATS, CRM & Einführung | plyce",
    description:
      "Antworten zu plyce als ATS und CRM für Agenturen: Funktionen, Daten, KI, Integrationen, Vertrag und Einführung.",
  },
  "/implementierung": {
    title: "Einführung ATS/CRM in der Agentur | plyce",
    description:
      "So starten Sie mit plyce: Onboarding, Datenübernahme und produktiver Einsatz Ihres ATS/CRM für Recruiting.",
  },
  "/partnerprogramm": {
    title: "Partnerprogramm Recruiting-Software | plyce",
    description:
      "Partner für Beratungen und Netzwerke: gemeinsam Agenturen bei ATS, CRM und digitalem Recruiting unterstützen.",
  },
  "/sitemap": {
    title: "Sitemap | plyce",
    description: "Alle Seiten von plyce – ATS und CRM Software für Personalberatung und Recruiting-Agenturen.",
  },
};

const seoKeywords =
  "ATS, CRM, Recruiting Software, Applicant Tracking System, Personalberatung, Recruiting-Agentur, Bewerbermanagement, Kandidatenmanagement, Headhunter Software, HR Software Agentur";

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

function setJsonLd(base: string) {
  const id = "plyce-schema-org";
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }

  const graph = [
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
      brand: {
        "@type": "Brand",
        name: "plyce",
      },
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

  el.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const base = getSiteUrl();
    const seo =
      routeSeo[pathname] ??
      ({ title: "plyce – Seite nicht gefunden", description: defaultDescription } satisfies RouteSeo);
    const url = `${base}${pathname}`;
    const imageUrl = `${base}/og-image.png`;

    document.title = seo.title;

    setMetaByName("description", seo.description);
    setMetaByName("keywords", seoKeywords);
    setMetaByName("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

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

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", seo.title);
    setMetaByName("twitter:description", seo.description);
    setMetaByName("twitter:image", imageUrl);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    setJsonLd(base);
  }, [pathname]);

  return null;
};

export default Seo;
