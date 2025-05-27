
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon } from "lucide-react"; // Moon icon used as placeholder for logo
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinkItem = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors duration-300 md:text-sm"
    >
      {label}
    </Link>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-background shadow-lg" : "bg-transparent"
      )}
      style={{ scrollPaddingTop: '4rem' }} // Adjust based on navbar height
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="#home" className="flex-shrink-0 flex items-center gap-2 group">
              <Moon className="h-8 w-8 text-primary group-hover:animate-pulse" />
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Nocturne
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLinkItem key={link.href} {...link} />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        style={{ backgroundColor: 'hsl(var(--background))' }} // Explicit background for mobile dropdown
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} {...link} />
          ))}
        </div>
      </div>
    </nav>
  );
}
