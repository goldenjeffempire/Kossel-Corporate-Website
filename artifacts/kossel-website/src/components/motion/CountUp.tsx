import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

type CountUpProps = { to: number; suffix?: string; prefix?: string; duration?: number; className?: string };

export function CountUp({ to, suffix = "", prefix = "", duration = 1600, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (reduced || typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }
    const el = ref.current;
    if (!el) return;
    setValue(0);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
