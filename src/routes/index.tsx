import { createFileRoute } from "@tanstack/react-router";
import { scrollVideos } from "@/data/scrollVideos";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  Handshake,
  Layers3,
  PencilRuler,
  Sofa,
} from "lucide-react";

import { AnimatedButton } from "@/components/AnimatedButton";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ScrollFrameAnimation } from "@/components/ScrollFrameAnimation";
import { SectionHeading } from "@/components/SectionHeading";

import {
  brandStory,
  company,
  differentiators,
  processStatement,
  processSteps,
  team,
} from "@/data/company";

import { homeFrames } from "@/data/frames";
import { homeChapters, serviceGroups } from "@/data/services";

import { images } from "@/data/images";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-clip">
      <HeroSection />

      <BrandStorySection />

      <ServicesSection />

      <CapabilitySection />

      <ManufacturingPreview />

      <MaterialsPreview />

      <FeaturedProjects />

      <ProcessSection />

      <WhyUsSection />

      <ArchitectPartnership />

      <CTASection
        title="Let's build your space."
        lead="From the first idea to the final handover, Dream Kcreation brings design, craftsmanship and execution together."
      />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative">
      <ScrollFrameAnimation
        videos={scrollVideos.home}
        poster={images["cover-hero"]}
        posterAlt="Dream Kcreation interior design project"
        scrollLength={5000}
      >
        <div className="absolute inset-0 z-10 flex items-end">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col px-5 pb-10 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
            <Reveal className="max-w-3xl">
              <p className="label-xs text-primary">{company.tagline}</p>

              <h1 className="mt-4 max-w-4xl text-balance font-display text-5xl font-medium leading-[0.95] tracking-tight text-ink-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                DREAM
                <br />
                KCREATION
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-foreground/80 sm:text-base md:text-lg">
                Interior design, turnkey execution, furniture manufacturing and material solutions —
                brought together under one roof.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
                <AnimatedButton to="/enquiry">Start a project</AnimatedButton>

                <AnimatedButton to="/projects" variant="outline">
                  Explore our work
                </AnimatedButton>
              </div>
            </Reveal>

            <div className="mt-8 hidden items-center gap-3 text-ink-foreground/60 sm:flex">
              <ArrowDown className="size-4 animate-bounce" />
              <span className="label-xs">Scroll to explore</span>
            </div>
          </div>
        </div>
      </ScrollFrameAnimation>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* BRAND STORY                                                                */
/* -------------------------------------------------------------------------- */

function BrandStorySection() {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading
            eyebrow="THE PEOPLE BEHIND THE SPACE"
            title={brandStory.heading}
            lead="A family-run interior studio from Jodhpur, Rajasthan, rooted in craftsmanship, carpentry and thoughtful design."
          />

          <div>
            <Reveal>
              <p className="max-w-3xl text-xl leading-relaxed text-foreground sm:text-2xl lg:text-3xl">
                {brandStory.intro}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8">
              <p className="max-w-2xl leading-relaxed text-muted-foreground">{brandStory.tale}</p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {team.map((member) => (
                <Reveal key={member.name} className="bg-background p-6 sm:p-7">
                  <p className="label-xs text-primary">{member.role}</p>

                  <h3 className="mt-4 font-display text-xl sm:text-2xl">{member.name}</h3>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-10">
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {brandStory.intent}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SERVICES                                                                   */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="From idea to execution."
          lead="One team across design, execution, furniture, materials and project delivery."
        />

        <div className="mt-14 border-y border-border">
          {serviceGroups.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.slug} delay={index * 0.04}>
                <a
                  href={
                    service.slug === "architects"
                      ? "/architects"
                      : service.slug === "materials"
                        ? "/materials"
                        : "/services"
                  }
                  className="group block border-b border-border last:border-b-0"
                >
                  <div className="grid gap-6 py-8 sm:py-10 lg:grid-cols-[80px_1fr_auto] lg:items-center lg:gap-10">
                    <div className="flex size-12 items-center justify-center border border-border text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="label-xs text-primary">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="font-display text-2xl tracking-tight sm:text-3xl lg:text-4xl">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {service.intro}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {service.items.slice(0, 5).map((item) => (
                          <span key={item} className="text-xs text-muted-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground transition-all duration-300 group-hover:gap-5 group-hover:text-primary">
                      <span className="label-xs hidden sm:inline">Explore</span>
                      <ArrowRight className="size-5" />
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <AnimatedButton to="/services" variant="outline">
            View all services
          </AnimatedButton>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* DESIGN / EXECUTION / MANUFACTURING                                        */
/* -------------------------------------------------------------------------- */

function CapabilitySection() {
  const capabilities = [
    {
      number: "01",
      title: "DESIGN",
      description:
        "We understand your space, lifestyle and requirements before turning them into a considered design.",
      icon: PencilRuler,
    },
    {
      number: "02",
      title: "EXECUTION",
      description:
        "Civil, electrical, plumbing, ceiling, flooring, painting, glass and finishing — coordinated as one project.",
      icon: Building2,
    },
    {
      number: "03",
      title: "MANUFACTURING",
      description:
        "Custom and modular furniture developed through a hands-on workshop and craftsmanship-led process.",
      icon: Sofa,
    },
  ];

  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="THE DREAM KCREATION APPROACH"
          title="We don't just design spaces. We build them."
          lead="Design, execution and furniture manufacturing work together so the vision remains connected from concept to installation."
        />

        <div className="mt-16 grid border-y border-border lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.number}
                delay={index * 0.08}
                className="relative border-b border-border p-7 last:border-b-0 sm:p-10 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-primary">{item.number}</span>

                  <Icon className="size-6 text-muted-foreground" />
                </div>

                <h3 className="mt-16 font-display text-3xl tracking-tight sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>

                {index < capabilities.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-6 bg-background p-1 text-primary lg:block" />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MANUFACTURING PREVIEW                                                      */
/* -------------------------------------------------------------------------- */

function ManufacturingPreview() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0">
        <img
          src={images["manufacturing-cover"]}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="size-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Reveal>
            <p className="label-xs text-primary">FURNITURE MANUFACTURING</p>

            <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-ink-foreground sm:text-6xl lg:text-8xl">
              FROM
              <br />
              BOARD
              <br />
              TO BUILT.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
              Furniture crafted with precision, from material selection and cutting through
              machining, assembly and finishing.
            </p>

            <div className="mt-8">
              <AnimatedButton to="/manufacturing" variant="outline" className="text-ink-foreground">
                Explore manufacturing
              </AnimatedButton>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 grid gap-px overflow-hidden border border-ink-foreground/15 bg-ink-foreground/10 sm:grid-cols-3">
          {[
            ["01", "PRECISION", "Measured and prepared before production."],
            ["02", "CRAFT", "Hands-on workmanship where detail matters."],
            ["03", "INSTALLATION", "Finished furniture brought into your space."],
          ].map(([number, title, text]) => (
            <div key={number} className="bg-ink/70 p-6 sm:p-8">
              <span className="font-mono text-xs text-primary">{number}</span>

              <h3 className="mt-10 font-display text-xl text-ink-foreground sm:text-2xl">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-foreground/60">{text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MATERIALS                                                                  */
/* -------------------------------------------------------------------------- */

function MaterialsPreview() {
  const categories = [
    {
      title: "Plywood",
      icon: Layers3,
      description: "Boards and sheet materials for furniture and interior applications.",
    },
    {
      title: "Tiles",
      icon: Layers3,
      description: "Tiles and surface materials for residential and commercial projects.",
    },
    {
      title: "Builder Materials",
      icon: Building2,
      description: "Interior and construction materials supporting complete project execution.",
    },
    {
      title: "Furniture Hardware",
      icon: Sofa,
      description: "Hardware and fittings required to complete custom and modular furniture.",
    },
  ];

  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading
            eyebrow="MATERIALS & SUPPLY"
            title="Materials for the build."
            lead="Beyond interiors, Dream Kcreation also provides and sources materials used across furniture and interior projects."
          />

          <div>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {categories.map((category, index) => {
                const Icon = category.icon;

                return (
                  <Reveal
                    key={category.title}
                    delay={index * 0.05}
                    className="group bg-background p-7 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground sm:p-9"
                  >
                    <Icon className="size-6 text-primary transition-colors group-hover:text-primary-foreground" />

                    <h3 className="mt-12 font-display text-2xl">{category.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/75">
                      {category.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-8">
              <AnimatedButton to="/materials" variant="outline">
                Explore materials
              </AnimatedButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */

function FeaturedProjects() {
  const featured = projects.slice(0, 6);

  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Spaces made personal."
            lead="A glimpse into residential, commercial and custom interior work represented in the supplied portfolio."
          />

          <Reveal>
            <AnimatedButton to="/projects" variant="outline">
              View all projects
            </AnimatedButton>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.06}>
              <a href="/projects" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={images[project.image]}
                    alt={project.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-4 text-white">
                      <div>
                        <p className="label-xs text-primary">{project.categories[0]}</p>

                        <h3 className="mt-2 font-display text-xl sm:text-2xl">{project.title}</h3>
                      </div>

                      <ArrowRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* PROCESS                                                                    */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="Six steps. One clear journey."
          lead={processStatement}
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.no}
              delay={index * 0.04}
              className="relative bg-background p-6 sm:p-7"
            >
              <span className="font-mono text-xs text-primary">{step.no}</span>

              <h3 className="mt-12 font-display text-xl">{step.title}</h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>

              {index < processSteps.length - 1 && (
                <ArrowRight className="absolute bottom-7 right-5 hidden size-4 text-primary lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* WHY US                                                                     */
/* -------------------------------------------------------------------------- */

function WhyUsSection() {
  return (
    <section className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading
            eyebrow="WHY DREAM KCREATION"
            title="Craft, care and creation."
            lead="The difference is not only in how a space looks, but in how thoughtfully it is designed, built and finished."
          />

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {differentiators.slice(0, 8).map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 0.05}
                className="bg-background p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center border border-primary text-primary">
                    <Check className="size-3.5" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl">{item.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* ARCHITECT PARTNERSHIP                                                      */
/* -------------------------------------------------------------------------- */

function ArchitectPartnership() {
  return (
    <section className="bg-surface py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden bg-ink px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/15 to-transparent" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal className="max-w-4xl">
              <p className="label-xs text-primary">FOR ARCHITECTS & INTERIOR DESIGNERS</p>

              <h2 className="mt-5 font-display text-4xl leading-[1] tracking-tight text-ink-foreground sm:text-5xl lg:text-7xl">
                YOUR EXECUTION
                <br />
                PARTNER.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
                An executive partner for architects and interior designers — supporting execution,
                furniture manufacturing, material sourcing, site coordination and installation.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <AnimatedButton to="/architects" variant="outline" className="text-ink-foreground">
                Partner with us
              </AnimatedButton>
            </Reveal>
          </div>

          <Reveal className="relative mt-12 grid gap-px border border-ink-foreground/15 bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Execution Support",
              "Furniture Manufacturing",
              "Material Sourcing",
              "Site Coordination",
            ].map((item) => (
              <div key={item} className="bg-ink/50 p-5">
                <Handshake className="size-5 text-primary" />
                <p className="mt-8 text-sm text-ink-foreground/75">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
