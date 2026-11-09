import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import { agents } from "./AIAgentsPage";
import { agentSeoFocus } from "@/data/agentSeo";
import { agentArticles } from "@/data/agentArticles";
import { agentLinkedInSource } from "@/data/agentLinkedInSource";
import { agentSourceInsightsEn } from "@/data/agentSourceInsightsEn";
import { additionalAgentArticle } from "@/data/additionalAgentArticle";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";



const AIAgentDetailPage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const en = pathname.startsWith("/en/");
  const lang = en ? "en" : "de";
  const prefix = en ? "/en" : "";
  const agent = agents.find((item) => item.id === id);
  if (!agent) return <div className="min-h-screen pt-32 section-padding container-tight"><h1 className="text-3xl font-bold">{en ? "Agent not found" : "Agent nicht gefunden"}</h1><Link className="text-primary underline" to={prefix + "/ai-agents"}>{en ? "Back to AI Agents" : "Zurück zur Übersicht"}</Link></div>;
  const current = agentSeoFocus[agent.id];
  const copy = agent[lang];
  const article = agentArticles[agent.id];
  const linkedInSource = agentLinkedInSource[agent.id];
  const englishInsight = agentSourceInsightsEn[agent.id];
  const relatedArticle = agent.id === additionalAgentArticle.agentId ? additionalAgentArticle : null;
  const related = agents.filter(item => item.id !== agent.id).sort((a, b) => Math.abs(a.number - agent.number) - Math.abs(b.number - agent.number)).slice(0, 3);
  return <main className="min-h-screen pt-24">
    <section className="section-padding py-14 md:py-20 border-b border-border/50">
      <div className="container-tight">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link className="hover:text-primary" to={prefix + "/ai-agents"}>AI Agents</Link><ChevronRight className="h-4 w-4"/><span aria-current="page">{agent.name}</span>
        </nav>
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-primary text-sm font-semibold mb-5"><agent.icon className="h-4 w-4"/> Agent #{agent.number}</div>
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
      {linkedInSource && !en && <ScrollReveal><article className="rounded-3xl border border-border/60 bg-card p-7 md:p-10" aria-label="Fachartikel über diesen AI Agent">
        <div className="mb-8 pb-7 border-b border-border/60">
          <p className="text-xs uppercase font-bold tracking-wide text-primary mb-3">Fachlicher Hintergrund aus unserer LinkedIn-Serie</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">{linkedInSource.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">Wie dieser Agent im Recruiting-Alltag eingesetzt wird – anhand unseres Originalartikels aus der plyce AI-Agent-Serie.</p>
        </div>
        <div className="max-w-3xl space-y-4">
          {linkedInSource.blocks.map((part, index) => part.kind === "heading" ? (
            <h3 key={index} className="text-xl md:text-2xl font-bold tracking-tight pt-5">{part.text}</h3>
          ) : part.kind === "listItem" ? (
            <div key={index} className="flex items-start gap-3"><span className="text-primary font-semibold" aria-hidden="true">•</span><p className="text-base text-muted-foreground leading-relaxed">{part.text}</p></div>
          ) : (
            <p key={index} className="text-base text-muted-foreground leading-relaxed">{part.text}</p>
          ))}
        </div>
      </article></ScrollReveal>}
      {en && englishInsight && <ScrollReveal><article className="rounded-3xl border border-border/60 bg-card p-7 md:p-10" aria-label="Extended editorial context">
        <p className="text-xs uppercase font-bold tracking-wide text-primary mb-3">From our LinkedIn AI Agent series</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">{englishInsight.title}</h2>
        <div className="max-w-3xl space-y-4">{englishInsight.paragraphs.map((paragraph, index) =>
          <p key={index} className="text-base text-muted-foreground leading-relaxed">{paragraph}</p>
        )}</div>
      </article></ScrollReveal>}
      {article && <ScrollReveal><aside className="rounded-2xl border border-border/60 bg-card p-7 md:p-9">
        <h2 className="text-2xl font-bold tracking-tight mb-3">{en ? "More on LinkedIn" : "Fachartikel auf LinkedIn"}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{en ? "Read the original article by plyce on LinkedIn." : "Lies den Originalartikel von plyce auf LinkedIn."}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">{article.title} <ExternalLink className="w-4 h-4" aria-hidden /></a>
      </aside></ScrollReveal>}
      {relatedArticle && <ScrollReveal><article className="rounded-3xl border border-border/60 bg-card p-7 md:p-10" aria-label={en ? "Related LinkedIn article" : "Weiterer Fachartikel"}>
        <p className="text-xs uppercase font-bold tracking-wide text-primary mb-3">{en ? "Another perspective on the Job Post Builder" : "Ergänzender Artikel zum AI Job Post Builder"}</p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">{relatedArticle.title}</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{en ? "Published under the name AI Job Description Generator, this article covers the same Job Post Builder workflow: turning client briefs and project data into structured, reviewable job descriptions." : "Der Beitrag wurde auf LinkedIn unter dem Namen AI Job Description Generator veröffentlicht. Fachlich gehört er zum AI Job Post Builder: Aus Kundenbriefings und Projektdaten werden strukturierte, prüfbare Stellenbeschreibungen."}</p>
        {!en && <div className="max-w-3xl space-y-4 mt-7">{relatedArticle.blocks.map((part, index) => part.kind === "heading" ? (
          <h3 key={index} className="text-xl md:text-2xl font-bold tracking-tight pt-5">{part.text}</h3>
        ) : part.kind === "listItem" ? (
          <div key={index} className="flex items-start gap-3"><span className="text-primary font-semibold" aria-hidden="true">•</span><p className="text-base text-muted-foreground leading-relaxed">{part.text}</p></div>
        ) : (
          <p key={index} className="text-base text-muted-foreground leading-relaxed">{part.text}</p>
        ))}</div>}
        <a href={relatedArticle.url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-primary font-semibold hover:underline">{en ? "Read the original on LinkedIn" : "Originalartikel auf LinkedIn lesen"} <ExternalLink className="w-4 h-4" aria-hidden /></a>
      </article></ScrollReveal>}
      <ScrollReveal><div><h2 className="text-2xl md:text-3xl font-bold mb-6">{en ? "Explore related AI Agents" : "Weitere passende AI Agents"}</h2><div className="grid gap-4 md:grid-cols-3">{related.map(item => <Link key={item.id} to={prefix + "/ai-agents/" + item.id} className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all"><div className="text-xs text-primary font-semibold mb-2">Agent #{item.number}</div><h3 className="text-lg font-bold mb-2">{item.name}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item[lang].tagline}</p><span className="mt-4 inline-flex items-center text-primary font-semibold text-sm">{en ? "Learn more" : "Mehr erfahren"} <ArrowRight className="h-4 w-4 ml-2"/></span></Link>)}</div></div></ScrollReveal>
      <ScrollReveal><Link to={prefix + "/ai-agents"} className="inline-flex items-center text-primary font-semibold gap-2 hover:underline"><ArrowLeft className="h-4 w-4"/>{en ? "Back to all AI Agents" : "Zur Übersicht aller AI Agents"}</Link></ScrollReveal>
    </div></section>
    <section className="section-padding pb-20"><div className="container-tight"><div className="rounded-3xl bg-foreground p-10 md:p-14 text-center"><h2 className="text-3xl font-bold text-primary-foreground mb-4">{en ? "See plyce AI Agents in action" : "AI Agents von plyce live erleben"}</h2><p className="text-primary-foreground/70 mb-8">{en ? "Discover how AI supports your recruiting workflows." : "Entdecke, wie KI deine Recruiting-Prozesse unterstützt."}</p><Button type="button" variant="hero" size="lg" onClick={() => window.dispatchEvent(new Event("plyce-open-demo-modal"))}>{en ? "Request a demo" : "Demo anfragen"} <ArrowRight className="h-4 w-4"/></Button></div></div></section>
  </main>;
};

export default AIAgentDetailPage;
