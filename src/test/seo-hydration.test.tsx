import { readFileSync } from "node:fs";
import { act } from "react";
import { hydrateRoot, type Root } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";
import { getPageSeo, seoRoutes } from "../lib/seo";

// Exercise the generated HTML rather than a second copy of the page markup.
// Build first: npm run build && npm test.
let root: Root | undefined;
beforeEach(() => {
  vi.stubGlobal("IS_REACT_ACT_ENVIRONMENT", true);
  vi.stubGlobal("IntersectionObserver", class {
    observe() {}
    disconnect() {}
    unobserve() {}
  });
  window.scrollTo = vi.fn();
  window.localStorage.setItem("plyce-cookie-consent", "{}");
});
afterEach(async () => {
  if (root) await act(async () => root?.unmount());
  root = undefined;
  document.body.innerHTML = "";
  vi.unstubAllGlobals();
});

function loadPage(path: string) {
  const file = path === "/" ? "dist/index.html" : `dist${path}/index.html`;
  const documentHtml = readFileSync(file, "utf8");
  const parsed = new DOMParser().parseFromString(documentHtml, "text/html");
  document.head.innerHTML = parsed.head.innerHTML;
  document.body.innerHTML = parsed.body.innerHTML;
  window.history.replaceState({}, "", path);
  return document.getElementById("root")!;
}

describe("static HTML hydration", () => {
  it.each(seoRoutes.map(({ path }) => path))("preserves content and images at %s", async (path) => {
    const container = loadPage(path);
    const text = container.textContent;
    const images = [...container.querySelectorAll("img")].map((img) => [img.getAttribute("src"), img.alt]);
    const errors: unknown[] = [];
    await act(async () => {
      root = hydrateRoot(container, <><App /><Analytics /></>, {
        onRecoverableError: (error) => errors.push(error),
      });
    });
    expect(errors).toEqual([]);
    expect(container.textContent).toBe(text);
    expect([...container.querySelectorAll("img")].map((img) => [img.getAttribute("src"), img.alt])).toEqual(images);
    expect(document.title).toBe(getPageSeo(path).seo.title);
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelectorAll("#plyce-schema-org")).toHaveLength(1);
  });

  it("supports navigation, language switching and opening the demo modal after hydration", async () => {
    const container = loadPage("/");
    await act(async () => { root = hydrateRoot(container, <><App /><Analytics /></>); });
    await act(async () => { (container.querySelector('nav a[href="/features"]') as HTMLAnchorElement).click(); });
    expect(window.location.pathname).toBe("/features");
    expect(document.title).toBe(getPageSeo("/features").seo.title);
    await act(async () => { (container.querySelector('nav a[href="/en/features"]') as HTMLAnchorElement).click(); });
    expect(window.location.pathname).toBe("/en/features");
    expect(document.documentElement.lang).toBe("en");
    await act(async () => { window.dispatchEvent(new Event("plyce-open-demo-modal")); });
    expect(document.querySelector('[role="dialog"]')).not.toBeNull();
  });
});
