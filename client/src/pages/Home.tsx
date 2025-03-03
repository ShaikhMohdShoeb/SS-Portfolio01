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
      skills: [
        { name: "Azure", proficiency: 95 },
        { name: "AWS", proficiency: 85 },
        { name: "Kubernetes", proficiency: 80 },
        { name: "Docker", proficiency: 90 },
        { name: "Terraform", proficiency: 85 }
      ],
    },
    {
      title: "DevOps Tools",
      icon: <Settings />,
      skills: [
        { name: "Azure DevOps", proficiency: 90 },
        { name: "Jenkins", proficiency: 80 },
        { name: "Git", proficiency: 95 },
        { name: "Ansible", proficiency: 85 },
        { name: "Prometheus", proficiency: 75 }
      ],
    },
    {
      title: "Programming",
      icon: <Code />,
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "PowerShell", proficiency: 85 },
        { name: "Bash", proficiency: 90 },
        { name: "JavaScript", proficiency: 80 },
        { name: "YAML", proficiency: 95 }
      ],
    },
    {
      title: "Infrastructure",
      icon: <Terminal />,
      skills: [
        { name: "IaC", proficiency: 90 },
        { name: "CI/CD", proficiency: 95 },
        { name: "Monitoring", proficiency: 85 },
        { name: "Security", proficiency: 80 },
        { name: "Automation", proficiency: 90 }
      ],
    },
  ];

  return (
    <div className="space-y-20 py-10">
      {/* Hero Section */}
      <div className="flex min-h-[60vh] items-center">
        <div className="mx-auto max-w-3xl text-center relative">
          <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary/30 to-primary flex items-center justify-center overflow-hidden">
              {/* Replace with your actual image if available */}
              <span className="text-4xl font-bold text-white">S</span>
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-extrabold">
              Shoeb Shaikh
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            I specialize in Azure Infrastructure & DevOps, helping businesses streamline cloud operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link href="/experience">
              <Button size="lg">
                See My Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="secondary" size="lg">
                Learn More About Me
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

      

      {/* Skills Section */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
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