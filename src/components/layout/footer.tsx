"use client";

import Link from "next/link";
import { ArrowUp, Linkedin, Twitter, Github } from "lucide-react"; // Removed Moon
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image"; // Imported Image

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/malik-ahmad-rasheed-3768902a9/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/", label: "Twitter" },
    { icon: Github, href: "https://github.com/ahmaddii", label: "GitHub" },
  ];

  return (
    <footer className="bg-background border-t border-border text-foreground py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4 group">
              {/* Replaced Moon icon with Image */}
              <Image
                src="/images/pulsarxlogo.png" // Path to your logo in public
                alt="PulsarX Logo" // Important for accessibility
                width={40} // Adjust width as needed (Moon was h-8 w-8, which is ~32px)
                height={38} // Adjust height as needed
                // You might want to add group-hover:animate-pulse class to the Image component
                className="group-hover:animate-pulse"
              />
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                PulsarX
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Crafting digital excellence and illuminating visions. We are dedicated to providing innovative solutions for your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-muted hover:bg-accent text-foreground hover:text-accent-foreground transition-colors duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PulsarX. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        variant="outline"
        size="icon"
        className={cn(
          "fixed bottom-6 right-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-opacity duration-300 shadow-lg",
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}