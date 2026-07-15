import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section className={`container-x py-20 md:py-28 ${className}`}>
      {(eyebrow || title || description) && (
        <div className={`max-w-3xl mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.1]">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
