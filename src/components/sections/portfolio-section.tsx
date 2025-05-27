
"use client";

import { useState } from "react";
import { PortfolioFilter, type PortfolioCategory } from "@/components/ui/portfolio-filter";
import { PortfolioCard, type Project } from "@/components/ui/portfolio-card";

const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    category: "Web Development",
    imageUrl: "https://placehold.co/600x400/08070B/FFFFFF.png?text=Project+Alpha",
    imageHint: "website interface shopping",
    description: "A full-featured e-commerce platform with secure payments and inventory management.",
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    id: "2",
    title: "Mobile Banking App",
    category: "App Development",
    imageUrl: "https://placehold.co/600x400/6A4AE3/FFFFFF.png?text=Project+Beta",
    imageHint: "mobile app finance",
    description: "Intuitive mobile banking application for iOS and Android with biometric security.",
    techStack: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: "3",
    title: "SaaS Dashboard Design",
    category: "UI/UX Design",
    imageUrl: "https://placehold.co/600x400/4CB5F5/FFFFFF.png?text=Project+Gamma",
    imageHint: "dashboard analytics charts",
    description: "Modern and user-friendly UI/UX design for a complex SaaS analytics dashboard.",
    techStack: ["Figma", "Adobe XD", "User Research"],
  },
  {
    id: "4",
    title: "Corporate Website Redesign",
    category: "Web Development",
    imageUrl: "https://placehold.co/600x400/FFFFFF/08070B.png?text=Project+Delta",
    imageHint: "website modern business",
    description: "Complete redesign and development of a corporate website focusing on performance and SEO.",
    techStack: ["WordPress", "PHP", "JavaScript"],
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    category: "App Development",
    imageUrl: "https://placehold.co/600x400/08070B/6A4AE3.png?text=Project+Epsilon",
    imageHint: "mobile app fitness",
    description: "A cross-platform fitness app with real-time tracking and social features.",
    techStack: ["Flutter", "Firebase", "Google Fit API"],
  },
  {
    id: "6",
    title: "Branding & Identity System",
    category: "UI/UX Design",
    imageUrl: "https://placehold.co/600x400/6A4AE3/4CB5F5.png?text=Project+Zeta",
    imageHint: "logo design branding",
    description: "Comprehensive branding package including logo design, style guides, and marketing materials.",
    techStack: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy"],
  },
];

const categories: PortfolioCategory[] = ["All", "Web Development", "App Development", "UI/UX Design"];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("All");

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore some of our recent projects and see our expertise in action.
          </p>
        </div>

        <PortfolioFilter
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
