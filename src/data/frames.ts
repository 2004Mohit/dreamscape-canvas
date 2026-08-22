/**
 * Frame sequence configuration for the cinematic canvas scroll animations.
 *
 * Frames are plain JPEG sequences served from `public/frames/...`, e.g.
 *   public/frames/home/desktop/frame_001.jpg  (1280x720, 50 frames)
 *   public/frames/home/mobile/frame_001.jpg   (720x1280, 50 frames)
 *
 * Drop the supplied sequences into those folders (see public/frames/README.md).
 * Until the files exist the engine automatically falls back to a poster image,
 * so the site never renders a blank canvas.
 */

export type FrameSequence = {
  /** Public directory holding frame_001.jpg … frame_0NN.jpg */
  dir: string;
  count: number;
  width: number;
  height: number;
};

export type FrameSet = {
  desktop: FrameSequence;
  mobile: FrameSequence;
};

const pad = (n: number) => String(n).padStart(3, "0");

/** Absolute URL for a single frame. */
export const frameUrl = (seq: FrameSequence, index: number) =>
  `${seq.dir}/frame_${pad(index + 1)}.jpg`;

export const homeFrames: FrameSet = {
  desktop: { dir: "/frames/home/desktop", count: 50, width: 1280, height: 720 },
  mobile: { dir: "/frames/home/mobile", count: 50, width: 720, height: 1280 },
};

export const manufacturingFrames: FrameSet = {
  desktop: { dir: "/frames/manufacturing/desktop", count: 50, width: 1280, height: 720 },
  mobile: { dir: "/frames/manufacturing/mobile", count: 50, width: 720, height: 1280 },
};
