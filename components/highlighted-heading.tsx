import { splitHighlightedTitle } from "@/lib/highlighted-title";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "p";

type HighlightedHeadingProps = {
  as?: HeadingTag;
  title?: string;
  highlight?: string;
  className?: string;
  accentClassName?: string;
};

export function HighlightedHeading({
  as: Tag = "h2",
  title,
  highlight,
  className,
  accentClassName = "text-brand-pink",
}: HighlightedHeadingProps) {
  const parts = splitHighlightedTitle(title, highlight);
  if (!parts) return null;

  return (
    <Tag className={className}>
      {parts.lead}
      {parts.accent ? (
        <>
          {parts.lead ? " " : null}
          <span className={cn(accentClassName)}>{parts.accent}</span>
        </>
      ) : null}
    </Tag>
  );
}
