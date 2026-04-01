import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Pricing3fRsPage from "./pages/Pricing3fRsPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/ai-agents" element={<AIAgentsPage />} />
          <Route path="/data-protection" element={<DataProtectionPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/agb" element={<AGBPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/implementierung" element={<ImplementierungPage />} />
          <Route path="/partnerprogramm" element={<PartnerprogrammPage />} />
          <Route path="/pricing3fRs" element={<Pricing3fRsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
