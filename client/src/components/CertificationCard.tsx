import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import React from 'react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  logo?: React.ReactNode;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  logo,
}: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col gap-2 p-6">
          {logo && (
            <div className="text-3xl text-primary mb-2">
              {logo}
            </div>
          )}
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