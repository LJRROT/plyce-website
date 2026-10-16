import { build } from "vite";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const mode = process.argv.includes("--mode")
  ? process.argv[process.argv.indexOf("--mode") + 1]
  : "production";
const temporaryDirectory = resolve(".prerender");
const escapeHtml = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function renderHead({ isEn, seo, known, currentUrl, deUrl, enUrl, imageUrl, graph }) {
  const meta = (key, value, property = false) => `<meta ${property ? "property" : "name"}="${key}" content="${escapeHtml(value)}">`;
  const indexable = known && !seo.noindex;
  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    meta("description", seo.description),
    meta("robots", indexable ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" : "noindex, nofollow"),
    `<link rel="canonical" href="${escapeHtml(currentUrl)}">`,
    ...(indexable ? [["de", deUrl], ["en", enUrl], ["x-default", deUrl]].map(([lang, url]) => `<link rel="alternate" hreflang="${lang}" href="${escapeHtml(url)}">`) : []),
    meta("og:title", seo.title, true), meta("og:description", seo.description, true),
    meta("og:url", currentUrl, true), meta("og:type", "website", true),
    meta("og:locale", isEn ? "en_GB" : "de_DE", true), meta("og:site_name", "plyce", true),
    meta("og:image", imageUrl, true), meta("twitter:card", "summary_large_image"),
    meta("twitter:title", seo.title), meta("twitter:description", seo.description), meta("twitter:image", imageUrl),
    `<script id="plyce-schema-org" type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c")}</script>`,
  ].join("\n");
}

try {
  await build({ mode, build: {
    ssr: "src/entry-server.tsx", outDir: temporaryDirectory, copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
  } });
  const { render, seoRoutes } = await import(pathToFileURL(resolve(temporaryDirectory, "entry-server.mjs")));
  const template = await readFile("dist/index.html", "utf8");
  const head = template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\s+(?=[^>]*(?:name|property)=["'](?:description|robots|og:[^"']+|twitter:[^"']+)["'])[^>]*>/gi, "");
  for (const path of [...seoRoutes.map((route) => route.path), "/404"]) {
    const { html, metadata } = render(path);
    const document = head.replace(/<html[^>]*>/, `<html lang="${metadata.isEn ? "en" : "de"}">`)
      .replace("</head>", () => `${renderHead(metadata)}\n</head>`)
      .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
    const file = path === "/" ? "dist/index.html" : path === "/404" ? "dist/404.html" : `dist${path}/index.html`;
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, document);
    console.log(`Prerendered ${path}`);
  }
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
