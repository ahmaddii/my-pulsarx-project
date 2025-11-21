"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Github, ExternalLink, Layers, Code, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    const projects = [
        {
            title: "Nebula Dashboard",
            description: "A high-performance analytics dashboard for visualizing complex datasets in real-time. Features dark mode and customizable widgets.",
            tags: ["React", "Next.js", "Tailwind", "Recharts"],
            icon: Layers,
            gradient: "from-blue-500 to-cyan-500",
            link: "#",
        },
        {
            title: "Quantum Commerce",
            description: "Next-generation e-commerce platform with AI-driven product recommendations and sub-second page loads.",
            tags: ["TypeScript", "Node.js", "GraphQL", "Stripe"],
            icon: Code,
            gradient: "from-purple-500 to-pink-500",
            link: "#",
        },
        {
            title: "Cyber Sentinel",
            description: "AI-powered cybersecurity threat detection system. Monitors network traffic and identifies anomalies instantly.",
            tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
            icon: Cpu,
            gradient: "from-green-500 to-emerald-500",
            link: "#",
        },
    ];

    return (
        <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={cn(
                    "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                            Featured Masterpieces
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Explore a selection of our most impactful projects, where innovation meets execution.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={cn(
                                "group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                            )}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Content Container */}
                            <div className="p-8 flex flex-col h-full">
                                {/* Icon/Image Placeholder */}
                                <div className="mb-6 relative w-16 h-16">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                                    <div className={`relative w-full h-full bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                        <project.icon className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-auto"
                                >
                                    View Case Study
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
