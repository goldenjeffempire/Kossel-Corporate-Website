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
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(false);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setAutoplayAllowed(!shouldAvoidAutoplay());
    updatePreference();
    motion.addEventListener("change", updatePreference);
    return () => motion.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!autoplayAllowed || !wrapperRef.current) return;
    if (priority) setEnabled(true);
    if (typeof IntersectionObserver === "undefined") {
      setEnabled(true);
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEnabled(true);
        }
      },
      { rootMargin: "240px" },
    );
    observer.observe(wrapperRef.current);
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0),
      { threshold: 0 },
    );
    visibilityObserver.observe(wrapperRef.current);
    return () => {
      observer.disconnect();
      visibilityObserver.disconnect();
    };
  }, [priority, autoplayAllowed]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!enabled || !autoplayAllowed) {
      video.pause();
      return;
    }

    // Refresh source selection when a lazy video receives its sources.
    video.load();
  }, [enabled, src, webmSrc, autoplayAllowed]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!enabled || !autoplayAllowed || !inView || document.hidden) {
      video.pause();
    } else {
      void video.play().catch(() => {
        // Autoplay restrictions leave the poster available.
      });
    }
    const onVisibility = () => {
      if (document.hidden) video.pause();
      else if (enabled && autoplayAllowed && inView) void video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [enabled, autoplayAllowed, inView]);

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
        preload={priority && autoplayAllowed ? "metadata" : "none"}
        aria-label={title}
      >
        {enabled && autoplayAllowed && (
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