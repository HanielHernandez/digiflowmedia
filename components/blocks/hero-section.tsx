import { ArrowCta } from "@/components/arrow-cta";
import { HeroBrowserGraphic } from "@/components/blocks/hero-browser-graphic";
import { HeroMarquee } from "@/components/hero-marquee";
import { HighlightedHeading } from "@/components/highlighted-heading";
import { SectionEyebrow } from "@/components/section-eyebrow";
import type { HeroSectionBlock } from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

type HeroSectionProps = {
  block: HeroSectionBlock;
};

function servicesHref(text?: string, url?: string) {
  if (text && /service/i.test(text)) return "/#services";
  return url || "/#services";
}

export function HeroSection({ block }: HeroSectionProps) {
  return (
    <section id={blockId(block.name)} className="w-full">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-20 lg:px-10 lg:pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            {block.name ? (
              <div className="mb-8 flex items-center gap-3">
                <span className="size-2 rounded-full bg-success" />
                <SectionEyebrow>{block.name}</SectionEyebrow>
              </div>
            ) : null}
            {block.title ? (
              <HighlightedHeading
                as="h1"
                title={block.title}
                className="max-w-4xl text-balance text-6xl font-semibold leading-[0.95] tracking-[-0.075em] sm:text-7xl lg:text-[7.8rem]"
              />
            ) : null}
          </div>

          <div className="flex flex-col gap-7 lg:pb-2">
            {block.subtitle ? (
              <p className="max-w-md text-lg leading-7 text-muted-foreground">
                {block.subtitle}
              </p>
            ) : null}

            {(block.primaryButtonText && block.primaryUrl) ||
            block.secondaryButtonText ? (
              <div className="flex flex-col items-start gap-4">
                {block.primaryButtonText && block.primaryUrl ? (
                  <ArrowCta href={block.primaryUrl} color="purple">
                    {block.primaryButtonText}
                  </ArrowCta>
                ) : null}

                {block.secondaryButtonText ? (
                  <ArrowCta
                    href={servicesHref(
                      block.secondaryButtonText,
                      block.secondaryUrl
                    )}
                    color="pink"
                  >
                    {block.secondaryButtonText}
                  </ArrowCta>
                ) : null}
              </div>
            ) : null}

            <HeroBrowserGraphic className="mt-2 w-full max-w-md" />
          </div>
        </div>
      </div>

      <HeroMarquee items={block.marqueeItems} />
    </section>
  );
}
