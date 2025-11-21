"use client";

import { useFormStatus } from "react-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Send, Sparkles, MessageCircle, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useEffect, useState, useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="group relative w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {pending ? (
          <>
            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </span>
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { message: "", status: "idle" };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
    } else if (state.status === "error" && state.message && !state.errors) {
      toast({
        title: "Error!",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pulsarx.inc@gmail.com",
      href: "mailto:pulsarx.inc@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 304 7058585",
      href: "tel:+923047058585",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Street 55 I8/3 Islamabad, Pakistan, WEB 40404",
      href: "#",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/malik-ahmad-rasheed-3768902a9/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://x.com/", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Github, href: "https://github.com/ahmaddii", label: "GitHub", color: "hover:bg-gray-700" },
  ];

  const quickInfo = [
    { icon: Clock, label: "Response Time", value: "< 24 hours" },
    { icon: Globe, label: "Timezone", value: "PKT (UTC+5)" },
    { icon: MessageCircle, label: "Languages", value: "English, Urdu" },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Contact Us</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              Touch
            </span>
          </h2>

          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hi? We'd love to hear from you and discuss how we can help bring your vision to life.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            "grid lg:grid-cols-5 gap-8 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Contact Form - Takes 3 columns */}

          <div className="lg:col-span-3 space-y-8">
            <Card className="relative border-2 border-border/50 shadow-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <span className="w-2 h-10 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                  <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                    Send us a message
                  </span>
                </CardTitle>
                <p className="text-muted-foreground mt-2">Fill out the form below and we'll get back to you shortly.</p>
              </CardHeader>

              <CardContent className="relative">
                <form action={formAction} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                        Full Name
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-muted/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                      {state.errors?.name && (
                        <p className="text-sm text-destructive flex items-center gap-1 animate-in slide-in-from-top duration-300">
                          <span className="inline-block w-1 h-1 bg-destructive rounded-full"></span>
                          {state.errors.name.join(", ")}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        Email Address
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-muted/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                      {state.errors?.email && (
                        <p className="text-sm text-destructive flex items-center gap-1 animate-in slide-in-from-top duration-300">
                          <span className="inline-block w-1 h-1 bg-destructive rounded-full"></span>
                          {state.errors.email.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                      Message
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                    {state.errors?.message && (
                      <p className="text-sm text-destructive flex items-center gap-1 animate-in slide-in-from-top duration-300">
                        <span className="inline-block w-1 h-1 bg-destructive rounded-full"></span>
                        {state.errors.message.join(", ")}
                      </p>
                    )}
                  </div>

                  <SubmitButton />
                </form>
              </CardContent>
            </Card>

            {/* Schedule Call Card */}
            <Card className="border-2 border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden group">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                  Book a Call
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <p className="text-muted-foreground mb-6 relative z-10">
                  Prefer to talk directly? Schedule a free 15-minute consultation with our experts.
                </p>
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] gap-2 group/btn"
                >
                  <Clock className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                  Schedule Meeting
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information Card */}
            <Card className="border-2 border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                      info.gradient
                    )}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors break-words">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Quick Info Card */}
            <Card className="border-2 border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card className="border-2 border-border/50 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></span>
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      onMouseEnter={() => setHoveredSocial(social.label)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className={cn(
                        "relative flex-1 p-4 rounded-xl bg-muted/50 backdrop-blur-sm border-2 border-border/50",
                        "hover:border-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1",
                        "group overflow-hidden shadow-lg hover:shadow-primary/20"
                      )}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300"></div>
                      <social.icon className="h-6 w-6 relative z-10 mx-auto text-foreground group-hover:text-primary transition-colors" />
                      {hoveredSocial === social.label && (
                        <p className="text-xs text-center mt-2 text-primary font-medium animate-in fade-in slide-in-from-bottom duration-200">
                          {social.label}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section >
  );
}