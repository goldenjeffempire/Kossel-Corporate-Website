import { MessageCircle, PhoneCall } from "lucide-react";
import { KOSSEL_CALL_URL, KOSSEL_WHATSAPP_URL } from "@/lib/contact";

export function ContactFab() {
  return (
    <aside aria-label="Quick contact" className="flex flex-wrap items-center justify-center gap-4 border-t border-border bg-white px-4 py-6 min-[1440px]:fixed min-[1440px]:bottom-8 min-[1440px]:right-8 min-[1440px]:z-40 min-[1440px]:flex-col min-[1440px]:items-end min-[1440px]:gap-3 min-[1440px]:border-0 min-[1440px]:bg-transparent min-[1440px]:p-0">
      <a
        href={KOSSEL_CALL_URL}
        aria-label="Call Kossel LTD."
        title="Call Kossel LTD."
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-white shadow-lg ring-2 ring-white transition-transform hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 min-[1440px]:w-12 min-[1440px]:p-0"
      >
        <PhoneCall className="h-5 w-5" aria-hidden="true" />
        <span className="min-[1440px]:hidden">Call Kossel</span>
      </a>
      <a
        href={KOSSEL_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kossel LTD. on WhatsApp"
        title="Chat on WhatsApp"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-semibold text-primary shadow-xl ring-2 ring-white transition-transform hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-[1440px]:h-14 min-[1440px]:w-14 min-[1440px]:p-0 min-[1440px]:text-white"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="min-[1440px]:hidden">WhatsApp</span>
      </a>
    </aside>
  );
}