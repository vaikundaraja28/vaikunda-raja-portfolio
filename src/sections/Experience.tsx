import { useReveal } from "../hooks/useReveal";
import { internships, education } from "../data/content";

export default function Experience() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <section id="experience" className="section-pad bg-fog/30">
      <div ref={ref} className="container-edge">
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4">
            04 — Experience &amp; Education
          </p>
          <h2 data-reveal className="display-lg text-ink">
            Where I've worked &amp; studied.
          </h2>
        </div>

        {/* Internship */}
        <div className="mb-16">
          <h3 data-reveal className="mb-8 text-sm font-semibold uppercase tracking-wider text-charcoal">
            Internship
          </h3>
          <div className="space-y-6">
            {internships.map((item) => (
              <div
                data-reveal
                key={item.role}
                className="rounded-2xl border border-ink/10 bg-white p-6 md:p-8"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h4 className="font-display text-xl font-bold text-ink">
                    {item.role}
                    <span className="font-normal text-charcoal"> — {item.org}</span>
                  </h4>
                  <p className="text-sm font-medium text-charcoal">
                    {item.period} · {item.location}
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.details.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm font-light leading-relaxed text-charcoal"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink"
                        aria-hidden="true"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 data-reveal className="mb-8 text-sm font-semibold uppercase tracking-wider text-charcoal">
            Education
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu) => (
              <div
                data-reveal
                key={edu.degree}
                className="rounded-2xl border border-ink/10 bg-white p-6 md:p-8"
              >
                <p className="text-sm font-medium text-charcoal">
                  {edu.period || "Pre-2023"}
                </p>
                <h4 className="mt-2 font-display text-lg font-bold leading-tight text-ink">
                  {edu.degree}
                </h4>
                <p className="mt-1 text-sm font-light text-charcoal">{edu.school}</p>
                <p className="mt-1 text-sm font-light text-charcoal/80">{edu.location}</p>
                <p className="mt-4 inline-flex items-center rounded-md bg-ink px-3 py-1 text-xs font-medium text-white">
                  {edu.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
