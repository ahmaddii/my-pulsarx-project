"use client";

import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Sparkles, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "PulsarX transformed our online presence. Their team is professional, creative, and delivered beyond our expectations!",
    name: "Faraz Ali",
    title: "CEO, Innovatech",
    imageUrl: "https://t4.ftcdn.net/jpg/04/44/74/99/360_F_444749923_B0XJTJJRUVlRQHcDeSV1eOG6JjkKdj7Q.jpg",
    rating: 5,
    imageHint: "client portrait happy"
  },
  {
    quote: "The app they developed for us is fantastic. User-friendly, robust, and has significantly improved our customer engagement.",
    name: "John Smith",
    title: "Marketing Director, BizSolutions",
    imageUrl: "https://img.freepik.com/free-photo/serious-young-african-man-standing-isolated_171337-9633.jpg",
    rating: 5,
    imageHint: "client portrait professional"
  },
  {
    quote: "Exceptional UI/UX design work. PulsarX understood our brand perfectly and created a stunning interface.",
    name: "Alice Brown",
    title: "Founder, Creative Co.",
    imageUrl: "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
    rating: 4,
    imageHint: "client portrait smiling"
  },
  {
    quote: "Working with PulsarX was a game-changer. They brought our vision to life with incredible attention to detail.",
    name: "Michael Chen",
    title: "CTO, FutureScale",
    imageUrl: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    rating: 5,
    imageHint: "client portrait tech"
  },
  {
    quote: "Their development speed and code quality are unmatched. Highly recommended for any serious startup.",
    name: "Sarah Johnson",
    title: "Product Lead, TechFlow",
    imageUrl: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    rating: 5,
    imageHint: "client portrait confident"
  },
  {
    quote: "A truly partner-centric approach. They didn't just build software; they helped us build a business.",
    name: "David Wilson",
    title: "Founder, StartUp Hub",
    imageUrl: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    rating: 5,
    imageHint: "client portrait casual"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Quote className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Wall of Love</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              Visionaries
            </span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what the founders and leaders we work with have to say.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative max-w-[100vw] overflow-hidden">
          {/* Gradient Masks for smooth fade */}
          <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

          {/* Row 1: Left to Right */}
          <div className="flex gap-8 mb-8 animate-marquee hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`row1-${index}`} className="w-[350px] md:w-[450px] flex-shrink-0">
                <TestimonialCard {...testimonial} delay="0s" />
              </div>
            ))}
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex gap-8 animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`row2-${index}`} className="w-[350px] md:w-[450px] flex-shrink-0">
                <TestimonialCard {...testimonial} delay="0s" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
