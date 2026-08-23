import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const PageShell = ({ title, intro, children }: { title: string; intro?: string; children: React.ReactNode }) => (
  <div className="min-h-screen pt-24">
    <section className="py-14 md:py-20 section-padding border-b border-border/40">
      <div className="container-tight text-center">
        <ScrollReveal><h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] text-gradient-hero text-balance">{title}</h1></ScrollReveal>
        {intro && <ScrollReveal delay={80}><p className="mt-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{intro}</p></ScrollReveal>}
      </div>
    </section>
    {children}
  </div>
);

const Section = ({ title, text, bullets }: { title: string; text?: string; bullets?: string[] }) => (
  <ScrollReveal>
    <section className="rounded-2xl border border-border/60 bg-card p-7 md:p-9 shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">{title}</h2>
      {text && <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{text}</p>}
      {bullets && <ul className="mt-5 grid gap-3 md:grid-cols-2">{bullets.map((b) => <li key={b} className="flex gap-2.5 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5"/><span>{b}</span></li>)}</ul>}
    </section>
  </ScrollReveal>
);

const StandardSections = ({ sections }: { sections: { title: string; text?: string; bullets?: string[] }[] }) => (
  <section className="py-14 md:py-20 section-padding"><div className="container-tight space-y-6">{sections.map((s) => <Section key={s.title} {...s} />)}</div></section>
);

export const EnglishHomePage = () => (
  <PageShell title="plyce loves AI & Automation" intro="AI-native ATS & CRM for recruitment agencies and recruiters. More placements. Less admin. Permanent and freelance recruitment.">
    <StandardSections sections={[
      { title: "What is plyce?", text: "A cloud-based ATS and CRM for recruitment agencies and recruiters working with permanent employees and freelancers. Manage candidates, jobs, clients and communication centrally, supported by integrated AI for parsing, matching, automation and reporting." },
      { title: "Who is plyce for?", text: "Built for recruitment agencies, staffing firms and headhunters that want to automate recruiting processes, use AI productively and work without constant tool switching." },
      { title: "14 AI Agents work for you", bullets: ["CV analysis and formatting", "Candidate matching and dossier highlights", "Project briefs, reports and summaries", "Outreach messages and job posts", "Company enrichment and signature parsing", "Meeting tracking and AI recording"] },
      { title: "Infrastructure for scalable recruiting", bullets: ["Candidate and contact management", "Projects, pipelines and placements", "Email, Microsoft 365 and Google connectivity", "WhatsApp and multi-mail workflows", "Reporting, analytics and team steering", "APIs, job boards and automation"] },
      { title: "Data protection by design", text: "plyce combines EU-focused infrastructure, configurable AI providers and GDPR-oriented workflows so recruitment teams can scale without losing control of their data." },
    ]}/>
    <section className="pb-20 section-padding"><div className="container-tight text-center"><Button asChild size="lg"><Link to="/en/features">Explore all features <ArrowRight className="h-4 w-4"/></Link></Button></div></section>
  </PageShell>
);

export const EnglishFeaturesPage = () => (
  <PageShell title="All features at a glance" intro="One platform for the complete recruiting workflow.">
    <StandardSections sections={[
      { title: "Candidates", bullets: ["Central candidate management", "AI CV parsing and analysis", "Multi-CV upload and OCR", "Dossier and CV generation", "Candidate matching", "Document management", "Radius and Boolean search", "Bulk tagging and duplicate detection", "GDPR consent and activity history"] },
      { title: "Projects & assignments", bullets: ["Central project management", "Kanban recruiting pipeline", "Application management", "AI-generated outreach", "Project reports and highlights", "Interview planning", "Placement management", "Structured rejection reasons and feedback", "Project documents and activity history"] },
      { title: "Companies & clients", bullets: ["Company and account management", "AI company enrichment", "Company reports", "Follow-up cadence", "Logo and classification management", "Contacts and projects per client", "Company documents and duplicate detection"] },
      { title: "Contacts", bullets: ["Central contact profiles", "AI signature extraction", "Tags and segmentation", "Activity history", "Duplicate detection and merge"] },
      { title: "Email, tasks & automation", bullets: ["Email from plyce", "Microsoft 365 and Google sync", "Multi-mail campaigns", "Templates and variables", "WhatsApp workflows", "Personal signatures", "Tasks, reminders and automation"] },
      { title: "Business development", bullets: ["Sales pipelines", "Multi-step outreach campaigns", "Follow-up reminders", "Company targeting and segmentation", "Activity tracking and reporting"] },
      { title: "Reporting & administration", bullets: ["Dashboards and KPI reporting", "Team analytics", "Roles and permissions", "Data exports", "Custom fields and configuration", "Prompt Engineering for AI Agents"] },
      { title: "Integrations", bullets: ["Google Workspace", "Microsoft 365", "Job boards and career pages", "APIs and webhooks", "plyce time integration"] },
    ]}/>
  </PageShell>
);

export const EnglishPricingPage = () => (
  <PageShell title="Pricing" intro="Two products with transparent pricing. Use them separately or combine them seamlessly.">
    <StandardSections sections={[
      { title: "plyce CRM/ATS", text: "€100 per user/month during the 2026 market-entry offer instead of €125 list price.", bullets: ["Complete ATS and CRM", "All product features included", "All AI Agents included", "Add or reduce users flexibly", "Monthly billing for active users", "12-month minimum term", "Onboarding and training", "Flexible data migration and customisation"] },
      { title: "plyce time", text: "€11 per active freelancer/month. Simple pay-as-you-go pricing: you only pay for freelancers who are active in an assignment during that month.", bullets: ["No fixed contract term", "Freelancer and project management", "Timesheet portal", "Client approval without login", "Automatic reminders", "AI-assisted contract generation", "Credit notes and invoices", "Analytics and forecasts", "Seamless CRM/ATS integration"] },
    ]}/>
  </PageShell>
);

export const EnglishPlyceTimePage = () => (
  <PageShell title="plyce time" intro="Freelancer management, timesheets and invoicing in one streamlined workflow.">
    <StandardSections sections={[
      { title: "Assignments & contracts", bullets: ["Manage freelancers and assignments centrally", "Store rates, periods and project data", "AI-assisted consultant and project contract generation", "Keep all assignment documents in one place"] },
      { title: "Timesheets", bullets: ["Simple monthly time recording", "Decimal hours and expenses", "Automatic reminders", "Submission workflows and status tracking"] },
      { title: "Client approval without login", text: "Approvers receive a secure link by email and can review, approve or reject timesheets without creating an account." },
      { title: "Invoices & credit notes", bullets: ["Create monthly billing records", "Generate invoices and credit notes", "Use approved timesheets as the billing basis", "Reduce manual reconciliation"] },
      { title: "Analytics & forecasts", bullets: ["Revenue and margin visibility", "Assignment forecasts", "Upcoming contract end dates", "Operational overview across all active freelancers"] },
      { title: "Pay as you go", text: "€11 per active freelancer per month. No fixed contract term and no charge for inactive freelancers." },
    ]}/>
  </PageShell>
);

export const EnglishFaqPage = () => (
  <PageShell title="Frequently asked questions" intro="Answers about plyce, implementation, AI, data protection, pricing and daily use.">
    <StandardSections sections={[
      { title: "Product", bullets: ["plyce is an AI-native ATS and CRM for recruitment agencies and recruiters.", "It supports both permanent and freelance recruitment.", "CRM/ATS and plyce time can be used independently or together."] },
      { title: "AI Agents", bullets: ["AI Agents are embedded directly in recruiting workflows.", "Prompts can be configured through Prompt Engineering.", "Depending on configuration, OpenAI or Mistral can be used.", "AI-generated output remains reviewable before use."] },
      { title: "Implementation & migration", bullets: ["Existing candidate, company, contact, project and activity data can be migrated.", "The migration scope is agreed before implementation.", "Onboarding and training are part of the rollout."] },
      { title: "Security & GDPR", bullets: ["Role-based access and structured consent workflows are supported.", "Data-protection requirements are considered throughout the product architecture.", "Customers can choose AI-provider setups according to their requirements."] },
      { title: "Pricing", bullets: ["CRM/ATS is priced per active user.", "plyce time is priced per active freelancer per month.", "Custom migration or development is scoped separately where required."] },
    ]}/>
  </PageShell>
);

export const EnglishMigrationPage = () => (
  <PageShell title="Data migration to plyce" intro="Move your recruiting data into plyce with a structured and transparent migration process.">
    <StandardSections sections={[
      { title: "What can be migrated?", bullets: ["Candidates and CVs", "Companies and contacts", "Projects and applications", "Activities and communication history", "Files and documents", "Tags, classifications and selected custom fields"] },
      { title: "How the migration works", bullets: ["Source-system analysis", "Field mapping and migration concept", "Test import and validation", "Final migration", "Quality checks and handover"] },
      { title: "Flexible scope", text: "Migration is tailored to the source system, data quality and required history. The exact scope, timing and price are agreed before implementation." },
    ]}/>
  </PageShell>
);

export const EnglishImplementationPage = () => (
  <PageShell title="Implementation" intro="A structured rollout from initial setup to productive use.">
    <StandardSections sections={[
      { title: "1. Setup", bullets: ["Tenant and user setup", "Roles and permissions", "Email and calendar connections", "Core recruiting configuration"] },
      { title: "2. Data migration", bullets: ["Source-data analysis", "Field mapping", "Test migration", "Final import and validation"] },
      { title: "3. Configuration", bullets: ["Templates and signatures", "Custom fields and tags", "Pipeline and workflow setup", "Prompt Engineering and AI configuration"] },
      { title: "4. Training & go-live", bullets: ["User training", "Admin enablement", "Go-live support", "Post-launch optimisation"] },
    ]}/>
  </PageShell>
);

export const EnglishPartnerPage = () => (
  <PageShell title="plyce partner program" intro="Grow with plyce and bring AI-native recruiting technology to your network.">
    <StandardSections sections={[
      { title: "Who can become a partner?", bullets: ["Recruiting consultants and industry experts", "Technology and implementation partners", "HR consultancies and service providers", "Networks with access to recruitment agencies"] },
      { title: "Why partner with plyce?", bullets: ["Modern AI-native product", "Clear positioning for recruitment agencies", "Direct access to the plyce team", "Joint go-to-market opportunities"] },
      { title: "How it works", text: "We define the cooperation model together based on your network, role and contribution. Contact us to discuss the right setup." },
    ]}/>
  </PageShell>
);

export const EnglishDataProtectionPage = () => (
  <PageShell title="Data Protection" intro="Security, GDPR and responsible AI use are built into the plyce product strategy.">
    <StandardSections sections={[
      { title: "GDPR-oriented architecture", bullets: ["Structured access controls", "Consent workflows", "Traceable activities and data handling", "Configurable retention and deletion processes"] },
      { title: "AI provider choice", text: "Customers can select an AI setup that fits their data-location, regulatory and performance requirements, including OpenAI and Mistral-based configurations." },
      { title: "Data minimisation and control", bullets: ["AI output remains reviewable", "Sensitive data can be anonymised in relevant workflows", "Role-based permissions reduce unnecessary access", "Structured fields reduce uncontrolled free-text processing"] },
    ]}/>
  </PageShell>
);

export const EnglishLegalPage = ({ kind }: { kind: "imprint" | "privacy" | "terms" }) => {
  const content = kind === "imprint" ? {
    title: "Legal Notice / Imprint", intro: "English translation for information purposes. The German legal notice remains authoritative.",
    sections: [{ title: "Provider", text: "plyce is operated by WECO Experts GmbH, Munich, Germany. Please refer to the German imprint for the legally binding company, registry and contact information." }, { title: "Liability", text: "The information on this website is prepared with care. Mandatory statutory liability provisions remain unaffected." }]
  } : kind === "privacy" ? {
    title: "Privacy Policy", intro: "English translation for information purposes. The German privacy policy remains authoritative.",
    sections: [{ title: "Data processing", text: "We process personal data only where there is a legal basis or valid consent. This includes technical website data, contact and demo requests, and service-related communication." }, { title: "Your rights", bullets: ["Access", "Rectification", "Deletion", "Restriction", "Data portability", "Objection and withdrawal of consent"] }, { title: "Cookies and analytics", text: "Non-essential cookies and analytics are only activated according to the consent settings available through the cookie banner." }]
  } : {
    title: "Terms and Conditions", intro: "English translation for information purposes. The German terms and conditions remain authoritative.",
    sections: [{ title: "Scope", text: "These terms govern the contractual use of plyce services unless otherwise agreed in an individual contract." }, { title: "Service and availability", text: "The contractual scope, licences, support and service levels are defined by the applicable order and agreement." }, { title: "Customer obligations", text: "Customers are responsible for lawful use, authorised user access and the accuracy of data entered into the service." }, { title: "Liability and term", text: "Liability, contract term, termination and related legal provisions follow the German contractual documents and applicable law." }]
  };
  return <PageShell title={content.title} intro={content.intro}><StandardSections sections={content.sections}/></PageShell>;
};

export const EnglishSitemapPage = () => (
  <PageShell title="Sitemap"><StandardSections sections={[{ title: "Product", bullets: ["Home", "Features", "AI Agents", "plyce time", "Pricing"] }, { title: "Information", bullets: ["FAQ", "Implementation", "Migration", "Partner program", "Data Protection"] }, { title: "Legal", bullets: ["Terms and Conditions", "Privacy Policy", "Legal Notice"] }]}/></PageShell>
);

export const EnglishComparisonPage = () => (
  <PageShell title="Recruiting software comparison" intro="What modern recruitment agencies should look for when comparing ATS and CRM platforms.">
    <StandardSections sections={[
      { title: "Core criteria", bullets: ["ATS and CRM in one system", "Permanent and freelance workflows", "AI embedded in daily processes", "Email and calendar integration", "Automation and reporting", "Flexible data migration", "GDPR-oriented architecture"] },
      { title: "Why AI-native matters", text: "AI-native recruiting software does more than add a chatbot. It uses AI directly in parsing, matching, content creation, data enrichment, reporting and operational workflows." },
      { title: "Why plyce", text: "plyce combines candidate, client, project and communication data with integrated AI Agents and a dedicated freelancer-management module in one platform." },
    ]}/>
  </PageShell>
);

export const EnglishNotFoundPage = () => (
  <PageShell title="Page not found" intro="The page you are looking for does not exist or has moved."><section className="py-16 section-padding"><div className="container-tight text-center"><Button asChild><Link to="/en">Back to homepage</Link></Button></div></section></PageShell>
);

export const EnglishPageRouter = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/^\/en/, "") || "/";
  if (path === "/") return <EnglishHomePage />;
  if (path === "/features") return <EnglishFeaturesPage />;
  if (path === "/pricing") return <EnglishPricingPage />;
  if (path === "/plyce-time") return <EnglishPlyceTimePage />;
  if (path === "/faq") return <EnglishFaqPage />;
  if (path === "/migration") return <EnglishMigrationPage />;
  if (path === "/implementierung") return <EnglishImplementationPage />;
  if (path === "/partnerprogramm") return <EnglishPartnerPage />;
  if (path === "/data-protection") return <EnglishDataProtectionPage />;
  if (path === "/impressum") return <EnglishLegalPage kind="imprint" />;
  if (path === "/datenschutz") return <EnglishLegalPage kind="privacy" />;
  if (path === "/agb") return <EnglishLegalPage kind="terms" />;
  if (path === "/sitemap") return <EnglishSitemapPage />;
  if (path === "/recruiting-software-vergleich") return <EnglishComparisonPage />;
  return <EnglishNotFoundPage />;
};
