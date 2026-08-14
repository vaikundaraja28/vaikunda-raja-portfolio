import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowIcon, ArrowDownIcon } from "../components/icons";

type HeroProps = {
  onNavigate: (id: string) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-hero]");
    gsap.set(items, { y: 30, autoAlpha: 0 });
    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(items, {
      y: 0,
      autoAlpha: 1,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24"
    >
      {/* subtle accent line */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-ink/5" />

      <div className="container-edge w-full">
        <div className="max-w-5xl">
          <p data-hero className="eyebrow mb-6">
            AI Engineer &amp; Backend Developer
          </p>

          <h1
            data-hero
            className="display-xl text-ink"
          >
            Building practical
            <br />
            software &amp; intelligent
            <br />
            <span className="text-charcoal">IoT solutions.</span>
          </h1>

          <p data-hero className="body-lg mt-8 max-w-2xl">
            Final-year Electronics and Communication Engineering student exploring AI
            engineering, backend development, and connected systems.
          </p>

          <p data-hero className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-charcoal/80">
            I build AI-powered applications and IoT systems using Python, embedded
            technologies, and modern development tools. My current focus is strengthening my
            software engineering skills while creating reliable, practical solutions that
            combine AI, software, and hardware.
          </p>

          <div data-hero className="mt-10 flex flex-wrap items-center gap-4">
            <button onClick={() => onNavigate("projects")} className="btn-primary group">
              View My Work
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button onClick={() => onNavigate("contact")} className="btn-outline">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <button
        data-hero
        onClick={() => onNavigate("about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal transition-colors hover:text-ink md:flex"
        aria-label="Scroll to About"
      >
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
