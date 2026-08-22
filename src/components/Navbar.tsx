import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { AnimatedButton } from "./AnimatedButton";
import { company } from "@/data/company";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/materials", label: "Materials" },
  { to: "/projects", label: "Projects" },
  { to: "/architects", label: "Architects" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12"
      >
        <Logo />

        <div className="flex items-center gap-2 lg:gap-6">
          <ul className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="underline-sweep label-xs text-foreground/80 transition-colors hover:text-foreground"
                  activeProps={{ "data-active": "true", className: "text-foreground" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <AnimatedButton to="/enquiry" className="hidden md:inline-flex" withArrow={false}>
            Start a project
          </AnimatedButton>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-11 place-items-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[73px] z-40 flex flex-col justify-between overflow-y-auto bg-background px-5 pb-10 pt-8 sm:px-8 lg:hidden">
          <ul className="space-y-1">
            {links.map((link, i) => (
              <li key={link.to} className="border-b border-border">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-display text-3xl text-foreground"
                >
                  <span className="label-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-4">
            <AnimatedButton to="/enquiry" onClick={() => setOpen(false)} className="w-full">
              Start a project
            </AnimatedButton>
            <div className="label-xs space-y-2 text-muted-foreground">
              <a href={company.phoneHref} className="block hover:text-primary">{company.phone}</a>
              <a href={company.emailHref} className="block break-all hover:text-primary">{company.email}</a>
              <p>{company.city}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
