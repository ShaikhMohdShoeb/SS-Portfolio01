import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SkillCard from "@/components/SkillCard";
import { Cloud, Code, Terminal, Settings } from "lucide-react";
import Lottie from "lottie-react";
import cloudAnimation2 from "@/assets/animations/cloud-2.json";
import { useAnimationStore } from "@/lib/stores/animation";

export default function Home() {
  const { enabled } = useAnimationStore();

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
    <div className="space-y-20 py-10 relative">
      {/* Cloud Animation */}
      {enabled && (
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-56 h-56 opacity-90">
          <Lottie
            animationData={cloudAnimation2}
            loop
            autoplay
            className="w-full h-full"
            style={{ background: 'transparent' }}
          />
        </div>
      )}
      
      {/* Hero Section */}
      <div className="flex min-h-[60vh] items-center">
        <div className="mx-auto max-w-3xl text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Hi, I'm {" "}
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
            <Link href="/about">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
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