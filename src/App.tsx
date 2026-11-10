import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import CookieBanner from "@/components/CookieBanner";
const Index = lazy(() => import("./pages/Index"));
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const AIAgentsPage = lazy(() => import("./pages/AIAgentsPage"));
const AIAgentDetailPage = lazy(() => import("./pages/AIAgentDetailPage"));
const DataProtectionPage = lazy(() => import("./pages/DataProtectionPage"));
const ImpressumPage = lazy(() => import("./pages/ImpressumPage"));
const DatenschutzPage = lazy(() => import("./pages/DatenschutzPage"));
const AGBPage = lazy(() => import("./pages/AGBPage"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ImplementierungPage = lazy(() => import("./pages/ImplementierungPage"));
const PartnerprogrammPage = lazy(() => import("./pages/PartnerprogrammPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const MigrationPage = lazy(() => import("./pages/MigrationPage"));
const PlyceTimePage = lazy(() => import("./pages/PlyceTimePage"));
const RecruitingSoftwareVergleichPage = lazy(() => import("./pages/RecruitingSoftwareVergleichPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EnglishPageRouter = lazy(() => import("./pages/EnglishPages").then((module) => ({ default: module.EnglishPageRouter })));
import { lazy, Suspense, useEffect } from "react";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.documentElement.lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
    if (hash) {
      const id = hash.replace("#", "");
      const run = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      requestAnimationFrame(() => requestAnimationFrame(run));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Seo />
      <Navbar />
      <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/plyce-time" element={<PlyceTimePage />} />
        <Route path="/ai-agents" element={<AIAgentsPage />} />
        <Route path="/ai-agents/:id" element={<AIAgentDetailPage />} />
        <Route path="/data-protection" element={<DataProtectionPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/agb" element={<AGBPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/implementierung" element={<ImplementierungPage />} />
        <Route path="/partnerprogramm" element={<PartnerprogrammPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/migration" element={<MigrationPage />} />
        <Route path="/recruiting-software-vergleich" element={<RecruitingSoftwareVergleichPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/en/ai-agents" element={<AIAgentsPage />} />
        <Route path="/en/ai-agents/:id" element={<AIAgentDetailPage />} />
        <Route path="/en/team" element={<TeamPage />} />
        <Route path="/en/careers" element={<CareersPage />} />
        <Route path="/en/*" element={<EnglishPageRouter />} />
        <Route path="/en" element={<EnglishPageRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      <Footer />
      <CookieBanner />
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => <BrowserRouter><AppContent /></BrowserRouter>;

export default App;
