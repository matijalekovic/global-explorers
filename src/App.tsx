import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import ArrangementsEurope from "./pages/ArrangementsEurope";
import ArrangementsSummer from "./pages/ArrangementsSummer";
import ArrangementsWinter from "./pages/ArrangementsWinter";
import MyAccount from "./pages/MyAccount";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/arrangements/europe" element={<ArrangementsEurope />} />
            <Route path="/arrangements/summer" element={<ArrangementsSummer />} />
            <Route path="/arrangements/winter" element={<ArrangementsWinter />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
