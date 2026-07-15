import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Music, Trophy, Users, Palette, Globe2, HeartHandshake } from "lucide-react";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/campus-life")({
  head: () => ({
    meta: [
      { title: "Co-Curriculars — Tanisha Rajan" },
      {
        name: "description",
        content:
          "Explore Tanisha Rajan's extra-curricular activities, including NCC cadet leadership, Nukkad Natak theater, event organization, and pedagogy workshops.",
      },
      { property: "og:title", content: "Co-Curriculars — Tanisha Rajan" },
      {
        property: "og:description",
        content: "Co-curricular achievements, workshops, and leadership roles.",
      },
      { property: "og:url", content: "/campus-life" },
    ],
    links: [{ rel: "canonical", href: "/campus-life" }],
  }),
  component: CampusLife,
});

const pillars = [
  {
    icon: Trophy,
    title: "Leadership & NCC",
    copy: "NCC Cadet (2021-2023) active in leadership, volunteer initiatives, and discipline training. Served as Cambridge Internship Team Leader in 2026.",
  },
  {
    icon: Palette,
    title: "Nukkad Natak",
    copy: "Performed in Nukkad Natak (Unity in Diversity) in Dec 2025, promoting social awareness through collaborative street theatre.",
  },
  {
    icon: Music,
    title: "Event Organizing",
    copy: "Panorama Inter-School Creative Fest organizer (Sep 2025) managing logistics, registration, and coordinate fest schedules.",
  },
  {
    icon: Globe2,
    title: "Pedagogy Workshops",
    copy: "Attended the International Workshop on Cross-Cultural Pedagogical Practices of Russia (Moscow) in Feb 2025.",
  },
  {
    icon: HeartHandshake,
    title: "Digital Safety",
    copy: "Certified Cyber Security Awareness Workshop (Oct 2025) student, promoting digital safety in teaching.",
  },
  {
    icon: Users,
    title: "Empowerment Training",
    copy: "Completed the YES+ (Youth Empowerment & Skills Plus) Programme in Dec 2025, focusing on communication and personal growth.",
  },
];

function CampusLife() {
  return (
    <>
      <PageHeader
        eyebrow="Co-Curriculars"
        title="Active engagement beyond academic boundaries."
        description="Developing leadership, team collaboration, global perspectives, and community responsibility through diverse extra-curricular training."
        crumbs={[{ label: "Co-Curriculars" }]}
      />

      <Section>
        <div className="grid md:grid-cols-6 gap-4">
          <div className="md:col-span-4 rounded-3xl overflow-hidden card-elevated aspect-[16/10]">
            <img
              src={principal}
              alt="Tanisha Rajan"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:col-span-2 grid gap-4">
            <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-gold/10 border border-border p-6 flex flex-col justify-between aspect-[4/3]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/8 text-primary">
                <Trophy className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">NCC Cadet Training</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Leadership, volunteer duties, and discipline (2021-2023)
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-gold/10 to-primary/10 border border-border p-6 flex flex-col justify-between aspect-[4/3]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/8 text-primary">
                <Globe2 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Global Workshops</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Cross-Cultural Pedagogical Practices of Russia
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Leadership & Workshops" title="Activities & Training Milestones.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="card-elevated card-elevated-hover p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.copy}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
