import Link from "next/link";
import { FileText, Crown, Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { is } from "zod/locales";

export default function Navbar() {
  const isloggedin = false;
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <FileText className="h-6 w-6 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:text-primary/80" />
              <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Summarize
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/#pricing"
            className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:scale-105 relative group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          {isloggedin && (
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary hover:scale-105 relative group"
            >
              Your Summaries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {isloggedin ? (
            <div className="flex items-center space-x-3">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:scale-105"
              >
                <Link href="/upload" className="flex items-center space-x-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload PDF</span>
                </Link>
              </Button>

              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30 hover:scale-105 transition-all duration-200"
              >
                <Crown className="h-3 w-3 mr-1" />
                Pro
              </Badge>

              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105 shadow-sm"
              >
                <User className="h-4 w-4" />
                <span>User</span>
              </Button>
            </div>
          ) : (
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
