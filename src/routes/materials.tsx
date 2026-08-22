import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { brandCategories, materialLines, sourcingDisclaimer } from "@/data/brands";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Materials & Brands — Plywood, Laminates, Tiles | Dream Kcreation" },
      {
        name: "description",
        content:
          "Plywood, laminates, veneers, tiles, hardware, paints, lighting and sanitaryware we source and specify for interior projects in Jodhpur.",
      },
      { property: "og:title", content: "Materials & Brands — Dream Kcreation" },
      { property: "og:description", content: "The material palette behind every Dream Kcreation project." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/materials" },
    ],
    links: [{ rel: "canonical", href: "/materials" }],
  }),
  component: MaterialsPage,
});

function MaterialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Materials & supply"
        title="The material decides how long the design lasts."
        lead="We supply and specify interior materials directly — so quality, price and lead time stay in one place."
        image="living-warm"
        alt="Warm living room interior showing material finishes"
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHeading eyebrow="Supply lines" title="What we supply." />
        <ul className="mt-12 flex flex-wrap gap-3">
          {materialLines.map((line) => (
            <li key={line} className="label-xs border border-border px-5 py-3 text-foreground">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Brand directory"
            title="Brands we source and specify."
            lead={sourcingDisclaimer}
          />
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
            {brandCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 3) * 0.05} className="bg-surface p-8">
                <h3 className="font-display text-2xl text-foreground">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                  {cat.brands.map((brand) => (
                    <li key={brand} className="text-sm text-muted-foreground">
                      {brand}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            {sourcingDisclaimer}
          </p>
        </div>
      </section>

      <CTASection title="Need materials for your build?" lead="Send us your drawings or a material list and we'll quote what we can supply." />
    </>
  );
}
