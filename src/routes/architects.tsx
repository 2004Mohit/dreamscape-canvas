import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { serviceGroups } from "@/data/services";
import { images } from "@/data/images";

export const Route = createFileRoute("/architects")({
  head: () => ({
    meta: [
      { title: "For Architects — Execution Partner in Jodhpur | Dream Kcreation" },
      {
        name: "description",
        content:
          "An execution and manufacturing partner for architects and interior designers: site coordination, furniture, civil work, finishing and handover.",
      },
      { property: "og:title", content: "For Architects — Dream Kcreation" },
      { property: "og:description", content: "You hold the design. We hold the site." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/architects" },
    ],
    links: [{ rel: "canonical", href: "/architects" }],
  }),
  component: ArchitectsPage,
});

const partnership = serviceGroups.find((g) => g.slug === "architects")!;

function ArchitectsPage() {
  return (
    <>
      <PageHero
        eyebrow="For architects & designers"
        title="You hold the design. We hold the site."
        lead="Execution support, in-house manufacturing and material sourcing — delivered to your drawings, credited to your practice."
        image="living-dark"
        alt="Architectural interior with layered lighting"
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Scope"
            title="What we take off your plate."
            lead={partnership.intro}
          />
          <Reveal>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {partnership.items.map((item) => (
                <li key={item} className="border-t border-border pt-3 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <SectionHeading
            eyebrow="How it works"
            title="Your drawings, our workshop, one accountable team."
            lead="We work to issued drawings and specifications, flag buildability early, and keep a single point of contact from mobilisation to snag-free handover."
          />
          <Reveal>
            <img
              src={images["commercial-lounge"]}
              alt="Commercial interior executed for a design practice"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Let's talk about your next site."
        lead="Send drawings, a scope note or just a call time — we'll tell you honestly what we can deliver."
      />
    </>
  );
}
