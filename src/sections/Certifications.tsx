import { useReveal } from "../hooks/useReveal";
import { certifications } from "../data/content";

export default function Certifications() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="certifications" className="section-pad bg-white">
      <div ref={ref} className="container-edge">
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4">
            05 — Certifications
          </p>
          <h2 data-reveal className="display-lg text-ink">
            Credentials &amp; achievements.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <div
              data-reveal
              key={cert.title}
              className="flex flex-col rounded-2xl border border-ink/10 p-6 transition-all duration-300 hover:border-ink/30 hover:-translate-y-1 md:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ink">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className="font-display text-base font-bold leading-snug text-ink">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm font-light text-charcoal">{cert.issuer}</p>
              {cert.year && (
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-charcoal/60">
                  {cert.year}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
