import type { TechnologyItem } from "@/sanity/lib/pages";
import { cn } from "@/lib/utils";

type TechnologyCardProps = {
  technology: TechnologyItem;
  className?: string;
};

export function TechnologyCard({ technology, className }: TechnologyCardProps) {
  if (!technology.name) return null;

  return (
    <span
      className={cn(
        "rounded-full border border-primary-foreground/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground hover:text-primary",
        className
      )}
    >
      {technology.name}
    </span>
  );
}
