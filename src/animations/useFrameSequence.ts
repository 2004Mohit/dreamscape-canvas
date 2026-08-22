import { useEffect, useRef, useState } from "react";

import { frameUrl, type FrameSequence } from "@/data/frames";

interface UseFrameSequenceOptions {
  preloadCount?: number;
}

interface UseFrameSequenceResult {
  frames: Array<HTMLImageElement | null>;
  loadedCount: number;
  isReady: boolean;
}

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void) => number;

  cancelIdleCallback?: (handle: number) => void;
};

/**
 * Progressive image sequence loader.
 *
 * Loading strategy:
 *
 * 1. Load the first frame immediately.
 * 2. Load a small number of nearby frames.
 * 3. Continue loading the remaining frames progressively.
 * 4. Never request the same frame twice.
 */
export function useFrameSequence(
  sequence: FrameSequence | null,
  options: UseFrameSequenceOptions = {},
): UseFrameSequenceResult {
  const preloadCount = options.preloadCount ?? 5;

  const [frames, setFrames] = useState<Array<HTMLImageElement | null>>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const loadedRef = useRef<Array<HTMLImageElement | null>>([]);
  const loadingRef = useRef<Set<number>>(new Set());
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!sequence || sequence.count <= 0) {
      setFrames([]);
      setLoadedCount(0);
      setIsReady(false);

      loadedRef.current = [];
      loadingRef.current.clear();

      return;
    }

    const initialFrames = Array<HTMLImageElement | null>(sequence.count).fill(null);

    loadedRef.current = initialFrames;
    loadingRef.current.clear();

    setFrames(initialFrames);
    setLoadedCount(0);
    setIsReady(false);

    let cancelled = false;

    const loadFrame = (index: number) => {
      if (cancelled) return;
      if (index < 0 || index >= sequence.count) return;

      if (loadedRef.current[index]) return;
      if (loadingRef.current.has(index)) return;

      loadingRef.current.add(index);

      const image = new Image();

      image.decoding = "async";

      image.onload = () => {
        loadingRef.current.delete(index);

        if (cancelled || !mountedRef.current) return;

        loadedRef.current[index] = image;

        setFrames((current) => {
          const next = [...current];
          next[index] = image;
          return next;
        });

        setLoadedCount((current) => {
          const next = current + 1;

          if (next >= 1) {
            setIsReady(true);
          }

          return next;
        });
      };

      image.onerror = () => {
        loadingRef.current.delete(index);
      };

      image.src = frameUrl(sequence, index);
    };

    /**
     * Schedule the next frame without blocking the main thread.
     */
    const scheduleNext = (callback: () => void) => {
      const browserWindow = window as IdleWindow;

      if (typeof browserWindow.requestIdleCallback === "function") {
        browserWindow.requestIdleCallback(callback);
      } else {
        window.setTimeout(callback, 30);
      }
    };

    // First frame — highest priority.
    loadFrame(0);

    // Preload the first few frames.
    for (let index = 1; index < Math.min(preloadCount, sequence.count); index += 1) {
      loadFrame(index);
    }

    // Progressively load remaining frames.
    let nextIndex = preloadCount;

    const loadNext = () => {
      if (cancelled || nextIndex >= sequence.count) {
        return;
      }

      loadFrame(nextIndex);
      nextIndex += 1;

      scheduleNext(loadNext);
    };

    if (sequence.count > preloadCount) {
      scheduleNext(loadNext);
    }

    return () => {
      cancelled = true;
      loadingRef.current.clear();
    };
  }, [sequence, preloadCount]);

  return {
    frames,
    loadedCount,
    isReady,
  };
}
