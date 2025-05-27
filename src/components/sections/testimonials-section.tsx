
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    quote: "Nocturne transformed our online presence. Their team is professional, creative, and delivered beyond our expectations!",
    name: "Jane Doe",
    title: "CEO, Innovatech",
    imageUrl: "https://placehold.co/100x100/6A4AE3/FFFFFF.png?text=JD",
    rating: 5,
    imageHint: "client portrait happy"
  },
  {
    quote: "The app they developed for us is fantastic. User-friendly, robust, and has significantly improved our customer engagement.",
    name: "John Smith",
    title: "Marketing Director, BizSolutions",
    imageUrl: "https://placehold.co/100x100/4CB5F5/FFFFFF.png?text=JS",
    rating: 5,
    imageHint: "client portrait professional"
  },
  {
    quote: "Exceptional UI/UX design work. Nocturne understood our brand perfectly and created a stunning interface.",
    name: "Alice Brown",
    title: "Founder, Creative Co.",
    imageUrl: "https://placehold.co/100x100/FFFFFF/08070B.png?text=AB",
    rating: 4,
    imageHint: "client portrait smiling"
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Hear what our satisfied clients have to say about their experience with Nocturne.
          </p>
        </div>

        {/* For a carousel, you would use a library like Swiper.js or build custom logic.
            For simplicity, displaying cards in a grid. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name} 
              {...testimonial} 
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
