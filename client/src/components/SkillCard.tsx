import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCardProps {
  title: string;
  skills: (Skill | string)[];
  icon: React.ReactNode;
}

export default function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="h-full group relative overflow-hidden border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <CardContent className="flex flex-col gap-4 p-6">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-primary text-xl transition-transform group-hover:scale-110">{icon}</div>
            <h3 className="text-lg font-semibold relative">
              <span className="relative z-10">{title}</span>
              <div className="absolute -inset-2 bg-primary/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </motion.div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => {
              const skillName = typeof skill === 'string' ? skill : skill.name;
              const skillIcon = typeof skill === 'string' ? null : skill.icon;

              return (
                <motion.span
                  key={skillName}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary flex items-center gap-2 border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  {skillIcon && (
                    <span className="text-lg transition-transform group-hover:scale-110">
                      {skillIcon}
                    </span>
                  )}
                  {skillName}
                </motion.span>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}