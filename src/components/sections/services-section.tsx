"use client";

import {
  Code,
  LayoutDashboard,
  Palette,
  Zap,
  Brain,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Crafting responsive, high-performance websites tailored to your business needs using the latest technologies.",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Responsive Design", "Fast Performance", "SEO Optimized"],
  },
  {
    icon: LayoutDashboard,
    title: "App Development",
    description: "Building intuitive and scalable mobile applications for iOS and Android platforms that engage your users.",
    gradient: "from-purple-500 to-pink-500",
    features: ["iOS & Android", "Cross-Platform", "Native Feel"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating visually stunning and user-friendly interfaces that enhance user experience and brand identity.",
    gradient: "from-pink-500 to-rose-500",
    features: ["Modern Design", "User Research", "Prototyping"],
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Developing comprehensive digital strategies to optimize your online presence and achieve your business goals.",
    gradient: "from-orange-500 to-yellow-500",
    features: ["Growth Planning", "Analytics", "ROI Focused"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Integrating cutting-edge AI technologies to automate processes, gain insights, and drive innovation.",
    gradient: "from-green-500 to-emerald-500",
    features: ["Machine Learning", "Automation", "Data Analysis"],
  },
  {
    icon: Users,
    title: "Consultancy",
    description: "Providing expert advice and guidance to help you navigate the complex digital landscape and make informed decisions.",
    gradient: "from-indigo-500 to-blue-500",
    features: ["Expert Advice", "Strategy", "Best Practices"],
  },
];

export function ServicesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden"
    >
      {/* Animated Background - Same as Contact Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a wide range of digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={sectionRef}
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow Effect */}
                <div className={cn(
                  "absolute -inset-1 bg-gradient-to-r rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500",
                  service.gradient
                )}></div>

                {/* Card */}
                <div className="relative h-full border-2 border-border/50 shadow-2xl overflow-hidden rounded-3xl group hover:border-primary/30 transition-all duration-500 bg-card">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Icon className="w-full h-full text-primary" />
                  </div>

                  <div className="relative p-8 space-y-6">
                    {/* Icon */}
                    <div className={cn(
                      "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500",
                      service.gradient
                    )}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2 pt-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className={cn(
                              "flex items-center gap-2 text-sm transition-all duration-300",
                              hoveredIndex === index
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-4"
                            )}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className="pt-2">
                        <button className="group/btn inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: '0.3s' }}>
          <p className="text-muted-foreground mb-6 text-lg">
            Need a custom solution? We're here to help.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get in Touch
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}