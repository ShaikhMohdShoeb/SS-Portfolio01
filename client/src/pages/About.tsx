import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { Cloud, Code, Terminal, Settings } from "lucide-react";

export default function About() {
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
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="max-w-3xl text-muted-foreground">
          I am a Cloud & DevOps Engineer with extensive experience in designing,
          implementing, and managing cloud infrastructure solutions. My expertise
          lies in Azure services and DevOps practices, helping organizations
          streamline their development processes and optimize cloud operations.
        </p>
      </motion.div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillSets.map((skillSet, index) => (
            <motion.div
              key={skillSet.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...skillSet} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
