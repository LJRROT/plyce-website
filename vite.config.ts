import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";

const sitemapRoutes: { loc: string; changefreq: string; priority: string }[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/features", changefreq: "weekly", priority: "0.95" },
  { loc: "/ai-agents", changefreq: "weekly", priority: "0.95" },
  { loc: "/data-protection", changefreq: "monthly", priority: "0.75" },
  { loc: "/faq", changefreq: "monthly", priority: "0.8" },
  { loc: "/implementierung", changefreq: "monthly", priority: "0.75" },
  { loc: "/partnerprogramm", changefreq: "monthly", priority: "0.75" },
  { loc: "/datenschutz", changefreq: "yearly", priority: "0.35" },
  { loc: "/impressum", changefreq: "yearly", priority: "0.35" },
  { loc: "/agb", changefreq: "yearly", priority: "0.35" },
  { loc: "/sitemap", changefreq: "monthly", priority: "0.3" },
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "https://plyce.io").replace(/\/$/, "");

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
      transformIndexHtml(html) {
        return html.replaceAll("%SITE_URL%", siteUrl);
      },
    },
    {
      name: "seo-sitemap-robots",
      closeBundle() {
        const outDir = path.resolve(__dirname, "dist");
        if (!fs.existsSync(outDir)) return;

        const lastmod = new Date().toISOString().slice(0, 10);
        const urlEntries = sitemapRoutes
          .map(
            (r) => `  <url>
    <loc>${r.loc === "/" ? `${siteUrl}/` : `${siteUrl}${r.loc}`}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
          )
          .join("\n");

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
