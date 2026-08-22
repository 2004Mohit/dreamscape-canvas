import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { projects, type ProjectCategory } from "@/data/projects";
import { images } from "@/data/images";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Residential & Commercial Interiors | Dream Kcreation" },
      {
        name: "description",
        content:
          "Living rooms, modular kitchens, bedrooms, kids rooms, dining areas and commercial interiors delivered by Dream Kcreation, Jodhpur.",
      },
      { property: "og:title", content: "Projects — Dream Kcreation" },
      { property: "og:description", content: "A portfolio of designed and executed interiors across Jodhpur." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const filters: (ProjectCategory | "All")[] = [
  "All",
  "Living Room",
  "Kitchen",
  "Master Bedroom",
  "Guest Bedroom",
  "Kids Bedroom",
  "Dining Area",
  "Residential Interiors",
  "Commercial Interiors",
  "Custom Furniture",
];

function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.categories.includes(active))),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Spaces we designed, built and handed over."
        lead="Every image below is our own work — designed, manufactured and executed by the Dream Kcreation team."
        image="cover-hero"
        alt="Featured Dream Kcreation interior project"
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div
          role="group"
          aria-label="Filter projects by room"
          className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {filters.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`label-xs min-h-11 shrink-0 snap-start border px-5 transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal as="li" key={project.id} delay={(i % 3) * 0.05} className="group">
              <figure className="overflow-hidden bg-surface">
                <img
                  src={images[project.image]}
                  alt={project.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <figcaption className="flex items-start justify-between gap-4 border-t border-border p-5">
                  <span className="min-w-0 font-display text-xl text-foreground">{project.title}</span>
                  <span className="label-xs shrink-0 text-primary">{project.categories[0]}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      <CTASection title="Want something like this in your home?" />
    </>
  );
}
