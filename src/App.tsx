import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -72 });
    }
  };

  return (
    <>
      <Navbar onNavigate={scrollToId} />
      <main>
        <Hero onNavigate={scrollToId} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact onNavigate={scrollToId} />
      </main>
      <Footer />
    </>
  );
}
