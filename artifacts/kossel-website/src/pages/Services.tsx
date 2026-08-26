import { Settings, Truck, Anchor, Cog } from "lucide-react";
import teamImg from "@assets/generated_images/kossel-african-engineering-team.jpg";
import pipelineImg from "@assets/generated_images/kossel-african-pipeline-team.jpg";
import instrumentationImg from "@assets/generated_images/kossel-african-instrumentation-engineer.jpg";
import marineImg from "@assets/generated_images/kossel-african-marine-team.jpg";

export default function Services() {
  const servicesList = [
    "Procurement & Logistics",
    "Construction",
    "Engineering Services (Civil, Mechanical & Electrical)",
    "Installation & Pipeline/Cable Laying",
    "Instrumentation",
    "Haulage",
    "Marine Logistics",
    "Industrial Maintenance",
    "Bulk Material Movement & Facilities Engineering",
    "Inspection"
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 md:pb-24 border-b-8 border-accent overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <img 
            src={instrumentationImg}
            alt="Industrial Services Overview"
            loading="lazy"
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-white mb-6">
            Our Services
          </h1>
          <div className="w-32 h-2 bg-accent mb-6" />
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
            Comprehensive engineering, procurement, and logistics solutions tailored to complex industrial operations.
          </p>
        </div>
      </section>

      {/* Main Service Detailed: Engineering Design */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative h-[500px] bg-muted overflow-hidden border border-border shadow-xl">
              <img 
                src={teamImg} 
                alt="Engineering Design Team" 
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            
            <div>
              <div className="flex items-center mb-8">
                <Settings className="w-10 h-10 mr-6 text-accent" />
                <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary m-0">
                  Engineering Design
                </h2>
              </div>
              <div className="prose max-w-none text-muted-foreground text-lg leading-relaxed space-y-6">
                <p>
                  We produce detailed and innovative engineering design for your construction and operational needs. Our designs are always on schedule and meets proposed specification requirements.
                </p>
                <p>
                  Our engineering design services involve conceptual process studies (Material Balances, Process Flow sheets, etc) and a preliminary plot plan. We then proceed to producing the initial Piping and Instrumentation Diagrams (P&ID), definition and sizing of main equipment resulting in process specifications and effluent specifications.
                </p>
                <p>
                  Our process includes the definition of control and safety devices and all the basic studies required to support a Basic Engineering Design Package (BEDP) containing all data needed to perform the detailed design.
                </p>
                <p className="bg-muted p-6 border-l-4 border-primary">
                  Our engineering services encompasses piping and instrumentation diagrams for construction, detailed development of piping drawings including isometrics and stress calculations, development of detailed drawings related to instrumentation, electrical facilities and civil works, cost and schedule control and start up procedures.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Service Detailed: Procurement */}
      <section className="py-24 bg-primary text-white overflow-hidden relative border-b border-border">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block opacity-20 mix-blend-luminosity">
          <img src={marineImg} alt="Marine logistics operation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center mb-8">
              <Truck className="w-10 h-10 mr-6 text-accent" />
              <h2 className="text-4xl font-display font-black uppercase tracking-tight text-white m-0">
                Procurement Services
              </h2>
            </div>
            <div className="w-24 h-1 bg-accent mb-8" />
            <p className="text-white/80 text-xl leading-relaxed mb-6 font-light">
              We are into procurement services. Partnering with Kossel for the procurement of materials and services offers you the opportunity to save cost, manage demand and supply and ensure contract compliance.
            </p>
            <p className="text-white/80 text-lg leading-relaxed font-light">
              We have access to a broad pool of product suppliers, allowing us to procure the lowest prices and ensuring exact specification needs for your project. We can help increase your contract purchase, lower your costs, reducing risk and increase management control over spending that will improve your bottomline. Our procurement process involves exceptional thoroughness, discipline and control.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Services List */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary mb-16 text-center">
            Comprehensive Service Line
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <div key={index} className="border border-border p-8 flex items-start hover:border-accent shadow-sm bg-white group transition-all duration-300 hover:-translate-y-1">
                <Cog className="w-6 h-6 text-primary group-hover:text-accent mr-4 flex-shrink-0 transition-colors" />
                <span className="font-bold text-lg text-primary leading-snug">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Operations Highlights */}
      <section className="border-t-8 border-accent">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="bg-white p-16 md:p-24 flex flex-col justify-center">
            <Anchor className="w-16 h-16 text-accent mb-8" />
            <h3 className="text-4xl font-display font-black uppercase tracking-tight text-primary mb-6">Marine Logistics & Haulage</h3>
            <p className="text-muted-foreground text-xl leading-relaxed mb-0">
              Complete support for offshore and onshore operations. From bulk material movement to specialized haulage (AGO, PMS, DPK), we ensure your supply chain remains uninterrupted and compliant with all safety regulations.
            </p>
          </div>
          
          <div className="relative min-h-[500px]">
            <img 
              src={pipelineImg} 
              alt="Heavy Logistics and Installation" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover filter sepia-[0.3]"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          
        </div>
      </section>

    </div>
  );
}
