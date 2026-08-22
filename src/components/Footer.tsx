import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Studio",
    links: [
      { to: "/about", label: "About" },
      { to: "/projects", label: "Projects" },
      { to: "/architects", label: "For Architects" },
    ],
  },
  {
    title: "Work",
    links: [
      { to: "/services", label: "Services" },
      { to: "/manufacturing", label: "Manufacturing" },
      { to: "/materials", label: "Materials" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-surface-foreground">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {company.description}
            </p>
            <p className="mt-6 font-display text-2xl text-foreground">{company.motto}</p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="label-xs text-primary">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="label-xs text-primary">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={company.phoneHref} className="inline-flex items-center gap-2 hover:text-foreground">
                  <Phone className="size-4 shrink-0" /> {company.phone}
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="inline-flex items-start gap-2 break-all hover:text-foreground">
                  <Mail className="size-4 shrink-0 translate-y-0.5" /> {company.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 shrink-0" /> {company.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="label-xs">{company.tagline} — {company.city}</p>
        </div>
      </div>
    </footer>
  );
}
