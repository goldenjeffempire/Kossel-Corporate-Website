import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type CinematicVideoProps = {
  src: string;
  poster: string;
  title: string;
  description: string;
  className?: string;
  videoClassName?: string;
  priority?: boolean;
  controls?: boolean;
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
  controls = false,
}: CinematicVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(priority);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (priority || !wrapperRef.current) return;

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

    void video.play().catch(() => setPlaying(false));
  }, [enabled]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  }

  return (
    <div ref={wrapperRef} className={cn("relative overflow-hidden bg-primary", className)}>
      <video
        ref={videoRef}
        className={cn("h-full w-full object-cover", videoClassName)}
        poster={poster}
        muted
        loop
        playsInline
        controls={controls}
        preload={priority ? "metadata" : "none"}
        aria-label={title}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {enabled && <source src={src} type="video/mp4" />}
        <p>{description}</p>
      </video>
      {!controls && (
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute bottom-4 right-4 z-20 grid h-11 w-11 place-items-center border border-white/70 bg-primary/75 text-white backdrop-blur-sm transition hover:bg-accent hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        >
          {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
        </button>
      )}
    </div>
  );
}