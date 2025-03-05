import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Award, 
  Cloud, 
  Code, 
  Terminal, 
  Settings, 
  Github, 
  Linkedin, 
  Mail,
  Briefcase,
  FolderKanban,
  Award as CertificateIcon,
  Send,
  Target,
  Zap
} from "lucide-react";
import Lottie from "lottie-react";
import cloudAnimation2 from "@/assets/animations/cloud-2.json";
import { useAnimationStore } from "@/lib/stores/animation";
import TechStack from "@/components/TechStack";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TimelineItem from "@/components/TimelineItem";
import CertificationCard from "@/components/CertificationCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const { enabled } = useAnimationStore();

  const experiences = [
    {
      title: "Senior Cloud & DevOps Engineer",
      company: "TechCorp Solutions",
      date: "2020 - Present",
      description: [
        "Led cloud infrastructure initiatives using Azure services",
        "Implemented CI/CD pipelines with Azure DevOps",
        "Automated deployment processes using Infrastructure as Code",
        "Managed Kubernetes clusters and containerized applications",
      ],
    },
    {
      title: "DevOps Engineer",
      company: "Cloud Innovations Inc",
      date: "2018 - 2020",
      description: [
        "Developed and maintained CI/CD pipelines",
        "Implemented monitoring and logging solutions",
        "Managed cloud infrastructure using Terraform",
        "Collaborated with development teams on deployment strategies",
      ],
    },
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "2023",
    },
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2022",
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
    },
    {
      title: "Google Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "2022",
      icon: <Cloud className="h-5 w-5 text-blue-500" />
    },
  ];

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

  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:contact@shoebshaikh.dev",
      description: "Drop me an email",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/shoebshaikh",
      description: "Connect with me on LinkedIn",
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/shoebshaikh",
      description: "Check out my code",
    },
  ];

  // Section Header Component
  const SectionHeader = ({ 
    title, 
    icon: Icon, 
    description 
  }: { 
    title: string, 
    icon?: React.ElementType, 
    description?: string 
  }) => (
    <div className="text-center space-y-4 mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold flex items-center justify-center gap-3 text-primary"
      >
        {Icon && <Icon className="h-10 w-10" />}
        {title}
      </motion.h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );

  return (
    <div className="space-y-32 py-10 relative overflow-hidden">
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

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.2
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-16"
      >
        <SectionHeader 
          title="About Me" 
          icon={Target}
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.4
          }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I administrate/manage and automate Azure environments (IaaS, PaaS) while streamlining DevOps workflows. 
            Proficient in Azure infra, and tools like Ansible for configuration management, GitHub Actions, Azure DevOps for CI/CD, and Terraform for IaC.
          </p>
        </motion.div>
      </motion.div>

      {/* Key Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.4
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-16"
      >
        <SectionHeader 
          title="Key Achievement" 
          icon={Zap}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.6
          }}
          viewport={{ once: true }}
        >
          <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-3">Medical Imaging Systems Automation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Successfully improved medical imaging systems by creating automatic processes that accelerated installation and reduced mistakes using ANSIBLE. This resulted in an <span className="font-semibold">80% reduction in setup time</span>, a <span className="font-semibold">70% improvement in efficiency</span>, and a <span className="font-semibold">40% reduction in errors</span>.
            </p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.6
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-16"
      >
        <SectionHeader 
          title="Tech Stack" 
          icon={Cloud}
          description="Technologies and tools I leverage to deliver efficient DevOps solutions"
        />
        
        <TechStack />
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.8
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-16"
      >
        <SectionHeader 
          title="Experience" 
          icon={Briefcase}
          description="Professional journey and roles that have shaped my expertise"
        />
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.2 * (index + 1)
              }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:bg-accent/20 transition-colors duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.date}</span>
                </div>
                <p className="text-muted-foreground">{exp.company}</p>
                <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground space-y-1">
                  {exp.description.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 1.0
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-16"
      >
        <SectionHeader 
          title="Projects" 
          icon={FolderKanban}
          description="Innovative solutions that demonstrate my technical capabilities"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.2 * (index + 1)
              }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:border-primary/40 border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg">
                <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex space-x-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 1.2
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-16"
      >
        <SectionHeader 
          title="Certifications" 
          icon={Code}
          description="Professional credentials that validate my expertise in cloud and DevOps technologies"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.2 * (index + 1)
              }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:border-primary/40 border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg">
                <h3 className="text-lg font-semibold text-primary mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut",
          delay: 1.4
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-16"
      >
        <SectionHeader 
          title="Contact" 
          icon={Send}
          description="Let's connect and explore opportunities together"
        />
        
        <div className="flex justify-center space-x-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}