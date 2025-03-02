import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SkillCard from "@/components/SkillCard";
import { Cloud, Code, Terminal, Settings } from "lucide-react";

export default function Home() {
  const skillSets = [
    {
      title: "Cloud Services",
      icon: <Cloud />,
      skills: ["Azure", "AWS", "Kubernetes", "Docker", "Terraform"],
    },
    {
      title: "DevOps Tools",
      icon: <Settings />,
      skills: ["Azure DevOps", "Jenkins", "Git", "Ansible", "Prometheus"],
    },
    {
      title: "Programming",
      icon: <Code />,
      skills: ["Python", "PowerShell", "Bash", "JavaScript", "YAML"],
    },
    {
      title: "Infrastructure",
      icon: <Terminal />,
      skills: ["IaC", "CI/CD", "Monitoring", "Security", "Automation"],
    },
  ];

  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <div className="flex min-h-[60vh] items-center">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.4,
              ease: "easeInOut" 
            }}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Shoeb Shaikh
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.6, 
              delay: 0.3,
              ease: "easeOut" 
            }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Cloud & DevOps Engineer with 5+ years of experience specializing in Azure
            Infrastructure and Azure DevOps
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link href="/experience">
              <Button size="lg">
                See My Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-muted-foreground">
          I am a Cloud & DevOps Engineer with extensive experience in designing,
          implementing, and managing cloud infrastructure solutions. My expertise
          lies in Azure services and DevOps practices, helping organizations
          streamline their development processes and optimize cloud operations.
        </p>
      </motion.div>

      {/* Skills Section */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillSets.map((skillSet, index) => (
            <motion.div
              key={skillSet.title}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <SkillCard {...skillSet} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}