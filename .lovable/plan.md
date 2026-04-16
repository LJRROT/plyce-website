

## Analyse

Der Screenshot zeigt drei Probleme im Google-Suchergebnis:

1. **Falsches Favicon**: Google zeigt das Lovable-Icon statt des plyce-Logos. Das liegt daran, dass `favicon.ico` (Lovable-Standard) noch im `public/`-Ordner liegt und viele Browser/Google diesen Pfad bevorzugen. Ausserdem fehlt ein optimiertes SVG-Favicon, das Google bevorzugt crawlt.

2. **Keine Sitelinks**: Google zeigt keine Unterseiten. Um Sitelinks zu foerdern, braucht es ein `SiteNavigationElement` JSON-LD Schema, das die gewuenschten Seiten (AI Agents, Features, Pricing, FAQ) explizit als Navigation auszeichnet.

3. **Pricing-Seite ist noindex**: Die Route `/pricing3fRs` hat `noindex: true` und einen kryptischen URL-Pfad. Google kann sie nicht indexieren und wird sie nie als Sitelink zeigen.

---

## Plan

### 1. Favicon-Problem beheben

- `public/favicon.ico` durch das plyce-Logo ersetzen (das hochgeladene `plyce-favicon.png` als `.ico` konvertieren oder das bestehende `favicon.ico` loeschen)
- Einen zusaetzlichen `<link rel="icon" type="image/svg+xml">` Tag hinzufuegen, falls ein SVG-Logo vorhanden ist (Google bevorzugt SVG)
- Apple-Touch-Icon hinzufuegen (`<link rel="apple-touch-icon">`) mit `plyce-logo-mark.png`

**Dateien:** `index.html`, `public/favicon.ico` (loeschen/ersetzen)

### 2. Pricing-Route oeffentlich machen

- Route von `/pricing3fRs` zu `/pricing` umbenennen (sauberer URL-Pfad)
- `noindex: true` entfernen, damit Google die Seite indexieren kann
- SEO-Eintrag in `Seo.tsx` auf `/pricing` umstellen
- Route in `App.tsx` anpassen
- Alle internen Links aktualisieren

**Dateien:** `src/App.tsx`, `src/components/Seo.tsx`, ggf. Navbar/Footer/Sitemap

### 3. SiteNavigationElement JSON-LD hinzufuegen

Im `Seo.tsx` ein `SiteNavigationElement`-Schema zum JSON-LD-Graph hinzufuegen, das die vier gewuenschten Sitelinks signalisiert:

```text
SiteNavigationElement:
  - AI Agents    → /ai-agents
  - Features     → /features
  - Pricing      → /pricing
  - FAQ          → /faq
```

Dies ist das staerkste Signal an Google, welche Seiten als Sitelinks angezeigt werden sollen.

**Datei:** `src/components/Seo.tsx`

### 4. Meta-Beschreibungen optimieren

- Startseite: Titel und Description praegnanter fuer SERP-Snippet (max 60 Zeichen Titel, 155 Zeichen Description)
- `index.html` statische Meta-Tags mit den dynamischen aus `Seo.tsx` synchronisieren (aktuell weichen sie voneinander ab)

**Dateien:** `index.html`, `src/components/Seo.tsx`

---

## Technische Details

| Aenderung | Datei(en) |
|---|---|
| `favicon.ico` loeschen, Apple-Touch-Icon ergaenzen | `public/favicon.ico`, `index.html` |
| Route `/pricing3fRs` → `/pricing`, noindex entfernen | `App.tsx`, `Seo.tsx`, Navbar, Footer, Sitemap |
| `SiteNavigationElement` JSON-LD | `Seo.tsx` |
| Meta-Tags in `index.html` an `Seo.tsx` angleichen | `index.html` |

**Hinweis**: Google waehlt Sitelinks automatisch. Das `SiteNavigationElement`-Schema und saubere URLs sind die besten Signale, aber eine Garantie gibt es nicht. Die Aenderungen brauchen einige Tage bis Google sie uebernimmt.

