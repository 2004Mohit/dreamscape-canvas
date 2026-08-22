/**
 * Materials & brands directory.
 *
 * TODO (business, BEFORE LAUNCH): this list describes brands and materials
 * Dream Kcreation can source or specify for a project. It is NOT a list of
 * official partnerships, dealerships or authorised distributorships. The final
 * published list must be reviewed and verified by the business.
 */

export type BrandCategory = {
  slug: string;
  title: string;
  blurb: string;
  brands: string[];
};

export const sourcingDisclaimer =
  "Brands & materials we source or specify for projects. Availability varies by project, site and lead time. This is not a list of official partnerships.";

export const brandCategories: BrandCategory[] = [
  {
    slug: "plywood-boards",
    title: "Plywood & Boards",
    blurb: "Structural and furniture-grade boards for carcass and joinery work.",
    brands: ["CenturyPly", "Greenply", "Archidply", "Kitply", "Duro", "National Plywood", "Action TESA", "Merino", "Rushil Decor", "Virgo", "Ecoste"],
  },
  {
    slug: "laminates",
    title: "Laminates",
    blurb: "Surface finishes for wardrobes, kitchens and panelling.",
    brands: ["Greenlam", "Merino", "CenturyLaminates", "Royale Touche", "Stylam", "Virgo", "AICA Sunmica", "Formica"],
  },
  {
    slug: "veneers",
    title: "Veneers",
    blurb: "Natural and reconstituted veneers for warm, grained surfaces.",
    brands: ["Greenply", "CenturyVeneers", "Greenlam", "Archidply", "DecoWood", "Euro", "Alstone"],
  },
  {
    slug: "hardware",
    title: "Furniture Hardware",
    blurb: "Hinges, channels, lift systems and internal storage fittings.",
    brands: ["Blum", "Hettich", "Häfele", "Grass", "Salice", "Kesseböhmer", "FGV", "Dorset", "Ebco", "Ozone", "Godrej"],
  },
  {
    slug: "tiles",
    title: "Tiles",
    blurb: "Floor and wall tiles, large-format slabs and cladding.",
    brands: ["Kajaria", "Somany", "Johnson", "Orientbell", "Nitco", "Simpolo", "RAK Ceramics", "Varmora", "Qutone", "AGL"],
  },
  {
    slug: "paints",
    title: "Paints & Wall Finishes",
    blurb: "Emulsions, textures and specialist wall finishes.",
    brands: ["Asian Paints", "Berger", "Dulux", "Nerolac", "JSW Paints", "Nippon Paint", "Birla Opus"],
  },
  {
    slug: "lighting",
    title: "Lighting",
    blurb: "Architectural, profile and decorative lighting.",
    brands: ["Wipro Lighting", "Philips / Signify", "Havells", "Bajaj Electricals", "Jaquar Lighting", "Syska", "Orient"],
  },
  {
    slug: "electrical",
    title: "Electrical",
    blurb: "Switchgear, modular plates and distribution.",
    brands: ["Schneider Electric", "Legrand", "ABB", "Siemens", "Havells", "Anchor by Panasonic", "L&T", "GM Modular", "Crabtree"],
  },
  {
    slug: "glass",
    title: "Glass",
    blurb: "Clear, tinted, lacquered and toughened glass with profiles.",
    brands: ["Saint-Gobain Glass", "AIS Glass", "Guardian Glass", "Modiguard", "Gold Plus"],
  },
  {
    slug: "gypsum",
    title: "Gypsum / Ceiling",
    blurb: "False ceiling systems, boards and grid ceilings.",
    brands: ["Saint-Gobain Gyproc", "Armstrong", "USG Boral", "Knauf", "Hunter Douglas"],
  },
  {
    slug: "adhesives",
    title: "Adhesives & Construction Chemicals",
    blurb: "Bonding, waterproofing and tile-fixing systems.",
    brands: ["Fevicol / Pidilite", "Dr. Fixit", "Sika", "Fosroc", "Mapei", "Ardex", "Weber", "MYK Laticrete"],
  },
  {
    slug: "sanitaryware",
    title: "Sanitaryware & Bathroom",
    blurb: "Fittings, fixtures and bathroom systems.",
    brands: ["Kohler", "Jaquar", "TOTO", "Duravit", "Grohe", "Hansgrohe", "Roca", "Cera", "Hindware", "Parryware"],
  },
  {
    slug: "appliances",
    title: "Appliances",
    blurb: "Kitchen and home appliances integrated into the design.",
    brands: ["Bosch", "Siemens", "Miele", "Elica", "Faber", "Kaff", "Franke", "Glen", "IFB", "Whirlpool", "LG", "Samsung"],
  },
];

/** Headline supply lines for the "Materials for the build" section. */
export const materialLines = [
  "Plywood",
  "Tiles",
  "Builder Materials",
  "Laminates",
  "Furniture Hardware",
  "Interior Materials",
];
