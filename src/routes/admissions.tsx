import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import {
  FileText,
  ClipboardCheck,
  MessageSquare,
  Sparkles,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Credentials & Certifications — Tanisha Rajan" },
      {
        name: "description",
        content:
          "Explore Tanisha Rajan's educational qualifications, professional certifications, DCA diploma, and academic achievements.",
      },
      { property: "og:title", content: "Credentials & Certifications — Tanisha Rajan" },
      {
        property: "og:description",
        content: "Academic grading metrics, DCA diploma, and professional certificates.",
      },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
  component: Admissions,
});

const steps = [
  {
    icon: FileText,
    title: "DCA Diploma",
    copy: "Diploma in Computer Applications (2023–2024). Verified computer capabilities in office tools, formatting, and operations.",
  },
  {
    icon: MessageSquare,
    title: "Generative AI",
    copy: "Infosys Certification in Generative AI for Teachers, Parents & Kids (Sep 2025) for integrating smart EdTech frameworks.",
  },
  {
    icon: ClipboardCheck,
    title: "Instructional Design",
    copy: "Professional Instructional Design Certification (Nov 2025) focused on visual mind maps and concept pedagogy.",
  },
  {
    icon: Sparkles,
    title: "Cyber Security & POSH",
    copy: "Certified in cybersecurity awareness, digital safety, and Prevention of Sexual Harassment at Workplace (POSH, Oct 2025).",
  },
];

const faqs = [
  {
    q: "What is your B.Ed. status?",
    a: "I am currently pursuing my Bachelor of Education (B.Ed.) at Lovely Professional University, which began in 2025.",
  },
  {
    q: "What is your subject expertise?",
    a: "My major subject areas are Mathematics and Physical Sciences (Physics & Chemistry), backed by a Bachelor of Science (B.Sc.) in Physics.",
  },
  {
    q: "Are you comfortable with EdTech platforms?",
    a: "Yes. I hold a Diploma in Computer Applications (DCA) and am certified in Google Classroom, Canva, Kahoot, and Generative AI tools for teachers.",
  },
  {
    q: "Do you have leadership experience?",
    a: "Yes. I served as an NCC Cadet (2021–2023) and led the pre-internship team at Cambridge International School in May 2026.",
  },
  {
    q: "Where did you complete your B.Sc.?",
    a: "I graduated from Maharana Pratap Govt College (Himachal Pradesh University) with a 6.50 CGPA in Physics Major.",
  },
];

function Admissions() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials & Credentials"
        title="Educational qualifications and certified credentials."
        description="Verify my certifications, academic achievements, language proficiencies, and digital skills below."
        crumbs={[{ label: "Credentials" }]}
      >
        <div className="flex flex-wrap gap-3">
          <a href="#enquiry" className="btn-primary">
            Send Enquiry <ChevronRight className="h-4 w-4" />
          </a>
          <Link to="/contact" className="btn-ghost">
            View Contact Details
          </Link>
        </div>
      </PageHeader>

      <Section eyebrow="Certifications" title="Four key credentials. Verified skills.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="card-elevated card-elevated-hover p-7 relative">
              <span className="absolute top-6 right-6 font-display text-4xl text-primary/10 font-semibold">
                0{i + 1}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ENQUIRY FORM */}
      <section id="enquiry" className="container-x pb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div>
            <p className="eyebrow">Enquiry Form</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-balance leading-[1.1]">
              Hiring or Collaboration.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Submit your request below for full-time roles, instructional design, tutoring, or
              general questions. Typically responding within 24 hours.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["Languages", "English, Hindi, State Language"],
                ["B.Sc. Physics CGPA", "6.50 CGPA"],
                ["Intermediate Score", "77.31% Percentage"],
                ["Matriculation Score", "90.50% Percentage"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="text-xs text-muted-foreground">{k}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your enquiry. Tanisha will be in touch shortly.");
            }}
            className="card-elevated p-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <label className="block col-span-1">
                <span className="text-xs font-medium text-foreground">Your name</span>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="block col-span-1">
                <span className="text-xs font-medium text-foreground">Organization / School</span>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="block col-span-1">
                <span className="text-xs font-medium text-foreground">Email</span>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="block col-span-1">
                <span className="text-xs font-medium text-foreground">Phone</span>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="block col-span-2">
                <span className="text-xs font-medium text-foreground">Inquiry Nature</span>
                <select className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm">
                  {[
                    "Full-Time Teaching Role",
                    "Instructional Design Work",
                    "Online Tutoring Inquiry",
                    "General Opportunity / Collaboration",
                  ].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </label>
              <label className="block col-span-2">
                <span className="text-xs font-medium text-foreground">Message (optional)</span>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                />
              </label>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full">
              Submit enquiry
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              By submitting you agree to our privacy policy.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-y border-border/60">
        <div className="container-x py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Frequently Asked</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.1]">
              Everything you need to know.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group card-elevated p-6 open:shadow-[0_10px_40px_-12px_oklch(0.38_0.09_152/0.15)]"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-display text-base font-semibold">{f.q}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition" />
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed pl-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
