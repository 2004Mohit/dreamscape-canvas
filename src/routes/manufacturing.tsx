import { createFileRoute } from "@tanstack/react-router";
import { ScrollFrameAnimation } from "@/components/ScrollFrameAnimation";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { manufacturingFrames } from "@/data/frames";
import { manufacturingChapters, workshopCapabilities } from "@/data/services";
import { images } from "@/data/images";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — In-House Furniture Workshop | Dream Kcreation" },
      {
        name: "description",
        content:
          "Board cutting, CNC machining, edge processing, assembly and quality inspection — furniture made in our own Jodhpur workshop.",
      },
      { property: "og:title", content: "Manufacturing — Dream Kcreation" },
      { property: "og:description", content: "From raw board to finished, installed furniture, under our own roof." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: ManufacturingPage,
});

function ManufacturingPage() {
  return (
    <>
      <ScrollFrameAnimation
        frames={manufacturingFrames}
        poster={images["craft-team-03"]}
        posterAlt="Furniture being manufactured in the Dream Kcreation workshop"
        chapters={manufacturingChapters}
        scrollLength={5200}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 px-5 pt-32 sm:px-8 lg:px-12">
          <p className="label-xs text-primary">Manufacturing</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl leading-[1.02] text-ink-foreground sm:text-6xl">
            Made in our own workshop.
          </h1>
        </div>
      </ScrollFrameAnimation>

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="Ten stations between a board and your home."
          lead="Because manufacturing is ours, we control the tolerance, the timeline and the finish."
        />
        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {workshopCapabilities.map((cap, i) => (
            <li key={cap} className="bg-background p-6">
              <p className="label-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 font-display text-xl text-foreground">{cap}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <Reveal>
            <img src={images["kitchen-03"]} alt="Finished modular storage unit" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <SectionHeading
            eyebrow="Quality"
            title="Checked before it ever reaches your site."
            lead="Every unit is inspected in the workshop, then installed by the same team that built it. Fewer hands, fewer excuses."
            className="self-center"
          />
        </div>
      </section>

      <CTASection title="Need furniture built properly?" />
    </>
  );
}
