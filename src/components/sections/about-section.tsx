
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            About <span className="text-primary">Nocturne</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover our story, mission, and the vision that drives us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <Card className="overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/800x600/08070B/FFFFFF.png?text=Our+Team"
                alt="Nocturne Team"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint="company team collaboration"
              />
            </Card>
          </div>

          <div className="space-y-6 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-semibold text-primary">Our Story</h3>
            <p className="text-lg text-muted-foreground">
              Founded with a passion for innovation and a commitment to excellence, Nocturne has grown from a small idea into a dynamic force in the digital landscape. We believe in the power of technology to transform businesses and create meaningful impact.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium">Our Mission</h4>
                  <p className="text-muted-foreground">To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and success in an ever-evolving world.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-medium">Our Vision</h4>
                  <p className="text-muted-foreground">To be a leading digital partner, recognized for our creativity, technical expertise, and unwavering dedication to client satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
