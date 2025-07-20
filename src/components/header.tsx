"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Building, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Projects", href: "#projects" },
  { name: "Safety", href: "#safety" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          {/* <span className={cn(
            'font-headline text-xl font-bold tracking-tight',
            scrolled ? 'text-secondary' : 'text-white'
          )}>
            ZEE PLUS ELEVATORSdgdfg
          </span> */}
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-bold transition-colors hover:text-primary",
                scrolled ? "text-secondary" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu
                    className={cn(
                      "h-6 w-6",
                      scrolled ? "text-secondary" : "text-white"
                    )}
                  />
                </Button>
              </DialogTrigger>
              <DialogContent className="h-screen w-screen max-w-full bg-[#252525]/f2 p-0 backdrop-blur-sm border-none rounded-none animate-in fade-in-0 duration-300">
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-6 right-6 text-white hover:bg-white/10 hover:text-white z-10"
                  >
                    <X className="h-8 w-8" />
                  </Button>
                </DialogClose>
                <div className="flex flex-col items-center justify-center h-full">
                  <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                      <DialogClose asChild key={link.name}>
                        <Link
                          href={link.href}
                          className="text-4xl font-bold text-white transition-colors hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      </DialogClose>
                    ))}
                  </nav>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
