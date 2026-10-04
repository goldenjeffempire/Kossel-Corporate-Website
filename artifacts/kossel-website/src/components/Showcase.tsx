import { useRef, useState, type KeyboardEvent } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ResponsiveImage, type ResponsiveImageSources } from "@/components/ResponsiveImage";
import { Reveal } from "@/components/motion/Reveal";

export type ShowcaseItem = {
  id: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  image: ResponsiveImageSources;
  alt: string;
  href?: string;
  cta?: string;
};

type ShowcaseProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: ShowcaseItem[];
  tone?: "light" | "dark";
  testPrefix: string;
};

/** Interactive tabbed showcase: picks one item, cross-fades its image and detail. */
export function Showcase({ eyebrow, heading, intro, items, tone = "light", testPrefix }: ShowcaseProps) {
  const [active, setActive] = useState(0);
  const dark = tone === "dark";
  const current = items[active];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = items.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className={cn("py-20 md:py-28 overflow-hidden", dark ? "bg-primary text-white" : "bg-muted")}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
          <h2 className={cn("text-3xl md:text-5xl font-black", dark ? "text-white" : "text-primary")}>{heading}</h2>
          {intro && (
            <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/75" : "text-muted-foreground")}>{intro}</p>
          )}
        </Reveal>

        <div role="tablist" aria-label={eyebrow} className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {items.map((it, i) => (
            <button
              key={it.id}
              role="tab"
              ref={(el) => { tabRefs.current[i] = el; }}
              tabIndex={i === active ? 0 : -1}
              onKeyDown={(e) => onTabKey(e, i)}
              id={`${testPrefix}-tab-${it.id}`}
              aria-selected={i === active}
              aria-controls={`${testPrefix}-panel`}
              data-testid={`tab-${testPrefix}-${it.id}`}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 border-b-4 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 px-5 py-3 font-display text-sm font-bold uppercase tracking-widest transition-colors",
                i === active
                  ? "border-accent " + (dark ? "text-white" : "text-primary")
                  : "border-transparent " + (dark ? "text-white/50 hover:text-white" : "text-muted-foreground hover:text-primary"),
              )}
            >
              {it.label}
            </button>
          ))}
        </div>

        <div
          id={`${testPrefix}-panel`}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`${testPrefix}-tab-${current.id}`}
          key={current.id}
          className="grid items-stretch gap-0 outline-none focus-visible:ring-2 focus-visible:ring-accent lg:grid-cols-12 motion-safe:animate-in fade-in duration-500"
        >
          <div className="relative min-h-[280px] overflow-hidden lg:col-span-7">
            <ResponsiveImage
              sources={current.image}
              alt={current.alt}
              width={1024}
              height={683}
              sizes="(min-width:1024px) 58vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>
          <div className={cn("p-8 md:p-12 lg:col-span-5 border-l-8 border-accent", dark ? "bg-white/5" : "bg-white")}>
            <h3 className={cn("mb-4 text-2xl md:text-3xl font-black", dark ? "text-white" : "text-primary")}>{current.title}</h3>
            <p className={cn("mb-6 leading-relaxed", dark ? "text-white/75" : "text-muted-foreground")}>{current.body}</p>
            <ul className="mb-8 space-y-3">
              {current.points.map((p) => (
                <li key={p} className={cn("flex gap-3 text-sm font-medium", dark ? "text-white/90" : "text-primary")}>
                  <span className="mt-2 h-1.5 w-4 shrink-0 bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
            {current.href && (
              <Link
                href={current.href}
                data-testid={`link-${testPrefix}-${current.id}`}
                className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-accent"
              >
                {current.cta ?? "Learn more"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
