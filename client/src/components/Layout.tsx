import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={location}>
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </PageTransition>
      </AnimatePresence>
    </div>
  );
}