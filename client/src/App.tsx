import { Switch, Route, useLocation } from "wouter";
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
  const [location, setLocation] = useLocation();

  // Remove base path from location
  const currentLocation = location.replace(base, '') || '/';

  // Add base path when navigating
  const navigate = (to: string) => {
    setLocation(base + to);
  };

  return [currentLocation, navigate] as const;
};

function Router() {
  return (
    <Layout>
      <Switch hook={useBasePath}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
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