
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: Array<{ name: string; proficiency: number }>;
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
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                </div>
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
