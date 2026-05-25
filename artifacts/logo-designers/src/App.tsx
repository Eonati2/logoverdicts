import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Compare from "@/pages/Compare";
import AlestraReview from "@/pages/reviews/Alestra";
import JuhiReview from "@/pages/reviews/Juhi";
import ValeriiaReview from "@/pages/reviews/Valeriia";
import HireGuide from "@/pages/guides/HireGuide";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/compare" component={Compare} />
      <Route path="/reviews/alestra" component={AlestraReview} />
      <Route path="/reviews/juhi" component={JuhiReview} />
      <Route path="/reviews/valeriia" component={ValeriiaReview} />
      <Route path="/guide/how-to-hire-a-logo-designer" component={HireGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
