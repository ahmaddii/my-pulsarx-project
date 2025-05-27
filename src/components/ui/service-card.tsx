
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: string;
}

export function ServiceCard({ icon: Icon, title, description, delay = '0s' }: ServiceCardProps) {
  return (
    <Card className="text-center bg-card hover:bg-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeIn" style={{ animationDelay: delay }}>
      <CardHeader className="items-center">
        <div className="p-4 bg-accent/20 rounded-full mb-4 inline-block">
          <Icon className="h-10 w-10 text-accent" />
        </div>
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
