import { HERO_MARQUEE_ITEMS } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

type HeroMarqueeProps = {
  items?: string[] | null;
  className?: string;
};

export function HeroMarquee({ items, className }: HeroMarqueeProps) {
  const labels =
    items?.map((item) => item.trim()).filter(Boolean) ?? [];
  const row = labels.length ? labels : [...HERO_MARQUEE_ITEMS];
  const loop = [...row, ...row, ...row, ...row];

  return (
    <div
      className={cn(
        "relative mt-16 overflow-hidden border-y border-border bg-card py-4",
        className
      )}
      aria-label="Services we offer"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-card to-transparent" />
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display flex items-center gap-10 text-sm font-semibold tracking-[0.18em] text-foreground uppercase"
          >
            {item}
            <span className="size-1.5 rounded-full bg-brand-pink" />
          </span>
        ))}
      </div>
    </div>
  );
}
