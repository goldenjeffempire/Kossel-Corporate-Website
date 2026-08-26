import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Eye, Crosshair } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="bg-muted py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-primary mb-4">
            About Kossel Ltd.
          </h1>
          <div className="w-24 h-1.5 bg-accent mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A leading indigenous provider of engineering, procurement, and industrial resources in Nigeria and Sub-Saharan Africa.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-6">Company Overview</h2>
              <div className="prose max-w-none text-muted-foreground space-y-6">
                <p>
                  Kossel Nigeria Limited is an indigenous company with a 100% Nigerian workforce. Our team has been fully engaged in the supply of industrial MRO (Maintenance, Repair, and Operations) and safety products to some multinational companies like CHEVRON, SGC (KBR), REFINERIES (Warri & Port Harcourt), NPDC, SHELL, MOBIL, etc.
                </p>
                <p>
                  The company was incorporated in February 5, 2010. The Company was further incorporated into the UK and USA Allied companies as Kossel Engineering (UK) Limited and Kossel Global Group (KGG) respectively, in order to cover the required needs of her customers. 
                </p>
                <p>
                  It has a staff strength of [CLIENT TO PROVIDE] and is a member of NUSA.
                </p>
                <p>
                  The birth of the Company was based on the need to provide quality services to the oil and gas industry and in the process ensure human capacity development as propagated by the Federal Government of Nigeria. Kossel Nigeria Limited aims to be a leading oil and gas service provider in Nigeria specifically and Sub-Saharan Africa.
                </p>
              </div>
            </div>
            
            <div className="bg-primary p-8 md:p-12 text-white">
              <h3 className="text-2xl font-display font-bold uppercase tracking-wider mb-8 border-b border-white/20 pb-4">Our Core Philosophy</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <Eye className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wide mb-2">Our Vision</h4>
                    <p className="text-white/80 leading-relaxed text-sm">
                      The Company will continue to move forward and become the leading Engineering, Procurement, Installation and Commissioning firm in Nigeria and eventually Africa sub region, while delivering projects that consistently meet international standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Target className="w-10 h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-wide mb-2">Our Mission</h4>
                    <p className="text-white/80 leading-relaxed text-sm">
                      With a well-defined direction in place, the path to realizing our Vision is based on fundamental drivers, instrumental in achieving our goals. Our mission is:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-2 text-white/80 text-sm">
                      <li>To undertake the engineering and construction business with a focus on becoming the leader in product costing while building excellence in every aspect to meet customers' stringent requirements regarding quality, on-time delivery, safety and environmental concerns.</li>
                      <li>To develop an effective management that stresses productivity, perpetual development of the organization, and instilling work ethics in all personnel.</li>
                      <li>To build value for the organization in order to become a unique and distinct firm.</li>
                      <li>Follow best practices in procurement, supplies, services and logistics.</li>
                      <li>To remain focused on controlled organizational growth and recognizing those who contribute to this growth.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Reach */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-primary mb-12">Global Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { country: "Nigeria", entity: "Kossel Nigeria Limited", role: "Headquarters & Operations" },
              { country: "United Kingdom", entity: "Kossel Engineering (UK) Limited", role: "European Procurement Hub" },
              { country: "United States", entity: "Kossel Global Group Inc.", role: "Americas Operations" }
            ].map((loc, i) => (
              <div key={i} className="bg-white p-8 border border-border shadow-sm">
                <Crosshair className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-display font-bold text-accent uppercase tracking-wider mb-2">{loc.country}</h3>
                <p className="font-bold text-primary mb-2">{loc.entity}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">{loc.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
