import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSiteUrl } from "@/lib/siteUrl";
import { stripLocalePrefix } from "@/lib/locale";

type RouteSeo = { title: string; description: string; noindex?: boolean };

const de: Record<string, RouteSeo> = {
  "/": { title: "plyce – ATS & CRM für Personalberater und Recruiter", description: "Die KI-native Recruiting-Plattform für Personalberatungen: Kandidaten, Projekte, Kunden und 14 AI Agents in einem System. EU-Hosting und DSGVO-orientierte Prozesse." },
  "/features": { title: "ATS & CRM Funktionen für Personalberater | plyce", description: "Alle Funktionen: Kandidaten- und Bewerbermanagement, Suchmandate, Kunden-CRM, E-Mail, Reporting, Automatisierung und KI für Personalberater." },
  "/plyce-time": { title: "plyce time – Freelancer Management, Timesheets & Invoicing | plyce", description: "Freelancer- und Projektmanagement, Timesheet-Portal und automatisierte Abrechnung, nahtlos integriert in plyce CRM/ATS." },
  "/ai-agents": { title: "14 AI Agents im Recruiting | plyce", description: "AI Agents für CV-Analyse, Matching, Dossiers, Outreach, Reports, Project Briefs, Recording und Summaries direkt im ATS/CRM." },
  "/team": { title: "Das Team hinter plyce | Recruiting trifft Technologie", description: "Lerne Malin Behrens, Mark Vaughn und Lasse Rothfuss kennen: Recruiting-Erfahrung, Prozesswissen und Software-Architektur hinter der AI-nativen Recruiting-Plattform plyce." },
  "/careers": { title: "Karriere bei plyce | AI Engineer & Support Engineer", description: "Arbeite Full Remote an AI-nativer Recruiting-Software. Offene Stellen bei plyce: AI Engineer, Support Engineer sowie Initiativbewerbungen." },
  "/data-protection": { title: "DSGVO & Sicherheit für Recruiting-Software | plyce", description: "Datenschutz, EU-orientierte Infrastruktur und sichere Datenhaltung für ATS/CRM in Personalberatungen." },
  "/datenschutz": { title: "Datenschutzerklärung | plyce", description: "Datenschutzerklärung für die plyce Recruiting-Software und Website." },
  "/impressum": { title: "Impressum | plyce", description: "Impressum und Kontakt der WECO Experts GmbH, Betreiberin der Marke plyce." },
  "/agb": { title: "AGB | plyce", description: "Allgemeine Geschäftsbedingungen für die Nutzung der plyce Recruiting-Software." },
  "/faq": { title: "FAQ: ATS, CRM & Einführung | plyce", description: "Antworten zu plyce: Funktionen, Daten, KI, Integrationen, Vertrag, Migration und Einführung." },
  "/implementierung": { title: "Implementierung von plyce ATS/CRM", description: "Onboarding, Konfiguration, Datenübernahme, Training und produktiver Start mit plyce." },
  "/partnerprogramm": { title: "Partnerprogramm | plyce", description: "Das plyce Partnerprogramm für Recruiting-, Technologie- und Implementierungspartner." },
  "/sitemap": { title: "Sitemap | plyce", description: "Alle Seiten von plyce im Überblick." },
  "/pricing": { title: "Preise – ATS & CRM für Recruiter | plyce", description: "Transparente Preise für plyce CRM/ATS und plyce time inklusive AI Agents und Pay-as-you-go Freelancer-Abrechnung." },
  "/migration": { title: "Migration zu plyce", description: "Strukturierte Datenmigration von bestehenden Recruiting-Systemen zu plyce.", noindex: true },
  "/recruiting-software-vergleich": { title: "Recruiting Software Vergleich für Agenturen | plyce", description: "Worauf Personalberatungen beim Vergleich moderner ATS- und CRM-Systeme achten sollten." },
};

const en: Record<string, RouteSeo> = {
  "/": { title: "plyce – AI-native ATS & CRM for Recruitment Agencies", description: "AI-native recruiting platform for agencies and recruiters: candidates, jobs, clients and 14 AI Agents in one system. More placements, less admin." },
  "/features": { title: "ATS & CRM Features for Recruitment Agencies | plyce", description: "Explore candidate management, projects, client CRM, email, automation, analytics, integrations and AI-native recruiting features." },
  "/plyce-time": { title: "plyce time – Freelancer Management, Timesheets & Invoicing", description: "Manage freelancers, assignments, timesheets, approvals and invoicing with pay-as-you-go pricing and seamless ATS/CRM integration." },
  "/ai-agents": { title: "14 AI Agents for Recruiting | plyce", description: "AI Agents for CV analysis, candidate matching, outreach, project briefs, reports, recording, summaries and more, embedded directly in your ATS/CRM." },
  "/team": { title: "Meet the Team behind plyce | Recruiting Meets Technology", description: "Meet Malin Behrens, Mark Vaughn and Lasse Rothfuss: recruiting experience, process expertise and software architecture behind the AI-native recruiting platform plyce." },
  "/careers": { title: "Careers at plyce | AI Engineer & Support Engineer", description: "Join plyce remotely and help build AI-native recruiting software. Open roles include AI Engineer, Support Engineer and open applications." },
  "/data-protection": { title: "Data Protection & GDPR for Recruiting Software | plyce", description: "GDPR-oriented recruiting software with configurable AI providers, structured access controls and EU-focused data strategy." },
  "/datenschutz": { title: "Privacy Policy | plyce", description: "English information about privacy and data processing on the plyce website and recruiting platform." },
  "/impressum": { title: "Legal Notice | plyce", description: "Legal notice and provider information for plyce by WECO Experts GmbH." },
  "/agb": { title: "Terms and Conditions | plyce", description: "English information about the terms governing use of the plyce recruiting software." },
  "/faq": { title: "FAQ: ATS, CRM, AI & Implementation | plyce", description: "Answers about plyce features, AI Agents, integrations, data protection, pricing, migration and implementation." },
  "/implementierung": { title: "Implementation | plyce ATS & CRM", description: "A structured rollout covering setup, migration, configuration, training and go-live." },
  "/partnerprogramm": { title: "Partner Program | plyce", description: "Partner with plyce and bring AI-native recruiting technology to recruitment agencies and staffing firms." },
  "/sitemap": { title: "Sitemap | plyce", description: "Overview of all English plyce website pages." },
  "/pricing": { title: "Pricing – ATS, CRM & Freelancer Management | plyce", description: "Transparent pricing for plyce CRM/ATS and plyce time, including AI Agents and pay-as-you-go freelancer management." },
  "/migration": { title: "Data Migration to plyce", description: "Structured migration of candidates, companies, contacts, projects, activities and files into plyce.", noindex: true },
  "/recruiting-software-vergleich": { title: "Recruiting Software Comparison for Agencies | plyce", description: "Key criteria for comparing modern ATS and CRM platforms for recruitment agencies and staffing firms." },
};

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
    const base = getSiteUrl();
    const isEn = pathname === "/en" || pathname.startsWith("/en/");
    const basePath = stripLocalePrefix(pathname);
    const map = isEn ? en : de;
    const fallback: RouteSeo = isEn
      ? { title: "Page not found | plyce", description: "AI-native ATS & CRM for recruitment agencies and recruiters.", noindex: true }
      : { title: "Seite nicht gefunden | plyce", description: "AI-native ATS & CRM für Personalberatungen und Recruiter.", noindex: true };
    const seo = map[basePath] ?? fallback;
    const known = Boolean(map[basePath]);
    const currentUrl = `${base}${pathname === "/" ? "/" : pathname}`;
    const deUrl = basePath === "/" ? `${base}/` : `${base}${basePath}`;
    const enUrl = basePath === "/" ? `${base}/en` : `${base}/en${basePath}`;
    const imageUrl = `${base}/og-image.png`;

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

    const graph: Record<string, unknown>[] = [
      { "@type": "Organization", "@id": `${base}/#organization`, name: "WECO Experts GmbH", alternateName: "plyce", url: `${base}/`, logo: `${base}/plyce-logo-mark.png` },
      { "@type": "SoftwareApplication", "@id": `${base}/#software`, name: "plyce", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: isEn ? `${base}/en` : `${base}/`, description: seo.description, provider: { "@id": `${base}/#organization` }, featureList: ["Applicant Tracking System", "Recruiting CRM", "Candidate Management", "Project Management", "AI Agents", "Freelancer Management", "Timesheets and Invoicing"] },
      { "@type": "WebPage", url: currentUrl, name: seo.title, description: seo.description, inLanguage: isEn ? "en" : "de", isPartOf: { "@id": `${base}/#website` } },
      { "@type": "WebSite", "@id": `${base}/#website`, url: `${base}/`, name: "plyce", inLanguage: ["de", "en"], publisher: { "@id": `${base}/#organization` } },
    ];

    if (basePath === "/team") {
      graph.push(
        { "@type": "Person", name: "Malin Behrens", jobTitle: "Business Analyst", worksFor: { "@id": `${base}/#organization` } },
        { "@type": "Person", name: "Mark Vaughn", jobTitle: "Technical Advisor / Architect", worksFor: { "@id": `${base}/#organization` } },
        { "@type": "Person", name: "Lasse Rothfuss", jobTitle: "Product Owner", worksFor: { "@id": `${base}/#organization` } },
      );
    }

    if (basePath === "/careers") {
      const careersUrl = isEn ? `${base}/en/careers` : `${base}/careers`;
      graph.push(
        {
          "@type": "JobPosting",
          title: "AI Engineer",
          description: isEn ? "Build AI-native recruiting features with TypeScript, React, PostgreSQL/Supabase, SQL, APIs and LLM integrations." : "Entwickle AI-native Recruiting-Features mit TypeScript, React, PostgreSQL/Supabase, SQL, APIs und LLM-Integrationen.",
          datePosted: "2026-08-20",
          directApply: true,
          jobLocationType: "TELECOMMUTE",
          url: `${careersUrl}#ai-engineer`,
          hiringOrganization: { "@id": `${base}/#organization` },
        },
        {
          "@type": "JobPosting",
          title: "Support Engineer",
          description: isEn ? "Own first and second level support, troubleshooting, onboarding assistance and the feedback loop between customers and product engineering." : "Übernimm First- und Second-Level-Support, Troubleshooting, Onboarding-Unterstützung und die Feedback-Schleife zwischen Kunden und Product Engineering.",
          datePosted: "2026-08-20",
          directApply: true,
          jobLocationType: "TELECOMMUTE",
          url: `${careersUrl}#support-engineer`,
          hiringOrganization: { "@id": `${base}/#organization` },
        },
      );
    }

    let schema = document.getElementById("plyce-schema-org") as HTMLScriptElement | null;
    if (!schema) { schema = document.createElement("script"); schema.id = "plyce-schema-org"; schema.type = "application/ld+json"; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  }, [pathname]);

  return null;
};

export default Seo;
