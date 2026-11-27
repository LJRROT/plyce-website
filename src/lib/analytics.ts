import { getLocaleFromPath } from "./locale";
import { getPageSeo, seoRoutes } from "./seo";

const configuredId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";
export const measurementId = /^G-[A-Z0-9]+$/.test(configuredId) ? configuredId : "";
const websiteHosts = new Set(["plyce.app", "www.plyce.app"]);
const websitePaths = new Set(seoRoutes.map(({ path }) => path));
const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term"];
const consentDefaults = { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" } as const;

type AnalyticsEvent = "demo_cta_click" | "demo_form_start" | "generate_lead";
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
};

let enabled = false;
let initialized = false;
let previousPage: { path: string; location: string } | undefined;

export function canUseWebsiteAnalytics() {
  return Boolean(measurementId && typeof window !== "undefined" && websiteHosts.has(window.location.hostname));
}

function gtag(..._command: unknown[]) {
  const browser = window as AnalyticsWindow;
  browser.dataLayer ??= [];
  // eslint-disable-next-line prefer-rest-params -- Google Tag's snippet queues an arguments object.
  browser.dataLayer.push(arguments);
}

function pagePath(pathname: string) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return websitePaths.has(normalized) ? normalized : getLocaleFromPath(normalized) === "en" ? "/en/404" : "/404";
}

function cleanPageLocation(path: string, search: string) {
  const url = new URL(path, window.location.origin);
  const params = new URLSearchParams(search);
  for (const key of campaignKeys) {
    const value = params.get(key);
    if (value && /^[a-z\d][a-z\d_.-]{0,99}$/i.test(value)) url.searchParams.set(key, value);
  }
  return url.href;
}

function initialReferrer() {
  if (!document.referrer) return "";
  const referrer = new URL(document.referrer);
  if (!["http:", "https:"].includes(referrer.protocol)) return "";
  return websiteHosts.has(referrer.hostname) ? new URL(pagePath(referrer.pathname), referrer.origin).href : referrer.origin;
}

export function setAnalyticsConsent(granted: boolean) {
  if (!canUseWebsiteAnalytics() || granted === enabled) return;

  enabled = granted;
  Reflect.set(window, `ga-disable-${measurementId}`, !granted);
  if (granted) {
    if (!initialized) gtag("consent", "default", consentDefaults);
    gtag("consent", "update", { ...consentDefaults, analytics_storage: "granted" });
    return;
  }

  previousPage = undefined;
  for (const cookie of ["_ga", `_ga_${measurementId.slice(2)}`]) {
    document.cookie = `${cookie}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
  }
}

export function trackPageView(pathname: string, search: string) {
  if (!enabled) return;
  const path = pagePath(pathname);
  if (previousPage?.path === path) return;

  const location = cleanPageLocation(path, search);
  gtag("set", {
    page_location: location,
    page_referrer: previousPage?.location ?? initialReferrer(),
    page_title: getPageSeo(path).seo.title,
  });

  if (!initialized) {
    initialized = true;
    gtag("js", new Date());
    gtag("config", measurementId, {
      send_page_view: false,
      cookie_domain: "none",
      cookie_expires: 60 * 24 * 60 * 60,
      cookie_update: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(script);
  }

  gtag("event", "page_view", { send_to: measurementId });
  previousPage = { path, location };
}

export function trackAnalyticsEvent(name: AnalyticsEvent) {
  if (!enabled || !previousPage) return false;
  gtag("event", name, { send_to: measurementId });
  return true;
}
