import type { LucideIcon } from "lucide-react";
import {
  PencilRuler,
  HardHat,
  Sofa,
  Building2,
  Layers,
  Handshake,
} from "lucide-react";

export type ServiceGroup = {
  slug: string;
  title: string;
  intro: string;
  icon: LucideIcon;
  /** Key of an image in src/data/images.ts used for the hover preview */
  image: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "design",
    title: "DESIGN",
    intro: "Planning, concepts and visualisation before a single board is cut.",
    icon: PencilRuler,
    image: "sketch-to-render",
    items: [
      "Interior Design",
      "Space Planning",
      "Concept Development",
      "3D Visualization",
      "Material & Finish Selection",
      "Lighting Design",
      "Furniture Design",
      "Design Consultation",
    ],
  },
  {
    slug: "execution",
    title: "EXECUTION",
    intro: "Turnkey site delivery with every trade under one accountability.",
    icon: HardHat,
    image: "craft-team-03",
    items: [
      "Turnkey Interior Execution",
      "Civil Work",
      "Electrical Solutions",
      "Plumbing",
      "False Ceiling",
      "POP Work",
      "Flooring",
      "Painting",
      "Glass & Profiles",
      "Renovation & Makeovers",
    ],
  },
  {
    slug: "furniture",
    title: "FURNITURE",
    intro: "Modular and bespoke furniture built in our own workshop.",
    icon: Sofa,
    image: "kitchen-03",
    items: [
      "Modular Furniture",
      "Custom Furniture",
      "Modular Kitchens",
      "Wardrobes",
      "Custom Wooden Furniture",
      "Wooden Articles & Décor",
    ],
  },
  {
    slug: "commercial",
    title: "COMMERCIAL",
    intro: "Workspaces and customer-facing interiors built to run hard.",
    icon: Building2,
    image: "commercial-lounge",
    items: ["Office Interiors", "Retail", "Restaurants", "Hospitality", "Showrooms"],
  },
  {
    slug: "materials",
    title: "MATERIALS & SUPPLY",
    intro: "Plywood, tiles and builder materials sourced and supplied.",
    icon: Layers,
    image: "living-warm",
    items: [
      "Plywood",
      "Laminates",
      "Veneers",
      "Tiles",
      "Builder Materials",
      "Furniture Hardware",
      "Interior Materials",
    ],
  },
  {
    slug: "architects",
    title: "ARCHITECT PARTNERSHIP",
    intro: "An executive partner for architects and interior designers.",
    icon: Handshake,
    image: "living-dark",
    items: [
      "Execution Support",
      "Furniture Manufacturing",
      "Site Coordination",
      "Material Sourcing",
      "Civil Work",
      "Electrical Work",
      "False Ceiling",
      "Finishing",
      "Installation",
      "Handover",
    ],
  },
];

export const workshopCapabilities = [
  "Board Cutting",
  "CNC Machining",
  "Edge Processing",
  "Sanding",
  "Component Preparation",
  "Furniture Assembly",
  "Hardware Installation",
  "Quality Inspection",
  "Finished Furniture",
  "Installation",
];

export const manufacturingChapters = [
  { no: "01", title: "MATERIAL", copy: "Boards and materials selected before anything is cut." },
  { no: "02", title: "PRECISION CUTTING", copy: "Panels sized to the drawing, not to the eye." },
  { no: "03", title: "CNC MACHINING", copy: "Repeatable joinery and hardware positions." },
  { no: "04", title: "CRAFTSMANSHIP", copy: "Hand finishing where machines cannot decide." },
  { no: "05", title: "ASSEMBLY", copy: "Carcasses, drawers and hardware brought together." },
  { no: "06", title: "QUALITY CHECK", copy: "Every unit inspected before it leaves the workshop." },
  { no: "07", title: "FINISHED PRODUCT", copy: "Delivered and installed in your space." },
];

export const homeChapters = [
  { no: "01", title: "IMAGINE", copy: "Every space begins with an idea." },
  { no: "02", title: "DESIGN", copy: "Thoughtful design for the way you live and work." },
  { no: "03", title: "CRAFT", copy: "Where design meets skilled craftsmanship." },
  { no: "04", title: "EXECUTE", copy: "From concept to complete execution." },
  { no: "05", title: "EXPERIENCE", copy: "Spaces designed to feel like yours." },
];
