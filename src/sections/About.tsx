import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-pad bg-white">
      <div ref={ref} className="container-edge">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_2fr] lg:gap-20">
          <div>
            <p data-reveal className="eyebrow mb-4">
              01 — About
            </p>
            <h2 data-reveal className="display-lg text-ink">
              Turning ideas into working technology.
            </h2>
          </div>

          <div className="space-y-6">
            <p data-reveal className="body-lg">
              I'm a final-year Electronics and Communication Engineering student who enjoys
              turning ideas into working technology. My projects span AI-powered software, IoT
              prototypes, embedded systems, and sensor-based applications, giving me experience
              across both software and hardware.
            </p>
            <p data-reveal className="body-lg">
              I've built an AI mock interview platform with resume analysis and automated
              evaluation, along with IoT systems for patient monitoring and RFID-based
              attendance. I'm currently focused on growing toward AI engineering and backend
              development, while improving my problem-solving, Python, Git/GitHub, and software
              development skills.
            </p>

            <div data-reveal className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="font-display text-3xl font-extrabold text-ink md:text-4xl">3+</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal">
                  IoT Prototypes
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-ink md:text-4xl">5+</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal">
                  Sensor Modules
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-ink md:text-4xl">8.04</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal">
                  CGPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
