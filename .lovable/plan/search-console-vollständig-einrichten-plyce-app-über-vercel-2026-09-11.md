# Search Console vollständig einrichten (plyce.app über Vercel)

## Ausgangslage

- Die produktive Domain `https://plyce.app` (Vercel, Deploy über Git) ist in der Search Console bereits verifiziert, die Sitemap `https://plyce.app/sitemap.xml` ist eingereicht.
- Der SEO-Check prüft aber die Lovable-Testadresse `https://plyceats.lovable.app` und meldet sie deshalb weiterhin als "nicht verifiziert".
- Das Verifizierungs-Tag für die Lovable-Adresse liegt bereits im Seitenkopf, ist auf der Lovable-Adresse aber nur nach einem Lovable-Publish sichtbar.

## Was gemacht wird

1. Merken (dauerhaft): Produktion läuft über Vercel, maßgebliche Domain für alles SEO-Relevante ist `https://plyce.app`; Lovable-Publish dient nur dem Testen und der Verifizierung der Testadresse.
2. Prüfen, dass alle SEO-Angaben konsequent auf `https://plyce.app` zeigen: Canonical, Sprachvarianten, Social-Angaben, Sitemap-Adressen und robots-Eintrag. Abweichungen werden korrigiert.
3. Kontrollieren, dass `https://plyce.app/sitemap.xml` und `https://plyce.app/robots.txt` live erreichbar sind und alle öffentlichen Seiten enthalten (inklusive der neueren Seiten wie plyce time und Recruiting-Software-Vergleich).
4. Für die Lovable-Testadresse: nach einem Lovable-Publish die Verifizierung bei Google auslösen, die Adresse als Property anlegen und ihre Sitemap einreichen. Damit ist die SEO-Meldung erledigt, ohne dass sich an der Produktion etwas ändert.
5. Abschließend erneut den Search-Console-Status abfragen und die Meldung als erledigt markieren.

## Wichtig für dich

- Änderungen an Seitenkopf, Sitemap oder robots wirken auf `plyce.app` erst nach dem nächsten Vercel-Deploy über Git.
- Schritt 4 braucht einmalig einen Lovable-Publish; das betrifft nur die Testadresse, nicht plyce.app.

## Technische Details

- `src/lib/siteUrl.ts` und `vite.config.ts` (Sitemap/robots-Generierung) bleiben auf `https://plyce.app` als Basis-URL.
- `index.html` behält beide `google-site-verification`-Tags.
- Verifizierung und Sitemap-Einreichung laufen über die verbundene Search-Console-Verbindung (Token holen, `webResource` verifizieren, Property anlegen, Sitemap einreichen).
- Kein Wechsel des Sitemap-Mechanismus; die bestehende Build-Generierung bleibt.
