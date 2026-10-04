import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ResponsiveImage, type ResponsiveImageSources } from "@/components/ResponsiveImage";
import { CinematicVideo } from "@/components/CinematicVideo";
import { Reveal } from "@/components/motion/Reveal";

type MediaBandProps = {
  eyebrow: string;
  heading: string;
  text: string;
  image: ResponsiveImageSources;
  poster?: ResponsiveImageSources;
  alt: string;
  video?: { src: string; title: string; description: string };
  cta?: { label: string; href: string };
  children?: ReactNode;
  testId: string;
};

/** Full-bleed image or video band with copy panel. Videos stay control-free. */
export function MediaBand({ eyebrow, heading, text, image, poster, alt, video, cta, children, testId }: MediaBandProps) {
  return (
    <section data-testid={testId} className="relative isolate overflow-hidden bg-primary py-24 md:py-36 text-white">
      <div className="absolute inset-0 -z-10">
        {video ? (
          <CinematicVideo
            src={video.src}
            poster={(poster ?? image).jpeg}
            title={video.title}
            description={video.description}
            className="h-full w-full"
            videoClassName="opacity-70"
          />
        ) : (
          <ResponsiveImage sources={image} alt={alt} width={1024} height={576} sizes="100vw" className="h-full w-full object-cover opacity-70" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/20" />
      </div>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
          <h2 className="mb-6 text-3xl md:text-5xl font-black text-white">{heading}</h2>
          <p className="mb-8 text-lg leading-relaxed text-white/80">{text}</p>
          {children}
          {cta && (
            <Link href={cta.href} data-testid={`link-${testId}`} className="group inline-flex items-center gap-2 bg-accent px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary">
              {cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
