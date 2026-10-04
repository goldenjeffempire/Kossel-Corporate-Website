import { FaWhatsapp } from "react-icons/fa";
import { KOSSEL_WHATSAPP_URL } from "@/lib/contact";

/** Persistent bottom-right WhatsApp shortcut on every screen size. */
export function FloatingWhatsApp() {
  return (
    <a
      href={KOSSEL_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start a WhatsApp chat with Kossel LTD."
      title="Chat with Kossel on WhatsApp"
      data-testid="floating-whatsapp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-lg transition-[transform,background-color,box-shadow] duration-200 hover:bg-[#20bd5a] hover:shadow-xl motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-105 motion-safe:active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:bottom-[max(2rem,env(safe-area-inset-bottom))] md:right-[max(2rem,env(safe-area-inset-right))] md:h-14 md:w-14"
    >
      <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true" focusable="false" />
    </a>
  );
}