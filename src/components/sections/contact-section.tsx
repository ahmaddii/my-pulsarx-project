
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-md shadow-md">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { message: "", status: "idle" };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
      // Consider resetting the form here if needed
    } else if (state.status === "error" && state.message && !state.errors) { // General error message
      toast({
        title: "Error!",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/nocturne", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/nocturne", label: "Twitter" },
    { icon: Github, href: "https://github.com/nocturne", label: "GitHub" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Have a project in mind or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-card shadow-xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-3xl text-primary">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-1 bg-input text-input-foreground placeholder:text-muted-foreground" />
                  {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(", ")}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-1 bg-input text-input-foreground placeholder:text-muted-foreground" />
                  {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(", ")}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="mt-1 bg-input text-input-foreground placeholder:text-muted-foreground" />
                  {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(", ")}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Card className="bg-card shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent mr-3" />
                  <a href="mailto:hello@nocturne.com" className="text-lg hover:text-accent transition-colors">hello@nocturne.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-accent mr-3" />
                  <a href="tel:+1234567890" className="text-lg hover:text-accent transition-colors">+1 (234) 567-890</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-3 mt-1" />
                  <p className="text-lg">123 Nocturne Lane, Digital City, WEB 40404</p>
                </div>
              </CardContent>
            </Card>
             <Card className="bg-card shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2 rounded-full bg-muted hover:bg-accent text-foreground hover:text-accent-foreground transition-colors duration-300"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
