
"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: "Web Development" | "App Development" | "UI/UX Design";
  imageUrl: string;
  imageHint: string;
  description: string;
  techStack?: string[];
  liveLink?: string; // Optional
}

interface PortfolioCardProps {
  project: Project;
  delay?: string;
}

export function PortfolioCard({ project, delay = '0s' }: PortfolioCardProps) {
  return (
    <Card className="bg-card text-card-foreground overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group animate-fadeIn" style={{ animationDelay: delay }}>
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={project.imageHint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
           {/* Overlay content if needed */}
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors">{project.title}</CardTitle>
        </div>
        <Badge variant="secondary" className="mt-1 self-start">{project.category}</Badge>
      </CardHeader>
      <CardContent className="min-h-[60px]">
        <CardDescription className="text-muted-foreground text-sm line-clamp-3">
          {project.description}
        </CardDescription>
        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          onClick={() => project.liveLink ? window.open(project.liveLink, '_blank') : alert('Project details coming soon!')}
          aria-label={`View project ${project.title}`}
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
