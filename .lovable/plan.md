

## Plan: Sitemap-404-Fehler in Google Search Console beheben

### Ursache
Google meldet 404 für `https://www.plyce.app/sitemap.xml`, weil diese URL einen **HTTP 307 Redirect** auf `https://plyce.app/sitemap.xml` zurückgibt (Vercel leitet www → root um). Google Search Console verlangt bei Sitemaps einen direkten 200er ohne Redirect — bei Redirects wird das als allgemeiner HTTP-Fehler/404 gewertet.

Zusätzlich zeigen Sitemap-Inhalt, Canonicals und JSON-LD aktuell auf `https://www.plyce.app/...`, obwohl die echte Primary-Domain (gemäß deiner Antwort) `https://plyce.app` (ohne www) ist.

### Code-Änderungen

**1. `src/lib/siteUrl.ts`**
Default-Domain auf `https://plyce.app` (ohne www) umstellen.

**2. `vite.config.ts`**
Default `siteUrl` ebenfalls auf `https://plyce.app` ändern. Damit generieren `sitemap.xml` und `robots.txt` beim nächsten Build alle URLs ohne `www`.

**3. `index.html`**
- `<link rel="canonical">` von `https://www.plyce.app/` → `https://plyce.app/`
- `og:url` und alle weiteren absoluten URLs (z. B. `og:image`, `twitter:image`) ebenfalls auf `https://plyce.app/...`
- `hreflang`-Alternate-Links, falls vorhanden, mit anpassen

**4. `src/components/Seo.tsx`**
Alle dynamisch gesetzten Canonicals, OG-URLs und JSON-LD-Felder (`url`, `@id`, `WebSite`, `Organization`, `BreadcrumbList`, `WebPage`, `FAQPage`) auf die wwwlose Domain umstellen — automatisch durch `getSiteUrl()`-Aktualisierung, ggf. einzelne hartcodierte Strings prüfen und ersetzen.

### Was du danach in der Search Console machst (manuell, ohne Code)

1. **Property anlegen/wählen**: In der Search Console die Property **`https://plyce.app`** (ohne www) anlegen, falls noch nicht vorhanden, und per DNS-TXT oder HTML-Tag verifizieren. Die alte `www.plyce.app`-Property kannst du belassen (sie nimmt den Redirect-Traffic auf), Hauptarbeit findet aber in der wwwlosen Property statt.
2. **Alte Sitemap-Einreichung entfernen**: In `www.plyce.app`-Property die Sitemap-Einreichung löschen.
3. **Neue Sitemap einreichen**: In `plyce.app`-Property unter „Sitemaps" eingeben: `sitemap.xml` → Senden. Status sollte nach 1–2 Minuten „Erfolgreich" zeigen mit 12 entdeckten URLs.
4. **Indexierung anstoßen**: Für `/`, `/features`, `/ai-agents`, `/pricing`, `/faq` jeweils URL-Inspection → „Indexierung beantragen".

### Geänderte Dateien
- `src/lib/siteUrl.ts` — Default-Domain
- `vite.config.ts` — Default-Domain für Sitemap/Robots
- `index.html` — alle absoluten URLs (canonical, OG, Twitter)
- `src/components/Seo.tsx` — JSON-LD und Canonicals

### Verifikation nach Deploy
Nach Re-Deploy prüfe ich mit `curl`, dass:
- `https://plyce.app/sitemap.xml` direkt **HTTP 200** liefert (kein Redirect)
- Inhalt alle URLs auf `https://plyce.app/...` listet
- `robots.txt` auf `https://plyce.app/sitemap.xml` zeigt

### Hinweis
Der Redirect `www → root` bleibt auf Vercel-Ebene aktiv und ist gut so — er konsolidiert Traffic auf eine Domain. Wichtig ist nur, dass die *Quelle der Wahrheit* für Google die wwwlose Domain ist, dann gibt es keine Redirects in der Sitemap-Auslieferung.

