import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
}: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col gap-2 p-6">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{issuer}</p>
          <Badge variant="secondary" className="w-fit">
            {date}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
}
