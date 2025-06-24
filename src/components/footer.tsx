import Link from 'next/link';
import { Building } from 'lucide-react';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Building className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold tracking-tight">
                ZEE PLUS ELEVATORS
              </span>
            </Link>
            <p className="text-sm text-muted-foreground/80">
              Your trusted partner in vertical transportation solutions.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-headline font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground/80">
                <li>contact@zeeplus.com</li>
                <li>(123) 456-7890</li>
                <li>123 Elevator Lane</li>
                <li>Vertigo City, 12345</li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-700" />
        <div className="text-center text-sm text-muted-foreground/80">
          <p>&copy; {new Date().getFullYear()} ZEE PLUS ELEVATORS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
