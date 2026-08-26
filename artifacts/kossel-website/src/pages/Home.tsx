import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Truck, ShieldCheck, Wrench } from "lucide-react";
import heroImage from "@assets/generated_images/hero-industrial.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          {heroImage ? (
            <img 
              src={heroImage} 
              alt="Industrial Oilfield Facility" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tighter text-white leading-[1.1] mb-6">
              Engineering Excellence for <span className="text-accent">Demanding</span> Operations
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              Kossel Ltd. provides robust industrial MRO, engineering design, procurement, and construction services to leading multinational operations globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto font-bold">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Overview Snippet */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-primary mb-6">
                A Partner You Can Trust
              </h2>
              <div className="w-20 h-1.5 bg-accent mb-8" />
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Kossel Nigeria Limited is an indigenous company with 100% Nigerian workforce. We specialize in the supply of industrial MRO, safety products, and comprehensive engineering services to major multinational companies.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Incorporated in 2010, our vision is to realize exceptional business growth with a focus on becoming the leader in product costing while building excellence in every aspect to meet our customers' stringent requirements.
              </p>
              <Link href="/about">
                <Button variant="link" className="px-0 flex items-center text-primary font-bold text-base hover:text-accent">
                  Read Our Full Profile <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Engineering Design", icon: Settings },
                { label: "Procurement", icon: Truck },
                { label: "Industrial MRO", icon: Wrench },
                { label: "HSE Compliance", icon: ShieldCheck }
              ].map((stat, i) => (
                <div key={i} className="bg-muted p-8 flex flex-col items-center justify-center text-center group hover:bg-primary transition-colors duration-300">
                  <stat.icon className="w-12 h-12 text-accent mb-4 group-hover:text-white transition-colors" />
                  <span className="font-display font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-primary mb-4">
                Core Capabilities
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Delivering end-to-end solutions from conceptual design to installation and maintenance.
              </p>
            </div>
            <Link href="/services">
              <Button variant="outline" className="hidden md:flex mt-4 md:mt-0">
                View All Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Engineering Design",
                desc: "Detailed and innovative engineering design for construction and operational needs, including P&ID and conceptual process studies.",
              },
              {
                title: "Procurement & Logistics",
                desc: "Partnering with Kossel offers the opportunity to save cost, manage demand, and ensure exact specification needs are met.",
              },
              {
                title: "Installation & Maintenance",
                desc: "Civil, mechanical, and electrical engineering services including pipeline laying and comprehensive industrial maintenance.",
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 border border-border hover:border-accent transition-colors duration-300">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-display font-bold text-xl mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
          
          <Link href="/services">
            <Button variant="outline" className="w-full mt-8 md:hidden">
              View All Services
            </Button>
          </Link>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center border-t-4 border-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-6">
            Ready to initiate a project?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Contact our engineering and commercial teams to discuss specifications, timelines, and procurement needs.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="lg" className="font-bold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
