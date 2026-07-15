import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Award, BookOpen, Map, Users, Compass, Trophy } from "lucide-react";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tanisha Rajan" },
      {
        name: "description",
        content:
          "Moments from Tanisha Rajan's teaching journey, B.Ed. model exhibitions, science experiments, and educational trips.",
      },
      { property: "og:title", content: "Gallery — Tanisha Rajan" },
      {
        property: "og:description",
        content: "Photos from Tanisha Rajan's teaching and academic practice.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  {
    type: "photo",
    src: principal,
    span: "md:col-span-2 md:row-span-2",
    label: "Tanisha Rajan - Science & Mathematics Educator",
  },
  {
    type: "icon",
    icon: Map,
    label: "Satya Bharti School Trip (Punjab, May 2026)",
    desc: "Gained practical insights into vocational frameworks.",
  },
  {
    type: "icon",
    icon: Compass,
    label: "Jung-e-Azadi Memorial Trip (Jalandhar, May 2025)",
    desc: "Value-based education immersive learning.",
  },
  {
    type: "icon",
    icon: Award,
    span: "md:col-span-2",
    label: "Pedagogical Prism Model Presentation",
    desc: "Appreciated by Pro-Chancellor of LPU for Math visual models.",
  },
  {
    type: "icon",
    icon: Trophy,
    label: "Micro-Teaching Competition Commendation",
    desc: "Commended by faculty for outstanding lesson delivery.",
  },
  {
    type: "icon",
    icon: Users,
    label: "NCC Cadet Volunteer Service",
    desc: "Discipline, leadership, and community service camps (2021-23).",
  },
  {
    type: "icon",
    icon: BookOpen,
    span: "md:col-span-2",
    label: "Cambridge School Teaching Practice",
    desc: "Developing classroom management and instruction competency.",
  },
];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Snapshots of my educational journey and training."
        description="Scroll through visual records of my teaching practice, educational trips, model exhibitions, and B.Ed. micro-teaching competition moments."
        crumbs={[{ label: "Gallery" }]}
      />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {items.map((it, i) => {
            if (it.type === "photo" && it.src) {
              return (
                <figure
                  key={i}
                  className={`group relative overflow-hidden rounded-3xl card-elevated ${it.span ?? ""}`}
                >
                  <img
                    src={it.src}
                    alt={it.label}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary-dark/70 to-transparent text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                    {it.label}
                  </figcaption>
                </figure>
              );
            }
            return (
              <div
                key={i}
                className={`group rounded-3xl bg-gradient-to-br from-primary/10 to-gold/10 border border-border p-6 flex flex-col justify-between card-elevated ${it.span ?? ""}`}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/8 text-primary group-hover:scale-110 transition-transform">
                  {it.icon && <it.icon className="h-5 w-5" />}
                </span>
                <div>
                  <p className="font-semibold text-foreground leading-snug">{it.label}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-normal">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
