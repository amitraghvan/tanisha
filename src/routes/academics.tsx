import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import {
  BookOpen,
  Beaker,
  Cpu,
  Leaf,
  GraduationCap,
  Presentation,
  ClipboardList,
  CalendarDays,
} from "lucide-react";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Experience — Tanisha Rajan" },
      {
        name: "description",
        content:
          "Explore Tanisha Rajan's school teaching internships, mind map curriculum projects, and visual pedagogical methodologies.",
      },
      { property: "og:title", content: "Experience — Tanisha Rajan" },
      {
        property: "og:description",
        content: "School teaching practice, internships, and mind maps projects.",
      },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: Academics,
});

const stages = [
  {
    icon: Leaf,
    title: "Cambridge International School",
    grades: "Pre-Internship (May 2026)",
    highlights: [
      "Mathematics & Physical Science teaching",
      "Lesson planning & classroom observation",
      "Learner-centred teaching strategies",
    ],
  },
  {
    icon: BookOpen,
    title: "MGN Public School",
    grades: "Curriculum Project (April 2026)",
    highlights: [
      "Curriculum-aligned mind maps design",
      "Visual pedagogy instruction",
      "Simplifying complex scientific concepts",
    ],
  },
  {
    icon: Beaker,
    title: "Classroom Teaching Practice",
    grades: "B.Ed. Training (Nov 2026)",
    highlights: [
      "Delivering custom lesson plans",
      "Classroom management practice",
      "Implementing active learning formats",
    ],
  },
  {
    icon: Cpu,
    title: "Internship Team Leader",
    grades: "Leadership Role (May 2026)",
    highlights: [
      "Coordinating academic responsibilities",
      "Leading teaching practice team",
      "Evaluating lesson effectiveness",
    ],
  },
];

const methods = [
  {
    icon: Presentation,
    title: "Inquiry-led visual pedagogy",
    copy: "Using custom mind maps and models to help students visualize abstract scientific and math theories.",
  },
  {
    icon: ClipboardList,
    title: "Formative feedback assessment",
    copy: "Continuous checkpoints and interactive quizzes like Kahoot to monitor and adjust lesson speeds.",
  },
  {
    icon: GraduationCap,
    title: "Learner-centred design",
    copy: "Planning pathways that respect student choice, voice, and unique cognitive speeds.",
  },
  {
    icon: CalendarDays,
    title: "Micro-teaching training",
    copy: "Polishing instruction delivery, lesson planning, and student engagement via structured iterations.",
  },
];

function Academics() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Practical internships and school pedagogy projects."
        description="Gaining hands-on teaching, planning, and leadership competence across premier CBSE and International school frameworks."
        crumbs={[{ label: "Experience" }]}
      />

      <Section eyebrow="School Experience" title="Practical teaching and curriculum planning.">
        <div className="grid md:grid-cols-2 gap-5">
          {stages.map((s) => (
            <div key={s.title} className="card-elevated card-elevated-hover p-8">
              <div className="flex items-start gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {s.grades}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{s.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="container-x pb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="rounded-[28px] overflow-hidden card-elevated aspect-[4/3]">
            <img
              src={principal}
              alt="Tanisha Rajan"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Teaching Methodology</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-balance leading-[1.1]">
              Classrooms that discover. Mentorship that guides.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              My methodology utilizes active concept visualizers, structured micro-teaching
              training, and cybersecurity integrations to deliver safe, effective digital education.
            </p>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {methods.map((m) => (
            <div key={m.title} className="card-elevated p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary">
                <m.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
