
import { TestimonialCard } from "@/components/ui/testimonial-card";

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
            Hear what our satisfied clients have to say about their experience with PularX.
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
