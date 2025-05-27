"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image'; // Corrected import for Image
import { Menu, X } from "lucide-react"; // Make sure Menu and X are imported if used



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

      // Increased font size to text-lg and removed md:text-sm
      className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
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
            <Image
                  src="/images/pulsarxlogo.png"// Path to your logo in public
                  alt="PulsarX Logo" // Important for accessibility
                  width={80} // Adjust width as needed
                  height={40} // Adjust height as needed
                />
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                PulsarX
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
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-64 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden backdrop-blur-sm bg-background/80",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="px-5 py-6 space-y-4">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} {...link} />
          ))}
        </div>
      </div>
    </nav>
  );
}
