
"use client";
import { ServiceCard } from "@/components/ui/service-card";
import {
 Code,
  LayoutDashboard,
  Palette,
  Zap,
  Brain,
 Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
 
const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Crafting responsive, high-performance websites tailored to your business needs using the latest technologies.",
  },
  {
    icon: LayoutDashboard,
    title: "App Development",
    description: "Building intuitive and scalable mobile applications for iOS and Android platforms that engage your users.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating visually stunning and user-friendly interfaces that enhance user experience and brand identity.",
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Developing comprehensive digital strategies to optimize your online presence and achieve your business goals.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Integrating cutting-edge AI technologies to automate processes, gain insights, and drive innovation.",
  },
  {
    icon: Users,
    title: "Consultancy",
    description: "Providing expert advice and guidance to help you navigate the complex digital landscape and make informed decisions.",
  },
];

export function ServicesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    }}, []);
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            We offer a wide range of digital solutions to help your business thrive.
          </p>
        </div>

        <div
          ref={sectionRef}
          className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-8",

            isVisible ? "animate-fadeInUp" : "opacity-0"
          )}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
