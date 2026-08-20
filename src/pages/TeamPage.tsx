import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Code2, HeartHandshake, UserRound } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { getLocaleFromPath, localizePath } from "@/lib/locale";

const TeamPage = () => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const en = locale === "en";
  const careersPath = localizePath("/careers", locale);

  const people = [
    {
      initials: "MB",
      name: "Malin Behrens",
      role: "Business Analyst",
      text: en
        ? "Malin brings 16 years of experience in recruitment consulting. Through her work in recruitment agencies and as an interim HR manager, she has built a deep understanding of HR software, recruiting processes and operational requirements. She knows the workflows, friction points and system gaps from daily practice. Her focus at plyce is to design processes the way recruitment agencies actually work."
        : "Malin bringt 16 Jahre Erfahrung aus der Personalberatung mit. Durch ihre Tätigkeit in Personalberatungen sowie als HR Interim Managerin hat sie über viele Jahre ein umfassendes Bild von bestehenden HR-Softwarelösungen, Recruiting-Prozessen und operativen Anforderungen gewonnen. Sie kennt die Abläufe, Herausforderungen und Systembrüche aus der Praxis. Ihr Fokus bei plyce: Prozesse so abbilden, wie Personalberatungen wirklich arbeiten.",
    },
    {
      initials: "MV",
      name: "Mark Vaughn",
      role: "Technical Advisor / Architect",
      text: en
        ? "For established agencies, data security, system stability and scalability are essential. Mark supports plyce as Technical Advisor and brings more than 20 years of software engineering experience. In his primary role as a Senior Staff Software Engineer in California, he is responsible for the architecture of large international systems. At plyce he strategically validates our AI infrastructure and helps align the platform with enterprise requirements: stable, scalable and GDPR-conscious."
        : "Gerade für etablierte Agenturen stehen Datensicherheit, Systemstabilität und Skalierbarkeit an erster Stelle. Mark unterstützt plyce als Technical Advisor und bringt über 20 Jahre Erfahrung in der Softwareentwicklung mit. Hauptberuflich ist er als Senior Staff Software Engineer in Kalifornien für die Architektur internationaler Großsysteme verantwortlich. Bei plyce begleitet er die Plattform strategisch, validiert unsere AI-Infrastruktur und unterstützt uns dabei, sie auf Enterprise-Anforderungen auszurichten: stabil, skalierbar und DSGVO-orientiert.",
    },
    {
      initials: "LR",
      name: "Lasse Rothfuss",
      role: "Product Owner",
      text: en
        ? "Lasse combines three perspectives that are central to plyce: entrepreneur, recruiter and IT project manager. This creates a product that does not only work technically, but delivers real value in the daily operations of a recruitment agency. The ambition is to integrate AI and automation meaningfully into every workflow, keep the product fully intuitive and consistently put real recruiting processes at the centre."
        : "Lasse verbindet drei Perspektiven, die für plyce entscheidend sind: Unternehmer, Recruiter und IT-Projektmanager. Dadurch entsteht ein Produkt, das nicht nur technisch funktioniert, sondern im Alltag einer Personalberatung echten Nutzen stiftet. Der Anspruch: KI und Automation sinnvoll in alle Workflows integrieren, vollständig intuitiv und dabei die echten Arbeitsabläufe von Personalberatungen konsequent in den Mittelpunkt stellen.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-14 md:py-20 section-padding border-b border-border/40 overflow-hidden">
        <div className="container-tight text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">{en ? "People behind the product" : "Menschen hinter dem Produkt"}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-gradient-hero text-balance">
              {en ? "Behind every product are people." : "Hinter jedem Produkt stehen Menschen."}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              {en
                ? "plyce was not created on a whiteboard. It grew out of real recruiting practice, process expertise and technical experience. Meet the people shaping the product."
                : "plyce ist nicht am Whiteboard entstanden, sondern aus echter Recruiting-Praxis, Prozesswissen und technischer Erfahrung. Hier stellen wir die Köpfe hinter dem Produkt vor."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 section-padding">
        <div className="container-tight grid gap-7 lg:grid-cols-3">
          {people.map((person, index) => (
            <ScrollReveal key={person.name} delay={index * 80} className="h-full">
              <article className="h-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-light via-muted/60 to-background flex items-center justify-center border-b border-border/50 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.16),transparent_55%)]" aria-hidden />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-primary/20 bg-background/80 shadow-sm">
                    <span className="text-3xl font-extrabold tracking-tight text-primary">{person.initials}</span>
                  </div>
                  <span className="absolute bottom-4 right-4 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">{en ? "Photo coming soon" : "Foto folgt"}</span>
                </div>
                <div className="p-6 md:p-7">
                  <h2 className="text-xl font-bold tracking-tight">{person.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary">{person.role}</p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{person.text}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 section-padding bg-foreground text-primary-foreground">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 md:p-9 h-full">
                <HeartHandshake className="h-8 w-8 text-primary mb-5" />
                <h2 className="text-2xl font-bold tracking-tight mb-3">{en ? "A wider team around plyce" : "Ein Team rund um plyce"}</h2>
                <p className="text-sm leading-relaxed text-primary-foreground/65">
                  {en
                    ? "Beyond the core team, specialists in support, product, design, engineering and recruiting operations help us build, test and continuously improve plyce. This combination of real recruiting practice and technical execution is central to how we develop the platform."
                    : "Neben dem Kernteam unterstützen uns Spezialisten aus Support, Produkt, Design, Engineering und Recruiting Operations dabei, plyce zu entwickeln, zu testen und kontinuierlich zu verbessern. Diese Verbindung aus echter Recruiting-Praxis und technischer Umsetzung prägt die Entwicklung der Plattform."}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 md:p-9 h-full">
                <Code2 className="h-8 w-8 text-primary mb-5" />
                <h2 className="text-2xl font-bold tracking-tight mb-3">{en ? "Want to build with us?" : "Du möchtest mit uns bauen?"}</h2>
                <p className="text-sm leading-relaxed text-primary-foreground/65 mb-6">
                  {en
                    ? "We are growing the team around an AI-native, workflow-oriented recruiting platform. If you enjoy solving real operational problems with modern software, take a look at our open roles."
                    : "Wir bauen das Team rund um eine AI-native, workflow-orientierte Recruiting-Plattform weiter aus. Wenn du echte operative Probleme mit moderner Software lösen möchtest, schau dir unsere offenen Stellen an."}
                </p>
                <Button asChild variant="hero" size="lg"><Link to={careersPath}>{en ? "View open roles" : "Offene Stellen ansehen"}<ArrowRight className="h-4 w-4" /></Link></Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
