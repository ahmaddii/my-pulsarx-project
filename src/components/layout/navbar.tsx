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
  { href: "#portfolio", label: "Portfolio" },
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
          "relative group px-4 py-2 rounded-lg font-medium transition-all duration-300",
          mobile ? "block text-lg" : "inline-block text-base",
          isActive
            ? "text-primary"
            : "text-foreground hover:text-primary"
        )}
      >
        {/* Active indicator background */}
        {isActive && (
          <span className="absolute inset-0 bg-primary/10 rounded-lg animate-in fade-in zoom-in-95 duration-300"></span>
        )}
        
        {/* Hover effect */}
        <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        
        {/* Text with underline animation */}
        <span className="relative z-10 flex items-center gap-2">
          {label}
          {!mobile && (
            <span className={cn(
              "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300",
              isActive ? "w-full" : "w-0 group-hover:w-full"
            )}></span>
          )}
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || isOpen
            ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-transparent"
        )}
      >
        {/* Gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 animate-in fade-in slide-in-from-top duration-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link 
                href="#home" 
                className="flex items-center gap-3 group relative"
                onClick={() => setIsOpen(false)}
              >
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                
                {/* Logo with animation */}
                <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <Image
                    src="/images/pulsarxlogo.png"
                    alt="PulsarX Logo"
                    width={48}
                    height={48}
                    className="relative rounded-lg"
                  />
                </div>

                {/* Brand name with gradient */}
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text group-hover:tracking-wide transition-all duration-300">
                    PulsarX
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-2 w-2" />
                    Digital Excellence
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <NavLinkItem key={link.href} {...link} />
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button 
                className={cn(
                  "relative overflow-hidden bg-gradient-to-r from-primary to-accent",
                  "hover:from-accent hover:to-primary transition-all duration-300",
                  "shadow-lg hover:shadow-primary/50 group"
                )}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                onClick={toggleMenu}
                variant="ghost"
                size="icon"
                aria-label="Toggle menu"
                className={cn(
                  "relative text-foreground hover:text-primary hover:bg-primary/10",
                  "transition-all duration-300"
                )}
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={cn(
                      "absolute inset-0 h-6 w-6 transition-all duration-300",
                      isOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                    )} 
                  />
                  <X 
                    className={cn(
                      "absolute inset-0 h-6 w-6 text-primary transition-all duration-300",
                      isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0"
                    )} 
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-muted overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-accent to-primary animate-shimmer"
              style={{
                width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
                transition: 'width 0.1s ease-out'
              }}
            ></div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl z-50 md:hidden",
          "transform transition-all duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Image
              src="/images/pulsarxlogo.png"
              alt="PulsarX Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              PulsarX
            </span>
          </div>
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile menu links */}
        <div className="flex flex-col p-6 space-y-2 overflow-y-auto h-[calc(100vh-180px)]">
          {navLinks.map((link, index) => (
            <div
              key={link.href}
              className="animate-in slide-in-from-right fade-in duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <NavLinkItem {...link} mobile />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border bg-background/50 backdrop-blur-sm">
          <Button 
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-lg"
            onClick={() => {
              setIsOpen(false);
              window.location.href = '#contact';
            }}
          >
            Get Started
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </>
  );
}