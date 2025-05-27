
"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PortfolioFilter, type PortfolioCategory } from "@/components/ui/portfolio-filter";
import { PortfolioCard, type Project } from "@/components/ui/portfolio-card";

const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    category: "Web Development",
    imageUrl: "https://ebrandpromotion.com/wp-content/uploads/2024/08/ecommerce-website-homepage-design.webp",
    imageHint: "website interface shopping",
    description: "A full-featured e-commerce platform with secure payments and inventory management.",
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    id: "2",
    title: "Mobile Banking App",
    category: "App Development",
    imageUrl: "https://ugem-production.s3.amazonaws.com/uploads/articleimage/file/327/ugem_dis_con_1x.png",
    imageHint: "mobile app finance",
    description: "Intuitive mobile banking application for iOS and Android with biometric security.",
    techStack: ["React Native", "Node.js", "MongoDB"],
  },
  {
    id: "3",
    title: "SaaS Dashboard Design",
    category: "UI/UX Design",
    imageUrl: "https://cdn.prod.website-files.com/64103d21294ba09537b876c8/678e1ba93abbf74d6c950133_AD_4nXfg3YYDnCywk3mgB5J7iy5DunTGoHmDR3txHWvQV104YmMay79mQUZHxHI7DlVazelpL4twKeXZ7Nj_kEajcjh_CNHbmI2eDs6y2OXDxRMC17WvgaO3imdzC3XF2tkF1Lj7o8IlbA.png",
    imageHint: "dashboard analytics charts",
    description: "Modern and user-friendly UI/UX design for a complex SaaS analytics dashboard.",
    techStack: ["Figma", "Adobe XD", "User Research"],
  },
  {
    id: "4",
    title: "Corporate Website Redesign",
    category: "Web Development",
    imageUrl: "https://www.hubspot.com/hs-fs/hubfs/emailmarketing2_1-Nov-20-2024-06-32-20-2099-PM.webp?width=650&height=428&name=emailmarketing2_1-Nov-20-2024-06-32-20-2099-PM.webp",
    imageHint: "website modern business",
    description: "Complete redesign and development of a corporate website focusing on performance and SEO.",
    techStack: ["WordPress", "PHP", "JavaScript"],
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    category: "App Development",
    imageUrl: "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/1faddcb87c6bcaa6072767a6f7f21b5e1049e1425f620f2f1d667c222f7bb6dd1600788838921.jpg",
    imageHint: "mobile app fitness",
    description: "A cross-platform fitness app with real-time tracking and social features.",
    techStack: ["Flutter", "Firebase", "Google Fit API"],
  },
  {
    id: "6",
    title: "Branding & Identity System",
    category: "UI/UX Design",
    imageUrl: "https://weandthecolor.com/wp-content/uploads/2021/08/Brand-Identity-Guidelines-Brochure-Template-by-GraphicArtist.jpg",
    imageHint: "logo design branding",
    description: "Comprehensive branding package including logo design, style guides, and marketing materials.",
    techStack: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy"],
  },
];

const categories: PortfolioCategory[] = ["All", "Web Development", "App Development", "UI/UX Design"];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background text-foreground">
      <div ref={sectionRef} className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
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
