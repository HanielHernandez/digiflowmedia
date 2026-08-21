import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type AnimateOnEnter = (root: HTMLElement) => void;

export type PageAnimationEntry = {
  animateOnEnter: AnimateOnEnter;
};

const BLOCK_SELECTOR = "[data-animate-block]";
const ITEM_SELECTOR = "[data-animate-item]";

type EnterDirection = "up" | "left" | "right";

const BLOCK_DIRECTIONS: Record<string, EnterDirection> = {
  heroSection: "up",
  serviceBlock: "up",
  aboutUsBlock: "left",
  metricsBlock: "up",
  bannerBlock: "right",
  technologiesBlock: "left",
  howItWorksBlock: "left",
  plansAndPricingBlock: "up",
  extrasBlock: "left",
  faqsBlock: "right",
  contactFormBlock: "up",
};

function fromVars(direction: EnterDirection) {
  switch (direction) {
    case "left":
      return { autoAlpha: 0, x: -64, y: 0 };
    case "right":
      return { autoAlpha: 0, x: 64, y: 0 };
    default:
      return { autoAlpha: 0, x: 0, y: 56 };
  }
}

function directionForBlock(block: HTMLElement, index: number): EnterDirection {
  const type = block.dataset.blockType ?? "";
  if (BLOCK_DIRECTIONS[type]) return BLOCK_DIRECTIONS[type];
  const cycle: EnterDirection[] = ["up", "left", "right"];
  return cycle[index % cycle.length];
}

function itemDirection(
  item: HTMLElement,
  blockType: string
): EnterDirection {
  const attr = item.dataset.animateFrom as EnterDirection | undefined;
  if (attr === "left" || attr === "right" || attr === "up") return attr;

  if (
    blockType === "howItWorksBlock" ||
    blockType === "extrasBlock"
  ) {
    return "left";
  }

  if (
    blockType === "plansAndPricingBlock" ||
    blockType === "serviceBlock" ||
    blockType === "metricsBlock"
  ) {
    return "up";
  }

  return "up";
}

/** One ScrollTrigger per element — plays only when that element enters view. */
function revealWithScrollTrigger(
  element: HTMLElement,
  direction: EnterDirection,
  options: { start?: string; duration?: number; delay?: number } = {}
) {
  const start = fromVars(direction);

  gsap.fromTo(element, start, {
    autoAlpha: 1,
    x: 0,
    y: 0,
    duration: options.duration ?? 0.85,
    ease: "power3.out",
    delay: options.delay ?? 0,
    scrollTrigger: {
      trigger: element,
      start: options.start ?? "top 88%",
      toggleActions: "play none none none",
      once: true,
    },
  });
}

/**
 * Set up scroll-enter tweens for every block under `root`.
 * Each block and each nested item gets its own ScrollTrigger.
 */
export function animateBlocksOnEnter(root: HTMLElement): void {
  const blocks = gsap.utils.toArray<HTMLElement>(
    root.querySelectorAll(BLOCK_SELECTOR)
  );

  if (!blocks.length) return;

  blocks.forEach((block, index) => {
    const blockType = block.dataset.blockType ?? "";
    const items = gsap.utils.toArray<HTMLElement>(
      block.querySelectorAll(ITEM_SELECTOR)
    );

    if (items.length) {
      // Shell stays visible; each card/step/row triggers when IT enters the viewport
      gsap.set(block, { autoAlpha: 1, clearProps: "transform" });

      items.forEach((item, itemIndex) => {
        revealWithScrollTrigger(item, itemDirection(item, blockType), {
          // Rows/cards must be further into view before animating
          start:
            blockType === "extrasBlock"
              ? "top 92%"
              : blockType === "howItWorksBlock"
                ? "top 90%"
                : "top 88%",
          duration: blockType === "extrasBlock" ? 0.7 : 0.85,
          // Tiny stagger only among items that enter together (e.g. plan grid)
          delay:
            blockType === "plansAndPricingBlock" ||
            blockType === "serviceBlock" ||
            blockType === "metricsBlock"
              ? itemIndex * 0.12
              : 0,
        });
      });
      return;
    }

    revealWithScrollTrigger(block, directionForBlock(block, index), {
      start: index === 0 ? "top 95%" : "top 85%",
      duration: 1,
      delay: index === 0 ? 0.05 : 0,
    });
  });

  ScrollTrigger.refresh();
}

/**
 * Dictionary: Sanity page slug → `{ animateOnEnter }`.
 * Unknown slugs fall back to `default`.
 */
export const pageAnimations: Record<string, PageAnimationEntry> = {
  default: {
    animateOnEnter: animateBlocksOnEnter,
  },
  "/": {
    animateOnEnter: animateBlocksOnEnter,
  },
};

export function getPageAnimation(slug: string): PageAnimationEntry {
  if (!slug || slug === "/" || slug === "") {
    return pageAnimations["/"] ?? pageAnimations.default;
  }

  const normalized = slug.replace(/^\/+|\/+$/g, "");
  return (
    pageAnimations[normalized] ??
    pageAnimations[`/${normalized}`] ??
    pageAnimations.default
  );
}
