"use client";

import React from 'react';
import Image from 'next/image';
import { HardHat, Wrench, Zap, Phone, Mail, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import ContactForm from '@/components/contact-form';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const services = [
    {
      icon: <HardHat className="h-10 w-10 text-primary" />,
      title: 'Elevator Installation',
      description: 'Providing state-of-the-art, custom elevator installations for new buildings.',
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: 'Maintenance',
      description: 'Comprehensive maintenance plans to ensure safety and peak performance.',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Modernization',
      description: 'Upgrading older elevators with the latest technology for better efficiency and safety.',
    },
  ];

  const testimonials = [
    {
      quote: "ZEE PLUS transformed our building's accessibility. Their installation was seamless, and the new elevators are a dream. Highly professional team from start to finish.",
      name: 'Sarah Johnson',
      rating: 5,
    },
    {
      quote: "The modernization of our elevators was handled with utmost care and precision. The team was efficient, and the result is a significant improvement in performance and aesthetics.",
      name: 'Michael Chen',
      rating: 5,
    },
    {
      quote: "Their 24/7 maintenance service is a lifesaver. Quick response times and knowledgeable technicians give us peace of mind. I can't recommend ZEE PLUS enough.",
      name: 'David Rodriguez',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="home"
        className="relative flex h-screen min-h-[600px] w-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="modern elevator interior"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl text-center text-white px-4">
          <h1 className="font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Elevating Your World with Safety and Style
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light text-neutral-200 tracking-wider">
            elevate with ease
          </p>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight">Our Core Services</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h2 className="font-headline text-3xl font-bold tracking-tight">About ZEE PLUS ELEVATORS</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At ZEE PLUS ELEVATORS, we are dedicated to providing the highest standards of reliability, safety, and customer satisfaction. Based in Jamnagar, we are your local experts for all vertical transportation needs, ensuring every project is completed with precision and care.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="ZEE PLUS ELEVATORS office"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="modern office team"
              />
            </div>
          </div>
          
          <div className="mt-16 md:mt-24">
              <div className="text-center">
                  <h3 className="font-headline text-2xl font-bold tracking-tight">Our Leadership</h3>
                  <p className="mt-2 text-muted-foreground">The experienced team steering our mission.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
                  <div className="text-center">
                      <h4 className="font-headline font-bold text-xl">Hussain Bahasan</h4>
                      <p className="text-muted-foreground mt-1">99982 07275</p>
                  </div>
                  <div className="text-center">
                      <h4 className="font-headline font-bold text-xl">Rahil Bahasan</h4>
                      <p className="text-muted-foreground mt-1">88664 66071</p>
                  </div>
                  <div className="text-center">
                      <h4 className="font-headline font-bold text-xl">Zissan Bahasan</h4>
                      <p className="text-muted-foreground mt-1">88664 66071</p>
                      <p className="text-sm text-primary font-semibold">Electrical Engineer</p>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Our commitment to quality and service speaks for itself through our clients' experiences.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col justify-between h-full bg-card text-card-foreground">
                      <CardContent className="p-6 flex-grow">
                        <p className="italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-center text-center gap-2 pt-4">
                        <p className="font-bold">{testimonial.name}</p>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`} />
                          ))}
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary-foreground bg-primary/50 hover:bg-primary/80 border-primary-foreground" />
            <CarouselNext className="text-primary-foreground bg-primary/50 hover:bg-primary/80 border-primary-foreground" />
          </Carousel>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have a question or need a quote? Reach out to us. Our team is ready to assist you.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-headline text-xl font-bold text-primary">Contact Information</h3>
                <p className="text-muted-foreground mt-2">Fill out the form or use the information below to contact us.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Our Office</h4>
                    <p className="text-muted-foreground">Rydham Market, Plot No. 7, Shop No. 2, Kalyan Chowk, Morkanda Road, Jamnagar - 361 001.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-muted-foreground">zeepluselevators@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-muted-foreground">99982 07275 | 88664 66071</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
                <iframe
                  src="https://maps.google.com/maps?q=Rydham%20Market,%20Plot%20No.%207,%20Shop%20No.%202,%20Kalyan%20Chowk,%20Morkanda%20Road,%20Jamnagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zee Plus Elevators Location"
                ></iframe>
              </div>
            </div>
            <Card className="p-2 h-fit">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
