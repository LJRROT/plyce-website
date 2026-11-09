import { Analytics } from "@vercel/analytics/react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";
import { getPageSeo, seoRoutes } from "./lib/seo";

export { seoRoutes };

export function render(path: string) {
  const html = renderToString(<><StaticRouter location={path}><AppContent /></StaticRouter><Analytics /></>);
  return { html, metadata: getPageSeo(path) };
}
