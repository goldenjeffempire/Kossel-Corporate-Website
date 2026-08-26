import { Layers, Droplet, Nut, Shield, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import productsImg from "@assets/generated_images/kossel-industrial-products_2.jpg";
import fittingsImg from "@assets/generated_images/valves-fittings.jpg";

export default function Products() {
  const productCategories = [
    {
      title: "Pipes",
      icon: Layers,
      items: ["Seamless", "Welded"]
    },
    {
      title: "Butt Weld Pipe Fittings",
      icon: Droplet,
      items: ["Elbow", "Tee", "Reducer", "Cap", "Bend"]
    },
    {
      title: "Forged Fittings",
      icon: Nut,
      items: ["Elbow", "Tee", "Union", "Cross", "Coupling", "Cap", "Bushing", "Plug", "Swage Nipple", "Welding Boss", "Hexagon Nipple", "Adapter", "Insert", "Weldolet", "Elbowlet", "Socket", "Thredolet", "Nipolet", "Letrolet", "etc."]
    },
    {
      title: "ANSI/API6A/DIN Flanges",
      icon: Layers,
      items: ["Weldneck", "Slip-on", "Blind", "Socket Weld", "Orifice Flange", "Swivel Ring Flange", "etc."]
    },
    {
      title: "Valves",
      icon: Droplet,
      items: ["Ball", "Gate", "Global Check", "Butterfly Valve", "Strainer", "High Technology Valves (Wellhead, Hydro cracking Valves, Big Caliber Ball Valve, Flat Disc Valve, etc.)"]
    },
    {
      title: "Fasteners & Sealing",
      icon: Nut,
      items: ["Stud Bolts & Nuts Sizes", "Gasket – Asbestos & Non Asbestos", "Spiral Wound Gasket", "RTJ Gaskets"]
    },
    {
      title: "Electronic Components",
      icon: Zap,
      items: ["Connector & Cables", "Electrical, Test, Office & IT", "Process Control & Automation", "Health, Safety & Hygiene", "Tools & Industrial Consumables"]
    },
    {
      title: "Pumps & Chemicals",
      icon: Shield,
      items: ["Industrial Pumps", "Chemicals, Paints"]
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      <SEO
        title="Industrial MRO Products & Oilfield Components | Kossel"
        description="Source valves, flanges, pipes, fittings, fasteners, pumps, chemicals and industrial MRO components through Kossel's procurement division."
        path="/products"
        imageAlt="Industrial valves and components for Kossel procurement"
      />
      {/* Visual Header */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end pb-16 md:pb-24 border-b-8 border-accent">
        <div className="absolute inset-0 bg-primary">
          <img 
            src={productsImg}
             alt="Industrial MRO products and oilfield components inventory"
             width="1024"
             height="1024"
            loading="lazy"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <div className="inline-block bg-accent text-primary font-display font-bold uppercase tracking-widest px-4 py-1.5 mb-6 text-sm">
            Procurement Division
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-white mb-6">
            Industrial Products
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
            High-grade materials and components sourced globally to meet exact operational specifications.
          </p>
        </div>
      </section>

      {/* Featured Editorial Section */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary mb-6">
                Precision Engineered <br/>Components
              </h2>
              <div className="w-24 h-2 bg-accent mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our procurement division ensures that every flange, valve, and fitting delivered to your site meets uncompromising international standards.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                By maintaining strong relationships with global manufacturers, we guarantee both the authenticity of materials and competitive costing across our entire catalogue.
              </p>
            </div>
            
            <div className="relative h-[400px] border-8 border-muted p-2 bg-white shadow-xl">
              <img 
                src={fittingsImg} 
                alt="Industrial valves and pipe fittings in the Kossel product catalogue"
                width="1024"
                height="1024"
                className="w-full h-full object-cover filter contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary mb-16 text-center">
            Detailed Catalogue Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="border border-border bg-white flex flex-col h-full hover:border-primary shadow-sm hover:shadow-md transition-all group">
                <div className="p-8 border-b border-border bg-white flex flex-col items-start gap-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <category.icon className="w-10 h-10 text-accent" />
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight leading-tight">{category.title}</h3>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground text-sm font-medium">
                        <span className="text-accent mr-3 mt-1 text-xs font-black">/</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Drilling Contractors Snippet */}
      <section className="relative py-24 bg-primary text-white overflow-hidden border-t-8 border-accent">
         <div className="absolute inset-0">
           <img src={productsImg} alt="Drilling equipment and industrial components for energy operations" width="1024" height="1024" className="w-full h-full object-cover opacity-10 mix-blend-luminosity" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight mb-6 text-white">
              We Support Drilling Contractors <br/>& Rig Manufacturers
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 text-sm font-bold uppercase tracking-widest text-white/80">
            <div className="space-y-4">
              <p className="hover:text-accent transition-colors">Crown blocks</p>
              <p className="hover:text-accent transition-colors">Hooks</p>
              <p className="hover:text-accent transition-colors">Swivels</p>
              <p className="hover:text-accent transition-colors">Blocks</p>
            </div>
            <div className="space-y-4">
              <p className="hover:text-accent transition-colors">Rotary tables</p>
              <p className="hover:text-accent transition-colors">Brake systems</p>
              <p className="hover:text-accent transition-colors">Draw Works</p>
              <p className="hover:text-accent transition-colors">Mud pumps</p>
            </div>
            <div className="space-y-4">
              <p className="hover:text-accent transition-colors">Fishing tools</p>
              <p className="hover:text-accent transition-colors">Wireline equipment</p>
              <p className="hover:text-accent transition-colors">Reamers</p>
              <p className="hover:text-accent transition-colors">Clutches</p>
            </div>
            <div className="space-y-4">
              <p className="hover:text-accent transition-colors">Thread compound</p>
              <p className="hover:text-accent transition-colors">Handling tools</p>
              <p className="hover:text-accent transition-colors">Drill pipe & collars</p>
              <p className="hover:text-accent transition-colors">Hex kelly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
