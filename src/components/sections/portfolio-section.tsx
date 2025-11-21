"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Code, 
  Smartphone, 
  Palette, 
  Sparkles, 
  Zap, 
  TrendingUp,
  Shield,
  Globe,
  Layers,
  ArrowRight,
  Check
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  features: string[];
  stats?: { value: string; label: string };
}

const servicesData: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Build powerful, responsive websites that drive results. From landing pages to complex web applications, we deliver excellence.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development & Integration"
    ],
    stats: { value: "300+", label: "Websites Built" }
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Create stunning mobile experiences for iOS and Android. Native performance with cross-platform efficiency.",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Maintenance & Support"
    ],
    stats: { value: "150+", label: "Apps Launched" }
  },
  {
    id: "3",
    title: "UI/UX Design",
    description: "Design experiences that captivate and convert. User-centered design that combines beauty with functionality.",
    icon: Palette,
    gradient: "from-orange-500 to-red-500",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping & Testing",
      "Brand Identity Design"
    ],
    stats: { value: "500+", label: "Designs Created" }
  },
  {
    id: "4",
    title: "Cloud Solutions",
    description: "Scale your business with robust cloud infrastructure. Secure, reliable, and optimized for performance.",
    icon: Globe,
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps & CI/CD",
      "Cloud Security"
    ],
    stats: { value: "99.9%", label: "Uptime SLA" }
  },
  {
    id: "5",
    title: "Digital Marketing",
    description: "Amplify your online presence. Data-driven strategies that boost visibility and drive conversions.",
    icon: TrendingUp,
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
      "Analytics & Reporting"
    ],
    stats: { value: "250%", label: "Avg ROI Increase" }
  },
  {
    id: "6",
    title: "Cybersecurity",
    description: "Protect your digital assets. Comprehensive security solutions to safeguard your business.",
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Data Protection",
      "Compliance Management"
    ],
    stats: { value: "100%", label: "Threat Prevention" }
  },
];

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div 
        ref={sectionRef} 
        className={cn(
          "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              Offer
            </span>
          </h2>
          
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "group relative animate-in fade-in slide-in-from-bottom duration-700",
                "hover:z-10"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-background/80 backdrop-blur-xl border-2 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Background gradient effect */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                  service.gradient
                )}></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="relative w-20 h-20 mx-auto">
                    {/* Glow effect */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500",
                      service.gradient
                    )}></div>
                    
                    {/* Icon background */}
                    <div className={cn(
                      "relative w-full h-full bg-gradient-to-br rounded-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                      service.gradient
                    )}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative text-muted-foreground text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="relative space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "flex items-center gap-3 text-sm transition-all duration-300",
                        hoveredService === service.id ? "translate-x-2" : ""
                      )}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <div className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br transition-all duration-300",
                        service.gradient,
                        hoveredService === service.id ? "scale-110" : ""
                      )}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats Badge */}
                {service.stats && (
                  <div className="relative pt-6 border-t border-border/50 group-hover:border-primary/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={cn(
                          "text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text",
                          service.gradient
                        )}>
                          {service.stats.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {service.stats.label}
                        </div>
                      </div>
                      <ArrowRight className={cn(
                        "h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300"
                      )} />
                    </div>
                  </div>
                )}

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom duration-1000" style={{ animationDelay: '600ms' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Don't see what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Discuss Your Project</span>
            <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}