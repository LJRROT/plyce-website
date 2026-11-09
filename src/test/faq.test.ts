import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { faqGroups, getFaqCategoryNav } from "../lib/faq";
import { localizePath, type Locale } from "../lib/locale";

describe("bilingual FAQ", () => {
  it("keeps both languages complete with the same stable question IDs", () => {
    const items = faqGroups.flatMap((group) => group.items);
    expect(faqGroups).toHaveLength(6);
    expect(items).toHaveLength(26);
    expect(new Set(items.map((item) => item.id)).size).toBe(items.length);
    for (const item of items) for (const locale of ["de", "en"] as const) {
      expect(item.question[locale].length).toBeGreaterThan(5);
      expect(item.answer[locale].length).toBeGreaterThan(20);
    }
  });

  it.each(["de", "en"] as Locale[])("includes every answer and valid navigation targets in %s HTML", (locale) => {
    const path = localizePath("/faq", locale);
    const html = readFileSync(`dist${path}/index.html`, "utf8");
    const page = new DOMParser().parseFromString(html, "text/html");
    expect(page.querySelectorAll("details")).toHaveLength(26);
    for (const group of faqGroups) {
      expect(page.getElementById(group.id)?.querySelector("h2")?.textContent).toBe(group.title[locale]);
      for (const item of group.items) {
        const details = page.getElementById(`faq-${item.id}`)!;
        expect(details.hasAttribute("open")).toBe(false);
        expect(details.querySelector("summary")?.textContent).toBe(item.question[locale]);
        expect(details.querySelector("[data-faq-answer] p")?.textContent).toBe(item.answer[locale]);
        for (const link of item.links ?? []) {
          expect(details.querySelector(`a[href="${localizePath(link.path, locale)}"]`)?.textContent).toBe(link.label[locale]);
        }
      }
    }
    for (const category of getFaqCategoryNav(locale)) {
      const link = page.querySelector(`nav a[href="${path}#${category.id}"]`);
      expect(link?.textContent).toBe(category.title);
      expect(page.getElementById(category.id)).not.toBeNull();
    }
  });

  it("opens and closes native FAQ answers without a React event handler", () => {
    const html = readFileSync("dist/faq/index.html", "utf8");
    const page = new DOMParser().parseFromString(html, "text/html");
    const details = document.importNode(page.querySelector("details")!, true);
    document.body.appendChild(details);
    const summary = details.querySelector("summary")!;
    expect(details.open).toBe(false);
    summary.click();
    expect(details.open).toBe(true);
    summary.click();
    expect(details.open).toBe(false);
    details.remove();
  });
});
