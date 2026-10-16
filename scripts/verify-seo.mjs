import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, 32, "Sitemap should contain 16 DE and 16 EN indexable pages");
assert.equal(new Set(urls).size, urls.length, "No duplicate sitemap URLs");
const getPage = (path) => path === "/" ? "dist/index.html" : `dist${path}/index.html`;
for (const url of urls) {
  const path = new URL(url).pathname;
  const html = await readFile(getPage(path), "utf8");
  assert.match(html, /<h1[\s>]/, `${path}: content and H1 without JavaScript`);
  assert.ok(!html.includes('<div id="root"></div>'), `${path}: rendered React content`);
  assert.equal((html.match(/<title[\s>]/g) || []).length, 1, `${path}: single page title`);
  assert.equal((html.match(/<meta[^>]+name="description"/g) || []).length, 1, `${path}: single description`);
  assert.ok(html.includes(`<link rel="canonical" href="${url}">`), `${path}: canonical production URL`);
  assert.equal((html.match(/rel="alternate" hreflang=/g) || []).length, 3, `${path}: three language alternates`);
  assert.match(html, path.startsWith("/en") ? /<html lang="en">/ : /<html lang="de">/);
  assert.ok(!html.includes('content="noindex'), `${path}: indexable`);
  assert.match(html, /<noscript><style>\[data-scroll-reveal\]/, "Content remains visible without JavaScript");
  const schema = html.match(/<script id="plyce-schema-org" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(schema, `${path}: structured data available without JavaScript`);
  JSON.parse(schema[1]);
  if (path === "/faq" || path === "/en/faq") {
    assert.equal((html.match(/data-faq-answer=/g) || []).length, 26, `${path}: all answers must be present without JavaScript`);
  }
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)(?:[?#][^"]*)?"/g)) await access(`dist${match[1]}`);
  console.log(`SEO OK ${path}`);
}
for (const path of ["/migration", "/en/migration"]) {
  const html = await readFile(getPage(path), "utf8");
  assert.match(html, /content="noindex, nofollow"/, `${path}: retain intentional exclusion`);
  assert.ok(!urls.some((url) => new URL(url).pathname === path), `${path}: excluded from sitemap`);
}
assert.match(await readFile("dist/404.html", "utf8"), /content="noindex, nofollow"/);
const config = JSON.parse(await readFile("vercel.json", "utf8"));
assert.ok(!config.rewrites, "No catch-all rewrite that turns missing URLs into HTTP 200");
assert.equal(config.trailingSlash, false);
console.log("Verified all 32 sitemap URLs, both noindex migration pages and custom 404.");
