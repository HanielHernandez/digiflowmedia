import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { HeroSectionBlock } from "@/sanity/lib/pages";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  block: HeroSectionBlock;
};

export function HeroSection({ block }: HeroSectionProps) {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-6 py-16">
        {block.title ? (
          <h1 className="font-heading text-h1 max-w-3xl">{block.title}</h1>
        ) : null}
        {block.subtitle ? (
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            {block.subtitle}
          </p>
        ) : null}
        {(block.primaryButtonText || block.secondaryButtonText) && (
          <div className="flex flex-wrap gap-4">
            {block.primaryButtonText && block.primaryUrl ? (
              <Link
                href={block.primaryUrl}
                className={cn(
                  buttonVariants({ size: "hero" }),
                  "transition-transform hover:-translate-y-1"
                )}
              >
                {block.primaryButtonText}
              </Link>
            ) : null}
            {block.secondaryButtonText && block.secondaryUrl ? (
              <Link
                href={block.secondaryUrl}
                className={cn(
                  buttonVariants({ variant: "outline-secondary", size: "hero" }),
                  "transition-transform hover:-translate-y-1"
                )}
              >
                {block.secondaryButtonText}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
