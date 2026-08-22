export interface FrameSequence {
  dir: string;
  count: number;
  width: number;
  height: number;
}

export interface FrameSet {
  desktop: FrameSequence;
  mobile: FrameSequence;
}

/**
 * Build the URL for a frame in a sequence.
 *
 * The existing frame loader uses this helper,
 * so keep this function exported.
 */
export function frameUrl(sequence: FrameSequence, index: number): string {
  const frameNumber = String(index + 1).padStart(3, "0");

  let suffix = "";

  if (sequence.dir.includes("/home/mobile")) {
    suffix = " (1)";
  } else if (sequence.dir.includes("/manufacturing/desktop")) {
    suffix = " (2)";
  } else if (sequence.dir.includes("/manufacturing/mobile")) {
    suffix = " (3)";
  }

  return `${sequence.dir}/ezgif-frame-${frameNumber}${suffix}.jpg`;
}

/**
 * Home page cinematic scroll sequence.
 *
 * Desktop:
 * public/frames/home/desktop/
 *
 * Mobile:
 * public/frames/home/mobile/
 */
export const homeFrames: FrameSet = {
  desktop: {
    dir: "/frames/home/desktop",
    count: 50,
    width: 1280,
    height: 720,
  },

  mobile: {
    dir: "/frames/home/mobile",
    count: 50,
    width: 720,
    height: 1280,
  },
};

/**
 * Manufacturing page cinematic scroll sequence.
 *
 * Desktop:
 * public/frames/manufacturing/desktop/
 *
 * Mobile:
 * public/frames/manufacturing/mobile/
 */
export const manufacturingFrames: FrameSet = {
  desktop: {
    dir: "/frames/manufacturing/desktop",
    count: 50,
    width: 1280,
    height: 720,
  },

  mobile: {
    dir: "/frames/manufacturing/mobile",
    count: 50,
    width: 720,
    height: 1280,
  },
};
