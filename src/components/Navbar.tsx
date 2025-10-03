"use client";
import Link from "next/link";
import { FileText, Crown, Upload, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { is } from "zod/locales";

export default function Navbar() {
  const isloggedin = false;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-all duration-300 group-hover:rotate-12 group-hover:text-primary/80" />
              <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse" />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Summarizer
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
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

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {isloggedin ? (
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:scale-105 hidden lg:flex"
              >
                <Link href="/upload" className="flex items-center space-x-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload PDF</span>
                </Link>
              </Button>

              {/* Mobile Upload Button - Icon Only */}
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="lg:hidden transition-all duration-200 hover:bg-primary/10 hover:scale-105"
              >
                <Link href="/upload">
                  <Upload className="h-4 w-4" />
                </Link>
              </Button>

              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30 hover:scale-105 transition-all duration-200"
              >
                <Crown className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">Pro</span>
              </Badge>

              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105 shadow-sm"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">User</span>
              </Button>
            </div>
          ) : (
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link href="/sign-in">
                <span className="hidden sm:inline">Sign In</span>
                <span className="sm:hidden">Sign In</span>
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="transition-all duration-200 hover:bg-primary/10"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container px-4 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <Link
                href="/#pricing"
                className="block text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              {isloggedin && (
                <Link
                  href="/dashboard"
                  className="block text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Your Summaries
                </Link>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-border/40 space-y-3">
              {isloggedin ? (
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-sm font-medium transition-all duration-200 hover:bg-primary/10"
                  >
                    <Link
                      href="/upload"
                      className="flex items-center space-x-2"
                    >
                      <Upload className="h-4 w-4" />
                      <span>Upload PDF</span>
                    </Link>
                  </Button>

                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30"
                    >
                      <Crown className="h-3 w-3 mr-1" />
                      Pro
                    </Badge>

                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 transition-all duration-200 hover:bg-primary hover:text-primary-foreground shadow-sm"
                    >
                      <User className="h-4 w-4" />
                      <span>User</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
