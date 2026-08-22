import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-3 px-6 py-3 label-xs transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-current text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:text-primary",
};

type LinkProps = ComponentProps<typeof Link>;

export function AnimatedButton({
  children,
  variant = "solid",
  withArrow = true,
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
} & Omit<LinkProps, "children" | "className">) {
  return (
    <Link className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function AnimatedAction({
  children,
  variant = "solid",
  withArrow = true,
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
} & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
