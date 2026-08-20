import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/LoginModal";
import DemoBookingModal from "@/components/DemoBookingModal";
import { ChevronDown, Menu, X } from "lucide-react";
import { faqCategoryNav } from "@/pages/FaqPage";
import { aiAgentsNav } from "@/pages/AIAgentsPage";
import { getLocaleFromPath, localizePath, stripLocalePrefix } from "@/lib/locale";

const navLinks = [
  { de: "FAQ", en: "FAQ", href: "/faq" },
  { de: "AI Agents", en: "AI Agents", href: "/ai-agents" },
  { de: "Features", en: "Features", href: "/features" },
  { de: "plyce time", en: "plyce time", href: "/plyce-time" },
  { de: "Datenschutz", en: "Data Protection", href: "/data-protection" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [faqMenuOpen, setFaqMenuOpen] = useState(false);
  const [agentsMenuOpen, setAgentsMenuOpen] = useState(false);
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const basePath = stripLocalePrefix(location.pathname);
  const path = (href: string) => localizePath(href, locale);
  const languageTarget = `${localizePath(location.pathname, locale === "de" ? "en" : "de")}${location.hash}`;

  const openLogin = () => { setOpen(false); setLoginOpen(true); };
  const openDemo = () => { setOpen(false); setDemoOpen(true); };

  useEffect(() => {
    const onOpenDemo = () => setDemoOpen(true);
    window.addEventListener("plyce-open-demo-modal", onOpenDemo);
    return () => window.removeEventListener("plyce-open-demo-modal", onOpenDemo);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    setFaqMenuOpen(false);
    setAgentsMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-wide section-padding">
        <div className="flex h-16 items-center justify-between">
          <Link to={locale === "en" ? "/en" : "/"} className="flex items-center gap-2.5">
            <img src="/plyce-logo-mark.png" alt={locale === "en" ? "plyce logo – ATS and CRM for recruitment agencies and recruiters" : "plyce Logo – ATS und CRM für Personalberatungen und Recruiter"} width={32} height={40} className="h-8 w-auto object-contain object-left" decoding="async" />
            <span className="text-xl font-bold tracking-tight text-foreground">plyce</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href === "/faq" ? (
                <div key="faq" className="relative" onMouseEnter={() => { setFaqMenuOpen(true); setAgentsMenuOpen(false); }} onMouseLeave={() => setFaqMenuOpen(false)}>
                  <div className="flex items-center gap-0.5">
                    <Link to={path("/faq")} className={`text-sm font-medium transition-colors hover:text-primary ${basePath === "/faq" ? "text-primary" : "text-muted-foreground"}`}>{link[locale]}</Link>
                    <ChevronDown className={`h-3.5 w-3.5 shrink-0 opacity-70 ${basePath === "/faq" || faqMenuOpen ? "text-primary" : "text-muted-foreground"}`} aria-hidden />
                  </div>
                  <div role="menu" className={`absolute left-1/2 top-full z-50 min-w-[min(100vw-2rem,280px)] max-w-[min(100vw-2rem,320px)] -translate-x-1/2 pt-2 transition-[opacity,visibility] duration-150 ${faqMenuOpen ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"}`}>
                    <div className="rounded-xl border border-border/60 bg-popover py-1.5 shadow-lg shadow-black/10">
                      {faqCategoryNav.map((cat) => <Link key={cat.id} to={`${path("/faq")}#${cat.id}`} role="menuitem" className="block px-4 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-accent hover:text-primary" onClick={() => setFaqMenuOpen(false)}>{cat.title}</Link>)}
                    </div>
                  </div>
                </div>
              ) : link.href === "/ai-agents" ? (
                <div key="agents" className="relative" onMouseEnter={() => { setAgentsMenuOpen(true); setFaqMenuOpen(false); }} onMouseLeave={() => setAgentsMenuOpen(false)}>
                  <div className="flex items-center gap-0.5">
                    <Link to={path("/ai-agents")} className={`text-sm font-medium transition-colors hover:text-primary ${basePath === "/ai-agents" ? "text-primary" : "text-muted-foreground"}`}>{link[locale]}</Link>
                    <ChevronDown className={`h-3.5 w-3.5 shrink-0 opacity-70 ${basePath === "/ai-agents" || agentsMenuOpen ? "text-primary" : "text-muted-foreground"}`} aria-hidden />
                  </div>
                  <div role="menu" className={`absolute left-1/2 top-full z-50 min-w-[min(100vw-2rem,300px)] max-w-[min(100vw-2rem,340px)] -translate-x-1/2 pt-2 transition-[opacity,visibility] duration-150 ${agentsMenuOpen ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"}`}>
                    <div className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain rounded-xl border border-border/60 bg-popover py-1.5 shadow-lg shadow-black/10">
                      {aiAgentsNav.map((agent) => <Link key={agent.id} to={`${path("/ai-agents")}#${agent.id}`} role="menuitem" className="block px-4 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-accent hover:text-primary" onClick={() => setAgentsMenuOpen(false)}>{agent.title}</Link>)}
                    </div>
                  </div>
                </div>
              ) : <Link key={link.href} to={path(link.href)} className={`text-sm font-medium transition-colors hover:text-primary ${basePath === link.href ? "text-primary" : "text-muted-foreground"}`}>{link[locale]}</Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to={languageTarget} className="rounded-md border border-border/70 px-2.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary" aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}>{locale === "de" ? "EN" : "DE"}</Link>
            <Button variant="ghost" size="sm" type="button" onClick={() => setLoginOpen(true)}>Login</Button>
            <Button variant="default" size="sm" type="button" onClick={() => setDemoOpen(true)}>{locale === "en" ? "Request Demo" : "Demo anfragen"}</Button>
          </div>

          <button type="button" className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors" onClick={() => setOpen(!open)} aria-label={open ? (locale === "en" ? "Close menu" : "Menü schließen") : (locale === "en" ? "Open menu" : "Menü öffnen")} aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>

        {open && <div className="md:hidden pb-4 pt-2 animate-fade-in"><div className="flex flex-col gap-2">
          {navLinks.map((link) => <Link key={link.href} to={path(link.href)} onClick={() => setOpen(false)} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-accent ${basePath === link.href ? "text-primary bg-primary-light" : "text-muted-foreground"}`}>{link[locale]}</Link>)}
          <Link to={languageTarget} onClick={() => setOpen(false)} className="mx-3 px-3 py-2 rounded-lg border border-border/70 text-sm font-semibold text-muted-foreground">{locale === "de" ? "English" : "Deutsch"}</Link>
          <div className="flex gap-2 mt-2 px-3"><Button variant="ghost" size="sm" className="flex-1" type="button" onClick={openLogin}>Login</Button><Button variant="default" size="sm" className="flex-1" type="button" onClick={openDemo}>{locale === "en" ? "Request Demo" : "Demo anfragen"}</Button></div>
        </div></div>}
      </div>
      <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
      <DemoBookingModal open={demoOpen} onOpenChange={setDemoOpen} />
    </nav>
  );
};

export default Navbar;
