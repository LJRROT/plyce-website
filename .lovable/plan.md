

## Analyse: Google Snippet & Favicon-Status

Ich habe Live-Site, robots.txt, sitemap.xml und HTML geprüft. Drei kritische Probleme blockieren ein gutes Google-Snippet:

### Befund 1 — Falsche Domain in Sitemap & Robots (KRITISCH)
- `https://www.plyce.app/sitemap.xml` listet alle URLs als `https://plyce.io/...` (falsche Domain!)
- `https://www.plyce.app/robots.txt` verweist auf `https://plyce.io/sitemap.xml`
- Ursache: `VITE_SITE_URL` ist nicht gesetzt → Default in `siteUrl.ts` und `vite.config.ts` ist `https://plyce.io`
- Effekt: Google crawlt die falschen URLs, kanonische Tags zeigen auf `plyce.io`, dadurch wird `plyce.app` nicht sauber indexiert. **Das ist die Hauptursache für ein schwaches SERP-Snippet.**

### Befund 2 — `/pricing` fehlt komplett in der Sitemap
- In `vite.config.ts` (Zeile 18–30) ist `/pricing` nicht in `sitemapRoutes` aufgenommen, obwohl die Route existiert und indexierbar ist.
- Effekt: Google findet die Pricing-Seite nicht über die Sitemap → keine Sitelink-Chance.

### Befund 3 — Favicon
- `public/favicon.ico` ist gelöscht (gut, Lovable-Icon weg)
- `public/plyce-favicon.png` existiert und wird in `index.html` korrekt verlinkt
- `apple-touch-icon` zeigt auf `plyce-logo-mark.png` (gut)
- **Aber**: Google bevorzugt eine echte `favicon.ico` ODER ein SVG. Das aktuelle PNG mit 32x32 ist zwar gültig, Google ignoriert es manchmal zugunsten alter Cache-Daten. Empfehlung: zusätzlich eine `favicon.ico` (Multi-Size: 16/32/48) bereitstellen.

### Befund 4 — Snippet-Qualität (Title & Description)
- Title (`plyce – ATS & CRM für Personalberatungen und Recruiter | Software`) ist mit ~67 Zeichen leicht zu lang → Google kürzt am Pipe.
- Description ist gut (155 Zeichen), aber der Markenname „plyce" steht am Anfang — kann man emotionaler/CTA-orientierter formulieren.

---

## Plan

### 1. Domain-Konfiguration korrigieren (höchste Priorität)
- `src/lib/siteUrl.ts`: Default von `https://plyce.io` → `https://www.plyce.app` ändern
- `vite.config.ts` Zeile 35: Default von `https://plyce.io` → `https://www.plyce.app` ändern
- Effekt nach Re-Deploy: sitemap.xml, robots.txt, canonical-Tags und JSON-LD zeigen alle auf die korrekte Domain.

### 2. `/pricing` in Sitemap aufnehmen
- `vite.config.ts` Zeile 21–22: nach `/ai-agents` einfügen:
  ```
  { loc: "/pricing", changefreq: "weekly", priority: "0.9" }
  ```

### 3. Favicon härten
- Aus dem bestehenden `public/plyce-favicon.png` eine echte `public/favicon.ico` (Multi-Size 16/32/48) generieren
- In `index.html` zusätzlich verlinken:
  ```html
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="32x32" href="/plyce-favicon.png">
  ```
- Reihenfolge so lassen, dass Browser/Google die `.ico` bevorzugt anfragen können.

### 4. Title & Description optimieren für SERP
- Title (max ~60 Zeichen): `plyce – ATS & CRM für Personalberater und Recruiter`
- Description (155 Zeichen, mit klarem Nutzen + Vertrauen):
  `Die KI-native Recruiting-Plattform für Personalberatungen: Kandidaten, Projekte, Kunden und 11 AI Agents in einem System. EU-Hosting, DSGVO-konform.`
- In `Seo.tsx` `routeSeo["/"]` und in `index.html` (statische Tags) synchron aktualisieren.

### 5. Google Search Console Pflege (Empfehlung, manuell)
Nach Deploy: in der Google Search Console
- neue Sitemap einreichen: `https://www.plyce.app/sitemap.xml`
- URL-Inspection für `/`, `/features`, `/ai-agents`, `/pricing`, `/faq` → „Indexierung beantragen"
- Bis Google neu crawlt: 3–10 Tage.

### Geänderte Dateien
- `src/lib/siteUrl.ts` — Default-Domain
- `vite.config.ts` — Default-Domain + `/pricing` in Sitemap
- `index.html` — Title, Description, zusätzlicher Favicon-Link
- `src/components/Seo.tsx` — Home-Title & Description
- `public/favicon.ico` — neu generiert aus `plyce-favicon.png`

### Hinweis
Der wichtigste Hebel ist Punkt 1 (Domain). Solange Sitemap und Canonicals auf `plyce.io` zeigen, kann Google die `plyce.app`-Seite nicht sauber bewerten — egal wie schön Title, Description und Favicon sind.

