import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { AnimatedButton } from "@/components/AnimatedButton";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

export const Route = createFileRoute("/enquiry")({
  component: EnquiryPage,
  head: () => ({
    meta: [
      {
        title: "Start a Project | DREAM KCREATION",
      },
      {
        name: "description",
        content:
          "Start a project with Dream Kcreation for interior design, turnkey execution, custom furniture, manufacturing or interior material requirements.",
      },
    ],
  }),
});

function EnquiryPage() {
  return (
    <main className="overflow-x-clip">
      <Hero />

      <section className="bg-background py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <ContactInformation />

            <Reveal>
              <div className="border border-border bg-surface p-5 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <p className="label-xs text-primary">PROJECT DETAILS</p>

                  <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                    Tell us about your project.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Share your requirements and we'll understand the project, scope and services you
                    are looking for.
                  </p>
                </div>

                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <NextSteps />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 sm:pt-40 lg:pt-48">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-[1600px] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
        <Reveal>
          <p className="label-xs text-primary">START A PROJECT</p>

          <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[0.95] tracking-tight text-ink-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            LET'S BUILD
            <br />
            YOUR SPACE.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-foreground/65 sm:text-lg">
            From the first idea to the final handover, Dream Kcreation brings design, craftsmanship
            and execution together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CONTACT INFORMATION                                                        */
/* -------------------------------------------------------------------------- */

function ContactInformation() {
  return (
    <div>
      <SectionHeading
        eyebrow="GET IN TOUCH"
        title="Tell us what you're planning."
        lead="Whether you're building a home, commercial space, custom furniture or looking for material supply, start the conversation with us."
      />

      <div className="mt-10 space-y-4">
        <ContactItem
          icon={<Phone className="size-5" />}
          label="Call us"
          value={company.phone}
          href={`tel:${company.phone.replace(/\s/g, "")}`}
        />

        <ContactItem
          icon={<Mail className="size-5" />}
          label="Email"
          value={company.email}
          href={`mailto:${company.email}`}
        />

        <ContactItem icon={<MapPin className="size-5" />} label="Location" value={company.city} />
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <p className="label-xs text-primary">WHAT WE CAN HELP WITH</p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Interior Design",
            "Turnkey Execution",
            "Custom Furniture",
            "Furniture Manufacturing",
            "Plywood & Materials",
            "Tiles & Builder Materials",
            "Renovation",
            "Architect Partnership",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex size-5 shrink-0 items-center justify-center border border-primary text-primary">
                <ArrowRight className="size-3" />
              </span>

              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <a
          href={`https://wa.me/${company.phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-border px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          WhatsApp us
        </a>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CONTACT ITEM                                                               */
/* -------------------------------------------------------------------------- */

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <>
      <div className="flex size-11 shrink-0 items-center justify-center border border-border text-primary">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="label-xs text-muted-foreground">{label}</p>

        <p className="mt-1 break-words text-sm font-medium text-foreground sm:text-base">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-center gap-4 border border-border p-4 transition-colors duration-300 hover:border-primary"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4 border border-border p-4">{content}</div>;
}

/* -------------------------------------------------------------------------- */
/* NEXT STEPS                                                                 */
/* -------------------------------------------------------------------------- */

function NextSteps() {
  const steps = [
    {
      number: "01",
      title: "We review",
      text: "We understand the information and requirements you share with us.",
    },
    {
      number: "02",
      title: "We connect",
      text: "We discuss the project, scope and the kind of support you need.",
    },
    {
      number: "03",
      title: "We plan",
      text: "The next stage can move toward consultation, site discussion or project planning.",
    },
    {
      number: "04",
      title: "We build",
      text: "Design, execution, manufacturing and finishing come together around the project.",
    },
  ];

  return (
    <section className="bg-surface py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="WHAT HAPPENS NEXT"
          title="A clear path from enquiry to execution."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.05} className="bg-background p-6 sm:p-8">
              <span className="font-mono text-xs text-primary">{step.number}</span>

              <h3 className="mt-12 font-display text-2xl tracking-tight">{step.title}</h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
