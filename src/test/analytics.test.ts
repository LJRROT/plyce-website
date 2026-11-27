// @vitest-environment-options {"url":"https://plyce.app/"}
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const browser = window as Window & { dataLayer?: IArguments[]; "ga-disable-G-TEST123"?: boolean };
const commands = () => browser.dataLayer?.map((command) => Array.from(command)) ?? [];

describe("website analytics", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("VITE_GA_MEASUREMENT_ID", "G-TEST123");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    delete browser.dataLayer;
    delete browser["ga-disable-G-TEST123"];
    document.querySelector('script[src*="googletagmanager.com"]')?.remove();
  });

  it("loads the tag only after consent and stops recording immediately on revocation", async () => {
    const { setAnalyticsConsent, trackPageView, trackAnalyticsEvent } = await import("@/lib/analytics");

    trackPageView("/", "");
    expect(trackAnalyticsEvent("generate_lead")).toBe(false);
    expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull();

    setAnalyticsConsent(true);
    trackPageView("/", "");
    expect(document.querySelector('script[src*="googletagmanager.com"]')).not.toBeNull();
    expect(trackAnalyticsEvent("generate_lead")).toBe(true);

    document.cookie = "_ga=example; Path=/; Secure";
    setAnalyticsConsent(false);
    expect(browser["ga-disable-G-TEST123"]).toBe(true);
    expect(document.cookie).not.toContain("_ga=");
    const count = commands().length;
    trackPageView("/pricing", "");
    expect(trackAnalyticsEvent("generate_lead")).toBe(false);
    expect(commands()).toHaveLength(count);
  });

  it("deduplicates page views and strips private URL information", async () => {
    const { setAnalyticsConsent, trackPageView } = await import("@/lib/analytics");
    setAnalyticsConsent(true);

    trackPageView("/", "?utm_source=linkedin&email=test@example.invalid");
    trackPageView("/", "?utm_source=linkedin");
    trackPageView("/en/pricing", "");
    trackPageView("/arbitrary/private-path", "?utm_campaign=test@example.invalid");

    expect(commands().filter(([type, event]) => type === "event" && event === "page_view")).toHaveLength(3);
    expect(commands().filter(([type]) => type === "set").map(([, data]) => data)).toEqual([
      expect.objectContaining({ page_location: "https://plyce.app/?utm_source=linkedin" }),
      expect.objectContaining({ page_location: "https://plyce.app/en/pricing", page_referrer: "https://plyce.app/?utm_source=linkedin" }),
      expect.objectContaining({ page_location: "https://plyce.app/404", page_referrer: "https://plyce.app/en/pricing" }),
    ]);
  });
});
