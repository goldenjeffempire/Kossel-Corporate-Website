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
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight text-white mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1.5 bg-accent mx-auto mb-6" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Global reach, local expertise. Reach out to our teams across Nigeria, the UK, and the USA.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-8">
                Send an Inquiry
              </h2>
              
              {submitted ? (
                <div className="bg-muted p-12 text-center border border-border">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-primary mb-2">Message Sent</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. A representative will contact you shortly.
                  </p>
                  <Button variant="outline" onClick={() => { setSubmitted(false); form.reset(); }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-muted p-8 border border-border">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="uppercase text-xs font-bold tracking-wider">Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
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
                              <FormLabel className="uppercase text-xs font-bold tracking-wider">Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
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
                            <FormLabel className="uppercase text-xs font-bold tracking-wider">Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Inquiry about..." {...field} />
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
                            <FormLabel className="uppercase text-xs font-bold tracking-wider">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message here..."
                                className="min-h-[150px] resize-none"
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
                        className="w-full bg-primary text-white hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>

            {/* Offices */}
            <div>
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-primary mb-8">
                Global Offices
              </h2>
              
              <div className="space-y-8">
                {offices.map((office, i) => (
                  <div key={i} className="flex gap-6 pb-8 border-b border-border last:border-0 last:pb-0">
                    <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-wider text-primary mb-1">
                        {office.country}
                      </h3>
                      <p className="font-bold text-muted-foreground mb-3">{office.entity}</p>
                      
                      <div className="space-y-4">
                        <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">
                          {office.address}
                        </p>
                        
                        <div className="flex items-start text-sm">
                          <Phone className="w-4 h-4 text-muted-foreground mr-3 mt-0.5" />
                          <div className="text-primary font-medium">
                            {office.phones.map((p, idx) => (
                              <div key={idx}>{p}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex gap-6 pt-4">
                  <Mail className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wider text-primary mb-3">
                      Email Directory
                    </h3>
                    <div className="text-sm font-medium text-primary space-y-2">
                      <a href="mailto:info@kosselgroup.com" className="block hover:text-accent transition-colors">info@kosselgroup.com</a>
                      <a href="mailto:kosselengineering@yahoo.com" className="block hover:text-accent transition-colors">kosselengineering@yahoo.com</a>
                      <a href="mailto:r.akaighe@kosselgroup.com" className="block hover:text-accent transition-colors">r.akaighe@kosselgroup.com</a>
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
