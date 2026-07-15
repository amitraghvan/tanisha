import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  Sparkles,
  BookOpen,
  Beaker,
  Cpu,
  Palette,
  Trophy,
  Users,
  ShieldCheck,
  Leaf,
  Globe2,
  ChevronRight,
  CalendarDays,
  Newspaper,
  Quote,
  Award,
} from "lucide-react";
import principal from "@/assets/principal.jpg";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tanisha Rajan — Educator & Pedagogy Specialist Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of Tanisha Rajan, Mathematics & Science Educator. Physics graduate and B.Ed. Candidate specializing in visual pedagogy & instructional design.",
      },
      {
        property: "og:title",
        content: "Tanisha Rajan — Educator & Pedagogy Specialist Portfolio",
      },
      {
        property: "og:description",
        content:
          "Personal portfolio of Tanisha Rajan, Mathematics & Science Educator. Physics graduate and B.Ed. Candidate specializing in visual pedagogy & instructional design.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: "B.Ed.", label: "LPU Candidate (Since 2025)" },
  { value: "B.Sc.", label: "Physics Major (6.50 CGPA)" },
  { value: "500+", label: "Hours of Teaching Practice" },
  { value: "10+", label: "Professional Certifications" },
];

const programs = [
  {
    icon: Leaf,
    title: "Teaching Skills",
    grades: "Pedagogical Competency",
    copy: "Lesson planning, classroom management, and activity-based student-centred explanation skills.",
  },
  {
    icon: BookOpen,
    title: "Mathematics & Science",
    grades: "Domain Expertise",
    copy: "Delivering conceptually clear lesson plans in Mathematics and Physical Sciences for school students.",
  },
  {
    icon: Beaker,
    title: "Instructional Design",
    grades: "Visual Pedagogy",
    copy: "Designing curriculum-aligned mind maps to simplify complex concepts and enhance critical thinking.",
  },
  {
    icon: Cpu,
    title: "Digital Integration",
    grades: "EdTech & AI Tools",
    copy: "Leveraging Google Classroom, Canva, Kahoot, and AI tools for teachers to create smart learning aids.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "Conceptual Clarity",
    copy: "Focusing on concept-first learning in physics and math, ensuring deep understanding before problem solving.",
  },
  {
    icon: Globe2,
    title: "Global Pedagogy",
    copy: "Trained in international systems and cross-cultural pedagogical methodologies of Russia (Moscow).",
  },
  {
    icon: ShieldCheck,
    title: "Digital Safety",
    copy: "Certified in cybersecurity awareness and POSH to create secure, responsible online learning environments.",
  },
  {
    icon: Palette,
    title: "Creative Aids",
    copy: "Developing engaging mind maps, micro-teaching aids, and collaborative visual tools for the classroom.",
  },
  {
    icon: Trophy,
    title: "Leadership & Discipline",
    copy: "Former NCC Cadet. Experienced internship team leader coordinating academic responsibilities.",
  },
  {
    icon: Users,
    title: "Student Empowerment",
    copy: "Committed to exploring student choice, voice, and empowerment in modern learning ecosystems.",
  },
];

const testimonials = [
  {
    quote:
      "Tanisha Rajan successfully designed, built, and managed an online tutoring initiative, teaching Mathematics and Physics to school-grade students.",
    name: "Tutoring Initiative",
    role: "Online Science & Math Educator",
  },
  {
    quote:
      "Appreciated by the Pro-Chancellor of Lovely Professional University for presenting an innovative Mathematics model and educational content at the Pedagogical Prism Exhibition.",
    name: "Pedagogical Prism Exhibition",
    role: "Awarded by LPU Pro-Chancellor",
  },
  {
    quote:
      "Received strong appreciation from the faculty for outstanding performance and lesson delivery during the Micro-Teaching Competition.",
    name: "Micro-Teaching Competition",
    role: "Faculty Commendation Award",
  },
];

const news = [
  {
    tag: "Internship",
    date: "May 2026",
    title: "Pre-Internship completed at Cambridge International School, Phagwara",
    icon: Leaf,
  },
  {
    tag: "Project",
    date: "April 2026",
    title: "Designed curriculum-aligned mind maps at MGN Public School, Jalandhar",
    icon: BookOpen,
  },
  {
    tag: "Exhibition",
    date: "Nov 2025",
    title: "Presented innovative Math models at the Pedagogical Prism Exhibition",
    icon: Sparkles,
  },
];

const facilities = [
  { label: "Online tutoring hours", n: "200+" },
  { label: "Mind maps designed", n: "50+" },
  { label: "Tech & AI tools integrated", n: "15+" },
  { label: "NCC volunteer hours", n: "100+" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-radial-hero">
        <div className="absolute -top-40 -left-24 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl float-slow" />
        <div
          className="absolute top-40 -right-24 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl float-slow"
          style={{ animationDelay: "2s" }}
        />

        <div className="container-x pt-14 pb-24 md:pt-20 md:pb-32 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Seeking Educator Roles · LPU B.Ed. Candidate
            </span>

            <h1 className="mt-6 font-display text-5xl md:text-[76px] font-semibold leading-[1.02] tracking-[-0.03em] text-balance">
              Empowering young minds through{" "}
              <span className="text-gradient-forest">concept-based learning.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A passionate teacher candidate specializing in Physics, Mathematics, and Instructional
              Design. Focused on visual pedagogy, curriculum planning, and EdTech integration.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/admissions" className="btn-ghost">
                View Credentials
              </Link>
              <a
                href="https://youtu.be/L60L7En5ie8?si=5cCuhygdZDJ69aE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-foreground hover:text-primary transition"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Watch Intro Video
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">LPU Pedagogical Prism Excellence Awardee</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Commended by Pro-Chancellor and faculty
                </p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative reveal" style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-[32px] overflow-hidden card-elevated aspect-[4/5]">
              <img
                src={principal}
                alt="Tanisha Rajan - Science & Mathematics Educator"
                width={1920}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass-card rounded-2xl p-4 flex items-center gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Tanisha Rajan</p>
                  <p className="text-xs text-muted-foreground truncate">
                    B.Sc. Physics · B.Ed. Candidate
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -left-6 top-16 hidden md:block glass-card rounded-2xl p-4 shadow-elegant float-slow">
              <p className="text-2xl font-display font-semibold text-primary">500+</p>
              <p className="text-xs text-muted-foreground">Hours of Teaching</p>
            </div>
            <div
              className="absolute -right-4 bottom-24 hidden md:flex glass-card rounded-2xl p-4 shadow-elegant items-center gap-3 float-slow"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="h-2 w-2 rounded-full bg-success" />
              <p className="text-xs font-medium">Open for Educator roles</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border/60 bg-surface/60">
          <div className="container-x py-5 overflow-hidden">
            <div className="marquee text-sm text-muted-foreground">
              {[
                "Lovely Professional University B.Ed. Candidate",
                "Instructional Design Certified",
                "Generative AI for Teachers Certified",
                "Designed MGN School Mind Maps",
                "Former NCC Cadet",
                "DCA Diploma in Computer Applications",
              ]
                .concat([
                  "Lovely Professional University B.Ed. Candidate",
                  "Instructional Design Certified",
                  "Generative AI for Teachers Certified",
                  "Designed MGN School Mind Maps",
                  "Former NCC Cadet",
                  "DCA Diploma in Computer Applications",
                ])
                .map((t, i) => (
                  <span key={i} className="flex items-center gap-3 whitespace-nowrap">
                    <Sparkles className="h-3.5 w-3.5 text-gold" /> {t}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <Section className="!py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="card-elevated card-elevated-hover p-8">
              <p className="font-display text-4xl md:text-5xl font-semibold text-gradient-forest">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section
        eyebrow="Core Competencies"
        title="A structured approach to visual and active learning."
        description="Combining classical Physics rigor with modern instructional design and digital teaching methods."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p) => (
            <div key={p.title} className="card-elevated card-elevated-hover p-7 group">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <p.icon className="h-5 w-5" />
              </span>
              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {p.grades}
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.copy}</p>
              <Link
                to="/academics"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all"
              >
                Explore <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <section className="bg-primary-dark text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="container-x py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <p className="eyebrow !text-gold">Core Philosophy</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance">
              An educational philosophy engineered for concept, capability and safety.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/[0.08] transition backdrop-blur-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm opacity-75 leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATOR MESSAGE */}
      <Section>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden card-elevated aspect-[4/5] max-w-md">
              <img
                src={principal}
                alt="Tanisha Rajan"
                width={1200}
                height={1400}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-8 glass-card rounded-2xl p-4 max-w-xs shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 bg-gold rounded-full" />
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Tutoring</p>
              </div>
              <p className="mt-2 text-sm font-medium">
                Successfully managing online tutoring initiatives.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Educator's Message</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.1]">
              "Teaching is the art of making complex concepts visually simple and engaging."
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              At Lovely Professional University, I presented an innovative mathematics model at the
              Pedagogical Prism Exhibition. My vision is to combine core scientific rigor with
              active visual methods, such as mind mapping and interactive tech tools, to make
              learning math and science a joyful experience.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div>
                <p className="font-display font-semibold">Tanisha Rajan</p>
                <p className="text-sm text-muted-foreground">
                  Mathematics & Science Educator · B.Ed. Candidate
                </p>
              </div>
            </div>
            <Link to="/about" className="mt-8 inline-flex btn-ghost">
              Read my story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* CAMPUS + FACILITIES */}
      <Section
        eyebrow="Creative Journey"
        title="A learning pathway designed for comprehension."
        description="Developing concepts through structured mind mapping, hands-on micro-teaching, and tech integration."
      >
        <div className="grid md:grid-cols-6 gap-4">
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden card-elevated aspect-[16/10]">
            <img
              src={principal}
              alt="Tanisha Rajan Portrait"
              width={1920}
              height={1080}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <p className="text-xs uppercase tracking-widest opacity-80">Visual Pedagogy</p>
              <p className="mt-1 font-display text-2xl md:text-3xl font-semibold">
                Applying instructional design principles to mathematics
              </p>
            </div>
          </div>
          <div className="md:col-span-2 grid gap-4">
            <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-gold/10 border border-border p-6 flex flex-col justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/8 text-primary">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Interactive Mind Maps</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Applying visual learning to CBSE curricula
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-gold/10 to-primary/10 border border-border p-6 flex flex-col justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/8 text-primary">
                <Beaker className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Scientific Inquiry</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Delivering physical science experiments
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((f) => (
            <div key={f.label} className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display text-3xl font-semibold text-primary">{f.n}</p>
              <p className="text-sm text-muted-foreground mt-1">{f.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="bg-cream border-y border-border/60">
        <div className="container-x py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow">Key Highlights</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.1]">
              Recognized achievements and personal tutoring business.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-elevated p-8 flex flex-col">
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-auto pt-8">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <Section eyebrow="Featured Experience" title="Milestones & School Internships.">
        <div className="grid md:grid-cols-3 gap-5">
          {news.map((n) => (
            <article
              key={n.title}
              className="group card-elevated card-elevated-hover overflow-hidden"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center text-primary group-hover:scale-105 transition duration-700">
                <n.icon className="h-12 w-12" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-1 font-medium">
                    <Newspaper className="h-3 w-3" /> {n.tag}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" /> {n.date}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-primary transition">
                  {n.title}
                </h3>
                <Link
                  to="/academics"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                >
                  Read more <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ADMISSIONS CTA */}
      <section className="container-x pb-24">
        <div
          className="relative overflow-hidden rounded-[32px] p-10 md:p-16 border border-primary/15"
          style={{ background: "linear-gradient(135deg, var(--primary-light), var(--cream))" }}
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <p className="eyebrow">Credentials & Contact</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.05]">
                Nurturing the educators of tomorrow.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg max-w-xl">
                Get in touch for tutoring, curriculum planning, or teaching opportunities. Typically
                responding within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link to="/academics" className="btn-ghost">
                  Explore Experience
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Mathematics", "Physical Science", "Instructional Design", "DCA & EdTech"].map(
                (g, i) => (
                  <div key={g} className="card-elevated p-5">
                    <p className="text-xs text-muted-foreground">Competency 0{i + 1}</p>
                    <p className="mt-1 font-semibold">{g}</p>
                    <p className="text-xs text-primary mt-2">Verified Skill</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
