import type { ImageKey } from "./images";

export type ProjectCategory =
  | "Living Room"
  | "Kitchen"
  | "Master Bedroom"
  | "Guest Bedroom"
  | "Kids Bedroom"
  | "Dining Area"
  | "Residential Interiors"
  | "Commercial Interiors"
  | "Custom Furniture";

export type Project = {
  id: string;
  title: string;
  categories: ProjectCategory[];
  image: ImageKey;
  /** Descriptive alt text — no invented client names or locations. */
  alt: string;
};

/**
 * Project visuals from the supplied Dream Kcreation portfolio.
 * TODO (business): replace titles with real project names/locations once supplied.
 */
export const projects: Project[] = [
  { id: "l1", title: "Living Room — Skyline Lounge", categories: ["Living Room", "Residential Interiors"], image: "living-01", alt: "Living room with low seating and full-height windows" },
  { id: "l2", title: "Living Room — Marble Feature Wall", categories: ["Living Room", "Residential Interiors"], image: "living-02", alt: "Living room with blue sofa and marble-effect feature wall" },
  { id: "l3", title: "Living Room — Entry Vista", categories: ["Living Room", "Custom Furniture"], image: "living-03", alt: "Entry vista with fluted panelling and mirror detail" },
  { id: "l4", title: "Living Room — Media Wall", categories: ["Living Room", "Custom Furniture"], image: "living-04", alt: "Media wall in marble with brass profile detailing" },
  { id: "l5", title: "Living Room — Dining Vista", categories: ["Living Room", "Dining Area"], image: "living-05", alt: "Open living and dining area with decorative jaali screen" },
  { id: "k1", title: "Kitchen — Modular Layout", categories: ["Kitchen", "Custom Furniture"], image: "kitchen-01", alt: "Modular kitchen with tall units and hob elevation" },
  { id: "k2", title: "Kitchen — Warm Neutrals", categories: ["Kitchen"], image: "kitchen-02", alt: "Kitchen in warm neutral finishes with island" },
  { id: "k3", title: "Kitchen — Crockery & Storage", categories: ["Kitchen", "Custom Furniture"], image: "kitchen-03", alt: "Kitchen storage and crockery unit in wood and laminate" },
  { id: "k4", title: "Kitchen — Utility Zone", categories: ["Kitchen"], image: "kitchen-04", alt: "Kitchen utility zone with tall storage" },
  { id: "k5", title: "Kitchen — Compact Plan", categories: ["Kitchen"], image: "kitchen-05", alt: "Compact kitchen plan with overhead cabinets" },
  { id: "k6", title: "Kitchen — Breakfast Counter", categories: ["Kitchen"], image: "kitchen-06", alt: "Kitchen with breakfast counter seating" },
  { id: "b1", title: "Guest Bedroom — Wardrobe Wall", categories: ["Guest Bedroom", "Custom Furniture"], image: "bedroom-01", alt: "Guest bedroom wardrobe wall in white laminate" },
  { id: "b2", title: "Guest Bedroom — Sage Panelling", categories: ["Guest Bedroom"], image: "bedroom-02", alt: "Guest bedroom with sage panelled headboard wall" },
  { id: "b3", title: "Bedroom — Fluted Headboard", categories: ["Guest Bedroom"], image: "bedroom-03", alt: "Bedroom with fluted panelling and patterned headboard" },
  { id: "b4", title: "Bedroom — City View", categories: ["Guest Bedroom", "Residential Interiors"], image: "bedroom-04", alt: "Bedroom with upholstered bed and city view window" },
  { id: "b5", title: "Bedroom — Gallery Wall", categories: ["Guest Bedroom"], image: "bedroom-05", alt: "Bedroom with gallery wall and side console" },
  { id: "b6", title: "Bedroom — Soft Blue Scheme", categories: ["Guest Bedroom"], image: "bedroom-06", alt: "Bedroom in a soft blue and white scheme" },
  { id: "ki1", title: "Kids Bedroom — Play Storage", categories: ["Kids Bedroom", "Custom Furniture"], image: "kids-01", alt: "Kids bedroom with playful storage units" },
  { id: "ki2", title: "Kids Bedroom — Study Nook", categories: ["Kids Bedroom"], image: "kids-02", alt: "Kids bedroom study nook with shelving" },
  { id: "ki3", title: "Kids Bedroom — Green Scheme", categories: ["Kids Bedroom"], image: "kids-03", alt: "Kids bedroom in green and cream with arched mirror" },
  { id: "ki4", title: "Kids Bedroom — Bunk Plan", categories: ["Kids Bedroom"], image: "kids-04", alt: "Kids bedroom with bunk plan and soft lighting" },
  { id: "ki5", title: "Kids Bedroom — Wall Graphics", categories: ["Kids Bedroom"], image: "kids-05", alt: "Kids bedroom with illustrated wall graphics" },
  { id: "ki6", title: "Kids Bedroom — Wardrobe Run", categories: ["Kids Bedroom", "Custom Furniture"], image: "kids-06", alt: "Kids bedroom wardrobe run with rounded edges" },
  { id: "m1", title: "Master Bedroom — Panelled Suite", categories: ["Master Bedroom"], image: "master-01", alt: "Master bedroom with full-height panelled headboard" },
  { id: "m2", title: "Master Bedroom — Dresser Wall", categories: ["Master Bedroom", "Custom Furniture"], image: "master-02", alt: "Master bedroom dresser wall with integrated lighting" },
  { id: "m3", title: "Master Bedroom — Arched Feature", categories: ["Master Bedroom"], image: "master-03", alt: "Master bedroom with arched feature headboard" },
  { id: "m4", title: "Master Bedroom — Warm Woods", categories: ["Master Bedroom"], image: "master-04", alt: "Master bedroom in warm wood tones" },
  { id: "m5", title: "Master Bedroom — Reading Corner", categories: ["Master Bedroom"], image: "master-05", alt: "Master bedroom reading corner with lounge chair" },
  { id: "m6", title: "Master Bedroom — Storage Wall", categories: ["Master Bedroom", "Custom Furniture"], image: "master-06", alt: "Master bedroom storage wall with mirror inserts" },
  { id: "d1", title: "Dining Area — Marble Table", categories: ["Dining Area"], image: "dining-01", alt: "Dining area with marble-top table and wooden chairs" },
  { id: "d2", title: "Dining Area — Panel Backdrop", categories: ["Dining Area", "Custom Furniture"], image: "dining-02", alt: "Dining area with panelled backdrop and crockery unit" },
  { id: "d3", title: "Dining Area — Arch Niche", categories: ["Dining Area"], image: "dining-03", alt: "Dining area with arched niche and pendant lighting" },
  { id: "d4", title: "Dining Area — Open Plan", categories: ["Dining Area", "Residential Interiors"], image: "dining-04", alt: "Open-plan dining area beside the living room" },
  { id: "c1", title: "Commercial — Executive Lounge", categories: ["Commercial Interiors"], image: "commercial-lounge", alt: "Executive office lounge with library shelving" },
  { id: "c2", title: "Commercial — Reception Lounge", categories: ["Commercial Interiors"], image: "living-warm", alt: "Reception lounge with curved seating" },
  { id: "c3", title: "Residence — Dark Lounge", categories: ["Residential Interiors", "Living Room"], image: "living-dark", alt: "Lounge in a dark contemporary scheme" },
];

export const projectCategories: ProjectCategory[] = [
  "Living Room",
  "Kitchen",
  "Master Bedroom",
  "Guest Bedroom",
  "Kids Bedroom",
  "Dining Area",
  "Residential Interiors",
  "Commercial Interiors",
  "Custom Furniture",
];
