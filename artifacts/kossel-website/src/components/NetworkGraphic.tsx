import { useState } from "react";
import { cn } from "@/lib/utils";

type Node = { id: string; label: string; x: number; y: number; note: string };

const hub = { x: 300, y: 190 };
const nodes: Node[] = [
  { id: "eng", label: "Engineering", x: 110, y: 80, note: "Design, construction and commissioning led from Nigeria." },
  { id: "src", label: "Global sourcing", x: 500, y: 70, note: "Valves, pipes, fittings and instruments sourced worldwide." },
  { id: "log", label: "Logistics", x: 520, y: 290, note: "Freight, marine and site delivery coordination." },
  { id: "hse", label: "HSE and Quality", x: 300, y: 340, note: "Procedures and checks applied across every scope." },
  { id: "mro", label: "MRO supply", x: 80, y: 280, note: "Maintenance, repair and operations materials on request." },
];

/** Animated hub-and-spoke diagram. Tap or hover a node to read what it covers. */
export function NetworkGraphic({ className }: { className?: string }) {
  const [active, setActive] = useState<string>(nodes[0].id);
  const current = nodes.find((n) => n.id === active) ?? nodes[0];

  return (
    <div className={cn("w-full", className)}>
      <svg viewBox="0 0 600 400" role="img" aria-label="Diagram of Kossel at the centre of engineering, sourcing, logistics, HSE and MRO supply" className="h-auto w-full">
        <defs>
          <style>{`
            @keyframes kdash{to{stroke-dashoffset:-24}}
            @keyframes kpulse{0%{transform:scale(1);opacity:.5}100%{transform:scale(2.6);opacity:0}}
            .k-line{stroke-dasharray:6 6;animation:kdash 1.6s linear infinite}
            .k-pulse{transform-box:fill-box;transform-origin:center;animation:kpulse 2.6s ease-out infinite}
            .k-node:focus-visible circle:first-child{stroke:#fff;stroke-width:4}
            @media (prefers-reduced-motion:reduce){.k-line,.k-pulse{animation:none}}
          `}</style>
        </defs>
        {nodes.map((n) => (
          <line key={n.id} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y} className="k-line" stroke={n.id === active ? "hsl(25 95% 53%)" : "rgba(255,255,255,.3)"} strokeWidth={n.id === active ? 2.5 : 1.5} />
        ))}
        <circle cx={hub.x} cy={hub.y} r="30" className="k-pulse" fill="hsl(25 95% 53%)" />
        <circle cx={hub.x} cy={hub.y} r="34" fill="hsl(25 95% 53%)" />
        <text x={hub.x} y={hub.y + 5} textAnchor="middle" fontSize="15" fontWeight="800" fill="hsl(222 47% 11%)" style={{ fontFamily: "Barlow, sans-serif", letterSpacing: 1 }}>KOSSEL</text>
        {nodes.map((n) => (
          <g
            key={n.id}
            tabIndex={0}
            role="button"
            aria-label={`${n.label}: ${n.note}`}
            data-testid={`node-network-${n.id}`}
            onMouseEnter={() => setActive(n.id)}
            onFocus={() => setActive(n.id)}
            onClick={() => setActive(n.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(n.id);
              }
            }}
            aria-pressed={n.id === active}
            className="k-node cursor-pointer outline-none"
          >
            <circle cx={n.x} cy={n.y} r="22" fill={n.id === active ? "hsl(25 95% 53%)" : "hsl(222 47% 16%)"} stroke="hsl(25 95% 53%)" strokeWidth="2" style={{ transition: "fill .3s" }} />
            <circle cx={n.x} cy={n.y} r="6" fill={n.id === active ? "hsl(222 47% 11%)" : "hsl(25 95% 53%)"} />
            <text x={n.x} y={n.y + 42} textAnchor="middle" fontSize="14" fontWeight="700" fill="white" style={{ fontFamily: "Barlow, sans-serif", letterSpacing: 1 }}>{n.label.toUpperCase()}</text>
          </g>
        ))}
      </svg>
      <p className="mt-2 min-h-[3rem] border-l-4 border-accent pl-4 text-white/85" aria-live="polite" data-testid="text-network-note">
        <strong className="text-white">{current.label}.</strong> {current.note}
      </p>
    </div>
  );
}
