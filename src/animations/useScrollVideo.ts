import { useEffect, useRef } from "react";

export function useScrollVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const setProgress = (progress: number) => {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration)) {
      return;
    }

    const clampedProgress = Math.min(1, Math.max(0, progress));

    video.currentTime = clampedProgress * video.duration;
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();

    const handleLoadedMetadata = () => {
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return {
    videoRef,
    setProgress,
  };
}
