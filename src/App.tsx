import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CursorEffect } from "@/components/CursorEffect";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail1 from "./pages/PorjectDetail1";
import ProjectDetail2 from "./pages/PorjectDetail2";
// import ProjectDetail3 from "./pages/ProjectDetail3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CursorEffect />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/project-detail" element={<ProjectDetail />} /> */}
          <Route path="/project-detail-1" element={<ProjectDetail1 />} />
          <Route path="/project-detail-2" element={<ProjectDetail2 />} />
          {/* <Route path="/project-detail-3" element={<ProjectDetail3 />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
