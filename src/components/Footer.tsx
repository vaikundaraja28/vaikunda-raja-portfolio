import { socialLinks } from "../data/content";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-edge border-t border-white/10 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="font-display text-xl font-extrabold tracking-tightest text-white">
              Raja<span className="text-fog/50">.</span>
            </p>
            <p className="mt-2 text-sm font-light text-fog/60">
              AI Engineer &amp; Backend Developer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-ink"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-ink"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={socialLinks.email}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-ink"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs font-light text-fog/50">
            © {year} Raja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
