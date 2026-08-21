"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getPageAnimation } from "@/lib/animations/page-animations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ScrollRevealProps = {
  slug: string;
  children: ReactNode;
};

/**
 * Client enhancer over server-rendered page blocks.
 * Content stays SSR; GSAP runs in the browser via useGSAP.
 */
export function ScrollReveal({ slug, children }: ScrollRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = container.current;
      if (!root) return;

      getPageAnimation(slug).animateOnEnter(root);
    },
    { scope: container, dependencies: [slug], revertOnUpdate: true }
  );

  return (
    <div
      ref={container}
      data-page-slug={slug}
      data-scroll-reveal=""
      className="flex w-full flex-1 flex-col"
    >
      {children}
    </div>
  );
}
