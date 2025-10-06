import Link from "next/link";
import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto  bg-gradient-to-t from-slate-100/80 via-slate-50/60 to-background dark:from-slate-800/80 dark:via-slate-900/60 dark:to-background border-t border-border/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      {/* Background Elements */}
      <div >
        <div className=" bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-200/30 to-transparent dark:from-slate-700/30 dark:to-transparent" />
        <div className=" top-1/2 left-1/4 w-64 h-64 bg-primary/4 rounded-full blur-3xl" />
        <div className=" top-1/2 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              <FileText className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-bold text-xl text-foreground">
                Summarizer
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Transform PDFs into concise summaries with AI
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8">
            <Link
              href="/#pricing"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2024 Summarize. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
