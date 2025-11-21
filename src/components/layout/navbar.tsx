"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinkItem = ({
    href,
    label,
    mobile = false
  }: {
    href: string;
    label: string;
    mobile?: boolean;
  }) => {
    const isActive = activeSection === href;

    return (
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={cn(
          "relative group px-4 py-2 rounded-full font-medium transition-all duration-300",
          mobile ? "block text-lg rounded-lg" : "inline-block text-sm",
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {/* Active indicator background */}
        {isActive && !mobile && (
          <span className="absolute inset-0 bg-primary/10 rounded-full animate-in fade-in zoom-in-95 duration-300"></span>
        )}

        {/* Hover effect */}
        <span className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>

        {/* Text */}
        <span className="relative z-10 flex items-center gap-2">
          {label}
          {mobile && isActive && (
            <ChevronDown className="h-4 w-4 animate-bounce" />
          )}
        </span>
      </Link>
    );
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500",
          "w-[95%] max-w-5xl rounded-full border border-white/10",
          "bg-background/60 backdrop-blur-xl shadow-2xl shadow-black/10",
          isScrolled ? "py-2" : "py-3"
        )}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link
                href="#home"
                className="flex items-center gap-2 group relative"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src="/images/pulsarxlogo.png"
                    alt="PulsarX Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                  PulsarX
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1 bg-secondary/30 rounded-full p-1 border border-white/5">
                {navLinks.map((link) => (
                  <NavLinkItem key={link.href} {...link} />
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <a
                href="mailto:pulsarx.inc@gmail.com"
                className={cn(
                  "inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 h-9 px-4 py-2 text-sm font-medium",
                  "transition-all duration-300 hover:scale-105"
                )}
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                onClick={toggleMenu}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-[90] md:hidden transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-3xl font-bold text-foreground hover:text-primary transition-all duration-300 transform",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:pulsarx.inc@gmail.com"
            className={cn(
              "inline-flex items-center justify-center mt-8 rounded-full px-10 py-6 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all duration-500 delay-300",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}