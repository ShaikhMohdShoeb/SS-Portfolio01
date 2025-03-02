import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Terminal, Code, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 text-primary/20"
        >
          <Terminal className="h-24 w-24" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-20 right-10 text-primary/20"
        >
          <Cloud className="h-32 w-32" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute top-1/2 right-1/4 text-primary/20"
        >
          <Code className="h-20 w-20" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Shoeb Shaikh
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 relative"
        >
          <p className="text-lg text-muted-foreground">
            Cloud & DevOps Engineer with 5+ years of experience specializing in Azure
            Infrastructure and Azure DevOps
          </p>
          <div className="absolute -inset-x-4 -inset-y-2 z-0 bg-primary/5 blur-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link href="/about">
            <Button
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">
                Learn More <ArrowRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 transition-transform group-hover:translate-x-[-100%]" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="group hover:border-primary/50 transition-colors"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}