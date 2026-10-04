import { Crosshair } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { imageSources } from "@/lib/images";
import { ProcessFlow } from "@/components/ProcessFlow";
import { MediaBand } from "@/components/MediaBand";
import { imageSources as newImg } from "@/lib/images";

const imgConsult = newImg("kossel-project-consultation.jpg");

const teamImg = imageSources("kossel-african-engineering-team.jpg");
const engineeringImg = imageSources("kossel-african-design-engineers.jpg");
const overviewBackground = imageSources("kossel-about-overview-background.jpg");

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
      <section id="overview" className="relative isolate overflow-hidden scroll-mt-28 py-16 md:py-24">
        <div aria-hidden="true" className="rv-skip pointer-events-none absolute inset-0">
          <ResponsiveImage
            sources={overviewBackground}
            alt=""
            width={1024}
            height={576}
            loading="lazy"
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-white/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-white/95 lg:via-white/90 lg:to-white/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-primary mb-6 border-l-4 border-accent pl-5">Overview</h2>
              <div className="max-w-[65ch] text-lg leading-[1.8] text-primary/90">
                <p className="mb-8 text-xl leading-relaxed font-medium text-primary">
                  Kossel Nigeria Limited is an indigenous engineering and industrial supply company with a 100% Nigerian workforce.
                </p>
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold normal-case tracking-normal">What we do</h3>
                    <p>
                      We supply industrial MRO (Maintenance, Repair and Operations) materials and safety products to multinational companies.
                    </p>
                    <p className="mt-3">
                      These include Chevron, SGC (KBR), the Warri and Port Harcourt refineries, NPDC, Shell and Mobil.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold normal-case tracking-normal">Our company</h3>
                    <p>
                      Incorporated on 5 February 2010, Kossel expanded through allied companies in the UK and USA: Kossel Engineering (UK) Limited and Kossel Global Group (KGG).
                    </p>
                    <p className="mt-3">
                      Our team has 20 staff members, and the company is a member of NUSA.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold normal-case tracking-normal">Our purpose</h3>
                    <p>
                      We were established to provide quality services to the oil and gas industry while developing local skills, in line with the Federal Government of Nigeria’s focus on human capacity development.
                    </p>
                    <p className="mt-3">
                      Our ambition is to become a leading oil and gas service provider in Nigeria and across Sub-Saharan Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative p-2 bg-white border border-border shadow-xl">
                <ResponsiveImage
                  sources={engineeringImg}
                  alt="Kossel engineering design capability for oilfield and industrial projects"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <ProcessFlow
        testPrefix="about-method"
        tone="light"
        layout="cards"
        eyebrow="How we work"
        heading="From your requirements to delivery"
        steps={[
          { title: "Understand", text: "We clarify what you need, the conditions on site and the outcome you want to achieve." },
          { title: "Specify", text: "We turn those requirements into clear drawings, material lists and practical plans." },
          { title: "Source", text: "We source materials locally or globally to match the agreed specifications." },
          { title: "Deliver", text: "We coordinate delivery, installation and commissioning with health, safety and environmental controls in place." },
          { title: "Support", text: "We remain available for maintenance, follow-up questions and ongoing operational needs." },
        ]}
      />


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

      <MediaBand
        testId="about-consult"
        eyebrow="Engineering consultation"
        heading="Plans reviewed with the people who build them"
        text="Every scope starts with a conversation: drawings, constraints, site conditions and delivery dates agreed before material moves."
        image={imgConsult}
        alt="Nigerian engineers reviewing project plans together"
        cta={{ label: "Discuss your scope", href: "/contact" }}
      />


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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { country: "Nigeria", entity: "Kossel Nigeria Limited", role: "Headquarters & Operations" },
              { country: "United Kingdom", entity: "Kossel Engineering (UK) Limited", role: "European Procurement Hub" },
              { country: "United States", entity: "Kossel Global Group Inc.", role: "Americas Operations" }
            ].map((loc, i) => (
              <div key={i} className="bg-white p-6 xl:p-10 border border-border shadow-sm hover:border-accent transition-colors group">
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
