import { useReveal } from "../hooks/useReveal";
import { skillGroups } from "../data/content";

export default function Skills() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <section id="skills" className="section-pad bg-ink text-white">
      <div ref={ref} className="container-edge">
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4 text-fog/60">
            02 — Skills
          </p>
          <h2 data-reveal className="display-lg text-white">
            Tools &amp; technologies I work with.
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div data-reveal key={group.label}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fog/70">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:-translate-y-0.5">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
