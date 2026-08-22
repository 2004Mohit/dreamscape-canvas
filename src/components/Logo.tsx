import { Link } from "@tanstack/react-router";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/**
 * Brand mark. The supplied logo is a square lockup; we crop to the glyph and
 * pair it with typeset wordmark so it stays crisp and readable in both themes.
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label={`${company.name} — home`}
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <span className="grid size-9 shrink-0 place-items-center overflow-hidden bg-primary text-primary-foreground">
        <span className="font-display text-xl leading-none">K</span>
      </span>
      {!compact && (
        <span className="min-w-0 leading-none">
          <span className="block font-display text-base tracking-[0.18em] text-foreground sm:text-lg">
            DREAM KCREATION
          </span>
          <span className="label-xs mt-1 block text-muted-foreground">{company.tagline}</span>
        </span>
      )}
    </Link>
  );
}
