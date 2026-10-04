import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

export type Stat = { value: number; suffix?: string; label: string };

/** Only use for facts that appear on the site (counts of services, categories, etc). */
export function StatStrip({ stats, testPrefix }: { stats: Stat[]; testPrefix: string }) {
  return (
    <section className="border-y-4 border-accent bg-white py-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div data-testid={`stat-${testPrefix}-${i}`}>
              <CountUp to={s.value} suffix={s.suffix} className="block font-display text-5xl font-black text-primary md:text-6xl" />
              <span className="mt-1 block text-sm font-bold uppercase tracking-widest text-muted-foreground">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
