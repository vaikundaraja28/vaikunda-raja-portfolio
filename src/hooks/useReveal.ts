import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { y = 40, duration = 0.9, stagger = 0.12, start = "top 85%", once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { y, autoAlpha: 0 });
      gsap.to(items, {
        y: 0,
        autoAlpha: 1,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          once,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, duration, stagger, start, once]);

  return ref;
}
