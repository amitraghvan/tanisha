import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface Crumb {
  label: string;
  to?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-radial-hero border-b border-border/60">
      <div className="container-x pt-20 pb-20 md:pt-28 md:pb-24">
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow reveal">{eyebrow}</p>}
        <h1 className="reveal mt-4 font-display text-4xl md:text-6xl font-semibold text-balance max-w-4xl leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p
            className="reveal mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            style={{ animationDelay: "80ms" }}
          >
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
