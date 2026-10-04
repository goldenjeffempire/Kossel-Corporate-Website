import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CinematicVideoProps = {
  src: string;
  poster: string;
  title: string;
  description: string;
  className?: string;
  videoClassName?: string;
  priority?: boolean;
  webmSrc?: string;
};

function shouldAvoidAutoplay() {
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;

  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    connection?.saveData === true ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g"
  );
}

export function CinematicVideo({
  src,
  poster,
  title,
  description,
  className,
  videoClassName,
  priority = false,
  webmSrc = src.replace(/\.mp4$/, ".webm"),
}: CinematicVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(priority);

  useEffect(() => {
    if (priority || !wrapperRef.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setEnabled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnabled(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const video = videoRef.current;
    if (!enabled || !video || shouldAvoidAutoplay()) return;

    // Refresh source selection when a lazy video receives its sources.
    video.load();
    void video.play().catch(() => {
      // Keep the poster visible when the browser prevents autoplay.
    });
  }, [enabled, src, webmSrc]);

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden bg-primary", className)}>
      <video
        ref={videoRef}
        className={cn("h-full w-full object-cover", videoClassName)}
        poster={poster}
        muted
        loop
        playsInline
        controls={false}
        preload={priority ? "metadata" : "none"}
        aria-label={title}
      >
        {enabled && (
          <>
            <source src={webmSrc} type="video/webm" />
            <source src={src} type="video/mp4" />
          </>
        )}
        <p>{description}</p>
      </video>
    </div>
  );
}