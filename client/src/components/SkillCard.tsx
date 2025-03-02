import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export default function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex items-center gap-3">
            <div className="text-primary text-xl">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
