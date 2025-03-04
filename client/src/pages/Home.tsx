import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SkillCard from "@/components/SkillCard";
import { Cloud, Code, Terminal, Settings, Award, Github, Linkedin, Mail } from "lucide-react";
import Lottie from "lottie-react";
import cloudAnimation2 from "@/assets/animations/cloud-2.json";
import { useAnimationStore } from "@/lib/stores/animation";
import TimelineItem from "@/components/TimelineItem";
import CertificationCard from "@/components/CertificationCard";
import ProjectCard from "@/components/ProjectCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  return (
    <div className="space-y-32 py-10">
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
      <section id="home" className="min-h-[60vh] flex items-center">
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
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-8">
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
      </section>

      {/* Experience Section */}
      <section id="experience" className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Key Achievement
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Medical Imaging Systems Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Successfully improved medical imaging systems by creating automatic processes that accelerated installation and reduced mistakes using ANSIBLE. This resulted in an <span className="font-semibold">80% reduction in setup time</span>, a <span className="font-semibold">70% improvement in efficiency</span>, and a <span className="font-semibold">40% reduction in errors</span>.
              </p>
            </Card>
          </motion.div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Work History</h3>
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.date}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TimelineItem {...experience} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Certifications</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CertificationCard {...certification} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-4 text-muted-foreground">
            Here are some of the key projects I've worked on throughout my career
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4 text-muted-foreground">
            Let's connect! Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15, 
                type: "spring",
                bounce: 0.4
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {link.icon}
                    {link.name}
                  </CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(link.href, "_blank")}
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}