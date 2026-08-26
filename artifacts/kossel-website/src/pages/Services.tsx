import { Settings, PenTool, Cable, Anchor, Shield } from "lucide-react";
import engineeringDesignImage from "@assets/generated_images/engineering-design.jpg";
import marineLogisticsImage from "@assets/generated_images/marine-logistics.jpg";

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
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white mb-4">
            Our Services
          </h1>
          <div className="w-24 h-1.5 bg-accent mb-6" />
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            Comprehensive engineering, procurement, and logistics solutions tailored to complex industrial operations.
          </p>
        </div>
      </section>

      {/* Main Service Detailed: Engineering Design */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-muted overflow-hidden border border-border">
              {engineeringDesignImage ? (
                <img 
                  src={engineeringDesignImage} 
                  alt="Engineering Design" 
                  className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-display uppercase tracking-widest">
                  Engineering CAD View
                </div>
              )}
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-4 text-accent" />
                Engineering Design
              </h2>
              <div className="prose text-muted-foreground">
                <p>
                  We produce detailed and innovative engineering design for your construction and operational needs. Our designs are always on schedule and meets proposed specification requirements.
                </p>
                <p>
                  Our engineering design services involve conceptual process studies (Material Balances, Process Flow sheets, etc) and a preliminary plot plan. We then proceed to producing the initial Piping and Instrumentation Diagrams (P&ID), definition and sizing of main equipment resulting in process specifications and effluent specifications.
                </p>
                <p>
                  Our process includes the definition of control and safety devices and all the basic studies required to support a Basic Engineering Design Package (BEDP) containing all data needed to perform the detailed design.
                </p>
                <p>
                  Our engineering services encompasses piping and instrumentation diagrams for construction, detailed development of piping drawings including isometrics and stress calculations, development of detailed drawings related to instrumentation, electrical facilities and civil works, cost and schedule control and start up procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Detailed: Procurement */}
      <section className="py-16 md:py-24 bg-muted border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-6">
              Procurement Services
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              We are into procurement services. Partnering with Kossel for the procurement of materials and services offers you the opportunity to save cost, manage demand and supply and ensure contract compliance.
            </p>
            <p className="text-muted-foreground text-lg mt-4">
              We have access to a broad pool of product suppliers, allowing us to procure the lowest prices and ensuring exact specification needs for your project. We can help increase your contract purchase, lower your costs, reducing risk and increase management control over spending that will improve your bottomline. Our procurement process involves exceptional thoroughness, discipline and control.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Services List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-12 text-center">
            Products & Service Line
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <div key={index} className="border border-border p-6 flex items-start hover:border-accent hover:shadow-sm transition-all bg-white group">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 group-hover:bg-accent transition-colors" />
                <span className="font-bold text-primary group-hover:text-accent transition-colors">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Operations Highlights */}
      <section className="py-0 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-primary text-white p-16 md:p-24 flex flex-col justify-center">
            <Anchor className="w-12 h-12 text-accent mb-6" />
            <h3 className="text-2xl font-display font-bold uppercase tracking-wider mb-4">Marine Logistics & Haulage</h3>
            <p className="text-white/80 leading-relaxed mb-0">
              Complete support for offshore and onshore operations. From bulk material movement to specialized haulage (AGO, PMS, DPK), we ensure your supply chain remains uninterrupted and compliant with all safety regulations.
            </p>
          </div>
          <div className="relative min-h-[400px]">
            {marineLogisticsImage ? (
              <img 
                src={marineLogisticsImage} 
                alt="Marine Logistics" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center border-l border-border text-muted-foreground font-display uppercase tracking-widest">
                Marine logistics view
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
