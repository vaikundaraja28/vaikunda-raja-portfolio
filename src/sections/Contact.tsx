import { useReveal } from "../hooks/useReveal";
import { contactInfo } from "../data/content";
import { MailIcon, PhoneIcon, MapPinIcon, ArrowIcon } from "../components/icons";

type ContactProps = {
  onNavigate: (id: string) => void;
};

export default function Contact({ onNavigate: _onNavigate }: ContactProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-pad bg-ink text-white">
      <div ref={ref} className="container-edge">
        <div className="mx-auto max-w-4xl text-center">
          <p data-reveal className="eyebrow mb-4 text-fog/60">
            06 — Contact
          </p>
          <h2 data-reveal className="display-lg text-white">
            Let's build something.
          </h2>
          <p data-reveal className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-fog/70">
            Open to internship opportunities, collaboration on AI and IoT projects, and
            conversations about engineering. The fastest way to reach me is email.
          </p>

          <div data-reveal className="mt-10">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-300 hover:scale-[1.02] hover:bg-fog"
            >
              <MailIcon className="h-4 w-4" />
              Get In Touch
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div data-reveal className="mx-auto mt-14 grid max-w-2xl gap-6 sm:grid-cols-3">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 p-5 transition-colors hover:border-white/30"
            >
              <MailIcon className="h-5 w-5 text-fog" />
              <span className="text-xs font-medium uppercase tracking-wider text-fog/60">
                Email
              </span>
              <span className="text-sm font-light text-white">{contactInfo.email}</span>
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/10 p-5 transition-colors hover:border-white/30"
            >
              <PhoneIcon className="h-5 w-5 text-fog" />
              <span className="text-xs font-medium uppercase tracking-wider text-fog/60">
                Phone
              </span>
              <span className="text-sm font-light text-white">{contactInfo.phone}</span>
            </a>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 p-5">
              <MapPinIcon className="h-5 w-5 text-fog" />
              <span className="text-xs font-medium uppercase tracking-wider text-fog/60">
                Location
              </span>
              <span className="text-sm font-light text-white">{contactInfo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
