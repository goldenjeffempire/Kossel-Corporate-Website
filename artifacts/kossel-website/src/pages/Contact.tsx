import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

import teamImg from "@assets/generated_images/kossel-african-engineering-team.jpg";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Please provide a message"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const offices = [
    {
      country: "Nigeria",
      entity: "Kossel Nigeria Limited",
      address: "Plot 320 DDPA Housing Estate\nJeddo, Delta State",
      phones: ["+234 803 096 7258", "+234 703 436 0560"],
    },
    {
      country: "United Kingdom",
      entity: "Kossel Engineering Limited",
      address: "Flat 48, Frome House,\nPeckham RYE, SE 15 3JF,\nLondon, United Kingdom",
      phones: ["020 831 057 57", "795 769 76 88"],
    },
    {
      country: "United States",
      entity: "Kossel Global Group Inc.",
      address: "10925 Estate Lane, Suite W. 211\nLBJ Freeway\nDallas, Texas 75234",
      phones: ["+1 214-766-4003", "Fax: 972-475-3042"],
    },
  ];

  return (
    <div className="flex flex-col bg-white">
      <SEO
        title="Contact Kossel | Oilfield Engineering & Procurement"
        description="Contact Kossel Group LTD. in Nigeria, the UK or USA for industrial MRO, oilfield engineering, procurement and project support."
        path="/contact"
        imageAlt="Kossel engineering team ready to support industrial projects"
      />
      {/* Immersive Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 md:pb-24 border-b-8 border-accent">
        <div className="absolute inset-0 bg-primary">
          <img 
            src={teamImg}
             alt="Kossel engineering team ready to support industrial projects"
             width="1024"
             height="1024"
            loading="lazy"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-white mb-6">
            Contact Kossel
          </h1>
          <div className="w-32 h-2 bg-accent mb-6" />
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
            Global reach, local expertise. Reach out to our teams across Nigeria, the UK, and the USA.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Form Section */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h2 className="text-4xl font-display font-black uppercase tracking-tight text-primary mb-8 border-l-8 border-accent pl-6">
                Send an Inquiry
              </h2>
              
              {submitted ? (
                <div className="bg-muted p-12 md:p-16 border border-border text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-4">Inquiry Received</h3>
                  <p className="text-muted-foreground text-lg mb-10">
                    Thank you for reaching out. A representative from our engineering or commercial team will contact you shortly.
                  </p>
                  <Button variant="outline" size="lg" onClick={() => { setSubmitted(false); form.reset(); }} className="font-bold uppercase tracking-widest">
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <div className="bg-white border-2 border-border p-8 md:p-12 shadow-sm">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="uppercase text-xs font-black tracking-widest text-primary">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="h-14 rounded-none border-border focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="uppercase text-xs font-black tracking-widest text-primary">Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" className="h-14 rounded-none border-border focus-visible:ring-accent" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-black tracking-widest text-primary">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Project Inquiry / Procurement Request" className="h-14 rounded-none border-border focus-visible:ring-accent" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="uppercase text-xs font-black tracking-widest text-primary">Message Specifications</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please detail your project requirements..."
                                className="min-h-[200px] resize-none rounded-none border-border focus-visible:ring-accent p-4"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        variant="default" 
                        size="lg" 
                        className="w-full bg-primary text-white hover:bg-primary/90 h-16 font-display font-bold uppercase tracking-widest text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Transmitting..." : "Submit Inquiry"}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>

            {/* Offices Section */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="bg-muted p-10 md:p-12 border-t-8 border-accent sticky top-32">
                <h2 className="text-3xl font-display font-black uppercase tracking-tight text-primary mb-10">
                  Global Directory
                </h2>
                
                <div className="space-y-10">
                  {offices.map((office, i) => (
                    <div key={i} className="flex gap-6 pb-10 border-b border-border last:border-0 last:pb-0">
                      <MapPin className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-primary mb-1">
                          {office.country}
                        </h3>
                        <p className="font-bold text-primary mb-4 bg-white inline-block px-3 py-1 border border-border text-sm">{office.entity}</p>
                        
                        <div className="space-y-4">
                          <p className="text-muted-foreground font-medium whitespace-pre-line leading-relaxed">
                            {office.address}
                          </p>
                          
                          <div className="flex items-start">
                            <Phone className="w-5 h-5 text-accent mr-3 mt-0.5" />
                            <div className="text-primary font-bold">
                              {office.phones.map((p, idx) => (
                                <div key={idx}>{p}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-6 pt-6 bg-primary text-white p-8 -mx-10 md:-mx-12 -mb-10 md:-mb-12 mt-10">
                    <Mail className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">
                        Email Desk
                      </h3>
                      <div className="font-medium space-y-3">
                        <a href="mailto:info@kosselgroup.com" className="block hover:text-accent transition-colors">info@kosselgroup.com</a>
                        <a href="mailto:kosselengineering@yahoo.com" className="block hover:text-accent transition-colors">kosselengineering@yahoo.com</a>
                        <a href="mailto:r.akaighe@kosselgroup.com" className="block text-accent hover:text-white transition-colors">r.akaighe@kosselgroup.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
