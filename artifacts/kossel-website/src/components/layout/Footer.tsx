import { Link } from "wouter";
import { KOSSEL_CALL_URL, KOSSEL_PHONE_DISPLAY, KOSSEL_WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-display font-black text-3xl tracking-tighter text-white leading-none">
                KOSSEL <span className="text-accent text-xl">LTD.</span>
              </span>
              <span className="text-[0.6rem] font-bold text-white/60 uppercase tracking-widest leading-none mt-1">
                Engineering & Oilfield Resources
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              An indigenous company delivering quality industrial MRO, safety products, engineering design, procurement, and logistics to multinational operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold uppercase tracking-wider mb-6 text-white border-b border-white/10 pb-2">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Kossel", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Products", href: "/products" },
                { name: "HSE & Quality", href: "/hse-quality" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="inline-block text-white/70 hover:text-accent hover:translate-x-1 transition-[color,transform] duration-300 text-sm uppercase tracking-wider font-semibold cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Contacts */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg font-bold uppercase tracking-wider mb-6 text-white border-b border-white/10 pb-2">
              Global Operations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
              
              <div>
                <h5 className="font-bold text-white mb-2 uppercase text-xs tracking-widest text-accent">Nigeria (HQ)</h5>
                <address className="not-italic text-white/70 space-y-1">
                  Kossel Nigeria Limited<br />
                  Plot 320 DDPA Housing Estate<br />
                  Jeddo, Delta State<br />
                  <div className="mt-2 text-white">
                    <a href={KOSSEL_CALL_URL} className="block hover:text-accent transition-colors">{KOSSEL_PHONE_DISPLAY}</a>
                    <a href={KOSSEL_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-accent hover:text-white transition-colors">Chat on WhatsApp</a>
                  </div>
                </address>
              </div>

              <div>
                <h5 className="font-bold text-white mb-2 uppercase text-xs tracking-widest text-accent">United Kingdom</h5>
                <address className="not-italic text-white/70 space-y-1">
                  Kossel Engineering Limited<br />
                  Flat 48, Frome House,<br />
                  Peckham RYE, SE 15 3JF,<br />
                  London<br />
                  <div className="mt-2 text-white">
                    020 831 057 57<br />
                    795 769 76 88
                  </div>
                </address>
              </div>

              <div>
                <h5 className="font-bold text-white mb-2 uppercase text-xs tracking-widest text-accent">United States</h5>
                <address className="not-italic text-white/70 space-y-1">
                  Kossel Global Group Inc.<br />
                  10925 Estate Lane, Suite W. 211<br />
                  LBJ Freeway, Dallas, TX 75234<br />
                  <div className="mt-2 text-white">
                    +1 214-766-4003
                  </div>
                </address>
              </div>

              <div>
                <h5 className="font-bold text-white mb-2 uppercase text-xs tracking-widest text-accent">Contact</h5>
                <div className="text-white/70 space-y-1">
                  info@kosselgroup.com<br />
                  kosselengineering@yahoo.com<br />
                  r.akaighe@kosselgroup.com
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 uppercase tracking-wider font-semibold">
          <p>&copy; {new Date().getFullYear()} Kossel LTD. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/hse-quality"><span className="hover:text-white cursor-pointer">HSE Policy</span></Link>
            <Link href="/hse-quality"><span className="hover:text-white cursor-pointer">Quality Management</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
