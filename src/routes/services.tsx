import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { serviceGroups } from "@/data/services";
import { processSteps, processStatement } from "@/data/company";
import { images, type ImageKey } from "@/data/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Interior Design & Turnkey Execution | Dream Kcreation" },
      {
        name: "description",
        content:
          "Design, turnkey execution, modular and custom furniture, commercial interiors, material supply and architect partnerships in Jodhpur.",
      },
      { property: "og:title", content: "Services — Dream Kcreation" },
      { property: "og:description", content: "Everything from concept and 3D visualisation to civil work, furniture and handover." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One studio, from first sketch to final handover."
        lead="Design and execution under one roof, so nothing is lost between the drawing and the site."
        image="sketch-to-render"
        alt="Interior sketch transitioning into a finished rendered space"
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="space-y-24">
          {serviceGroups.map((group, i) => {
            const Icon = group.icon;
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={group.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[&>figure]:order-last" : ""}`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-4">
                    <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="label-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
                  </div>
                  <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl">{group.title}</h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{group.intro}</p>
                  <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item} className="border-t border-border pt-3 text-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <figure className="min-w-0 overflow-hidden">
                  <img
                    src={images[group.image as ImageKey]}
                    alt={`${group.title} work by Dream Kcreation`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </figure>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Process" title="Six steps, no surprises." lead={processStatement} />
          <ol className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.no} className="bg-surface p-8">
                <p className="label-xs text-primary">{step.no}</p>
                <h3 className="mt-4 font-display text-2xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
