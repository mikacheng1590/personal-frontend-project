import { useEffect, useRef } from "react";

type VideoProps = {
  src: string;
  title?: string;
  autoPlay?: boolean;
  className?: string;
};

export default function Video({
  src,
  title,
  autoPlay = false,
  className = "",
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const trigger = triggerRef.current;

    const handleMouseEnter = () => {
      video?.play();
    };
    const handleMouseLeave = () => {
      video?.pause();
    };

    if (!autoPlay) {
      trigger?.addEventListener("mouseenter", handleMouseEnter);
      trigger?.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (!autoPlay) {
        trigger?.removeEventListener("mouseenter", handleMouseEnter);
        trigger?.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className={`relative group ${className}`} ref={triggerRef}>
      <video
        className="w-full h-full"
        muted
        autoPlay={autoPlay}
        ref={videoRef}
        src={src} />
      {!autoPlay && title && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex items-center justify-center opacity-100 group-hover:invisible group-hover:opacity-0 ease-in-out duration-300">
          <span className="text-white text-base md:text-xl font-bold bg-mika-maroon-50 px-4 py-2">{title}</span>
        </div>
      )}
    </div>
  );
}