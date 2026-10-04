import { useEffect } from "react";
import { useLocation } from "wouter";

const TARGETS =
  "main section h2, main section h3, main section .grid > *, main section picture, main section blockquote, main section form";

/**
 * Progressive scroll reveal for existing page sections. Content is visible by
 * default; elements below the fold are armed after mount and revealed on scroll.
 */
export function PageEnhancer() {
  const [location] = useLocation();

  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const armed: HTMLElement[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("rv-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    const t = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (el.closest("[role='tabpanel'], [role='tablist'], svg, .rv-skip, header, nav")) return;
        if (el.closest("section")?.querySelector("video") && el.tagName === "PICTURE") return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.95) return;
        const idx = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
        el.style.setProperty("--rv-delay", `${Math.min(idx, 5) * 70}ms`);
        el.classList.add("rv-pre");
        armed.push(el);
        io.observe(el);
      });
    }, 60);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
      armed.forEach((el) => el.classList.remove("rv-pre", "rv-in"));
    };
  }, [location]);

  return null;
}
