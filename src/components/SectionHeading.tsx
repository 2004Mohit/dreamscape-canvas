import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="label-xs text-primary">{eyebrow}</p>}
      <Tag className="mt-4 text-balance text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
        {title}
      </Tag>
      {lead && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lead}
        </p>
      )}
      {children}
    </Reveal>
  );
}
