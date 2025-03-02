import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
