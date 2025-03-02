import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export default function TimelineItem({
  title,
  company,
  date,
  description,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8"
    >
      <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/20">
        <div className="absolute left-[-4px] top-2 h-3 w-3 rounded-full bg-primary" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-primary">{company}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
        <ul className="list-disc space-y-1 pl-4">
          {description.map((item, index) => (
            <li key={index} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
