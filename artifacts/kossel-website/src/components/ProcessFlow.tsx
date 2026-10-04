import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export type FlowStep = { title: string; text: string };

type ProcessFlowProps = {
  eyebrow: string;
  heading: string;
  steps: FlowStep[];
  tone?: "light" | "dark";
  testPrefix: string;
  layout?: "timeline" | "cards";
};

/** Horizontal workflow with a progress line; hover/focus/tap a step to read it. */
export function ProcessFlow({ eyebrow, heading, steps, tone = "light", testPrefix, layout = "timeline" }: ProcessFlowProps) {
  const [active, setActive] = useState(0);
  const dark = tone === "dark";
  const pct = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 100;
  const cards = layout === "cards";

  return (
    <section id={testPrefix} className={cn("scroll-mt-28 py-20 md:py-28 overflow-hidden", dark ? "bg-primary text-white" : cards ? "bg-muted" : "bg-white")}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-14 max-w-3xl">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
          <h2 className={cn("text-3xl md:text-5xl font-black", dark ? "text-white" : "text-primary")}>{heading}</h2>
        </Reveal>

        <div className="relative">
          {!cards && <div aria-hidden="true" className={cn("absolute left-0 right-0 top-6 hidden h-0.5 md:block", dark ? "bg-white/15" : "bg-border")}>
            <div className="h-full bg-accent transition-[width] duration-500 ease-out" style={{ width: `${pct}%` }} />
          </div>}
          <ol className={cn("grid gap-4", cards ? "sm:grid-cols-2 xl:grid-cols-3 gap-6" : "md:grid-flow-col md:auto-cols-fr")}>
            {steps.map((s, i) => (
              <li key={s.title}>
                <button
                  type="button"
                  data-testid={`step-${testPrefix}-${i}`}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "group relative flex w-full gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                    cards
                      ? cn("h-full border p-6 md:p-8 transition-colors", dark ? "bg-primary" : "bg-white", i === active ? "border-accent" : "border-border")
                      : "md:block md:pr-4",
                  )}
                >
                  <span
                    className={cn(
                      "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-2 font-display text-lg font-black transition-colors duration-300",
                      i <= active
                        ? "border-accent bg-accent text-primary"
                        : dark
                          ? "border-white/25 bg-primary text-white/60"
                          : "border-border bg-white text-muted-foreground",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cards ? "min-w-0" : "md:mt-5 md:block"}>
                    <span className={cn("block font-display text-lg font-black uppercase tracking-tight", dark ? "text-white" : "text-primary")}>
                      {s.title}
                    </span>
                    <span
                      className={cn(
                        cards ? "mt-3 block text-lg leading-relaxed" : "mt-2 block text-sm leading-relaxed transition-opacity duration-300",
                        dark ? "text-white/70" : cards ? "text-primary/90" : "text-muted-foreground",
                        cards || i === active ? "opacity-100" : "opacity-60",
                      )}
                    >
                      {s.text}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
