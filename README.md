# Dreamscape Canvas

# DREAM KCREATION — Premium Interior, Manufacturing & Materials Website

Build a premium, cinematic, highly responsive website for **DREAM KCREATION — Design & Execution**.

This is not a generic interior-design template.

The website must communicate that DREAM KCREATION operates across:

1. Interior Design
2. Turnkey Interior Execution
3. Residential Interiors
4. Commercial Interiors
5. Custom / Modular Furniture
6. Furniture Manufacturing / Workshop
7. Civil Work
8. Electrical Solutions
9. Plumbing
10. False Ceiling / POP Work
11. Flooring
12. Painting
13. Glass & Profiles
14. Renovation / Makeovers
15. Plywood Sales / Wholesale
16. Tiles & Builder Materials Sales
17. Furniture / Interior Materials
18. Turnkey execution support for architects and interior designers

The brand should feel premium, architectural, modern, trustworthy and craftsmanship-focused.

---

# 1. BRAND IDENTITY

Brand name:

DREAM KCREATION

Tagline:

Design & Execution

Primary visual identity:

* Warm amber / golden orange
* Deep charcoal / near-black
* White
* Soft neutral architectural tones

Use the supplied Dream Kcreation logo assets.

Do not redesign or distort the logo.

Support both:

* Light mode
* Dark mode

The logo and text must remain readable in both modes.

Use the existing orange/golden brand color as the primary accent.

Avoid excessive gradients, excessive glassmorphism, excessive rounded cards, or generic SaaS styling.

The design should feel like a premium architecture/interior studio.

---

# 2. TECHNOLOGY

Use:

* React
* TypeScript
* Vite
* Tailwind CSS
* GSAP
* GSAP ScrollTrigger
* HTML Canvas for frame-by-frame scroll animations
* Lucide icons or another lightweight icon library
* React Router for multiple pages

Use clean component architecture.

Do not create one giant React component.

Create reusable components such as:

* Navbar
* Footer
* ThemeToggle
* MagneticButton / AnimatedButton
* ScrollFrameAnimation
* SectionHeading
* ServiceCard
* MaterialCategory
* BrandGrid
* ProjectCard
* ProcessTimeline
* EnquiryForm
* CTASection

---

# 3. MOST IMPORTANT FEATURE — SCROLL FRAME ANIMATION

The website must use the supplied image-frame sequences for cinematic scroll animations.

Do NOT use the ZIP file itself inside the browser.

The frame images should ultimately be placed under:

public/frames/

Recommended structure:

public/frames/home/desktop/
public/frames/home/mobile/

public/frames/manufacturing/desktop/
public/frames/manufacturing/mobile/

Home desktop:

HomePage_Frames.zip

Home mobile:

Mobile_Home_frames.zip

Manufacturing desktop:

Manufacturing_Frames.zip

Manufacturing mobile:

Mobile_Manufacturing_frames.zip

Each sequence contains 50 frames.

Desktop frames are 1280x720.

Mobile frames are 720x1280.

Do not crop the desktop frames into mobile.

Use the separately supplied mobile frames.

Do not stretch frames.

Use object-fit: contain or a canvas-based cover strategy that preserves the intended composition without damaging the source aspect ratio.

---

# 4. CANVAS FRAME ENGINE

Implement a reusable Canvas-based scroll animation component.

Example conceptual API:

<ScrollFrameAnimation
desktopFrames={...}
mobileFrames={...}
start="top top"
end="+=4000"
/>

Requirements:

* Use HTML Canvas.
* Use GSAP ScrollTrigger.
* Map scroll progress to frame index.
* Render frame using requestAnimationFrame.
* Avoid creating 100+ visible img elements.
* Do not decode every frame simultaneously if unnecessary.
* Preload the first frame immediately.
* Progressive-load additional frames.
* Prioritize frames close to the current scroll position.
* Avoid blocking page rendering.
* Dispose / clean up ScrollTrigger and event listeners.
* Handle resize correctly.
* Handle devicePixelRatio correctly.
* Avoid excessive canvas resolution on mobile.
* Use lazy loading for animation sections that are below the fold.
* Do not load desktop and mobile frame sequences simultaneously.
* Use the correct sequence according to viewport.
* Respect prefers-reduced-motion.

If reduced motion is enabled, show a high-quality poster frame instead of forcing the full animation.

---

# 5. HOME PAGE

Create a cinematic landing page.

The first screen should feel premium and minimal.

Hero:

DREAM KCREATION

Design & Execution

Primary CTA:

START A PROJECT

Secondary CTA:

EXPLORE OUR WORK

The START A PROJECT button must navigate to:

/enquiry

Do not use fake statistics.

Do not invent awards.

Do not invent client testimonials.

Do not invent project counts.

---

# 6. HOME SCROLL STORY

Use the HomePage desktop frames on desktop.

Use Mobile_Home_frames on mobile.

The animation should occupy a large cinematic viewport.

The animation should progress naturally with scroll.

Suggested copy appearing during the animation:

01 — IMAGINE

Every space begins with an idea.

02 — DESIGN

Thoughtful design for the way you live and work.

03 — CRAFT

Where design meets skilled craftsmanship.

04 — EXECUTE

From concept to complete execution.

05 — EXPERIENCE

Spaces designed to feel like yours.

Do not cover important visual details with text.

Text should appear and disappear smoothly using GSAP.

---

# 7. INTRODUCTION / BRAND STORY

Create a section titled:

MEET THE SUTHAR BROTHERS

Use the company portfolio information.

The supplied portfolio describes DREAM KCREATION as a family-run interior design studio from Jodhpur, Rajasthan, rooted in craftsmanship and creativity, with carpentry and design traditions passed down through generations.

Show:

Dinesh Suthar
Director

Nakul Suthar
Execution Head

Mahi Suthar
Business Management

Use only supplied information.

Do not invent biographies.

Suggested copy:

"Raised in an environment of wood, tools, and tradition, we grew up mastering the art of design and carpentry. Today, we transform those teachings into modern, functional and deeply personal spaces."

Use supplied photographs where available.

---

# 8. BRAND PHILOSOPHY

Section heading:

FROM LEGACY TO LIFESTYLE

Use the company's themes:

* Craft
* Care
* Creation
* Integrity
* Personalization
* Quality

The portfolio states that the company combines a legacy of hands-on craftsmanship with a modern approach to turnkey execution.

Visually communicate this using:

* subtle image reveals
* horizontal scroll elements
* masked text
* line animations
* image parallax

Do not over-animate every element.

---

# 9. SERVICES

Create a dedicated Services page and a concise Services section on Home.

Break services into clear categories.

## DESIGN

* Interior Design
* Space Planning
* Concept Development
* 3D Visualization
* Material & Finish Selection
* Lighting Design
* Furniture Design
* Design Consultation

## EXECUTION

* Turnkey Interior Execution
* Civil Work
* Electrical Solutions
* Plumbing
* False Ceiling
* POP Work
* Flooring
* Painting
* Glass & Profiles
* Renovation & Makeovers

## FURNITURE

* Modular Furniture
* Custom Furniture
* Modular Kitchens
* Wardrobes
* Custom Wooden Furniture
* Wooden Articles & Décor

## COMMERCIAL

* Office Interiors
* Retail
* Restaurants
* Hospitality
* Showrooms

## MATERIALS & SUPPLY

* Plywood
* Laminates
* Veneers
* Tiles
* Builder Materials
* Furniture Hardware
* Interior Materials

## ARCHITECT PARTNERSHIP

Create a special service:

"An Executive Partner for Architects & Interior Designers"

Explain that DREAM KCREATION can support architects/interior designers with execution, manufacturing and site-level implementation.

---

# 10. SERVICE ANIMATION

On the Home page, create a premium interactive Services section.

Display service categories vertically.

Example:

DESIGN
↓
EXECUTION
↓
FURNITURE
↓
COMMERCIAL
↓
MATERIALS
↓
ARCHITECT PARTNERSHIP

Use animated arrows.

When the user hovers or scrolls over a service category:

* arrow moves
* underline expands
* relevant image appears
* text transitions smoothly

The user specifically wants arrow-based animation, so make the arrow movement subtle and premium.

Do not make the interaction gimmicky.

---

# 11. MANUFACTURING PAGE

Create:

/manufacturing

This page is extremely important.

Headline:

FROM BOARD TO BUILT.

Subheading:

Furniture crafted with precision, from our workshop to your space.

Use:

Manufacturing_Frames.zip on desktop.

Mobile_Manufacturing_frames.zip on mobile.

The supplied sequence should tell the story:

* Raw boards / materials
* Workshop
* Cutting
* Precision machinery
* CNC machining
* Sanding
* Furniture component creation
* Drawer / hardware assembly
* Finished furniture

Create scroll chapters:

01
MATERIAL

02
PRECISION CUTTING

03
CNC MACHINING

04
CRAFTSMANSHIP

05
ASSEMBLY

06
QUALITY CHECK

07
FINISHED PRODUCT

The frame animation should remain the visual focus.

Add a CTA:

EXPLORE FURNITURE

and:

START A PROJECT

---

# 12. MANUFACTURING CAPABILITY SECTION

After the manufacturing animation, show:

WORKSHOP CAPABILITY

Cards:

* Board Cutting
* CNC Machining
* Edge Processing
* Sanding
* Component Preparation
* Furniture Assembly
* Hardware Installation
* Quality Inspection
* Finished Furniture
* Installation

Only claim capabilities represented by the supplied materials or explicitly provided by the business.

Do not invent machinery brands or machine specifications.

---

# 13. MATERIALS & BRANDS

Create:

/materials

This page should communicate that DREAM KCREATION also supplies/sources interior materials.

Categories:

### Plywood & Boards

* CenturyPly
* Greenply
* Archidply
* Kitply
* Duro
* National Plywood
* Action TESA
* Merino
* Rushil Decor
* Virgo
* Ecoste

### Laminates

* Greenlam
* Merino
* CenturyLaminates
* Royale Touche
* Stylam
* Virgo
* AICA Sunmica
* Formica

### Veneers

* Greenply
* CenturyVeneers
* Greenlam
* Archidply
* DecoWood
* Euro
* Alstone

### Furniture Hardware

* Blum
* Hettich
* Häfele
* Grass
* Salice
* Kesseböhmer
* FGV
* Dorset
* Ebco
* Ozone
* Godrej

### Tiles

* Kajaria
* Somany
* Johnson
* Orientbell
* Nitco
* Simpolo
* RAK Ceramics
* Varmora
* Qutone
* AGL

### Paints & Wall Finishes

* Asian Paints
* Berger
* Dulux
* Nerolac
* JSW Paints
* Nippon Paint
* Birla Opus

### Lighting

* Wipro Lighting
* Philips / Signify
* Havells
* Bajaj Electricals
* Jaquar Lighting
* Syska
* Orient

### Electrical

* Schneider Electric
* Legrand
* ABB
* Siemens
* Havells
* Anchor by Panasonic
* L&T
* GM Modular
* Crabtree

### Glass

* Saint-Gobain Glass
* AIS Glass
* Guardian Glass
* Modiguard
* Gold Plus

### Gypsum / Ceiling

* Saint-Gobain Gyproc
* Armstrong
* USG Boral
* Knauf
* Hunter Douglas

### Adhesives / Construction Chemicals

* Fevicol / Pidilite
* Dr. Fixit
* Sika
* Fosroc
* Mapei
* Ardex
* Weber
* MYK Laticrete

### Sanitaryware / Bathroom

* Kohler
* Jaquar
* TOTO
* Duravit
* Grohe
* Hansgrohe
* Roca
* Cera
* Hindware
* Parryware

### Appliances

* Bosch
* Siemens
* Miele
* Elica
* Faber
* Kaff
* Franke
* Glen
* IFB
* Whirlpool
* LG
* Samsung

IMPORTANT:

Create the brand list as editable data.

Do not present every listed brand as an officially partnered brand.

Use wording such as:

"Brands & materials we source/specify"

only where appropriate.

Add a small internal TODO/comment explaining that the final published brand list must be verified by the business before launch.

---

# 14. PROJECTS / PORTFOLIO

Create:

/projects

Use the supplied portfolio visuals.

Categories:

* Living Room
* Kitchen
* Master Bedroom
* Guest Bedroom
* Kids Bedroom
* Dining Area
* Residential Interiors
* Commercial Interiors
* Custom Furniture

The supplied portfolio contains examples of living rooms, kitchens, bedrooms, kids bedrooms, master bedrooms and dining areas.

Create a premium filterable project gallery.

Use large images.

Avoid generic stock imagery where supplied portfolio images can be used.

---

# 15. PROCESS

Create a cinematic process section.

Use the company's existing process concept:

01
CONTACT

↓

02
MEET UP

↓

03
DESIGN

↓

04
SELECTIONS

↓

05
EXECUTION

↓

06
HANDOVER

Supporting statement:

"Every space we design begins with listening and ends with lasting impact."

Animate the arrows and steps as the user scrolls.

---

# 16. WHY DREAM KCREATION

Create a section:

WHAT SETS US APART

Use these themes from the supplied portfolio:

* Family-Owned Legacy
* Personalized Designs
* Sustainable Practices
* Attention to Detail
* Uncompromising Quality
* Competitive Pricing
* Flexible Payment Options
* Hands-on Craftsmanship
* Trust
* Transparency
* Timeless Design

Do not create fake certifications or claims.

---

# 17. ARCHITECT PARTNERSHIP

Create a dedicated section:

YOUR EXECUTION PARTNER.

Subheading:

An executive partner for architects and interior designers.

Explain the value:

* Execution support
* Furniture manufacturing
* Site coordination
* Material sourcing
* Civil work
* Electrical work
* False ceiling
* Finishing
* Installation
* Handover

The section should target architects and interior designers separately from residential customers.

CTA:

PARTNER WITH US

---

# 18. PLYWOOD + MATERIALS BUSINESS

Make it clear that DREAM KCREATION is not only an interior contractor.

Create a section:

MATERIALS FOR THE BUILD.

Highlight:

Plywood
Tiles
Builder Materials
Laminates
Furniture Hardware
Interior Materials

CTA:

ENQUIRE ABOUT MATERIALS

This should lead to /enquiry with the enquiry type preselected as:

Materials / Plywood / Tiles / Builder Materials

---

# 19. START PROJECT CTA

A prominent CTA must appear throughout the website.

Button:

START A PROJECT

Route:

/enquiry

Use the same CTA in:

* Navbar
* Hero
* Services
* Manufacturing
* Architect Partnership
* Footer

Use smooth page transitions.

---

# 20. ENQUIRY PAGE

Create:

/enquiry

Headline:

LET'S BUILD YOUR SPACE.

Create a professional enquiry form.

Fields:

Full Name *
Phone Number *
Email
City *
Project Type *
Budget Range
Approximate Area
Project Timeline
Services Required
Project Location
Preferred Contact Method
Message / Requirements
Upload Reference Images
Upload Floor Plan / PDF

Project Type options:

* Residential Interior
* Commercial Interior
* Office
* Retail
* Restaurant
* Hospitality
* Modular Kitchen
* Wardrobe
* Custom Furniture
* Renovation
* Plywood / Materials
* Tiles / Builder Materials
* Architect / Interior Designer Partnership
* Other

Services Required should support multi-select:

* Interior Design
* Turnkey Execution
* Civil Work
* Electrical
* Plumbing
* False Ceiling / POP
* Painting
* Flooring
* Glass & Profiles
* Modular Furniture
* Custom Furniture
* Plywood
* Tiles
* Builder Materials
* Other

Budget options:

* Under ₹5 Lakhs
* ₹5–10 Lakhs
* ₹10–20 Lakhs
* ₹20–40 Lakhs
* ₹40 Lakhs+
* Discuss on Call

Timeline:

* Immediately
* Within 1 Month
* 1–3 Months
* 3–6 Months
* 6+ Months
* Planning Stage

Do not store or send form data to any external service unless explicitly configured.

For the first version, create the UI and validation cleanly and make the submission endpoint/configuration easy to connect later.

Show success/error/loading states.

---

# 21. CONTACT INFORMATION

Use the supplied company information:

Phone:

+91 96071 46331

Email:

[dreamkcreationdesigns@gmail.com](mailto:dreamkcreationdesigns@gmail.com)

Location context:

Jodhpur, Rajasthan

Do not invent a complete street address.

The portfolio identifies the company as being from Jodhpur, Rajasthan.

Add WhatsApp and email CTAs.

Use the supplied QR assets only if appropriate and if they are verified.

---

# 22. NAVIGATION

Desktop navbar:

Logo

Home
About
Services
Manufacturing
Materials
Projects
Architects

START A PROJECT

Theme toggle

Mobile navbar:

Logo
Menu
START A PROJECT

Use a premium full-screen mobile menu.

---

# 23. DARK MODE

Light mode:

* warm white background
* charcoal text
* amber accents
* soft grey surfaces

Dark mode:

* charcoal / near-black background
* white text
* amber accents
* subtle dark-grey surfaces

Do not simply invert all colors.

The images should remain natural.

Ensure:

* WCAG-friendly contrast
* buttons remain readable
* logo remains visible
* forms remain accessible
* hover states work in both themes

Remember the supplied black/white logo variations and use the correct version depending on the background.

---

# 24. ANIMATION STYLE

The animation style should feel:

* cinematic
* architectural
* smooth
* restrained
* premium
* intentional

Use:

* GSAP ScrollTrigger
* opacity transitions
* clip-path reveals
* image masking
* subtle parallax
* text splitting
* line drawing
* animated arrows
* smooth section transitions

Do NOT animate every element.

Do NOT use excessive bounce animations.

Do NOT make it look like a SaaS dashboard.

The website should feel closer to a premium architecture/interior studio website.

---

# 25. PERFORMANCE REQUIREMENTS

This is extremely important.

The frame sequences are already optimized JPEG sequences.

Do not load all 200 frames at initial page load.

Requirements:

* lazy-load below-fold animation sequences
* preload only the first few frames
* progressively load remaining frames
* maintain an in-memory cache
* avoid duplicate frame requests
* use canvas
* use requestAnimationFrame
* don't use CSS background-image for every frame
* don't render all frames simultaneously
* don't create hundreds of DOM image elements
* don't load mobile frames on desktop
* don't load desktop frames on mobile
* clean up event listeners
* clean up GSAP ScrollTriggers
* optimize image decoding
* respect reduced-motion preference
* provide poster fallback

Keep the website responsive and fast on mid-range Android phones.

---

# 26. RESPONSIVE DESIGN

Desktop:

* 1440px+
* 1280px
* 1024px

Tablet:

* 768px–1023px

Mobile:

* 320px–767px

Use the dedicated portrait frame sequences for mobile.

Do not simply scale the desktop composition down.

Mobile should feel deliberately designed rather than being a compressed desktop version.

---

# 27. SEO

Implement:

* proper title tags
* meta descriptions
* Open Graph metadata
* semantic headings
* descriptive alt text
* sitemap-ready structure
* robots-ready structure
* LocalBusiness / InteriorDesigner structured data where appropriate
* canonical URLs
* fast-loading images

Suggested homepage title:

DREAM KCREATION | Interior Design, Turnkey Execution & Furniture

Suggested description:

Dream Kcreation is a Jodhpur-based interior design and execution studio offering residential and commercial interiors, turnkey execution, custom furniture, manufacturing and interior material solutions.

Do not claim services or locations that are not supported.

---

# 28. ACCESSIBILITY

Implement:

* keyboard navigation
* visible focus states
* accessible buttons
* accessible forms
* proper labels
* semantic HTML
* reduced-motion support
* sufficient contrast
* mobile touch-friendly controls

---

# 29. CODE QUALITY

Use:

* TypeScript
* reusable components
* clean folder structure
* data-driven services
* data-driven brands
* data-driven projects
* reusable animation utilities
* no duplicated code
* no hardcoded repeated JSX
* comments around the frame animation engine

Recommended structure:

src/
components/
pages/
sections/
animations/
data/
hooks/
lib/
assets/

Create a reusable frame animation hook/component instead of implementing separate animation logic for Home and Manufacturing.

---

# 30. IMPORTANT CONTENT RULES

Use the supplied company PDFs and supplied business requirements as the source of truth.

Do NOT invent:

* awards
* years of experience
* number of projects
* client names
* testimonials
* certifications
* offices
* exact pricing
* partnerships
* machinery specifications
* brand partnerships
* fake statistics

Where information is missing, use editable placeholders or omit the content.

Do not change the company identity.

Do not replace Dream Kcreation with a fictional company name.

---

# 31. FINAL DESIGN GOAL

The finished website should make a visitor understand within the first 10–15 seconds:

"DREAM KCREATION can design my interior, execute the project, manufacture furniture, and help source the materials."

The website should visually communicate:

DESIGN
+
CRAFT
+
MANUFACTURING
+
EXECUTION
+
MATERIALS

The final experience should feel premium enough for:

* homeowners
* architects
* interior designers
* commercial clients
* furniture customers
* material buyers

Build the first version with all pages, navigation, responsive layouts, dark/light mode, frame-animation architecture, enquiry flow, and placeholder-safe content.

Prioritize the visual quality and frame animation performance over adding unnecessary features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4a8a5bdc-56a3-456b-9d67-c28563d8cd06).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
