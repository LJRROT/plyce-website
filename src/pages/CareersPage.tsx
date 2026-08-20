import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BrainCircuit, Headphones, MapPin, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/ApplicationModal";
import { getLocaleFromPath, localizePath } from "@/lib/locale";

const CareersPage = () => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const en = locale === "en";
  const [role, setRole] = useState<string | null>(null);
  const teamPath = localizePath("/team", locale);

  const jobs = [
    {
      id: "ai-engineer",
      icon: BrainCircuit,
      title: "AI Engineer",
      meta: en ? "Full Remote · Product Engineering · AI & Data" : "Full Remote · Product Engineering · AI & Data",
      intro: en
        ? "Build the AI-native core of plyce and turn real recruiting workflows into reliable, scalable product features."
        : "Entwickle den AI-nativen Kern von plyce weiter und übersetze echte Recruiting-Workflows in stabile, skalierbare Produktfeatures.",
      responsibilities: en
        ? ["Develop AI-assisted product features and agents across the plyce platform", "Work with TypeScript, React, APIs and serverless services", "Design and optimise data flows with PostgreSQL/Supabase and SQL", "Integrate and evaluate LLM providers and structured AI outputs", "Improve performance, observability, security and scalability", "Work closely with product and recruiting experts to ship features with measurable user value"]
        : ["AI-gestützte Produktfeatures und Agents innerhalb von plyce entwickeln", "Mit TypeScript, React, APIs und Serverless Services arbeiten", "Datenflüsse mit PostgreSQL/Supabase und SQL entwickeln und optimieren", "LLM-Provider und strukturierte AI-Outputs integrieren und evaluieren", "Performance, Observability, Security und Skalierbarkeit verbessern", "Eng mit Produkt- und Recruiting-Experten zusammenarbeiten und Features mit messbarem Nutzwert ausliefern"],
      profile: en
        ? ["Strong software engineering fundamentals and hands-on product development experience", "Very good SQL knowledge and experience with relational databases", "Experience with modern web stacks, ideally TypeScript/React", "Practical experience with AI/LLM integrations, prompt design or agentic workflows", "Independent, pragmatic and quality-focused way of working", "Interest in recruiting technology and workflow automation"]
        : ["Sehr gute Software-Engineering-Grundlagen und praktische Erfahrung in der Produktentwicklung", "Sehr gute SQL-Kenntnisse und Erfahrung mit relationalen Datenbanken", "Erfahrung mit modernen Web-Stacks, idealerweise TypeScript/React", "Praktische Erfahrung mit AI/LLM-Integrationen, Prompt Design oder agentischen Workflows", "Selbstständige, pragmatische und qualitätsorientierte Arbeitsweise", "Interesse an Recruiting-Technologie und Workflow-Automatisierung"],
    },
    {
      id: "support-engineer",
      icon: Headphones,
      title: "Support Engineer",
      meta: en ? "Full Remote · Customer Support · 1st & 2nd Level" : "Full Remote · Customer Support · 1st & 2nd Level",
      intro: en
        ? "Help recruitment teams get the most out of plyce and connect customer questions with product and engineering."
        : "Hilf Recruiting-Teams dabei, plyce optimal zu nutzen, und verbinde Kundenfragen strukturiert mit Produkt und Engineering.",
      responsibilities: en
        ? ["Handle 1st and 2nd level support for plyce customers", "Analyse user questions, reproduce issues and document solutions", "Support onboarding, configuration and day-to-day product use", "Escalate technical issues with clear context to engineering", "Build and maintain help content, FAQs and internal support documentation", "Identify recurring feedback and turn it into product improvement proposals"]
        : ["First- und Second-Level-Support für plyce Kunden übernehmen", "User-Fragen analysieren, Fehler reproduzieren und Lösungen dokumentieren", "Bei Onboarding, Konfiguration und täglicher Produktnutzung unterstützen", "Technische Themen mit sauberem Kontext an Engineering eskalieren", "Hilfecenter, FAQs und interne Support-Dokumentation aufbauen und pflegen", "Wiederkehrendes Feedback erkennen und in konkrete Produktverbesserungen übersetzen"],
      profile: en
        ? ["Strong customer orientation and clear written communication", "Technical affinity and confidence navigating SaaS products", "Structured troubleshooting skills", "Comfort working with tickets, logs, browser tools and basic technical concepts", "German and English communication skills", "Experience in recruiting, HR tech or B2B SaaS is a plus"]
        : ["Hohe Kundenorientierung und klare schriftliche Kommunikation", "Technische Affinität und Sicherheit im Umgang mit SaaS-Produkten", "Strukturierte Troubleshooting-Fähigkeiten", "Sicherer Umgang mit Tickets, Logs, Browser-Tools und technischen Grundkonzepten", "Gute Kommunikation auf Deutsch und Englisch", "Erfahrung in Recruiting, HR Tech oder B2B SaaS ist ein Plus"],
    },
    {
      id: "unsolicited",
      icon: Sparkles,
      title: en ? "Open Application" : "Initiativbewerbung",
      meta: en ? "Full Remote · Tell us where you can make an impact" : "Full Remote · Zeig uns, wo du Wirkung entfalten kannst",
      intro: en
        ? "You do not see the perfect role, but believe you can help us build a better recruiting platform? We still want to hear from you."
        : "Du siehst gerade nicht die perfekte Rolle, glaubst aber, dass du mit uns eine bessere Recruiting-Plattform bauen kannst? Dann möchten wir dich trotzdem kennenlernen.",
      responsibilities: en
        ? ["Tell us what you are exceptionally good at", "Show us which problem area at plyce you would like to improve", "Share relevant work, projects or ideas", "Explain how you prefer to collaborate in a remote product team"]
        : ["Zeig uns, worin du besonders gut bist", "Beschreibe, welchen Bereich bei plyce du verbessern möchtest", "Teile relevante Arbeiten, Projekte oder Ideen mit uns", "Erzähl uns, wie du am liebsten in einem Remote-Produktteam arbeitest"],
      profile: en
        ? ["Product mindset", "High ownership", "Clear communication", "Curiosity for AI, automation or recruiting technology"]
        : ["Product Mindset", "Hohe Eigenverantwortung", "Klare Kommunikation", "Neugier auf AI, Automation oder Recruiting-Technologie"],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="relative overflow-hidden border-b border-border/40 py-16 md:py-24 section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.13),transparent_55%)]" aria-hidden />
        <div className="container-tight relative text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">{en ? "Careers at plyce" : "Karriere bei plyce"}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gradient-hero text-balance">{en ? "Build the future of recruiting software." : "Baue mit uns die Zukunft von Recruiting-Software."}</h1>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">{en ? "plyce is AI-native, workflow-oriented and built around real recruiting operations. We are looking for people who enjoy ownership, modern technology and solving practical problems for users." : "plyce ist AI-native, workflow-orientiert und konsequent an echten Recruiting-Prozessen ausgerichtet. Wir suchen Menschen, die Verantwortung übernehmen, moderne Technologie mögen und praktische Probleme für Nutzer lösen wollen."}</p>
          </ScrollReveal>
          <ScrollReveal delay={140}><div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />Full Remote</div></ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight space-y-8">
          {jobs.map((job, index) => (
            <ScrollReveal key={job.id} delay={index * 70}>
              <article id={job.id} className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="p-7 md:p-9 bg-muted/25 border-b lg:border-b-0 lg:border-r border-border/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"><job.icon className="h-6 w-6" /></div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{job.title}</h2>
                    <p className="mt-2 text-sm font-medium text-primary">{job.meta}</p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{job.intro}</p>
                    <Button className="mt-7" size="lg" onClick={() => setRole(job.title)}>{en ? "Apply now" : "Jetzt bewerben"}<ArrowRight className="h-4 w-4" /></Button>
                  </div>
                  <div className="p-7 md:p-9 grid gap-8 md:grid-cols-2">
                    <div><h3 className="font-semibold mb-4">{en ? "What you will do" : "Was du bei uns machst"}</h3><ul className="space-y-3">{job.responsibilities.map((item) => <li key={item} className="text-sm leading-relaxed text-muted-foreground flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{item}</li>)}</ul></div>
                    <div><h3 className="font-semibold mb-4">{en ? "What we are looking for" : "Was du mitbringen solltest"}</h3><ul className="space-y-3">{job.profile.map((item) => <li key={item} className="text-sm leading-relaxed text-muted-foreground flex gap-2.5"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{item}</li>)}</ul></div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28 section-padding">
        <div className="container-tight">
          <ScrollReveal>
            <div className="rounded-3xl bg-foreground p-8 md:p-12 text-primary-foreground text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{en ? "Want to know who you would be working with?" : "Du möchtest wissen, mit wem du arbeitest?"}</h2>
              <p className="mt-3 mx-auto max-w-2xl text-sm leading-relaxed text-primary-foreground/65">{en ? "Meet the people behind plyce and learn why the product is built from a combination of recruiting practice, process expertise and technical experience." : "Lerne die Menschen hinter plyce kennen und erfahre, warum das Produkt aus der Verbindung von Recruiting-Praxis, Prozesswissen und technischer Erfahrung entsteht."}</p>
              <Button asChild variant="hero" size="lg" className="mt-6"><Link to={teamPath}>{en ? "Meet the team" : "Team kennenlernen"}<ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ApplicationModal open={role !== null} onOpenChange={(open) => !open && setRole(null)} role={role || ""} />
    </div>
  );
};

export default CareersPage;
