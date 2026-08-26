import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Truck, ShieldCheck, Wrench } from "lucide-react";
import { SEO } from "@/components/SEO";

import teamImg from "@assets/generated_images/kossel-african-engineering-team.jpg";
import pipelineImg from "@assets/generated_images/kossel-african-pipeline-team.jpg";
import productsImg from "@assets/generated_images/kossel-industrial-products_2.jpg";
import hseImg from "@assets/generated_images/kossel-african-hse-team.jpg";
import instrumentationImg from "@assets/generated_images/kossel-african-instrumentation-engineer.jpg";
import marineImg from "@assets/generated_images/kossel-african-marine-team.jpg";

const galleryImages = [
  { src: teamImg, alt: "Kossel engineering team coordinating industrial work" },
  { src: pipelineImg, alt: "Pipeline installation crew working on an oilfield project" },
  { src: instrumentationImg, alt: "Engineer working with industrial instrumentation" },
  { src: productsImg, alt: "Industrial MRO products prepared for procurement" },
  { src: marineImg, alt: "Marine logistics support for offshore operations" },
  { src: hseImg, alt: "Kossel team reviewing health, safety and environmental procedures" },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <SEO
        title="Industrial Engineering & MRO Services | Kossel Ltd."
        description="Kossel Ltd. provides industrial MRO, engineering, procurement, construction, pipeline, instrumentation and logistics support across Nigeria and beyond."
        path="/"
        imageAlt="Kossel Ltd. pipeline installation and industrial engineering operations"
      />
      {/* 1. Hero Section (Visual Transformation) */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden border-b-8 border-accent">
        <div className="absolute inset-0 bg-primary">
          <img 
            src={pipelineImg} 
             alt="Kossel pipeline installation crew supporting an oilfield project"
             width="1024"
             height="1024"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full scale-105 object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-primary/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-primary/10" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block bg-accent text-primary font-display font-bold uppercase tracking-widest px-4 py-1.5 mb-6 text-sm">
              Industrial Engineering & MRO
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter text-white leading-[0.95] mb-8">
              Industrial <br/>
              <span className="text-accent">Engineering For</span> <br/>
              Demanding Operations
            </h1>
            <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
              Kossel Ltd. delivers robust industrial MRO, procurement, and heavy engineering services to leading multinational facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto font-display font-bold uppercase tracking-widest bg-accent text-primary hover:bg-white transition-colors h-14 px-8">
                  Explore Services
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-display font-bold uppercase tracking-widest text-white border-white hover:bg-white hover:text-primary transition-colors h-14 px-8">
                  View Track Record
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Corporate Overview Snippet (Split Editorial) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary mb-6 leading-none">
                A Partner You <br/>Can Trust
              </h2>
              <div className="w-24 h-2 bg-accent mb-8" />
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Kossel Nigeria Limited is an indigenous company with 100% Nigerian workforce. We specialize in the supply of industrial MRO, safety products, and comprehensive engineering services to major multinational companies.
              </p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed border-l-4 border-muted pl-6">
                Incorporated in 2010, our vision is to realize exceptional business growth with a focus on becoming the leader in product costing while building excellence in every aspect to meet our customers' stringent requirements.
              </p>
              <Link href="/about">
                <Button variant="link" className="px-0 flex items-center text-primary font-display font-bold uppercase tracking-widest text-base hover:text-accent group">
                  Read Our Profile <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* Right: Layered Image Composition */}
            <div className="lg:col-span-7 relative min-h-[600px]">
              <div className="absolute top-0 right-0 w-[80%] h-[80%] z-10 border-8 border-white shadow-2xl">
                <img 
                  src={teamImg} 
                   alt="Kossel engineering team at work in an industrial facility"
                   width="1024"
                   height="1024"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] z-20 border-8 border-white shadow-2xl transform -translate-y-12 translate-x-12">
                <img 
                  src={instrumentationImg} 
                   alt="Kossel industrial instrumentation engineering capability"
                   width="1024"
                   height="1024"
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative accent block */}
              <div className="absolute bottom-12 left-0 w-24 h-24 bg-accent z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual Gallery Band */}
      <section className="bg-primary py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white">
            Excellence In Execution
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6" />
        </div>
        
        {/* Horizontal scrollable / tight grid of images */}
        <div className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x snap-mandatory">
          {galleryImages.map(({ src, alt }, idx) => (
            <div key={idx} className="relative flex-none w-[80vw] md:w-[400px] h-[300px] snap-center group">
              <img 
                src={src} 
                alt={alt}
                width="1024"
                height="1024"
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 border border-white/10"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Core Capabilities (Full Bleed Alternating Blocks) */}
      <section className="bg-white">
        {/* Block 1: Engineering & Design */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] md:h-auto">
            <img src={teamImg} alt="Engineering design team developing industrial project solutions" width="1024" height="1024" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-muted p-12 md:p-24 flex flex-col justify-center border-l-4 border-accent">
            <Settings className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-primary mb-6">Engineering Design</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Detailed and innovative engineering design for construction and operational needs, including comprehensive Piping & Instrumentation Diagrams (P&ID) and conceptual process studies.
            </p>
            <Link href="/services"><Button variant="outline" className="self-start">Learn More</Button></Link>
          </div>
        </div>

        {/* Block 2: Procurement */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-primary p-12 md:p-24 flex flex-col justify-center order-2 md:order-1 text-white border-r-4 border-accent">
            <Truck className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-6">Procurement & Logistics</h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Partnering with Kossel ensures exact specification matching, rigorous cost control, and seamless supply chain management for industrial MRO and specialized components.
            </p>
            <Link href="/products"><Button className="self-start bg-accent text-primary hover:bg-white">View Products</Button></Link>
          </div>
          <div className="relative h-[400px] md:h-auto order-1 md:order-2">
            <img src={productsImg} alt="Industrial MRO products sourced through Kossel procurement" width="1024" height="1024" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Block 3: HSE & Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[400px] md:h-auto">
            <img src={hseImg} alt="HSE inspection and safety management in industrial operations" width="1024" height="1024" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-muted p-12 md:p-24 flex flex-col justify-center border-l-4 border-accent">
            <ShieldCheck className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-primary mb-6">HSE & Quality Control</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              An unyielding commitment to total quality management, rigorous safety standards, and environmental protection across every operational footprint.
            </p>
            <Link href="/hse-quality"><Button variant="outline" className="self-start">Our HSE Policy</Button></Link>
          </div>
        </div>
      </section>
      
      {/* 5. Powerful CTA */}
      <section className="relative py-32 bg-primary text-white text-center border-t-8 border-accent overflow-hidden">
        <div className="absolute inset-0">
          <img src={marineImg} alt="Marine logistics support for offshore and onshore operations" width="1024" height="1024" loading="lazy" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight mb-8 leading-none">
            Ready to <span className="text-accent">Mobilize</span>?
          </h2>
          <p className="text-white/80 text-xl md:text-2xl mb-12 font-light leading-relaxed">
            Contact our engineering and commercial teams to discuss specifications, timelines, and procurement needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-display font-bold uppercase tracking-widest bg-accent text-primary hover:bg-white h-16 px-12 text-lg">
              Initiate Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
