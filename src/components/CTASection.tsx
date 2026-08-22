import { AnimatedButton } from "./AnimatedButton";
import { Reveal } from "./Reveal";
import { company } from "@/data/company";
import { images } from "@/data/images";

export function CTASection({
  title = "Let's design your space.",
  lead = "Tell us about your project. We'll come back with a plan, a timeline and an honest estimate.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 sm:py-32">
      <img
        src={images["living-dark"]}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover opacity-35"
      />
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <p className="label-xs text-primary">Start here</p>
          <h2 className="mt-5 text-balance text-4xl leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75">{lead}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <AnimatedButton to="/enquiry">Start an enquiry</AnimatedButton>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="label-xs inline-flex min-h-11 items-center border border-ink-foreground/30 px-6 text-ink-foreground transition-colors hover:border-primary hover:text-primary"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
