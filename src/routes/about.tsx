import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { brandStory, company, differentiators, philosophy, team } from "@/data/company";
import { images } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dream Kcreation | Suthar Brothers, Jodhpur" },
      {
        name: "description",
        content:
          "A family-run Jodhpur interior studio built on generations of Rajasthani carpentry — meet the Suthar brothers behind Dream Kcreation.",
      },
      { property: "og:title", content: "About Dream Kcreation — Design & Execution" },
      {
        property: "og:description",
        content: "From legacy to lifestyle: craft, care and creation from Jodhpur, Rajasthan.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title="From legacy to lifestyle."
        lead={philosophy.statement}
        image="craft-team-01"
        alt="The Dream Kcreation team at work in Jodhpur"
        position="center 25%"
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Our story" title={brandStory.heading} lead={brandStory.intro}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {brandStory.tale}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {brandStory.intent}
            </p>
          </SectionHeading>
          <Reveal className="grid grid-cols-2 gap-4 self-start">
            <img
              src={images["craft-team-02"]}
              alt="Craftsmanship on the workshop floor"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <img
              src={images["craft-team-03"]}
              alt="Site execution in progress"
              loading="lazy"
              className="mt-10 aspect-[3/4] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="The people" title="Three brothers, one workshop." />
          <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="bg-surface p-8">
                <p className="label-xs text-primary">{member.role}</p>
                <p className="mt-4 font-display text-3xl text-foreground">{member.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHeading eyebrow="Philosophy" title={philosophy.heading} />
        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {philosophy.pillars.map((pillar) => (
            <li key={pillar.title} className="bg-background p-8">
              <h3 className="font-display text-2xl text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Why us" title="What working with us actually means." />
          <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.03}
                className="border-t border-border pt-5"
              >
                <p className="label-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-2xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-16 font-display text-3xl text-foreground sm:text-4xl">{company.motto}</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
