import { Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 relative overflow-hidden bg-primary-dark text-primary-foreground">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <div className="container-x relative pt-20 pb-10">
        {/* CTA */}
        <div className="grid md:grid-cols-[1.4fr_auto] items-end gap-8 pb-14 border-b border-white/10">
          <div>
            <p className="eyebrow !text-gold">Get in touch</p>
            <h3 className="mt-3 text-3xl md:text-5xl font-display font-semibold text-balance max-w-2xl">
              Looking for a passionate, future-ready educator? Let's connect.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold">
              Contact Me
            </Link>
            <a
              href="https://www.linkedin.com/in/tanisha-rajan-18342a37a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition"
            >
              LinkedIn Profile <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 pt-14">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold">Tanisha Rajan</span>
                <span className="text-[9px] tracking-[0.2em] uppercase opacity-70">
                  Educator & Pedagogy Specialist
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed opacity-75 max-w-sm">
              Physics graduate & B.Ed. candidate. Nurturing active learners through conceptual
              clarity, visual pedagogy, and digital instruction.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/tanisha-rajan-18342a37a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-white/10 transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://youtu.be/L60L7En5ie8?si=5cCuhygdZDJ69aE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-white/10 transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {[
                ["About", "/about"],
                ["Experience", "/academics"],
                ["Credentials", "/admissions"],
                ["Co-Curriculars", "/campus-life"],
                ["Gallery", "/gallery"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="hover:text-gold transition">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2.5 text-sm opacity-80">
              {[
                "Instructional Design",
                "Generative AI (Infosys)",
                "DCA Diploma",
                "Cyber Security",
                "YES+ Leadership",
              ].map((l) => (
                <li key={l}>
                  <Link to="/admissions" className="hover:text-gold transition">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-85">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gold" /> Himachal Pradesh, India
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-gold" /> +91-9015303831
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-gold" /> tanisha.rajan28@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Tanisha Rajan. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold">
              Privacy
            </a>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
            <a href="#" className="hover:text-gold">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
