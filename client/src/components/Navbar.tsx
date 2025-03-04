import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Get the current section based on scroll position
  const getCurrentSection = () => {
    if (typeof window !== 'undefined') {
      const sections = links.map(link => ({
        id: link.href.substring(1),
        offset: document.getElementById(link.href.substring(1))?.offsetTop || 0
      }));
      
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          return links[i].href;
        }
      }
    }
    return "#home";
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <a 
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="mr-8 flex items-center space-x-3 group"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="relative flex items-center"
          >
            <motion.span 
              className="absolute inset-0 blur-lg bg-primary/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="relative flex items-center bg-gradient-to-br from-primary via-primary/80 to-primary/50 p-2 rounded-xl">
              <Settings 
                className="h-6 w-6 text-background group-hover:rotate-90 transition-transform duration-500"
              />
            </div>
            <span 
              className="relative ml-2 font-semibold text-lg tracking-tight group-hover:tracking-normal transition-all duration-300"
            >
              <span className="text-primary font-bold">DevOps</span>
              <span className="text-muted-foreground"> by </span>
              <span className="text-foreground">Shoeb</span>
            </span>
          </motion.div>
        </a>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary px-3 py-2 duration-200 group",
                getCurrentSection() === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-200 group-hover:scale-x-100",
                getCurrentSection() === link.href && "scale-x-100"
              )} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}