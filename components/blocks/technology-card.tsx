import type { TechnologyItem } from "@/sanity/lib/pages";
import { cn } from "@/lib/utils";

type TechnologyCardProps = {
  technology: TechnologyItem;
  className?: string;
};

const TECHNOLOGY_LOGOS: { match: RegExp; src: string; label: string }[] = [
  {
    match: /wordpress|word\s*press/i,
    src: "/tech/wordpress.svg",
    label: "WordPress",
  },
  { match: /elementor/i, src: "/tech/elementor.svg", label: "Elementor" },
  { match: /shopify/i, src: "/tech/shopify.svg", label: "Shopify" },
  { match: /react/i, src: "/tech/react.svg", label: "React" },
  { match: /next/i, src: "/tech/nextdotjs.svg", label: "Next.js" },
  { match: /node/i, src: "/tech/nodedotjs.svg", label: "Node.js" },
  {
    match: /analytics/i,
    src: "/tech/googleanalytics.svg",
    label: "Google Analytics",
  },
];

function logosFor(name: string) {
  return TECHNOLOGY_LOGOS.filter((logo) => logo.match.test(name));
}

export function TechnologyCard({ technology, className }: TechnologyCardProps) {
  if (!technology.name) return null;

  const logos = logosFor(technology.name);
  if (!logos.length) return null;

  return (
    <>
      {logos.map((logo) => (
        <span
          key={logo.src}
          tabIndex={0}
          aria-label={logo.label}
          className={cn(
            "group relative inline-flex flex-1 items-center justify-center text-white transition-opacity hover:opacity-80 focus-visible:opacity-80",
            className
          )}
        >
          <span
            aria-hidden="true"
            className="inline-block h-11 w-full max-w-20 bg-current"
            style={{
              maskImage: `url(${logo.src})`,
              WebkitMaskImage: `url(${logo.src})`,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
          />
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-medium whitespace-nowrap text-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            {logo.label}
          </span>
        </span>
      ))}
    </>
  );
}
