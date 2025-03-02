import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Cloud Migration Project",
      description:
        "Led the migration of legacy applications to Azure cloud, implementing modern cloud architecture patterns and improving system reliability.",
      technologies: ["Azure", "Terraform", "Docker", "Kubernetes"],
    },
    {
      title: "DevOps Pipeline Automation",
      description:
        "Developed comprehensive CI/CD pipelines using Azure DevOps, reducing deployment time by 70% and improving code quality.",
      technologies: ["Azure DevOps", "PowerShell", "YAML", "Git"],
    },
    {
      title: "Infrastructure Monitoring Solution",
      description:
        "Implemented a complete monitoring solution using Azure Monitor and Log Analytics for cloud resources and applications.",
      technologies: ["Azure Monitor", "Log Analytics", "Grafana", "Prometheus"],
    },
    {
      title: "Kubernetes Cluster Management",
      description:
        "Designed and implemented a production-grade Kubernetes cluster on AKS with automated scaling and deployment capabilities.",
      technologies: ["AKS", "Helm", "Docker", "Terraform"],
    },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-4 text-muted-foreground">
          Here are some of the key projects I've worked on throughout my career
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: index * 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
