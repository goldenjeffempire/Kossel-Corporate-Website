import { MessageCircle, PhoneCall } from "lucide-react";
import { KOSSEL_CALL_URL, KOSSEL_WHATSAPP_URL } from "@/lib/contact";

export function ContactFab() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <a
        href={KOSSEL_CALL_URL}
        aria-label="Call Kossel Ltd."
        title="Call Kossel Ltd."
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-2 ring-white transition-transform hover:-translate-y-1 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <PhoneCall className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={KOSSEL_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kossel Ltd. on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-2 ring-white transition-transform hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}