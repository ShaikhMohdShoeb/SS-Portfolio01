import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import React from 'react';

// Get the base URL from Vite
const base = import.meta.env.BASE_URL;

// Custom hook for handling base path
const useBasePath = () => {
  // Get the current location from wouter
  const [location, setLocation] = useLocation();
  
  // Remove base path and ensure we have a leading slash
  const currentLocation = location.replace(base, '') || '/';
  
  // Add base path when navigating
  const navigate = (to: string) => {
    // If it's the root path and we're in production, navigate to the base URL
    if (to === '/' && import.meta.env.PROD) {
      setLocation(base);
    } else {
      setLocation(base + to.replace(/^\//, ''));
    }
  };

  return [currentLocation, navigate] as const;
};

// Redirect component for the root
const RootRedirect = () => {
  const [, navigate] = useBasePath();
  React.useEffect(() => {
    navigate('/');
  }, [navigate]);
  return null;
};

function Router() {
  return (
    <Layout>
      <WouterRouter hook={useBasePath}>
        <Switch>
          <Route path={base} component={Home} />
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path={base.slice(0, -1)} component={RootRedirect} />
          <Route component={NotFound} />
        </Switch>
      </WouterRouter>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;