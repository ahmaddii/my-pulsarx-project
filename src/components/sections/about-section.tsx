"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CheckCircle, Sparkles, Target, Eye, Users, Zap, Award, TrendingUp } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "text-blue-500" },
    { icon: Award, label: "Projects Completed", value: "1000+", color: "text-purple-500" },
    { icon: TrendingUp, label: "Success Rate", value: "98%", color: "text-green-500" },
    { icon: Zap, label: "Years Experience", value: "5+", color: "text-yellow-500" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and success in an ever-evolving world.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be a leading digital partner, recognized for our creativity, technical expertise, and unwavering dedication to client satisfaction.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-background via-background to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-in zoom-in duration-500">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Discover{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              PulsarX
            </span>
          </h2>

          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where innovation meets excellence. We're on a mission to illuminate the digital universe with transformative solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Section */}
          <div className="relative group animate-in fade-in slide-in-from-left duration-1000">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>

            <Card className="relative overflow-hidden border-2 border-border/50 shadow-2xl rounded-3xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              <Image
                src="/images/team2.jpg"
                alt="PulsarX Team"
                width={800}
                height={800}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="company team collaboration"
              />

              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg border border-border/50 z-20 animate-in slide-in-from-top duration-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Building the Future</span>
                </div>
              </div>
            </Card>

            {/* Decorative dots */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-primary rounded-full opacity-50 animate-ping"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-accent rounded-full opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-12 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                Our Story
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a passion for innovation and a commitment to excellence, <span className="text-primary font-semibold">PulsarX</span> has grown from a small idea into a dynamic force in the digital landscape. We believe in the power of technology to transform businesses and create meaningful impact that resonates across industries.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className={cn(
                    "group p-6 border-2 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative",
                    "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                    value.gradient
                  )}></div>

                  <div className="relative flex gap-4">
                    {/* Icon */}
                    <div className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                      value.gradient
                    )}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                        {value.title}
                        <CheckCircle className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://www.linkedin.com/in/malik-ahmad-rasheed-3768902a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group relative px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl font-semibold text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More About Us
                  <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-in fade-in slide-in-from-bottom duration-1000">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className={cn(
                  "relative p-6 text-center border-2 border-border/50 transition-all duration-500 overflow-hidden group cursor-pointer",
                  hoveredStat === index && "border-primary/50 shadow-xl shadow-primary/10 scale-105"
                )}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background effect */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                )}></div>

                {/* Icon */}
                <div className="relative mx-auto w-16 h-16 mb-4 flex items-center justify-center">
                  <div className={cn(
                    "absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity",
                    stat.color.replace('text-', 'bg-')
                  )}></div>
                  <stat.icon className={cn(
                    "h-10 w-10 relative transform transition-all duration-500",
                    stat.color,
                    hoveredStat === index && "scale-110 rotate-12"
                  )} />
                </div>

                {/* Value */}
                <div className="relative text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="relative text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>

                {/* Shine effect */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
                )}></div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
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