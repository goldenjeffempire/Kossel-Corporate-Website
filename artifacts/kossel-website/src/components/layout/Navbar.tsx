import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { QuoteModal } from "@/components/QuoteModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "HSE & Quality", href: "/hse-quality" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-border shadow-sm py-2"
            : "bg-white py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
          <Link href="/">
            <div className="flex flex-col cursor-pointer">
              <span className="font-display font-black text-3xl tracking-tighter text-primary leading-none">
                KOSSEL <span className="text-accent text-xl">LTD.</span>
              </span>
              <span className="text-[0.6rem] font-bold text-secondary uppercase tracking-widest leading-none mt-1">
                Engineering & Oilfield Resources
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span
                  className={cn(
                    "px-4 py-2 text-sm font-semibold uppercase tracking-wider cursor-pointer transition-colors hover:text-accent relative",
                    location === link.href ? "text-accent" : "text-primary"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button variant="accent" onClick={() => setQuoteModalOpen(true)}>
              Request Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-primary transform transition-transform duration-300 ease-in-out flex flex-col pt-24",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <div
                className="flex items-center justify-between border-b border-primary-foreground/10 pb-4 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span
                  className={cn(
                    "font-display text-2xl uppercase tracking-widest",
                    location === link.href ? "text-accent" : "text-white"
                  )}
                >
                  {link.name}
                </span>
                <ChevronRight className="text-white/50" />
              </div>
            </Link>
          ))}
          <div className="pt-8">
            <Button
              variant="accent"
              className="w-full"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  );
}
