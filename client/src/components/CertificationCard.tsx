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
      <Card className="h-full group relative overflow-hidden border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <CardContent className="flex flex-col gap-2 p-6">
          {logo && (
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-3xl text-primary mb-2 transition-transform group-hover:scale-110"
            >
              {logo}
            </motion.div>
          )}
          <div className="relative">
            <h3 className="font-semibold relative z-10">{title}</h3>
            <div className="absolute -inset-2 bg-primary/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm text-muted-foreground">{issuer}</p>
          <Badge variant="secondary" className="w-fit group-hover:bg-primary/20 transition-colors">
            {date}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
}