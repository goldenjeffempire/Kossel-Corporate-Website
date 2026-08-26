import { ShieldCheck, Target, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function HSEQuality() {
  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="bg-primary py-16 md:py-24 border-b-4 border-accent">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white mb-4">
            HSE & Quality
          </h1>
          <div className="w-24 h-1.5 bg-accent mb-6" />
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            Uncompromising commitment to health, safety, environment, and total quality management.
          </p>
        </div>
      </section>

      {/* HSE Policy */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-32">
                <ShieldCheck className="w-16 h-16 text-accent mb-6" />
                <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-4">
                  HSE Policy
                </h2>
                <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm border-l-4 border-accent pl-4">
                  Health, Safety, and Environmental Policy
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 prose max-w-none text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>
                The management of Kossel Nigeria Limited believes that accident/injuries are preventable and therefore such incidents are unacceptable in its operations. Kossel Nigeria Limited will in all its operations integrate safety and will unreservedly pursue all accident prevention through a well-structured and effective HSE system.
              </p>
              <p>
                Her activities/operations therefore will be organized, planned and executed in such a manner as to:
              </p>
              
              <ul className="space-y-4 list-none pl-0 mt-8">
                {[
                  "Provide a safe and healthy work environment and adequate welfare facilities for her work force;",
                  "Protect and promote the health of its work force as well as the conduct of its activities in such a manner not to adversely affect a third party along with the host community;",
                  "Avoid injuries to workers, sub-contractors and third party who are involved directly or indirectly by the company activities;",
                  "Reduce the impact on the environment in which company operates."
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse gap-16">
            <div className="md:w-1/3">
              <div className="sticky top-32">
                <Target className="w-16 h-16 text-accent mb-6" />
                <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-4">
                  Quality Assurance
                </h2>
                <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm border-l-4 border-accent pl-4">
                  & Quality Control
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 prose max-w-none text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>
                Kossel quality mean attention to details and by doing so, the company fulfills our customers and clients' needs. We are focused in understanding the needs of our clients/customers and incorporating them into our project delivery plan for better operations success.
              </p>
              <div className="bg-white p-8 border-l-4 border-primary shadow-sm my-8">
                <h3 className="text-xl font-display font-bold uppercase tracking-wide text-primary mb-4">Our Quality Policy</h3>
                <p className="text-muted-foreground mb-0">
                  Kossel Nigeria Limited's Policy is to maintain an effective Quality Management System to ensure total client satisfaction with all our services. Our services are offered in line with ISO 9001:2008 Quality Management System.
                </p>
              </div>
              <p>
                [CLIENT TO PROVIDE: Verification/Update of current ISO certification status if required.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-6">
            A Culture of Responsibility
          </h2>
          <p className="text-muted-foreground text-lg">
            Safety and quality are not just policies; they are the fundamental drivers of our corporate culture. Every team member at Kossel Ltd. is empowered and expected to uphold these standards in every project, procurement, and daily operation.
          </p>
        </div>
      </section>
    </div>
  );
}
