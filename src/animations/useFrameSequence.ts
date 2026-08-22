import { useCallback, useEffect, useRef, useState } from "react";
import { frameUrl, type FrameSequence } from "@/data/frames";

/**
 * Frame sequence loader.
 *
 * Strategy (performance is the priority here):
 *  - only ONE sequence (desktop OR mobile) is ever requested;
 *  - frame 0 is fetched immediately so the canvas paints instantly;
 *  - remaining frames load progressively, prioritising the frames closest to
 *    the current scroll position;
 *  - decoded bitmaps are cached in memory and never requested twice;
 *  - loading only starts once the section is near the viewport (lazy);
 *  - everything is aborted/cleaned up on unmount.
 */
export function useFrameSequence(seq: FrameSequence | null, active: boolean) {
  const cache = useRef<(HTMLImageElement | null)[]>([]);
  const inflight = useRef<Set<number>>(new Set());
  const disposed = useRef(false);
  const priority = useRef(0);
  const [firstReady, setFirstReady] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // Reset the cache whenever the sequence changes (viewport switch).
  useEffect(() => {
    cache.current = seq ? new Array(seq.count).fill(null) : [];
    inflight.current = new Set();
    setFirstReady(false);
    setUnavailable(false);
    setLoadedCount(0);
  }, [seq]);

  const load = useCallback(
    (index: number) =>
      new Promise<void>((resolve) => {
        if (!seq || disposed.current) return resolve();
        if (index < 0 || index >= seq.count) return resolve();
        if (cache.current[index] || inflight.current.has(index)) return resolve();

        inflight.current.add(index);
        const image = new Image();
        image.decoding = "async";
        image.src = frameUrl(seq, index);
        image.onload = () => {
          inflight.current.delete(index);
          if (disposed.current) return resolve();
          cache.current[index] = image;
          setLoadedCount((c) => c + 1);
          if (index === 0) setFirstReady(true);
          resolve();
        };
        image.onerror = () => {
          inflight.current.delete(index);
          // Frames not deployed yet -> poster fallback.
          if (index === 0 && !disposed.current) setUnavailable(true);
          resolve();
        };
      }),
    [seq],
  );

  // Progressive, priority-aware loading loop.
  useEffect(() => {
    if (!seq || !active) return;
    disposed.current = false;
    let cancelled = false;

    const run = async () => {
      await load(0);
      if (cancelled || disposed.current) return;

      // Batch of a few frames up front so early scroll feels smooth.
      for (let i = 1; i < Math.min(6, seq.count); i++) {
        if (cancelled) return;
        await load(i);
      }

      // Remaining frames, nearest-to-current-position first.
      while (!cancelled && !disposed.current) {
        const remaining: number[] = [];
        for (let i = 0; i < seq.count; i++) {
          if (!cache.current[i]) remaining.push(i);
        }
        if (remaining.length === 0) return;
        remaining.sort(
          (a, b) => Math.abs(a - priority.current) - Math.abs(b - priority.current),
        );
        // Load in small concurrent groups to avoid saturating mobile networks.
        await Promise.all(remaining.slice(0, 4).map(load));
      }
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [seq, active, load]);

  useEffect(() => {
    disposed.current = false;
    return () => {
      disposed.current = true;
    };
  }, []);

  const setPriority = useCallback((index: number) => {
    priority.current = index;
  }, []);

  /** Nearest already-decoded frame at or before `index`. */
  const frameAt = useCallback((index: number) => {
    const frames = cache.current;
    if (!frames.length) return null;
    const clamped = Math.max(0, Math.min(frames.length - 1, index));
    for (let i = clamped; i >= 0; i--) {
      if (frames[i]) return frames[i];
    }
    for (let i = clamped + 1; i < frames.length; i++) {
      if (frames[i]) return frames[i];
    }
    return null;
  }, []);

  return { frameAt, setPriority, firstReady, unavailable, loadedCount };
}
