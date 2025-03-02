import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: string[];
  logo?: React.ReactNode;
}

export default function TimelineItem({
  title,
  company,
  date,
  description,
  logo,
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
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute left-[-4px] top-2 h-3 w-3 rounded-full bg-primary" 
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          {logo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl text-primary"
            >
              {logo}
            </motion.div>
          )}
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-primary">{company}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{date}</p>
        <ul className="list-disc space-y-1 pl-4">
          {description.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-muted-foreground"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}