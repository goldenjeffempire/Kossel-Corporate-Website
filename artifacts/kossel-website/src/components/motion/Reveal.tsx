import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "./useReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right" | "none";
};

// Content renders visible by default (SSR / no JS). Only after mount, elements
// that start below the fold are armed (hidden) and revealed on intersection.
export function Reveal({ children, className, delay = 0, from = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [state, setState] = useState<"visible" | "armed" | "shown">("visible");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top > window.innerHeight * 0.92) setState("armed");
  }, [reduced]);

  useEffect(() => {
    const el = ref.current;
    if (state !== "armed" || !el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [state]);

  const hidden =
    from === "left" ? "-translate-x-6" : from === "right" ? "translate-x-6" : from === "up" ? "translate-y-8" : "";

  if (reduced) return <div ref={ref} className={className}>{children}</div>;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : "0ms" }}
      className={cn(
        state === "armed"
          ? `opacity-0 ${hidden}`
          : "opacity-100 translate-x-0 translate-y-0 transition-[opacity,transform] duration-700 ease-out",
        className,
      )}
    >
      {children}
    </div>
  );
}
