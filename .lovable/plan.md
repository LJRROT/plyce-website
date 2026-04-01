

# SEO-Analyse und Optimierungsplan für plyce.io

## Aktueller Status

### Was bereits vorhanden ist (gut)
- **Seo.tsx**: Dynamische Meta-Tags pro Route (title, description, OG, Twitter, canonical, robots)
- **JSON-LD**: Schema.org mit WebSite, Organization, SoftwareApplication
- **sitemap.xml & robots.txt**: Werden beim Build via Vite-Plugin generiert (closeBundle-Hook)
- **Canonical URLs**: Pro Seite gesetzt
- **OG-Image**: Konfiguriert (og-image.png)
- **`lang="de"`** auf `<html>`
- **noindex für 404**: NotFound-Routen werden korrekt mit `noindex, nofollow` versehen

### Kritische Probleme

| # | Problem | Auswirkung |
|---|---------|-----------|
| 1 | **SPA ohne SSR/Prerendering** | Google-Bot kann JS-gerenderte Inhalte oft crawlen, aber die initialen Meta-Tags aus `index.html` sind für alle Routen identisch. Social-Media-Crawler (LinkedIn, Twitter, WhatsApp) führen kein JS aus → alle Shares zeigen dieselben Meta-Daten der Startseite. |
| 2 | **Build-Error in Seo.tsx** | `el.type` auf `HTMLElement` statt `HTMLScriptElement` → TypeScript-Fehler verhindert Build |
| 3 | **Build-Errors in vite.config.ts** | Implizite `any`-Typen → Build schlägt fehl |
| 4 | **Kein Prerendering** | sitemap.xml verweist auf URLs, die beim Crawl nur das leere `<div id="root">` liefern (ohne JS). Google rendert SPAs, aber mit Verzögerung und nicht garantiert vollständig. |
| 5 | **Keine `<h1>`-Hierarchie-Konsistenz** | Einige Seiten müssten geprüft werden auf korrekte H1→H2→H3-Struktur |
| 6 | **Keine strukturierten Daten pro Seite** | JSON-LD ist global identisch, nicht seitenspezifisch (z.B. FAQPage-Schema für /faq) |
| 7 | **Keine hreflang-Tags** | Seite ist auf Deutsch, aber kein `x-default` oder `de` hreflang gesetzt |
| 8 | **Bilder ohne alt-Texte** | Logo-Images haben `alt=""` — akzeptabel für dekorative Bilder, aber das Brand-Logo sollte einen alt-Text haben |

---

## Optimierungsplan

### Phase 1: Build-Fehler beheben (Voraussetzung)

**Seo.tsx Zeile 93**: Cast auf `HTMLScriptElement`:
```ts
el = document.createElement("script") as HTMLScriptElement;
```

**vite.config.ts**: Explizite Typen für die Plugin-Parameter (`html: string`, `server: ViteDevServer`, `req: IncomingMessage`, etc.)

### Phase 2: Prerendering für SEO-kritische Seiten

Ohne SSR-Framework (Next.js etc.) ist die beste Option ein **Build-Time Prerendering Plugin** wie `vite-plugin-prerender` (ehemals `prerender-spa-plugin`). Das rendert alle Routen beim Build zu statischem HTML:

- Alle 11 Routen aus der Sitemap werden als statische HTML-Dateien generiert
- Crawler sehen sofort den vollständigen Inhalt inkl. korrekter Meta-Tags
- Social-Media-Previews funktionieren korrekt
- Kein Server-Wechsel nötig, bleibt rein statisch

### Phase 3: Strukturierte Daten erweitern

- **FAQ-Seite**: `FAQPage`-Schema hinzufügen → Google zeigt FAQ-Rich-Snippets
- **Seitenspezifisches BreadcrumbList**-Schema pro Route
- **SoftwareApplication** erweitern um `offers`, `aggregateRating` (wenn verfügbar)

### Phase 4: Technische SEO-Details

- **hreflang**: `<link rel="alternate" hreflang="de" href="...">` und `x-default` setzen
- **Performance**: `loading="lazy"` für Below-the-fold-Bilder, `fetchpriority="high"` für Hero
- **Alt-Texte**: Brand-Logo mit beschreibendem alt-Text
- **Sitemap erweitern**: `<image:image>`-Tags für OG-Image hinzufügen

### Phase 5: Google Search Console & DNS

**DNS-Einträge für SEO:**
- Keine zusätzlichen DNS-Einträge für SEO an sich nötig
- **Google Search Console** Verifizierung erfordert entweder:
  - TXT-Record: `google-site-verification=XXXXX` auf der Domain, ODER
  - HTML-Meta-Tag (einfacher): `<meta name="google-site-verification" content="...">` in index.html
- Nach Verifizierung: Sitemap in Search Console einreichen (`https://plyce.io/sitemap.xml`)

**Empfohlene DNS-Einträge (falls nicht vorhanden):**
- `www` CNAME/A-Record → Redirect auf Hauptdomain
- Kein separater DNS-Eintrag für SEO nötig, aber Search Console muss eingerichtet werden

---

## Zusammenfassung der Umsetzungsschritte

1. Build-Fehler in `Seo.tsx` und `vite.config.ts` beheben
2. Prerendering-Plugin installieren und konfigurieren für alle 11 Routen
3. FAQ-Schema (JSON-LD) auf `/faq` hinzufügen
4. BreadcrumbList-Schema pro Seite in Seo.tsx
5. hreflang-Tags in Seo.tsx setzen
6. Alt-Texte für Brand-Logo korrigieren
7. Google Search Console Meta-Tag vorbereiten (Platzhalter)
8. Bilder-Optimierung (lazy loading, fetchpriority)

