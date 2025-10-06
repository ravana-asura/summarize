import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  FileText,
  Sparkles,
  Play,
  CheckCircle,
  Pizza,
  BrainCircuit,
  FileOutput,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { id } from "zod/locales";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
function HeroSection() {
  return (
    <section className="py-16 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-900/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-3xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Badge className="rounded-full px-3 py-1 bg-white border border-primary/30 shadow-md hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/20 cursor-pointer transition-all duration-300 group">
            <Sparkles className="h-4 w-4 text-primary animate-pulse mr-1 group-hover:animate-spin" />
            <p className="text-sm text-primary font-medium group-hover:font-semibold">
              Powered By AI
            </p>
          </Badge>
        </div>
     
   

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
          <span className="text-foreground">
            Transform PDFs into{" "}
            <span
              className="inline-block bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 text-white px-2 py-1 rounded-md font-black shadow-lg mx-1"
              style={{
                transform: "rotate(2deg)",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
              }}
            >
              concise
            </span>{" "}
            summaries
          </span>
        </h1>

        <h2 className=" md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto text-base">
          Get a beautiful summary of the document in seconds.
        </h2>

        <Button className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full group">
          <Link
            href="/#pricing"
            className="flex items-center text-primary-foreground"
          >
            Try Summarizer
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-50/30 to-background dark:from-slate-900/30 dark:to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
      </div>
      <div className="container relative z-10 max-w-4xl mx-auto">
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-border/30 shadow-xl p-8">
          <div className="flex flex-col items-center text-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center mb-6 rounded-2xl p-4 backdrop-blur-sm border border-primary/20 bg-gradient-to-r from-rose-100/80 to-rose-200/80 dark:from-rose-900/20 dark:to-rose-800/20 shadow-xl hover:scale-110 transition-all duration-300">
              <Pizza className="h-8 w-8 text-rose-500 animate-pulse" />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Watch how summarizer transforms{" "}
              <span className="bg-gradient-to-r from-rose-500 to-rose-800 bg-clip-text text-transparent font-black">
                this Next.js course PDF
              </span>{" "}
              into an easy-to-read summary!
            </h3>
          </div>
        </div>
        <div className="mt-8 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-border/30 shadow-lg p-8 min-h-[160px] flex items-center justify-center">
          <p className="text-muted-foreground text-lg">
            {/* Replace with your image or demo component */}
            Demo content will appear here
          </p>
        </div>
      </div>
    </section>
  );
}
function HowItWorksSection() {
  type Steps = {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  const steps: Steps[] = [
    {
      title: "Upload Your PDF",
      description: "Simply drop an drag your PDF document or click to upload.",
      icon: <FileText className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI-Analysis",
      description:
        "Our advanced AI analyzes the content and generates a concise summary.",
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    },
    {
      title: "Get Summary",
      description:
        "Get a beautifully formatted summary delivered to your dashboard.",
      icon: <FileOutput className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-900/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">
            HOW IT WORKS
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground max-w-4xl mx-auto">
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-auto relative">
          {steps.map((step, index) => {
            return (
              <div key={index} className="relative group">
                <Card className="hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl relative overflow-hidden">
                  <CardHeader className="p-8">
                    {/* Icon Container */}
                    <div className="inline-flex items-center justify-center mb-4 rounded-2xl p-4 group-hover:scale-110 transition-all duration-300">
                      {step.icon}
                    </div>

                    <CardTitle className="mt-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function PricingSection() {
  type Plans = {
    id: string;
    name: string;
    description: string;
    price: number;
    features: string[];
    paymentLink: string;
    priceId: string;
  };
  const plans: Plans[] = [
    {
      id: "basic",
      name: "Basic",
      description: "For casual users who need occasional summaries.",
      price: 9,
      features: [
        "5 PDF uploads per month",
        "Basic AI summarization",
        "Email support",
      ],
      paymentLink: "https://buy.stripe.com/test_14k14g4mZcC0e1W6op",
      priceId: "price_1NGLWDL4k0b2aY2u0lXH3tK",
    },
    {
      id: "pro",
      name: "Pro",
      description: "For professionals who need regular summaries.",
      price: 19,
      features: [
        "Unlimited PDF uploads",
        "Advanced AI summarization",
        "Priority email support",
        "Access to new features",
      ],
      paymentLink: "https://buy.stripe.com/test_14k14g4mZcC0e1W6op",
      priceId: "price_1NGLXyL4k0b2aY2uYqvXH3tK",
    },
  ];
  return (
    <section
      className="relative py-16 bg-gradient-to-b from-slate-50/30 to-background dark:from-slate-900/30 dark:to-background overflow-hidden"
      id="pricing"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-2xl">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose the perfect plan for your needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with our free tier or upgrade to Pro for unlimited access and
            advanced features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const isPro = plan.id === "pro";
            return (
              <div key={plan.id} className="relative group">
                {/* Pro Badge */}
                {isPro && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-foreground text-background font-bold px-4 py-1 shadow-lg">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                <Card
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                    isPro
                      ? "border-2 border-foreground bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl"
                      : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <CardHeader className="relative z-10 p-8">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {plan.name}
                      </CardTitle>
                      {isPro && (
                        <div className="w-3 h-3 bg-foreground rounded-full" />
                      )}
                    </div>
                    <CardDescription className="text-base text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 p-8 pt-0">
                    <div className="mb-6">
                      <div className="text-4xl font-black mb-2 text-foreground">
                        ${plan.price}
                        <span className="text-lg font-normal text-muted-foreground">
                          /month
                        </span>
                      </div>
                    </div>

                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full py-3 text-base font-bold transition-all duration-300 group ${
                        isPro
                          ? "bg-foreground hover:bg-foreground/90 text-background shadow-xl hover:shadow-2xl transform hover:scale-105"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105"
                      }`}
                    >
                      <Link
                        href={plan.paymentLink}
                        className="flex items-center justify-center"
                      >
                        {isPro ? "Upgrade to Pro" : "Get Started"}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        {/* <div className="text-center mt-12 pt-8 border-t border-border/20">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by professionals worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs">Money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs">Secure payments</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
function CTASection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-background to-slate-50/30 dark:to-slate-900/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Main Content */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-border/30 shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              Ready to save hours of reading time?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform lengthy documents into clear, actionable insights with
              our AI-powered summarizer.
            </p>
          </div>
     
          <div className="space-y-6">
            <Button
              asChild
              size="lg"
              className="px-12 py-4 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-full group relative overflow-hidden"
            >
              <Link
                href="/#pricing"
                className="flex items-center justify-center text-primary-foreground"
              >
                Get Started Now
                <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Join thousands of professionals who save time every day
          </p>
        </div>
      </div>
    </section>
  );
}
