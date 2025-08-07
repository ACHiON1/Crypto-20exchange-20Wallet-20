import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Wallet from "./pages/Wallet";
import WalletTransactions from "./pages/WalletTransactions";
import WalletSend from "./pages/WalletSend";
import WalletReceive from "./pages/WalletReceive";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import OnboardingWelcome from "./pages/OnboardingWelcome";
import OnboardingSetup from "./pages/OnboardingSetup";
import OnboardingSecurity from "./pages/OnboardingSecurity";
import Home from "./pages/Home";
import Trade from "./pages/Trade";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding/1" element={<Onboarding1 />} />
          <Route path="/onboarding/2" element={<Onboarding2 />} />
          <Route path="/onboarding/3" element={<Onboarding3 />} />
          <Route path="/onboarding/welcome" element={<OnboardingWelcome />} />
          <Route path="/onboarding/setup" element={<OnboardingSetup />} />
          <Route path="/onboarding/security" element={<OnboardingSecurity />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet/transactions" element={<WalletTransactions />} />
          <Route path="/wallet/send" element={<WalletSend />} />
          <Route path="/wallet/receive" element={<WalletReceive />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
