# Neue Seite: plyce time

Eine vollwertige Marketing-Unterseite für **plyce time** (Freelancer & Project Management, Timesheet Portal, Invoicing) — integriert in plyce CRM/ATS. Eingeordnet in Navigation und SEO zwischen *Features* und *Data Protection*.

## Route & Navigation
- Neue Route `/plyce-time` in `src/App.tsx`
- Eintrag in `Navbar` zwischen *Features* und *Data Protection* (Desktop + Mobile Menü)
- Eintrag im `Footer` Produktbereich
- Eintrag in `SitemapPage` und `public/llms.txt`
- Eintrag in `SITE_STRUCTURE_PATHS` in `src/components/Seo.tsx` (gleiche Position)

## SEO
In `src/components/Seo.tsx`:
- Title: „plyce time – Freelancer Management, Timesheets & Invoicing | plyce"
- Description (~155 Z.): Freelancer & Project Management, Timesheet Portal und automatisiertes Invoicing — nahtlos integriert in plyce CRM/ATS. EU-Hosting, DSGVO-konform.
- Breadcrumb-Label: „plyce time"
- Indexierbar (kein noindex), Canonical, hreflang, JSON-LD via bestehende Mechanik

## Seitenstruktur `src/pages/PlyceTimePage.tsx`

Layout im bestehenden Design-System (Inter, Emerald Green Primary, ScrollReveal, Card-Patterns wie `FeaturesPage`/`AIAgentsPage`). Volltext-Stil, keine Bullet-Points in Fließtexten (Memory-Regel).

1. **Hero**
   - Eyebrow „Teil der plyce Plattform"
   - H1 „plyce time"
   - Subline: „Freelancer & Project Management, Timesheet Portal und Invoicing — nahtlos integriert in plyce CRM/ATS."
   - Beschreibungs-Absatz (aus Briefing)
   - Primär-CTA „Demo anfragen" (öffnet bestehendes `DemoBookingModal`), Sekundär-Link zu `/features`

2. **Integrations-Visual (nachgebaute Grafik, responsiv)**
   - Drei Spalten auf Desktop: **plyce CRM/ATS** ← *Automatische Datenübernahme* → **plyce time**
   - Auf Mobile: vertikal gestapelt mit Pfeil-Icons (`ArrowRight`/`ArrowDown` per Tailwind Breakpoint)
   - Karten mit Lucide-Icons (Users, Building2, Briefcase, FolderOpen, FileSignature, UserRound für CRM-Seite; Database, Folder, Tag für Mittel-Block; UserCircle, MailCheck, ReceiptEuro, BellRing, BarChart3, ListChecks für time-Seite)
   - Reiner CSS/SVG-Aufbau, **keine Bilddatei**, damit responsive und themetreu

3. **Kernfunktionen** (5 Cards im Grid 1/2/3 Cols)
   Titel + Fließtext-Absatz je Funktion:
   - Automatisierte Zeiterfassung & Freigabe (Clock)
   - Integriertes Invoicing (ReceiptEuro)
   - Automatische Erinnerungen (BellRing)
   - Analytics & Forecasts (BarChart3)
   - Nahtlose CRM/ATS-Integration (Workflow)

4. **6-Schritte Workflow**
   Horizontaler Stepper Desktop / vertikale Timeline Mobile:
   1 Projekt in plyce CRM/ATS anlegen · 2 Daten automatisch an plyce time übergeben · 3 Freelancer erfassen Zeiten · 4 Kunde gibt Timesheets frei · 5 Credit Notes & Invoices automatisch · 6 Analytics & Forecasts liefern Transparenz
   - Nummerierte Kreise in Brandfarbe, Connector-Linien, Lucide-Icons je Schritt

5. **Positionierung / Closing-Banner**
   Dunkler Banner mit ShieldCheck-Icon: „Ein System. Kein Doppelaufwand. Mehr Automatisierung." + Positionierungs-Absatz + CTA „Demo anfragen".

## Responsiveness
- Mobile-first Tailwind Klassen (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Integrations-Visual: Flex-Column auf `<lg`, Grid 3-Spalter ab `lg`
- Stepper: `flex-col` Mobile mit vertikalen Connectoren, `lg:flex-row` Desktop
- Section-Padding via bestehende `section-padding`/`container-tight` Utilities
- Test in 375px, 768px, 1280px Viewports

## Geänderte/neue Dateien
- **neu**: `src/pages/PlyceTimePage.tsx`
- **edit**: `src/App.tsx` (Route)
- **edit**: `src/components/Navbar.tsx` (Nav-Eintrag)
- **edit**: `src/components/Footer.tsx` (Link)
- **edit**: `src/components/Seo.tsx` (routeSeo + SITE_STRUCTURE_PATHS)
- **edit**: `src/pages/SitemapPage.tsx`
- **edit**: `public/llms.txt`
