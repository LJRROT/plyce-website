import fs from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import { seoRoutes } from "./src/lib/seo";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import { sendDemoViaResend, validateDemoPayload } from "./server/sendDemoViaResend";

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (c: Buffer) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "https://plyce.app").replace(/\/$/, "");

  let isSsrBuild = false;
  return {
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "html-inject-site-url",
      transformIndexHtml(html: string) {
        return html.replaceAll("%SITE_URL%", siteUrl);
      },
    },
    mode === "development" && {
      name: "demo-request-resend-dev",
      configureServer(server: { middlewares: { use: (handler: (req: IncomingMessage & { url?: string }, res: ServerResponse, next: () => void) => void) => void } }) {
        server.middlewares.use(async (req: IncomingMessage & { url?: string }, res: ServerResponse, next: () => void) => {
          const pathname = req.url?.split("?")[0] ?? "";
          if (pathname !== "/api/send-demo-request" || req.method !== "POST") {
            return next();
          }
          const apiKey = env.RESEND_API_KEY?.trim();
          const from = env.RESEND_FROM_EMAIL?.trim();
          const to = env.DEMO_REQUEST_TO_EMAIL?.trim();
          if (!apiKey || !from || !to) {
            res.statusCode = 503;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                ok: false,
                message:
                  "Resend ist lokal nicht konfiguriert. Legen Sie RESEND_API_KEY, RESEND_FROM_EMAIL und DEMO_REQUEST_TO_EMAIL in .env an.",
              }),
            );
            return;
          }
          try {
            const raw = await readBody(req as IncomingMessage);
            let body: unknown = {};
            if (raw) {
              try {
                body = JSON.parse(raw) as unknown;
              } catch {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ ok: false, message: "Ungültiges JSON." }));
                return;
              }
            }
            const parsed = validateDemoPayload(body);
            if ("error" in parsed) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, message: parsed.error }));
              return;
            }
            const result = await sendDemoViaResend(parsed, { apiKey, from, to });
            if (!result.ok) {
              res.statusCode = result.status >= 400 && result.status < 600 ? result.status : 502;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, message: result.message }));
              return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: true }));
          } catch {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: false, message: "Unerwarteter Fehler." }));
          }
        });
      },
    },
    {
      name: "seo-sitemap-robots",
      configResolved(config) { isSsrBuild = Boolean(config.build.ssr); },
      closeBundle() {
        if (isSsrBuild) return;
        const outDir = path.resolve(__dirname, "dist");
        if (!fs.existsSync(outDir)) return;

        const escapeXml = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
        const urlEntries = seoRoutes.filter((route) => !route.noindex).map(({ path: route }) => {
          const isEn = route === "/en" || route.startsWith("/en/");
          const dePath = isEn ? route.slice(3) || "/" : route;
          const enPath = dePath === "/" ? "/en" : `/en${dePath}`;
          const url = `${siteUrl}${route}`;
          return `  <url>
    <loc>${escapeXml(url)}</loc>
    <xhtml:link rel="alternate" hreflang="de" href="${escapeXml(`${siteUrl}${dePath}`)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(`${siteUrl}${enPath}`)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${siteUrl}${dePath}`)}" />
  </url>`;
        }).join("\n");
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;
        fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap, "utf8");

        const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
        fs.writeFileSync(path.join(outDir, "robots.txt"), robots, "utf8");
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
});
