"use client";

import Link from "next/link";
import { ArrowUp, Linkedin, Twitter, Github, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    { href: "#web-dev", label: "Web Development" },
    { href: "#app-dev", label: "App Development" },
    { href: "#ui-ux", label: "UI/UX Design" },
    { href: "#consulting", label: "Consulting" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/malik-ahmad-rasheed-3768902a9/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://x.com/", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Github, href: "https://github.com/ahmaddii", label: "GitHub", color: "hover:bg-gray-700" },
    { icon: Mail, href: "mailto:contact@pulsarx.com", label: "Email", color: "hover:bg-purple-600" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-primary/5 border-t border-border overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: "20%",
            left: "10%",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: "10%",
            right: "15%",
            animation: "float 15s ease-in-out infinite reverse",
          }}
        ></div>

        {/* Interactive Light Effect */}
        <div
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            pointerEvents: "none",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-300"></div>
                <Image
                  src="/images/pulsarxlogo.png"
                  alt="PulsarX Logo"
                  width={48}
                  height={48}
                  className="relative group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                PulsarX
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Illuminating the digital universe with innovative solutions. We transform visions into reality through cutting-edge technology and creative excellence.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span>Crafting digital excellence since 2024</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li 
                  key={link.label}
                  className="transform transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li 
                  key={service.label}
                  className="transform transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link 
                    href={service.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              Get In Touch
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group cursor-pointer">
                <MapPin className="h-4 w-4 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Rawalpindi, Punjab, PK</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group cursor-pointer">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>+92 XXX XXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group cursor-pointer">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>contact@pulsarx.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Follow us on social media</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      "p-3 rounded-xl bg-muted/50 backdrop-blur-sm border border-border",
                      "hover:border-primary hover:shadow-lg hover:shadow-primary/20",
                      "text-foreground transition-all duration-300 transform hover:scale-110 hover:-translate-y-1",
                      "group relative overflow-hidden"
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300"></div>
                    <social.icon className="h-5 w-5 relative z-10" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-8 pb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and insights
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PulsarX. All rights reserved. Crafted with 💜
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className={cn(
          "fixed bottom-8 right-8 rounded-full shadow-2xl",
          "bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary",
          "border-2 border-background transition-all duration-300",
          "hover:scale-110 hover:shadow-primary/50 group",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
      </Button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
      `}</style>
    </footer>
  );
}