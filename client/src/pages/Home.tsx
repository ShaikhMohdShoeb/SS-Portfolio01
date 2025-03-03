
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Mail, Cloud, Code, Terminal, Settings } from "lucide-react";
import SkillCard from "@/components/SkillCard";

export default function Home() {
  const skillSets = [
    {
      title: "Cloud Services",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: ["Azure", "AWS", "Kubernetes", "Docker", "Terraform"],
    },
    {
      title: "DevOps Tools",
      icon: <Settings className="h-6 w-6 text-primary" />,
      skills: ["Azure DevOps", "Jenkins", "Git", "Ansible", "Prometheus"],
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Python", "PowerShell", "Bash", "JavaScript", "YAML"],
    },
    {
      title: "Infrastructure",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: ["IaC", "CI/CD", "Monitoring", "Security", "Automation"],
    },
  ];

  return (
    <div className="space-y-24 py-16">
      {/* Enhanced Hero Section */}
      <div className="flex min-h-[70vh] items-center">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-5xl font-bold tracking-tight sm:text-7xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Shoeb Shaikh
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mt-6 text-xl text-muted-foreground"
          >
            Cloud & DevOps Engineer with 5+ years of experience specializing in Azure
            Infrastructure and Azure DevOps
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            I specialize in Azure Infrastructure & DevOps, helping businesses streamline cloud operations and optimize development workflows.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <Link href="/experience">
              <Button size="lg" className="px-8 py-6 text-lg">
                See My Experience <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Get in Touch <Mail className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Improved Skills Section */}
      <div className="space-y-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillSets.map((skillSet, index) => (
            <motion.div
              key={skillSet.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <SkillCard {...skillSet} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
