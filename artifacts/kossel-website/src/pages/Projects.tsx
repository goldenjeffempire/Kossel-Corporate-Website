import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      {/* Header */}
      <section className="bg-muted py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-primary mb-4">
            Our Projects
          </h1>
          <div className="w-24 h-1.5 bg-accent mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A track record of excellence in delivering complex engineering, procurement, and construction projects.
          </p>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                onClick={() => setActiveFilter(cat)}
                className="rounded-none uppercase tracking-wider text-xs font-bold"
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="border border-border bg-white flex flex-col group hover:border-primary transition-colors">
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-tight text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4 border-b border-border pb-4">
                    Client: {project.client}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </div>
                <div className="bg-muted p-4 border-t border-border group-hover:bg-primary group-hover:text-white transition-colors flex justify-between items-center cursor-pointer">
                  <span className="text-xs font-bold uppercase tracking-widest">View Details</span>
                  <span className="text-accent group-hover:text-white transition-colors">→</span>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-muted-foreground uppercase tracking-widest font-bold">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
