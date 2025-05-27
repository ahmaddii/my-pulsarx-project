
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StarRating } from "@/components/star-rating";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
  rating: number;
  imageHint: string;
  delay?: string;
}

export function TestimonialCard({ quote, name, title, imageUrl, rating, imageHint, delay = '0s' }: TestimonialCardProps) {
  return (
    <Card className="bg-card flex flex-col h-full shadow-xl animate-fadeIn" style={{ animationDelay: delay }}>
      <CardHeader>
        <StarRating rating={rating} />
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-lg italic text-muted-foreground">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <CardFooter className="mt-auto pt-4 border-t border-border">
        <div className="flex items-center">
          <Image
            src={imageUrl}
            alt={name}
            width={50}
            height={50}
            className="rounded-full mr-4"
            data-ai-hint={imageHint}
          />
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
