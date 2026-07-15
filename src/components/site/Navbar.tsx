import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Experience" },
  { to: "/admissions", label: "Credentials" },
  { to: "/campus-life", label: "Co-Curriculars" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <>
      {/* Announcement */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container-x flex h-9 items-center justify-between">
          <p className="opacity-90">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold mr-2 align-middle" />
            Seeking teaching and instructional design opportunities
          </p>
          <div className="flex items-center gap-5 opacity-90">
            <a href="tel:+919015303831" className="hover:text-gold">
              +91-9015303831
            </a>
            <a href="mailto:tanisha.rajan28@gmail.com" className="hover:text-gold">
              tanisha.rajan28@gmail.com
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-18 items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_8px_20px_-8px_var(--primary)] group-hover:scale-105 transition-transform">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
                Tanisha Rajan
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Educator Portfolio
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                    active ? "text-primary" : "text-foreground/75 hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-4">
              Get in Touch <ChevronRight className="h-4 w-4" />
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="container-x py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-3 rounded-xl text-[15px] font-medium ${
                    path === n.to
                      ? "bg-primary/8 text-primary"
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-2 w-full">
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
