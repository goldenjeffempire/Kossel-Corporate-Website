import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Crosshair } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { imageSources } from "@/lib/images";

const teamImg = imageSources("kossel-african-engineering-team.jpg");
const engineeringImg = imageSources("kossel-african-design-engineers.jpg");

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      <SEO
        title="About Kossel & CEO Richard O. Akaighe | Nigeria"
        description="Meet Richard O. Akaighe, CEO and Founder of Kossel LTD., and learn about the Nigerian engineering and oilfield company serving operations across Africa."
        path="/about"
        imageAlt="Kossel engineering team supporting industrial operations"
      />
      {/* Image-Rich Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 md:pb-24 border-b-8 border-accent">
        <div className="absolute inset-0 bg-primary">
          <ResponsiveImage
            sources={teamImg}
            alt="Kossel engineering team supporting industrial operations in Nigeria"
            width={1024}
            height={1024}
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-white mb-6">
            About Kossel Engineering
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
                  It has a staff strength of 20 and is a member of NUSA.
                </p>
                <p>
                  The birth of the Company was based on the need to provide quality services to the oil and gas industry and in the process ensure human capacity development as propagated by the Federal Government of Nigeria. Kossel Nigeria Limited aims to be a leading oil and gas service provider in Nigeria specifically and Sub-Saharan Africa.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative p-2 bg-white border border-border shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <ResponsiveImage
                  sources={engineeringImg}
                  alt="Kossel engineering design capability for oilfield and industrial projects"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent z-[-1]" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" aria-labelledby="leadership-title" className="border-y border-border bg-muted py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <article
            itemScope
            itemType="https://schema.org/Person"
            className="grid overflow-hidden border border-border bg-white shadow-xl lg:grid-cols-12"
          >
            <div className="flex min-h-72 items-center justify-center bg-primary p-10 lg:col-span-4">
              <div
                aria-hidden="true"
                className="flex h-44 w-44 items-center justify-center border-4 border-accent font-display text-6xl font-black tracking-tight text-white"
              >
                RA
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-8 lg:p-16">
              <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.24em] text-accent">
                Executive Leadership
              </p>
              <h2 id="leadership-title" itemProp="name" className="font-display text-4xl font-black uppercase tracking-tight text-primary md:text-5xl">
                Richard O. Akaighe
              </h2>
              <p itemProp="jobTitle" className="mt-3 font-display text-xl font-bold uppercase tracking-wider text-muted-foreground">
                CEO &amp; Founder
              </p>
              <div className="my-8 h-1 w-24 bg-accent" />
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Richard O. Akaighe is the CEO and Founder of Kossel Nigeria Limited, leading the company&apos;s commitment to engineering, procurement, industrial MRO, and oilfield resource solutions.
              </p>
              <meta itemProp="worksFor" content="Kossel Nigeria Limited" />
            </div>
          </article>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-primary py-20 text-white md:py-28">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex items-end justify-between border-b border-white/15 pb-7">
            <div>
              <p className="mb-3 font-display text-sm font-bold uppercase tracking-[0.24em] text-accent">
                What guides us
              </p>
              <h3 className="font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
                Our Core Philosophy
              </h3>
            </div>
            <span className="hidden font-display text-7xl font-black text-white/5 md:block">KOSSEL</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="group relative min-h-[520px] overflow-hidden">
              <ResponsiveImage
                sources={teamImg}
                alt="Black African engineers collaborating at an industrial facility"
                width={1024}
                height={1024}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <span className="mb-4 block font-display text-sm font-bold uppercase tracking-[0.22em] text-accent">
                  01 / Vision
                </span>
                <h4 className="max-w-xl font-display text-3xl font-black uppercase leading-tight md:text-4xl">
                  Advancing engineering excellence across Nigeria and Africa
                </h4>
              </div>
            </article>

            <article className="group relative min-h-[520px] overflow-hidden">
              <ResponsiveImage
                sources={engineeringImg}
                alt="Black African engineers developing technical solutions"
                width={1024}
                height={1024}
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <span className="mb-4 block font-display text-sm font-bold uppercase tracking-[0.22em] text-accent">
                  02 / Mission
                </span>
                <h4 className="max-w-xl font-display text-3xl font-black uppercase leading-tight md:text-4xl">
                  Delivering quality, safety and dependable industrial value
                </h4>
              </div>
            </article>
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
