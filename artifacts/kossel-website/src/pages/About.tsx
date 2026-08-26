import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Eye, Crosshair } from "lucide-react";

import teamImg from "@assets/generated_images/kossel-engineering-team_2.jpg";
import brochure1 from "@assets/WhatsApp_Image_2026-08-26_at_9.26.45_AM_1787732941763.jpeg";

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* Image-Rich Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 md:pb-24 border-b-8 border-accent">
        <div className="absolute inset-0 bg-primary">
          <img 
            src={teamImg}
            alt="Kossel Engineering Team"
            loading="lazy"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-white mb-6">
            Company Profile
          </h1>
          <div className="w-32 h-2 bg-accent mb-6" />
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
            A leading indigenous provider of engineering, procurement, and industrial resources in Nigeria and Sub-Saharan Africa.
          </p>
        </div>
      </section>

      {/* Company Overview (Editorial Split) */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary mb-8 border-l-4 border-accent pl-6">Overview</h2>
              <div className="prose max-w-none text-muted-foreground text-lg space-y-6">
                <p>
                  Kossel Nigeria Limited is an indigenous company with a 100% Nigerian workforce. Our team has been fully engaged in the supply of industrial MRO (Maintenance, Repair, and Operations) and safety products to some multinational companies like CHEVRON, SGC (KBR), REFINERIES (Warri & Port Harcourt), NPDC, SHELL, MOBIL, etc.
                </p>
                <p>
                  The company was incorporated in February 5, 2010. The Company was further incorporated into the UK and USA Allied companies as Kossel Engineering (UK) Limited and Kossel Global Group (KGG) respectively, in order to cover the required needs of her customers. 
                </p>
                <p className="font-bold text-primary bg-muted p-6 border-l-4 border-primary">
                  It has a staff strength of [CLIENT TO PROVIDE] and is a member of NUSA.
                </p>
                <p>
                  The birth of the Company was based on the need to provide quality services to the oil and gas industry and in the process ensure human capacity development as propagated by the Federal Government of Nigeria. Kossel Nigeria Limited aims to be a leading oil and gas service provider in Nigeria specifically and Sub-Saharan Africa.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative p-2 bg-white border border-border shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={brochure1} 
                  alt="Kossel Corporate Brochure"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent z-[-1]" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-primary text-white border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="relative min-h-[400px] hidden lg:block">
            <img 
              src={teamImg} 
              alt="Engineering Collaboration" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover filter sepia opacity-50 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary" />
          </div>

          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h3 className="text-4xl font-display font-black uppercase tracking-tight mb-12 border-b-2 border-white/10 pb-6">
              Our Core Philosophy
            </h3>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <Eye className="w-12 h-12 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-2xl font-display font-bold uppercase tracking-wide mb-4">Our Vision</h4>
                  <p className="text-white/70 leading-relaxed text-lg font-light">
                    The Company will continue to move forward and become the leading Engineering, Procurement, Installation and Commissioning firm in Nigeria and eventually Africa sub region, while delivering projects that consistently meet international standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <Target className="w-12 h-12 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-2xl font-display font-bold uppercase tracking-wide mb-4">Our Mission</h4>
                  <p className="text-white/70 leading-relaxed text-lg font-light mb-6">
                    With a well-defined direction in place, the path to realizing our Vision is based on fundamental drivers, instrumental in achieving our goals. Our mission is:
                  </p>
                  <ul className="space-y-4 text-white/70 text-base">
                    {[
                      "To undertake the engineering and construction business with a focus on becoming the leader in product costing while building excellence in every aspect to meet customers' stringent requirements regarding quality, on-time delivery, safety and environmental concerns.",
                      "To develop an effective management that stresses productivity, perpetual development of the organization, and instilling work ethics in all personnel.",
                      "To build value for the organization in order to become a unique and distinct firm.",
                      "Follow best practices in procurement, supplies, services and logistics.",
                      "To remain focused on controlled organizational growth and recognizing those who contribute to this growth."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent font-bold mr-4">/</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Global Reach */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-primary mb-16">Global Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { country: "Nigeria", entity: "Kossel Nigeria Limited", role: "Headquarters & Operations" },
              { country: "United Kingdom", entity: "Kossel Engineering (UK) Limited", role: "European Procurement Hub" },
              { country: "United States", entity: "Kossel Global Group Inc.", role: "Americas Operations" }
            ].map((loc, i) => (
              <div key={i} className="bg-white p-10 border border-border shadow-sm hover:border-accent transition-colors group">
                <Crosshair className="w-12 h-12 text-muted-foreground mx-auto mb-8 group-hover:text-accent transition-colors" />
                <h3 className="text-3xl font-display font-black text-primary uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">{loc.country}</h3>
                <p className="font-bold text-primary mb-3 text-lg">{loc.entity}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{loc.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
