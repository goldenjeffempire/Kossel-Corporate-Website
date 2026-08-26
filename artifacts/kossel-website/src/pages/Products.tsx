import { Layers, Droplet, Nut, Shield } from "lucide-react";
import valvesFittingsImage from "@assets/generated_images/valves-fittings.jpg";

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
      icon: Shield,
      items: ["Connector & Cables", "Electrical, Test, Office & IT", "Process Control & Automation", "Health, Safety & Hygiene", "Tools & Industrial Consumables"]
    },
    {
      title: "Pumps & Chemicals",
      icon: Droplet,
      items: ["Industrial Pumps", "Chemicals, Paints"]
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="bg-primary py-16 md:py-24 border-b-4 border-accent">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white mb-4">
            Industrial Products
          </h1>
          <div className="w-24 h-1.5 bg-accent mb-6" />
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            High-grade materials and components sourced globally to meet exact operational specifications.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-muted py-12 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="relative h-[300px] md:h-[500px] border border-border bg-white overflow-hidden group">
            {valvesFittingsImage ? (
              <img 
                src={valvesFittingsImage} 
                alt="Valves and Fittings" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-display uppercase tracking-widest">
                Valves & Fittings Showcase
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
              <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-wider">Precision Engineered</h3>
              <p className="text-white/80 font-medium">Flanges, Valves, and Industrial Fittings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-12 text-center">
            Detailed Product Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="border border-border bg-white flex flex-col h-full hover:border-accent transition-colors group">
                <div className="p-6 border-b border-border bg-muted flex items-center gap-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <category.icon className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold uppercase tracking-wider">{category.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground text-sm font-medium">
                        <span className="text-accent mr-3 mt-1 text-xs">■</span>
                        <span className="leading-snug">{item}</span>
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
      <section className="py-16 md:py-24 bg-primary text-white text-center border-t-4 border-accent">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight mb-8 text-accent">
            We Support Drilling Contractors & Rig Manufacturers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold uppercase tracking-wider text-white/70">
            <div className="text-left space-y-2">
              <p>Crown blocks</p>
              <p>Hooks</p>
              <p>Swivels</p>
              <p>Blocks</p>
            </div>
            <div className="text-left space-y-2">
              <p>Rotary tables</p>
              <p>Brake systems</p>
              <p>Draw Works</p>
              <p>Mud pumps</p>
            </div>
            <div className="text-left space-y-2">
              <p>Fishing tools</p>
              <p>Wireline equipment</p>
              <p>Reamers</p>
              <p>Clutches</p>
            </div>
            <div className="text-left space-y-2">
              <p>Thread compound</p>
              <p>Handling tools</p>
              <p>Drill pipe & collars</p>
              <p>Hex kelly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
