import { images, type ImageKey } from "@/data/images";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: ImageKey;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-ink pb-14 pt-32 sm:min-h-[80vh] sm:pb-20">
      <img
        src={images[image]}
        alt={alt}
        className="absolute inset-0 -z-10 size-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <p className="label-xs text-primary">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl leading-[1.02] text-ink-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
