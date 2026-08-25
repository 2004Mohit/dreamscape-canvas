export type ScrollVideoSet = {
  desktop: string;
  mobile: string;
};

export const scrollVideos = {
  home: {
    desktop: "/videos/home/home-desktop.mp4",
    mobile: "/videos/home/home-mobile.mp4",
  },

  manufacturing: {
    desktop: "/videos/manufacturing/manufacturing-desktop.mp4",
    mobile: "/videos/manufacturing/manufacturing-mobile.mp4",
  },
} as const;

export type ScrollVideoKey = keyof typeof scrollVideos;
