import { useEffect, useState } from "react";
import { navItems } from "../data/content";

type NavbarProps = {
  onNavigate: (id: string) => void;
};

export default function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-ink/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-edge flex h-16 items-center justify-between md:h-18" aria-label="Main">
        <button
          onClick={() => handleNav("hero")}
          className="font-display text-lg font-extrabold tracking-tightest text-ink"
          aria-label="Go to top"
        >
          Raja<span className="text-charcoal">.</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium text-charcoal transition-colors hover:text-ink"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNav("contact")}
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-charcoal md:inline-flex"
        >
          Get In Touch
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="relative h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-full bg-ink transition-all duration-300 ${
                menuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-full bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full bg-ink transition-all duration-300 ${
                menuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 border-t border-ink/8" : "max-h-0"
        }`}
      >
        <ul className="container-edge flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className="w-full py-3 text-left text-base font-medium text-charcoal transition-colors hover:text-ink"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("contact")}
              className="mt-2 w-full rounded-full bg-ink px-5 py-3 text-center text-base font-medium text-white"
            >
              Get In Touch
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
