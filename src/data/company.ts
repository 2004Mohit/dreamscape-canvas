/**
 * Single source of truth for company facts.
 * Everything here is taken from the supplied Dream Kcreation portfolio PDFs.
 * TODO (business): verify before launch — do not add awards, project counts,
 * certifications or testimonials that the business has not supplied.
 */

export const company = {
  name: "DREAM KCREATION",
  tagline: "Design & Execution",
  motto: "Your Space, Our Kreations",
  city: "Jodhpur, Rajasthan",
  phone: "+91 96071 46331",
  phoneHref: "tel:+919607146331",
  whatsapp: "https://wa.me/919607146331",
  email: "dreamkcreationdesigns@gmail.com",
  emailHref: "mailto:dreamkcreationdesigns@gmail.com",
  description:
    "Dream Kcreation is a Jodhpur-based interior design and execution studio offering residential and commercial interiors, turnkey execution, custom furniture, manufacturing and interior material solutions.",
} as const;

export const team = [
  { name: "Dinesh Suthar", role: "Director" },
  { name: "Nakul Suthar", role: "Execution Head" },
  { name: "Mahi Suthar", role: "Business Management" },
] as const;

export const brandStory = {
  heading: "MEET THE SUTHAR BROTHERS",
  intro:
    "Dream Kcreation is a family-run interior design studio from Jodhpur, Rajasthan, with deep roots in craftsmanship and creativity. As Rajasthani artists, we've inherited a legacy of detail-oriented carpentry and timeless design, passed down from our father and grandfather.",
  tale: "Raised in an environment of wood, tools, and tradition, we grew up mastering the art of design and carpentry. Today, we transform those teachings into modern, functional and deeply personal spaces.",
  intent:
    "We offer end-to-end turnkey interior solutions that feel like home, because we treat every project like family. From the very first consultation to the final touch, our goal is to create spaces that combine style, comfort, and soul.",
} as const;

export const philosophy = {
  heading: "FROM LEGACY TO LIFESTYLE",
  statement:
    "From legacy to lifestyle, our journey is built on craft, care, and creation.",
  pillars: [
    { title: "Craft", copy: "Hands-on carpentry passed down through generations." },
    { title: "Care", copy: "Every project treated the way we would treat our own home." },
    { title: "Creation", copy: "Modern, functional spaces made deeply personal." },
    { title: "Integrity", copy: "We listen deeply, think creatively and build honestly." },
    { title: "Personalization", copy: "Designs tailored to your lifestyle, values and aspirations." },
    { title: "Quality", copy: "Attention to detail and uncompromising execution." },
  ],
} as const;

export const differentiators = [
  { title: "Family-Owned Legacy", copy: "Artistry and integrity carried through generations of the Suthar family." },
  { title: "Personalized Designs", copy: "Tailored to your lifestyle rather than a catalogue." },
  { title: "Sustainable Practices", copy: "Eco-conscious material choices wherever possible." },
  { title: "Attention to Detail", copy: "The details decide whether a space feels finished." },
  { title: "Uncompromising Quality", copy: "Built to last, checked before handover." },
  { title: "Competitive Pricing", copy: "Fair pricing with flexible payment options." },
  { title: "Hands-on Craftsmanship", copy: "Our own workshop, our own hands, our own standards." },
  { title: "Trust & Transparency", copy: "Clear communication from first meeting to handover." },
  { title: "Timeless Design", copy: "Work that still reads well years after handover." },
] as const;

export const processSteps = [
  { no: "01", title: "CONTACT", copy: "Tell us about your space, your timeline and how you live." },
  { no: "02", title: "MEET UP", copy: "We meet, measure and understand the site in person." },
  { no: "03", title: "DESIGN", copy: "Concepts, planning and visualisation of the space." },
  { no: "04", title: "SELECTIONS", copy: "Materials, finishes, hardware and fittings chosen together." },
  { no: "05", title: "EXECUTION", copy: "Manufacturing, civil, services and finishing on site." },
  { no: "06", title: "HANDOVER", copy: "Quality checks, installation and a space ready to live in." },
] as const;

export const processStatement =
  "Every space we design begins with listening and ends with lasting impact.";
