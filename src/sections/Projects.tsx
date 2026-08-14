import { useReveal } from "../hooks/useReveal";
import { projects } from "../data/content";
import { ArrowIcon } from "../components/icons";

export default function Projects() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section id="projects" className="section-pad bg-white">
      <div ref={ref} className="container-edge">
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4">
            03 — Projects
          </p>
          <h2 data-reveal className="display-lg text-ink">
            Selected work.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              data-reveal
              key={project.title}
              className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:border-ink/30 hover:shadow-[0_20px_60px_-20px_rgba(10,10,10,0.15)] md:p-8"
            >
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="mb-6 aspect-[4/3] w-full rounded-xl object-cover"
                />
              ) : (
                <div
                  className="mb-6 flex aspect-[4/3] items-center justify-center rounded-xl bg-fog/40"
                  role="img"
                  aria-label={`${project.title} screenshot placeholder`}
                >
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal/60">
                    Project Screenshot
                  </span>
                </div>
              )}

              <h3 className="font-display text-xl font-bold leading-tight text-ink md:text-2xl">
                {project.title}
              </h3>

              <p className="mt-3 text-sm font-light leading-relaxed text-charcoal">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm font-light text-charcoal"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="inline-flex items-center rounded-md bg-fog/50 px-2.5 py-1 text-xs font-medium text-charcoal">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-5">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-charcoal"
                  >
                    Live Demo
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ) : null}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-charcoal transition-colors hover:text-ink"
                >
                  Repository
                  <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
