
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PortfolioCategory = "All" | "Web Development" | "App Development" | "UI/UX Design";

interface PortfolioFilterProps {
  categories: PortfolioCategory[];
  activeFilter: PortfolioCategory;
  onFilterChange: (category: PortfolioCategory) => void;
}

export function PortfolioFilter({ categories, activeFilter, onFilterChange }: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
      {categories.map(category => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          onClick={() => onFilterChange(category)}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg",
            activeFilter === category
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "border-primary text-primary hover:bg-primary/10"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
