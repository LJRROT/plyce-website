import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { agents } from "./AIAgentsPage";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const focus: Record<string, { de: string; en: string; challengeDe: string; challengeEn: string }> = {
  "ai-cv-analyzer": { de: "Lebensläufe automatisch analysieren und Kandidatenprofile strukturieren", en: "Automate CV analysis and structure candidate profiles", challengeDe: "Lebensläufe kommen in unterschiedlichen Formaten und mit sehr verschiedenen Detailgraden an. Wer Skills, Stationen und Ausbildung manuell überträgt, verliert Zeit und erzeugt uneinheitliche Profile.", challengeEn: "CVs vary in format and detail. Manually extracting skills, work history and education takes time and creates inconsistent records." },
  "ai-candidate-match": { de: "KI-Kandidatenmatching: passende Kandidaten schneller erkennen", en: "AI candidate matching for better shortlists", challengeDe: "In großen Kandidatenpools ist die Auswahl oft aufwendig. Einzelne Keywords reichen nicht aus, um Anforderungen und relevante Erfahrung fundiert zu vergleichen.", challengeEn: "Finding relevant candidates in a large database is difficult. Keywords alone rarely explain fit against a complete requirement profile." },
  "ai-outreach-messages": { de: "Active Sourcing mit KI: Kandidaten individuell ansprechen", en: "AI-powered active sourcing and personalised outreach", challengeDe: "Persönliche Anschreiben kosten Zeit. Standardnachrichten hingegen passen häufig nicht zu Projekt, Kandidat und Ansprachekanal.", challengeEn: "Personalised outreach takes time, while generic messages often fail to reflect the candidate, role and channel." },
  "ai-dossier-highlights": { de: "Kandidatendossiers und Profil-Highlights mit KI erstellen", en: "Create candidate dossier highlights with AI", challengeDe: "Kunden benötigen eine nachvollziehbare Einordnung der Passung. Für jede Vorstellung die relevanten CV-Abschnitte neu zusammenzufassen, ist arbeitsintensiv.", challengeEn: "Clients need a clear reason why a candidate fits. Summarising relevant CV details for every submission is repetitive." },
  "ai-cv-formatter": { de: "Lebensläufe formatieren, anonymisieren und übersetzen", en: "Format, anonymise and translate CVs with AI", challengeDe: "Unterschiedliche CV-Layouts, sensible Angaben und Sprachversionen erschweren die professionelle Kandidatenvorstellung.", challengeEn: "Inconsistent CV layouts, sensitive details and language versions make client-ready profiles hard to prepare." },
  "ai-project-brief": { de: "Projekt- und Beraterverträge aus Recruiting-Daten vorbereiten", en: "Prepare project and freelancer contracts from recruiting data", challengeDe: "Nach einer Freelance-Vermittlung müssen Konditionen aus Projekt-, Kunden- und Kandidatendaten in Verträge übernommen werden. Manuelle Übertragungen sind aufwendig und fehleranfällig.", challengeEn: "After a freelance placement, contract details must be combined from assignment, client and candidate records. Manual transfers are repetitive and error-prone." },
  "ai-project-report": { de: "Recruiting-Projektreports und Kundenupdates automatisieren", en: "Automate recruiting project reports and client updates", challengeDe: "Vor einem Kundentermin müssen Kandidatenstatus, Interviews und Feedback häufig aus mehreren Ansichten zusammengesucht werden.", challengeEn: "Before client calls, recruiters often need to gather candidate statuses, interview activity and feedback from several places." },
  "ai-company-status-report": { de: "Kundenstatus und mehrere Recruiting-Projekte zusammenfassen", en: "Summarise client accounts and recruiting projects", challengeDe: "Bei Kunden mit mehreren Mandaten fehlt häufig ein schneller Gesamtüberblick über Fortschritt und offene Schritte.", challengeEn: "For clients with multiple assignments, getting a consolidated view of progress and next steps can be challenging." },
  "ai-job-post-builder": { de: "Stellenanzeigen mit KI aus Projektdaten erstellen", en: "Generate job advertisements from project data with AI", challengeDe: "Projektinformationen liegen im ATS bereits vor, müssen für Stellenanzeigen aber oft erneut formuliert und gegebenenfalls anonymisiert werden.", challengeEn: "Job details already exist in the ATS but are often copied and rewritten to create publishable advertisements." },
  "ai-company-enricher": { de: "Firmendaten automatisch recherchieren und CRM-Profile anreichern", en: "Enrich CRM company records automatically with AI", challengeDe: "Unternehmensdaten müssen für Business Development häufig manuell recherchiert, geprüft und in einzelne CRM-Felder übertragen werden.", challengeEn: "Business development teams often research companies manually and transfer details into CRM fields one by one." },
  "ai-signature-parser": { de: "Kontaktdaten aus E-Mail-Signaturen automatisch übernehmen", en: "Extract CRM contacts from email signatures with AI", challengeDe: "Neue Kontakte entstehen häufig aus E-Mails. Werden Signaturen manuell übertragen, bleiben Profile unvollständig oder werden gar nicht angelegt.", challengeEn: "New contacts often arrive through email. Manual data entry leads to incomplete or missing CRM records." },
  "ai-meeting-tracker": { de: "Recruiting-Meetings automatisch dokumentieren", en: "Automatically document recruiting meetings", challengeDe: "Notizen und Transkripte aus Gesprächen liegen häufig außerhalb des ATS. Ohne Zuordnung fehlt der Zusammenhang zum jeweiligen Kontakt oder Kandidaten.", challengeEn: "Meeting notes and transcripts often live outside the ATS, disconnected from the relevant candidate or contact." },
  "ai-recorder": { de: "Spracheingabe und KI-Diktat im Recruiting-CRM", en: "AI dictation and voice input inside your recruiting CRM", challengeDe: "Recruiter schreiben täglich viele Kommentare, E-Mails und Aufgaben. Lange Texte per Tastatur zu erfassen kostet wertvolle Zeit.", challengeEn: "Recruiters write comments, emails and tasks throughout the day. Typing longer updates takes time." },
  "ai-summary": { de: "CRM-Historien und Kommunikation mit KI zusammenfassen", en: "Summarise CRM activity histories with AI", challengeDe: "Bei langen Kandidaten- oder Kundenhistorien ist es schwierig, schnell die wichtigsten Kontakte, Entscheidungen und nächsten Schritte zu erfassen.", challengeEn: "Long candidate and client histories make it hard to understand key interactions, decisions and next steps quickly." },
};

export const agentSeoFocus = focus;

const AIAgentDetailPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const en = pathname.startsWith("/en/");
  const lang = en ? "en" : "de";
  const prefix = en ? "/en" : "";
  const agent = agents.find((item) => item.id === id);
  if (!agent) return <div className="min-h-screen pt-32 section-padding container-tight"><h1 className="text-3xl font-bold">{en ? "Agent not found" : "Agent nicht gefunden"}</h1><Link className="text-primary underline" to={prefix + "/ai-agents"}>{en ? "Back to AI Agents" : "Zurück zur Übersicht"}</Link></div>;
  const current = focus[agent.id];
  const copy = agent[lang];
  const related = agents.filter(item => item.id !== agent.id).sort((a, b) => Math.abs(a.number - agent.number) - Math.abs(b.number - agent.number)).slice(0, 3);
  return <main className="min-h-screen pt-24">
    <section className="section-padding py-14 md:py-20 border-b border-border/50">
      <div className="container-tight">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link className="hover:text-primary" to={prefix + "/ai-agents"}>AI Agents</Link><ChevronRight className="h-4 w-4"/><span aria-current="page">{agent.name}</span>
        </nav>
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-primary text-sm font-semibold mb-5"><agent.icon className="h-4 w-4"/> Agent #{agent.number}{agent.beta ? " · Beta" : ""}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-hero text-balance leading-tight max-w-4xl">{current[lang]}</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">{copy.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" type="button" onClick={() => window.dispatchEvent(new Event("plyce-open-demo-modal"))}>{en ? "Request a demo" : "Demo anfragen"} <ArrowRight className="h-4 w-4"/></Button>
            <Button asChild size="lg" variant="outline"><Link to={prefix + "/ai-agents"}>{en ? "All AI Agents" : "Alle AI Agents"}</Link></Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-padding py-14 md:py-20"><div className="container-tight space-y-12">
      <ScrollReveal><div className="max-w-3xl"><h2 className="text-2xl md:text-3xl font-bold mb-4">{en ? "The challenge in recruiting" : "Die Herausforderung im Recruiting"}</h2><p className="text-muted-foreground leading-relaxed text-base md:text-lg">{current[en ? "challengeEn" : "challengeDe"]}</p></div></ScrollReveal>
      <ScrollReveal><div className="rounded-3xl border border-border/60 bg-card p-7 md:p-10">
        <div className="flex items-center gap-3 mb-6"><Sparkles className="h-6 w-6 text-primary"/><h2 className="text-2xl md:text-3xl font-bold">{en ? "How the AI Agent helps" : "So unterstützt der AI Agent"}</h2></div>
        <p className="text-muted-foreground leading-relaxed mb-7">{copy.tagline}</p>
        <ul className="grid md:grid-cols-2 gap-5">{copy.capabilities.map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary"/><span className="leading-relaxed">{item}</span></li>)}</ul>
      </div></ScrollReveal>
      <ScrollReveal><div className="max-w-3xl"><h2 className="text-2xl md:text-3xl font-bold mb-4">{en ? "Integrated into your workflow" : "Direkt in den Recruiting-Workflow integriert"}</h2><p className="text-muted-foreground leading-relaxed text-base md:text-lg">{en ? `The ${agent.name} works in the context of the relevant records in plyce. Instead of switching to a separate AI tool and manually copying information back and forth, recruiting teams can use the result within their existing ATS and CRM processes. AI-generated output should be checked before external use.` : `Der ${agent.name} arbeitet im Kontext der relevanten Datensätze in plyce. Statt zwischen separaten KI-Tools und dem ATS zu wechseln, können Recruiting-Teams die Ergebnisse direkt in ihren bestehenden Prozessen nutzen. KI-generierte Ergebnisse sollten vor der externen Verwendung geprüft werden.`}</p></div></ScrollReveal>
      <ScrollReveal><div><h2 className="text-2xl md:text-3xl font-bold mb-6">{en ? "Explore related AI Agents" : "Weitere passende AI Agents"}</h2><div className="grid gap-4 md:grid-cols-3">{related.map(item => <Link key={item.id} to={prefix + "/ai-agents/" + item.id} className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all"><div className="text-xs text-primary font-semibold mb-2">Agent #{item.number}</div><h3 className="text-lg font-bold mb-2">{item.name}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item[lang].tagline}</p><span className="mt-4 inline-flex items-center text-primary font-semibold text-sm">{en ? "Learn more" : "Mehr erfahren"} <ArrowRight className="h-4 w-4 ml-2"/></span></Link>)}</div></div></ScrollReveal>
      <ScrollReveal><Link to={prefix + "/ai-agents"} className="inline-flex items-center text-primary font-semibold gap-2 hover:underline"><ArrowLeft className="h-4 w-4"/>{en ? "Back to all AI Agents" : "Zur Übersicht aller AI Agents"}</Link></ScrollReveal>
    </div></section>
    <section className="section-padding pb-20"><div className="container-tight"><div className="rounded-3xl bg-foreground p-10 md:p-14 text-center"><h2 className="text-3xl font-bold text-primary-foreground mb-4">{en ? "See plyce AI Agents in action" : "AI Agents von plyce live erleben"}</h2><p className="text-primary-foreground/70 mb-8">{en ? "Discover how AI supports your recruiting workflows." : "Entdecke, wie KI deine Recruiting-Prozesse unterstützt."}</p><Button type="button" variant="hero" size="lg" onClick={() => window.dispatchEvent(new Event("plyce-open-demo-modal"))}>{en ? "Request a demo" : "Demo anfragen"} <ArrowRight className="h-4 w-4"/></Button></div></div></section>
  </main>;
};

export default AIAgentDetailPage;
