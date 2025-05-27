
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-background relative overflow-hidden"
    >
      {/* Optional: Add a subtle background pattern or video here */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-primary opacity-10"></div> */}
      
      <div className="relative z-10 space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <span className="block">Welcome to</span>
          <span className="block text-primary">Nocturne</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          Crafting Digital Excellence, Illuminating Your Vision. We build innovative solutions that propel your business forward.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideInUp" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link href="#services">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      {/* Animated shape background example */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-pulse"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
