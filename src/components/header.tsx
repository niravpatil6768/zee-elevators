"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Building, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Projects', href: '#projects' },
  { name: 'Safety', href: '#safety' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <Building className="h-8 w-8 text-primary" />
          <span className={cn(
            'font-headline text-xl font-bold tracking-tight',
            scrolled ? 'text-secondary' : 'text-white'
          )}>
            ZEE PLUS ELEVATORS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'font-bold transition-colors hover:text-primary',
                scrolled ? 'text-secondary' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className={cn(scrolled ? 'text-secondary' : 'text-white')} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                  <Link href="#home" onClick={closeMobileMenu} className="flex items-center gap-2">
                    <Building className="h-8 w-8 text-primary" />
                    <span className="font-headline text-xl font-bold tracking-tight text-secondary">
                      ZEE PLUS ELEVATORS
                    </span>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon"><X /></Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.href}
                        className="text-lg font-bold text-secondary transition-colors hover:text-primary"
                        onClick={closeMobileMenu}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <Separator />
                  <SheetClose asChild>
                    <Button asChild size="lg" onClick={closeMobileMenu}>
                      <Link href="#contact">Get a Quote</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
