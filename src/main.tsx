import { Analytics } from "@vercel/analytics/react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const app = (
  <>
    <App />
    <Analytics />
  </>
);

const root = document.getElementById("root")!;
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
