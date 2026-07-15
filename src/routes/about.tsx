import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { Compass, Target, Heart, Sparkles, Award } from "lucide-react";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tanisha Rajan" },
      {
        name: "description",
        content:
          "The story, mission, and philosophy of Tanisha Rajan, an educator and pedagogy specialist with a background in Physics and active visual teaching methodologies.",
      },
      { property: "og:title", content: "About — Tanisha Rajan" },
      { property: "og:description", content: "My story, mission, philosophy, and milestones." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const pillars = [
  {
    icon: Compass,
    title: "Vision",
    copy: "To make Mathematics & Science accessible, visual, and conceptual for every learner.",
  },
  {
    icon: Target,
    title: "Mission",
    copy: "Leverage instructional design, visual mind mapping, and EdTech to deliver engaging student-centred pedagogy.",
  },
  {
    icon: Heart,
    title: "Values",
    copy: "Conceptual clarity, digital safety, collaboration, leadership, and student empowerment.",
  },
  {
    icon: Sparkles,
    title: "Philosophy",
    copy: "Teaching is about protecting the curiosity of children and giving them active voice, choice, and agency.",
  },
];

const timeline = [
  {
    year: "2018–2021",
    title: "Matriculation & Intermediate Sciences",
    copy: "Completed Matriculation with 90.50% at Modern Sen. Sec. School and Intermediate with 77.31% at Model Govt. Sen. Sec. School.",
  },
  {
    year: "2021–2024",
    title: "Bachelor of Science (Physics Major)",
    copy: "Graduated with 6.50 CGPA from Maharana Pratap Govt. College (Himachal Pradesh University). NCC Cadet from 2021-2023.",
  },
  {
    year: "2023–2024",
    title: "Diploma in Computer Applications (DCA)",
    copy: "Gained digital literacy, software competencies, and document formatting capabilities from National Industries Corporation.",
  },
  {
    year: "2025",
    title: "Joined Lovely Professional University",
    copy: "Began Bachelor of Education (B.Ed.). Received English communication and micro-teaching training.",
  },
  {
    year: "2026",
    title: "Internships & Mind Maps Projects",
    copy: "Developed mind maps at MGN Public School, completed pre-internship at Cambridge International School, and led the internship team.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="My Story"
        title="A passionate physics graduate and educator specializing in visual learning."
        description="I combine a deep background in Physics with specialized training in modern pedagogy, B.Ed. methodologies, and instructional design to create classrooms that think."
        crumbs={[{ label: "About" }]}
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-[28px] overflow-hidden card-elevated aspect-[4/3]">
            <img
              src={principal}
              alt="Tanisha Rajan"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Who I am</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-balance leading-[1.1]">
              Tanisha Rajan, an educator and B.Ed. candidate based in Himachal Pradesh, India.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Combining scientific analysis from Physics studies with visual concepts of mind
              mapping. Currently pursuing B.Ed. at Lovely Professional University to empower
              learners in Mathematics and Science.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="What I stand for" title="Four pillars, one purpose.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
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

      <Section eyebrow="Recognition" title="Approved and commended by faculty.">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-[28px] bg-gradient-to-br from-primary/10 to-gold/10 border border-border p-10 flex flex-col justify-between aspect-square max-w-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-display font-semibold text-primary">Pedagogical Prism</p>
              <p className="text-sm font-medium text-foreground mt-2">
                Lovely Professional University Exhibition
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Awarded for outstanding conceptual Math & Physics models
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold">
              Exhibition & Competition Commendations
            </h3>
            <p className="text-primary text-sm font-medium mt-1">Lovely Professional University</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Appreciated by the Pro-Chancellor of Lovely Professional University for presenting an
              innovative Mathematics model and educational content at the Pedagogical Prism
              Exhibition. Commended by faculty for outstanding micro-teaching delivery.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 text-lg italic text-foreground/85">
              "Appreciated for presenting innovative models demonstrating visual concepts in
              Mathematics and Physical Sciences."
            </blockquote>
          </div>
        </div>
      </Section>

      <section className="bg-cream border-y border-border/60">
        <div className="container-x py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">My Path</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.1]">
              Academic & Career Milestones.
            </h2>
          </div>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-gold/30 to-transparent" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
                >
                  <div
                    className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}
                  >
                    <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-4 ring-cream" />
                    <p className="font-display text-2xl font-semibold text-primary">{t.year}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm max-w-md md:ml-auto">
                      {t.copy}
                    </p>
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
