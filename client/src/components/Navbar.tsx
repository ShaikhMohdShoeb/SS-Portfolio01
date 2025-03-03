import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <a className="mr-8 flex items-center space-x-2">
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: {
                  rotate: {
                    repeat: Infinity,
                    duration: 0.5
                  }
                }
              }}
              className="relative"
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
              <span 
                className="relative font-black text-5xl bg-gradient-to-br from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent tracking-tighter hover:tracking-tight transition-all duration-300 select-none"
                style={{ 
                  textShadow: '0 0 40px rgba(var(--primary), 0.4)',
                  WebkitTextStroke: '1px rgba(var(--primary), 0.15)'
                }}
              >
                SS
              </span>
            </motion.div>
          </a>
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                    "text-sm transition-colors hover:text-primary px-3 py-2 duration-200",
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}