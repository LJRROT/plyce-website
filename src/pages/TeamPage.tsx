import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Code2, HeartHandshake, Linkedin } from "lucide-react";
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
      name: "Malin Behrens",
      role: "Business Analyst",
      image: "/team/malin.jpg",
      linkedin: "https://www.linkedin.com/in/malin-behrens",
      text: en
        ? "Malin brings 16 years of experience in recruitment consulting. Through her work in recruitment agencies and as an interim HR manager, she has built a deep understanding of HR software, recruiting processes and operational requirements. She knows the workflows, friction points and system gaps from daily practice. Her focus at plyce is to design processes the way recruitment agencies actually work."
        : "Malin bringt 16 Jahre Erfahrung aus der Personalberatung mit. Durch ihre Tätigkeit in Personalberatungen sowie als HR Interim Managerin hat sie über viele Jahre ein umfassendes Bild von bestehenden HR-Softwarelösungen, Recruiting-Prozessen und operativen Anforderungen gewonnen. Sie kennt die Abläufe, Herausforderungen und Systembrüche aus der Praxis. Ihr Fokus bei plyce: Prozesse so abbilden, wie Personalberatungen wirklich arbeiten.",
    },
    {
      name: "Mark Vaughn",
      role: "Technical Advisor / Architect",
      image: "/team/mark.jpg",
      linkedin: "https://www.linkedin.com/in/moakvaughn",
      text: en
        ? "Mark brings more than 20 years of experience in software engineering and in the architecture of complex, internationally scalable software systems. At plyce, he is responsible for key topics around architecture and technical development. One of the biggest challenges in Agentic Engineering and AI-powered software is not only to build intelligent capabilities quickly, but to integrate them into a robust architecture in a stable, secure and performant way. This is where Mark focuses: consistently ensuring software quality, guiding technical decisions for the long term and helping evolve plyce so the platform remains reliable, maintainable and scalable as usage grows."
        : "Mark bringt über 20 Jahre Erfahrung in der Softwareentwicklung und in der Architektur komplexer, international skalierbarer Softwaresysteme mit. Bei plyce verantwortet er zentrale Themen rund um Architektur und technische Weiterentwicklung. Eine der größten Herausforderungen im Agentic Engineering und bei KI-gestützter Software besteht darin, intelligente Funktionen nicht nur schnell zu entwickeln, sondern sie stabil, sicher und performant in eine belastbare Gesamtarchitektur zu integrieren. Genau hier liegt Marks Fokus: Softwarequalität konsequent sicherzustellen, technische Entscheidungen nachhaltig auszurichten und plyce so weiterzuentwickeln, dass die Plattform auch mit wachsender Nutzung zuverlässig, wartbar und skalierbar bleibt.",
    },
    {
      name: "Lasse Rothfuss",
      role: "Product Owner",
      image: "/team/lasse.jpg",
      linkedin: "https://www.linkedin.com/in/lasserothfuss",
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
                <div className="border-b border-border/50 bg-gradient-to-br from-primary-light via-muted/60 to-background px-6 py-8">
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-border/60 bg-background shadow-sm md:h-32 md:w-32">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h2 className="text-xl font-bold tracking-tight">{person.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary">{person.role}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
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
