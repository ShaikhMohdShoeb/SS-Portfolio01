import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:contact@shoebshaikh.dev",
      description: "Drop me an email",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/shoebshaikh",
      description: "Connect with me on LinkedIn",
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/shoebshaikh",
      description: "Check out my code",
    },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4 text-muted-foreground">
          Let's connect! Feel free to reach out through any of these channels.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15, 
              type: "spring",
              bounce: 0.4
            }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {link.icon}
                  {link.name}
                </CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(link.href, "_blank")}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
