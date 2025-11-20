"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Zap, ChevronDown, Rocket, Star } from "lucide-react";

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
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 3 + 2;
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
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            );
          })}
        </div>

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 8 + Math.random() * 5}s`,
              animationDuration: '2s',
            }}
          >
            <div className="absolute inset-0 w-20 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></div>
          </div>
        ))}

        {/* Large Gradient Orbs - Fixed position */}
        <div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-accent/25 to-primary/25 rounded-full blur-3xl opacity-40"
          style={{
            transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.06}px)`
          }}
        ></div>
        
        {/* Subtle Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Gentle Mouse-following gradient */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-radial from-primary/15 via-accent/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>

        {/* Minimal Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float-slow"
            style={{
              top: `${20 + i * 30}%`,
              left: `${15 + i * 35}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 space-y-10 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Main Heading */}
        <div className="space-y-6">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block text-foreground mb-3">Welcome to</span>
            <span className="relative inline-block">
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                PulsarX
              </span>
              <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </span>
          </h1>

          {/* Badge - Moved below heading */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full shadow-lg animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Innovation Meets Excellence
            </span>
            <Zap className="h-4 w-4 text-accent" />
          </div>
        </div>

        {/* Subheading */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fadeInUp font-light px-4"
          style={{ animationDelay: '0.5s' }}
        >
          Crafting Digital Excellence, <span className="text-primary font-semibold">Illuminating Your Vision</span>. 
          <span className="block mt-2">We build innovative solutions that propel your business forward.</span>
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row justify-center gap-4 animate-slideInUp pt-4"
          style={{ animationDelay: '0.7s' }}
        >
          <button
            onClick={() => scrollToSection('services')}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-background/50 backdrop-blur-sm border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Feature Badges */}
        <div 
          className="flex flex-wrap items-center justify-center gap-3 animate-fadeInUp pt-2"
          style={{ animationDelay: '0.9s' }}
        >
          <div className="group px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium backdrop-blur-sm hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default">
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Fast Delivery
            </span>
          </div>
          <div className="group px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent font-medium backdrop-blur-sm hover:bg-accent/20 hover:scale-105 transition-all duration-300 cursor-default">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Premium Quality
            </span>
          </div>
          <div className="group px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium backdrop-blur-sm hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default">
            <span className="flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              Innovation First
            </span>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className="grid grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto pt-12 animate-fadeInUp"
          style={{ animationDelay: '1.1s' }}
        >
          <div className="group space-y-2 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              100+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">Projects Delivered</div>
          </div>
          <div className="group space-y-2 p-4 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-all duration-300 border border-accent/10 hover:border-accent/30 hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              50+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">Happy Clients</div>
          </div>
          <div className="group space-y-2 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              24/7
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-60 hover:opacity-100 transition-opacity"
      >
        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Scroll to explore"
        >
          <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll-down"></div>
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
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-30px) translateX(5px);
            opacity: 0.5;
          }
        }

        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(300px) translateY(300px); opacity: 0; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
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
          animation: scroll-down 1.5s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-shooting-star {
          animation: shooting-star linear infinite;
        }
      `}</style>
    </section>
  );
}