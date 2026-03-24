/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  /** Canonical origin for Open Graph, e.g. https://plyce.io (no trailing slash) */
  readonly VITE_SITE_URL?: string;
}
