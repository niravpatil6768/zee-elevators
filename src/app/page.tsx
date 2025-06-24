import Image from 'next/image';
import { HardHat, Wrench, Zap, ShieldAlert, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ContactForm from '@/components/contact-form';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: <HardHat className="h-10 w-10 text-primary" />,
      title: 'Installation',
      description: 'Expert installation of modern, safe, and reliable elevator systems for new and existing buildings.',
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: 'Maintenance',
      description: 'Comprehensive maintenance plans to ensure your elevators operate smoothly and efficiently.',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Modernization',
      description: 'Upgrade your existing elevators with the latest technology for improved performance and aesthetics.',
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-primary" />,
      title: 'Repair',
      description: '24/7 emergency repair services to minimize downtime and ensure passenger safety.',
    },
  ];

  const testimonials = [
    {
      quote: "ZEE PLUS transformed our building's accessibility. Their installation was seamless, and the new elevators are a dream. Highly professional team from start to finish.",
      name: 'Sarah Johnson',
      company: 'CEO, Innovate Corp',
      avatar: 'https://placehold.co/100x100.png',
      hint: 'woman smiling',
    },
    {
      quote: "The modernization of our elevators was handled with utmost care and precision. The team was efficient, and the result is a significant improvement in performance and aesthetics.",
      name: 'Michael Chen',
      company: 'Property Manager, Vista Towers',
      avatar: 'https://placehold.co/100x100.png',
      hint: 'man portrait',
    },
    {
      quote: "Their 24/7 maintenance service is a lifesaver. Quick response times and knowledgeable technicians give us peace of mind. I can't recommend ZEE PLUS enough.",
      name: 'David Rodriguez',
      company: 'Operations Head, Grand Hotel',
      avatar: 'https://placehold.co/100x100.png',
      hint: 'man professional',
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

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight">Our Comprehensive Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a full spectrum of elevator services to keep your buildings running efficiently and safely.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center group hover:shadow-xl transition-shadow duration-300">
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
      
      <section id="about" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="ZEE PLUS ELEVATORS team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="team meeting"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary">About ZEE PLUS ELEVATORS</h2>
            <p className="mt-4 text-lg">
              Since our founding, ZEE PLUS ELEVATORS has been a leader in the vertical transportation industry. Our mission is to provide safe, reliable, and innovative elevator solutions that meet the unique needs of each client.
            </p>
            <p className="mt-4">
              Our team of certified technicians and engineers is dedicated to excellence, from initial design and installation to ongoing maintenance and modernization. We believe in building lasting relationships based on trust, quality, and unparalleled customer service.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our commitment to quality and service speaks for itself through our clients' experiences.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col justify-between text-left">
                <CardContent className="pt-6">
                  <p className="italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex items-center gap-4 mt-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                    data-ai-hint={testimonial.hint}
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
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
            <div className="space-y-8">
              <div>
                <h3 className="font-headline text-xl font-bold text-primary">Contact Information</h3>
                <p className="text-muted-foreground">Fill out the form or use the information below to contact us.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Our Office</h4>
                    <p className="text-muted-foreground">123 Elevator Lane, Vertigo City, 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-muted-foreground">contact@zeeplus.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-2">
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
