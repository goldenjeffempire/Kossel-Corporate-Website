import { ShieldCheck, Target, HeartHandshake, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import hseImg from "@assets/generated_images/kossel-african-hse-team.jpg";

export default function HSEQuality() {
  return (
    <div className="flex flex-col bg-white">
      <SEO
        title="HSE & Quality Management | Kossel Oilfield Services"
        description="See how Kossel integrates health, safety, environmental protection and quality management into engineering and oilfield operations."
        path="/hse-quality"
        imageAlt="Kossel HSE team reviewing safety and quality procedures"
      />
      {/* Visual Header */}
      <section className="relative h-[55vh] min-h-[450px] flex items-end pb-16 md:pb-24 border-b-8 border-accent">
        <div className="absolute inset-0 bg-primary">
          <img 
            src={hseImg}
             alt="Kossel HSE team reviewing safety and quality procedures"
             width="1024"
             height="1024"
            loading="lazy"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-white mb-6">
            HSE & Quality Management
          </h1>
          <div className="w-32 h-2 bg-accent mb-6" />
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
            Uncompromising commitment to health, safety, environment, and total quality management.
          </p>
        </div>
      </section>

      {/* Split Editorial: HSE Policy */}
      <section className="py-24 border-b border-border bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5">
              <div className="sticky top-32 bg-muted p-12 border-l-8 border-accent">
                <ShieldCheck className="w-16 h-16 text-primary mb-8" />
                <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary mb-4">
                  HSE Policy
                </h2>
                <p className="text-muted-foreground font-black uppercase tracking-widest text-sm mb-6">
                  Health, Safety & Environment
                </p>
                <p className="text-primary font-bold text-lg leading-relaxed">
                  "Accident and injuries are preventable and therefore such incidents are unacceptable in our operations."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 prose max-w-none text-muted-foreground text-lg leading-relaxed">
              <p className="text-xl text-primary font-medium mb-8">
                The management of Kossel Nigeria Limited believes that accident/injuries are preventable. We unreservedly pursue all accident prevention through a well-structured and effective HSE system.
              </p>
              
              <p className="font-bold uppercase tracking-wider text-primary mb-6">Our Core HSE Objectives:</p>
              
              <div className="space-y-6">
                {[
                  "Provide a safe and healthy work environment and adequate welfare facilities for her work force.",
                  "Protect and promote the health of its work force as well as the conduct of its activities in such a manner not to adversely affect a third party along with the host community.",
                  "Avoid injuries to workers, sub-contractors and third party who are involved directly or indirectly by the company activities.",
                  "Reduce the impact on the environment in which company operates."
                ].map((item, i) => (
                  <div key={i} className="flex items-start bg-white border border-border p-6 shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-accent mr-6 flex-shrink-0" />
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Editorial: Quality Assurance */}
      <section className="py-24 bg-muted border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-7 prose max-w-none text-muted-foreground text-lg leading-relaxed order-2 lg:order-1">
              <p className="text-xl text-primary font-medium mb-8">
                Kossel quality means attention to detail. By doing so, the company fulfills our customers and clients' needs seamlessly.
              </p>
              
              <div className="bg-white p-10 border-l-8 border-primary shadow-md my-10 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 text-muted opacity-20 pointer-events-none">
                  <Target className="w-full h-full" />
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight text-primary mb-6">Quality Policy</h3>
                <p className="text-muted-foreground text-lg font-medium leading-relaxed mb-0">
                  Kossel Nigeria Limited's Policy is to maintain an effective Quality Management System to ensure total client satisfaction with all our services. Our services are offered in line with ISO 9001:2008 Quality Management System.
                </p>
              </div>
              
              <div className="bg-accent text-primary p-6 font-bold uppercase tracking-wider text-sm inline-block">
                [CLIENT TO PROVIDE: Verification/Update of current ISO certification status if required.]
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="sticky top-32 bg-primary text-white p-12 border-r-8 border-accent">
                <Target className="w-16 h-16 text-accent mb-8" />
                <h2 className="text-4xl font-display font-black uppercase tracking-tight text-white mb-4">
                  Quality Control
                </h2>
                <p className="text-white/70 font-black uppercase tracking-widest text-sm mb-6">
                  Quality Assurance
                </p>
                <p className="text-white/90 font-light text-lg leading-relaxed">
                  We are focused on understanding the exact needs of our clients and incorporating them strictly into our project delivery plan.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Immersive Culture Image Band */}
      <section className="relative py-32 bg-primary text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
             src={hseImg} 
             alt="Kossel safety culture in industrial operations"
             width="1024"
             height="1024"
            loading="lazy" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity transform scale-105"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          <HeartHandshake className="w-20 h-20 text-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight text-white mb-8">
            A Culture of Responsibility
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed">
            Safety and quality are not just policies; they are the fundamental drivers of our corporate culture. Every team member at Kossel Ltd. is empowered and expected to uphold these standards in every project, procurement, and daily operation.
          </p>
        </div>
      </section>
    </div>
  );
}
