import { motion } from "framer-motion";
import { FaLinux, FaGitAlt, FaGithub, FaDocker, FaGitlab } from "react-icons/fa";
import { SiTerraform, SiAnsible, SiGithubactions, SiGooglecloud, SiKubernetes } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { cn } from "@/lib/utils";
import AzureIcon from "./icons/AzureIcon";

interface TechItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

const techStack: TechItem[] = [
  { name: "Linux", icon: FaLinux, color: "text-yellow-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800" },
  { name: "Azure", icon: AzureIcon, color: "text-blue-600" },
  { name: "Azure DevOps", icon: VscAzureDevops, color: "text-blue-600" },
  { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
  { name: "Ansible", icon: SiAnsible, color: "text-red-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-800" },
  { name: "GitLab CI", icon: FaGitlab, color: "text-orange-600" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
];

export default function TechStack() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-card hover:bg-accent transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.name === "Azure" ? (
                <tech.icon />
              ) : (
                <tech.icon className={cn("w-12 h-12", tech.color)} />
              )}
              <span className="mt-2 text-sm font-medium text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
