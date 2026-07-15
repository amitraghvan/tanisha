import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tanisha Rajan" },
      {
        name: "description",
        content:
          "Get in touch with Tanisha Rajan. Hire, collaborate or request her CV for Mathematics & Physical Sciences educator roles.",
      },
      { property: "og:title", content: "Contact — Tanisha Rajan" },
      { property: "og:description", content: "Contact details, LinkedIn, and YouTube CV links." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const details = [
  { icon: MapPin, label: "Location", value: "Himachal Pradesh, India" },
  { icon: Phone, label: "Phone", value: "+91-9015303831" },
  { icon: Mail, label: "Email", value: "tanisha.rajan28@gmail.com" },
  { icon: Clock, label: "Response", value: "Within 24 Hours" },
];

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build the future of learning together."
        description="Get in touch for school teaching roles, curriculum planning, online tutoring inquiries, or professional networking."
        crumbs={[{ label: "Contact" }]}
      />
      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {details.map((d) => (
                <div key={d.label} className="card-elevated p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="mt-1 font-medium">{d.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl p-8 card-elevated bg-cream border border-border/60">
              <h3 className="font-display text-xl font-semibold">Online Profiles</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Connect with me on professional platforms and watch my video presentation.
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href="https://www.linkedin.com/in/tanisha-rajan-18342a37a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-border hover:border-primary/30 transition group animate-fade-in"
                >
                  <div>
                    <p className="font-semibold group-hover:text-primary transition">
                      LinkedIn Profile
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Professional networking & career milestones
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
                </a>
                <a
                  href="https://youtu.be/L60L7En5ie8?si=5cCuhygdZDJ69aE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-border hover:border-primary/30 transition group animate-fade-in"
                >
                  <div>
                    <p className="font-semibold group-hover:text-primary transition">
                      YouTube Video CV
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Introductory video and micro-teaching model presentation
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — Tanisha will get back to you shortly.");
            }}
            className="card-elevated p-8 h-fit"
          >
            <h3 className="font-display text-2xl font-semibold">Send a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Please enter your contact details and message.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <label className="col-span-1 block">
                <span className="text-xs font-medium">First name</span>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="col-span-1 block">
                <span className="text-xs font-medium">Last name</span>
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="col-span-2 block">
                <span className="text-xs font-medium">Email</span>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="col-span-2 block">
                <span className="text-xs font-medium">How can I help?</span>
                <textarea
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </label>
            </div>
            <button className="btn-primary mt-6 w-full">Send message</button>
          </form>
        </div>
      </Section>
    </>
  );
}
