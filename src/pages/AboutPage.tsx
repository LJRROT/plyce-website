import { Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const team = [
  {
    name: "Malin Behrens",
    role: "Co-Founder & Managing Director",
    image: "/team/malin.jpg",
    linkedin: "https://www.linkedin.com/in/malin-behrens",
  },
  {
    name: "Lasse Rothfuss",
    role: "Co-Founder & Managing Director",
    image: "/team/lasse.jpg",
    linkedin: "https://www.linkedin.com/in/lasserothfuss",
  },
  {
    name: "Mark David Vaughn",
    role: "AI Architect & Technical Advisor",
    image: "/team/mark.jpg",
    linkedin: "https://www.linkedin.com/in/moakvaughn",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 section-padding">
      <div className="container-tight">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-14 md:mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Über uns</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">Das Team hinter plyce</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Recruiting-Know-how, Produktentwicklung und AI Engineering in einem Team.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 90} className="h-full">
              <article className="group flex h-full flex-col items-center rounded-2xl border border-border/60 bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
                <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-md ring-1 ring-border/60">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                </div>
                <h2 className="mt-6 text-xl font-bold tracking-tight">{member.name}</h2>
                <p className="mt-2 text-sm font-medium leading-relaxed text-primary">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  aria-label={`${member.name} auf LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
