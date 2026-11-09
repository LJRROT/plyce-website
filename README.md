# Welcome to your Lovable project

TODO: Document your project here

## Static HTML and technical SEO

The Vercel build runs `npm run build`: Vite builds the browser app, then
`scripts/prerender.mjs` renders every configured DE and EN page into static HTML
from the existing React components. Content, images and interactive components
are shared with the browser application. `src/lib/seo.ts` supplies the same
metadata and structured data at build time and during browser navigation.

The sitemap includes 32 indexable pages with reciprocal language alternates.
Both migration pages retain `noindex` and stay out of the sitemap. A custom
`404.html` is generated; `vercel.json` serves static files and retains real 404
responses for unknown URLs. Do not restore a catch-all rewrite to the homepage.
Trailing slashes and `/index.html` redirect to canonical paths. Existing `/api/`
functions remain Vercel Functions. Production SEO uses `https://plyce.app`
(the existing `VITE_SITE_URL` override remains available).

- `npm run verify:seo` checks generated content, metadata, language alternates,
  structured data and local asset paths. It also runs automatically during build.
- `npm test` builds first, then verifies hydration for all 34 pages, unchanged
  text and image attributes, client navigation, language switching and opening
  the demo dialog in the DOM test environment.
- Scroll reveal animations retain their existing browser behaviour; a noscript
  fallback keeps their content visible when JavaScript is disabled.

When adding a page, update its React route and DE/EN entries in `src/lib/seo.ts`.
Those entries drive prerendering and sitemap generation.
