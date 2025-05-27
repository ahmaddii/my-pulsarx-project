
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, maxRating = 5, className, starClassName }: StarRatingProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-5 w-5",
            index < rating ? "text-accent fill-accent" : "text-muted-foreground",
            starClassName
          )}
        />
      ))}
    </div>
  );
}
