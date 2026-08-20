import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import CookieBanner from "@/components/CookieBanner";
import Index from "./pages/Index";
import FeaturesPage from "./pages/FeaturesPage";
import AIAgentsPage from "./pages/AIAgentsPage";
import DataProtectionPage from "./pages/DataProtectionPage";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import AGBPage from "./pages/AGBPage";
import SitemapPage from "./pages/SitemapPage";
import FaqPage from "./pages/FaqPage";
import ImplementierungPage from "./pages/ImplementierungPage";
import PartnerprogrammPage from "./pages/PartnerprogrammPage";
import PricingPage from "./pages/PricingPage";
import MigrationPage from "./pages/MigrationPage";
import PlyceTimePage from "./pages/PlyceTimePage";
import RecruitingSoftwareVergleichPage from "./pages/RecruitingSoftwareVergleichPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();
const ScrollToTop = () => { const { pathname, hash } = useLocation(); useEffect(() => { document.documentElement.lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de"; if (hash) { const id=hash.replace("#",""); const run=()=>{const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});}; requestAnimationFrame(()=>requestAnimationFrame(run)); } else window.scrollTo(0,0); },[pathname,hash]); return null; };

const pages = [
  ["/", <Index />], ["/features", <FeaturesPage />], ["/plyce-time", <PlyceTimePage />], ["/ai-agents", <AIAgentsPage />],
  ["/data-protection", <DataProtectionPage />], ["/impressum", <ImpressumPage />], ["/datenschutz", <DatenschutzPage />], ["/agb", <AGBPage />],
  ["/sitemap", <SitemapPage />], ["/faq", <FaqPage />], ["/implementierung", <ImplementierungPage />], ["/partnerprogramm", <PartnerprogrammPage />],
  ["/pricing", <PricingPage />], ["/migration", <MigrationPage />], ["/recruiting-software-vergleich", <RecruitingSoftwareVergleichPage />],
] as const;

const App = () => (
  <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner /><BrowserRouter><ScrollToTop /><Seo /><Navbar /><Routes>
    {pages.map(([path, element]) => <Route key={path} path={path} element={element} />)}
    {pages.map(([path, element]) => <Route key={`en-${path}`} path={path === "/" ? "/en" : `/en${path}`} element={element} />)}
    <Route path="*" element={<NotFound />} />
  </Routes><Footer /><CookieBanner /></BrowserRouter></TooltipProvider></QueryClientProvider>
);
export default App;
