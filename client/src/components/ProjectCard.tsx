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
      <Card className="h-full group relative overflow-hidden border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <CardHeader>
          <CardTitle className="text-xl relative">
            <span className="relative z-10">{title}</span>
            <div className="absolute -inset-1 bg-primary/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20 hover:border-primary/40 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}