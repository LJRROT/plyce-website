/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Canonical origin for Open Graph, e.g. https://plyce.io (no trailing slash) */
  readonly VITE_SITE_URL?: string;
  /** Override demo POST URL (default /api/send-demo-request) */
  readonly VITE_DEMO_REQUEST_API_URL?: string;
}
