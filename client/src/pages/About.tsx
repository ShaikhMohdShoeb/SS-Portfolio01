import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { Cloud, Code, Terminal, Settings } from "lucide-react";

export default function About() {
  // Add a subtle background pattern
  const bgPattern = {
    backgroundImage: `radial-gradient(rgba(var(--primary-rgb), 0.05) 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
  };
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
    <div className="space-y-12 py-8 px-4 rounded-lg" style={bgPattern}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          I am a <span className="text-primary font-medium">Cloud & DevOps Engineer</span> with extensive experience in designing,
          implementing, and managing cloud infrastructure solutions. My expertise
          lies in <span className="text-primary font-medium">Azure services</span> and <span className="text-primary font-medium">DevOps practices</span>, helping organizations
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
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <SkillCard {...skillSet} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
