import Image from 'next/image';
import { HardHat, Wrench, Zap, ShieldAlert, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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

  const projects = [
    {
      src: 'https://placehold.co/600x400.png',
      hint: 'modern elevator lobby',
      title: 'Corporate Headquarters',
      description: 'State-of-the-art glass elevators for a downtown high-rise.',
    },
    {
      src: 'https://placehold.co/600x400.png',
      hint: 'glass elevator interior',
      title: 'Luxury Hotel',
      description: 'Custom-designed scenic elevators with panoramic views.',
    },
    {
      src: 'https://placehold.co/600x400.png',
      hint: 'skyscraper exterior',
      title: 'Residential Complex',
      description: 'High-speed, efficient elevators for a multi-tower residential building.',
    },
    {
      src: 'https://placehold.co/600x400.png',
      hint: 'elevator installation',
      title: 'Shopping Mall',
      description: 'Heavy-duty escalators and elevators to manage high foot traffic.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section
        id="home"
        className="relative flex h-[75vh] min-h-[500px] w-full items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="elevator modern"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Elevating Your World with Precision
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
            ZEE PLUS ELEVATORS delivers cutting-edge vertical transportation solutions with a focus on safety, reliability, and design.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="#services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-secondary">
              <Link href="#contact">Get a Quote</Link>
            </Button>
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

      <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Our Featured Projects</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We take pride in our work. Here are a few examples of our successful installations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.src}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-headline font-bold text-lg">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
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
