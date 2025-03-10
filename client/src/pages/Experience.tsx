import { motion } from "framer-motion";
import TimelineItem from "@/components/TimelineItem";
import CertificationCard from "@/components/CertificationCard";
import { Cloud, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Experience() {
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

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold">Experience</h1>
      </motion.div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Work History</h2>
        <div className="space-y-4">
          {experiences.map((experience) => (
            <TimelineItem key={experience.date} {...experience} />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard key={certification.title} {...certification} />
          ))}
        </div>
      </div>
    </div>
  );
}
