import { useState } from "react";
import { Button } from "@/components/ui/button";

import pipelineImg from "@assets/generated_images/kossel-pipeline-installation_2.jpg";
import brochure1 from "@assets/WhatsApp_Image_2026-08-26_at_9.26.45_AM_1787732941763.jpeg";

const projectsData = [
  {
    id: 1,
    title: "[CLIENT TO PROVIDE] Pipeline Installation",
    category: "Installation",
    client: "Multinational Oil Corp",
    description: "Complete procurement, logistics, and installation of a 15km pipeline network.",
  },
  {
    id: 2,
    title: "[CLIENT TO PROVIDE] Facility Maintenance",
    category: "Maintenance",
    client: "National Refining Co.",
    description: "Annual turnaround maintenance of critical valves, pumps, and instrumentation.",
  },
  {
    id: 3,
    title: "[CLIENT TO PROVIDE] Offshore Supply",
    category: "Procurement",
    client: "Offshore Drilling Ltd.",
    description: "Emergency procurement and marine logistics delivery of specialized forged fittings.",
  },
  {
    id: 4,
    title: "[CLIENT TO PROVIDE] Civil Works",
    category: "Engineering",
    client: "Energy Infrastructure Group",
    description: "Civil and mechanical engineering services for new facility expansion.",
  },
  {
    id: 5,
    title: "[CLIENT TO PROVIDE] Haulage Operations",
    category: "Logistics",
    client: "Regional Distribution Network",
    description: "Bulk material movement and AGO haulage over a 6-month contract period.",
  },
  {
    id: 6,
    title: "[CLIENT TO PROVIDE] P&ID Design",
    category: "Engineering",
    client: "Petrochemical Plant",
    description: "Conceptual process studies and detailed Piping and Instrumentation Diagrams.",
  }
];

const categories = ["All", "Engineering", "Procurement", "Installation", "Maintenance", "Logistics"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Immersive Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 md:pb-24 border-b-8 border-accent">
        <div className="absolute inset-0 bg-primary">
          <img 
            src={pipelineImg}
            alt="Project Operations"
            loading="lazy"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity filter sepia-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-white mb-6">
            Track Record
          </h1>
          <div className="w-32 h-2 bg-accent mb-6" />
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
            A history of excellence in delivering complex engineering, procurement, and construction projects on time and on spec.
          </p>
        </div>
      </section>

      {/* Decorative Band */}
      <div className="h-48 w-full bg-muted overflow-hidden relative border-b border-border">
        <div className="absolute inset-0 flex items-center justify-around opacity-30 grayscale mix-blend-multiply">
            <img src={brochure1} alt="Project blueprints" className="h-[200%] w-auto object-cover transform rotate-12" />
            <img src={brochure1} alt="Project blueprints" className="h-[200%] w-auto object-cover transform -rotate-12 hidden md:block" />
            <img src={brochure1} alt="Project blueprints" className="h-[200%] w-auto object-cover transform rotate-6 hidden lg:block" />
        </div>
      </div>

      {/* Filter and Grid */}
      <section className="py-24 flex-grow bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-16 border-b border-border pb-8">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-none font-display uppercase tracking-widest text-sm font-bold h-12 px-6 ${
                  activeFilter === cat 
                    ? "bg-accent text-primary hover:bg-accent/90 border-transparent" 
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="border border-border bg-white flex flex-col group hover:border-accent hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8 flex flex-col h-full bg-white relative overflow-hidden">
                  
                  {/* Subtle background branding */}
                  <div className="absolute -right-10 -top-10 text-[120px] font-display font-black text-muted opacity-[0.15] select-none pointer-events-none group-hover:text-accent/10 transition-colors">
                    0{project.id}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-primary bg-muted px-4 py-2 border-l-4 border-accent">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-black uppercase tracking-tight text-primary mb-4 leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Client</p>
                      <p className="text-base font-bold text-primary uppercase tracking-wide">{project.client}</p>
                    </div>
                    
                    <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary p-6 border-t-4 border-accent text-white flex justify-between items-center cursor-pointer group-hover:bg-accent group-hover:text-primary transition-colors">
                  <span className="text-sm font-bold uppercase tracking-widest">Project Details</span>
                  <span className="text-xl font-bold transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-32 border-2 border-dashed border-border bg-muted/50">
              <p className="text-muted-foreground uppercase tracking-widest font-black text-xl">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
