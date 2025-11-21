"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Zap, Rocket, Star, Award, TrendingUp, Users } from "lucide-react";

export function HomeSection() {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100, 
          y: ((e.clientY - rect.top) / rect.height) * 100 
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: TrendingUp, value: "1000+", label: "Projects Delivered", gradient: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "500+", label: "Happy Clients", gradient: "from-purple-500 to-pink-500" },
    { icon: Award, value: "98%", label: "Success Rate", gradient: "from-green-500 to-emerald-500" },
    { icon: Zap, value: "24/7", label: "Support Available", gradient: "from-yellow-500 to-orange-500" },
  ];

  const features = [
    { icon: Zap, text: "Lightning Fast", gradient: "from-yellow-500 to-orange-500" },
    { icon: Star, text: "Premium Quality", gradient: "from-purple-500 to-pink-500" },
    { icon: Rocket, text: "Innovation First", gradient: "from-blue-500 to-cyan-500" },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars Background */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 4 + 2;
            const delay = Math.random() * 5;
            return (
              <div
                key={`star-${i}`}
                className="absolute bg-white rounded-full animate-twinkle"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                  opacity: Math.random() * 0.7 + 0.2,
                }}
              />
            );
          })}
        </div>

        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 6 + Math.random() * 4}s`,
              animationDuration: '1.5s',
            }}
          >
            <div className="absolute inset-0 w-24 h-0.5 bg-gradient-to-r from-white via-primary/50 to-transparent rounded-full"></div>
          </div>
        ))}

        {/* Large Gradient Orbs with parallax */}
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-3xl opacity-60 animate-pulse-slow"
          style={{
            transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-accent/35 to-primary/35 rounded-full blur-3xl opacity-50 animate-pulse-slow"
          style={{
            transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.08}px)`,
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Enhanced Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Mouse-following gradient - more prominent */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-radial from-primary/25 via-accent/15 to-transparent rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>

        {/* Floating Particles - Enhanced */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-3 h-3 rounded-full animate-float-slow"
            style={{
              background: i % 2 === 0 ? 'radial-gradient(circle, rgba(var(--primary), 0.6) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(var(--accent), 0.6) 0%, transparent 70%)',
              top: `${10 + i * 12}%`,
              left: `${8 + i * 12}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${12 + i * 2}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 space-y-12 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Top Badge - Enhanced */}
        <div 
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 backdrop-blur-xl border-2 border-primary/30 rounded-full shadow-2xl shadow-primary/20 animate-fadeIn hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="relative">
            <Sparkles className="h-5 w-5 text-primary animate-spin-slow" />
            <div className="absolute inset-0 bg-primary/50 blur-md rounded-full"></div>
          </div>
          <span className="text-sm md:text-base font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
            Innovation Meets Excellence
          </span>
          <Zap className="h-5 w-5 text-accent animate-pulse" />
        </div>

        {/* Main Heading - Enhanced */}
        <div className="space-y-6">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block text-foreground mb-4 drop-shadow-2xl">Welcome to</span>
            <span className="relative inline-block group">
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text drop-shadow-2xl">
                PulsarX
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse-glow"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </span>
          </h1>
        </div>

        {/* Subheading - Enhanced */}
        <p 
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fadeInUp font-light px-4"
          style={{ animationDelay: '0.4s' }}
        >
          Crafting <span className="text-primary font-bold">Digital Excellence</span>, Illuminating Your Vision
          <span className="block mt-3 text-lg md:text-xl">
            We transform ideas into powerful digital solutions that propel your business into the future
          </span>
        </p>

        {/* Feature Pills - Enhanced */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          {features.map((feature, index) => (
            <div 
              key={feature.text}
              className="group relative px-6 py-3 bg-background/50 backdrop-blur-xl border-2 border-border/50 rounded-full text-sm md:text-base font-semibold hover:scale-110 transition-all duration-300 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <span className="relative flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                <feature.icon className="h-5 w-5" />
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Enhanced */}
        <div 
          className="flex flex-col sm:flex-row justify-center gap-5 animate-slideInUp pt-4"
          style={{ animationDelay: '0.8s' }}
        >
          <button
            onClick={() => scrollToSection('services')}
            className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-primary/60 transform hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Get Started
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-5 bg-background/80 backdrop-blur-xl border-2 border-primary/50 text-primary hover:bg-primary hover:text-white hover:border-primary font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Stats Section - Enhanced with Icons */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto pt-16 animate-fadeInUp"
          style={{ animationDelay: '1s' }}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="group relative p-6 rounded-3xl bg-gradient-to-br from-background/80 via-background/60 to-transparent backdrop-blur-xl border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mx-auto w-14 h-14 mb-4 flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className={`relative bg-gradient-to-br ${stat.gradient} p-3 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Value */}
              <div className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="relative text-sm md:text-base text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                {stat.label}
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Scroll to explore"
        >
          <span className="text-sm font-semibold tracking-wide">Scroll to explore</span>
          <div className="relative w-7 h-12 border-2 border-current rounded-full flex items-start justify-center p-2 group-hover:border-primary transition-colors">
            <div className="w-1.5 h-3 bg-current rounded-full animate-scroll-down"></div>
          </div>
        </button>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-30px) translateX(15px) scale(1.1);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-15px) translateX(-15px) scale(0.9);
            opacity: 0.5;
          }
          75% { 
            transform: translateY(-40px) translateX(8px) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(400px) translateY(400px); opacity: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInUp {
          animation: slideInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 1.8s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-shooting-star {
          animation: shooting-star linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}