import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/">
          <a className="mr-8 flex items-center space-x-2">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="relative font-black text-4xl bg-gradient-to-br from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent tracking-tighter hover:tracking-tight transition-all duration-300 select-none"
              style={{ 
                textShadow: '0 0 30px rgba(var(--primary), 0.3)',
                WebkitTextStroke: '1px rgba(var(--primary), 0.1)'
              }}
            >
              SS
            </motion.span>
          </a>
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="relative">
                <span
                  className={cn(
                    "text-sm transition-colors hover:text-primary",
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </span>
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-primary"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}