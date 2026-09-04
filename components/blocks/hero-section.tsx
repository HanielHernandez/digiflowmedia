import Link from "next/link";
import { Globe2Icon, MoveUpRightIcon } from "lucide-react";
import { PortableText } from "next-sanity";

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
  const panel = block.panel;
  const panelUrl = panel?.url || "/#contact";
  const hasPanelContent =
    panel?.label ||
    panel?.description?.length ||
    panel?.title ||
    panel?.titleHighlight ||
    panel?.footer;

  return (
    <section
      id={blockId(block.name)}
      className="w-full"
    >
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

      {hasPanelContent ? (
        <div className="mx-auto w-full max-w-7xl px-6 pt-16 lg:px-10 lg:pt-20">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-foreground p-6 text-background sm:min-h-[490px] sm:p-10">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #e17cf6 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative flex h-full min-h-[310px] flex-col justify-between sm:min-h-[410px]">
              <div className="flex items-start justify-between gap-6">
                {panel?.label ? (
                  <p className="max-w-xl font-display text-sm font-semibold tracking-[0.08em] text-brand-pink uppercase sm:text-base">
                    {panel.label}
                  </p>
                ) : (
                  <span />
                )}
                <Globe2Icon className="size-6 shrink-0 text-brand-pink" />
              </div>

              <div className="max-w-2xl">
                {panel?.description?.length ? (
                  <div className="mb-5 max-w-lg space-y-3 text-sm leading-6 text-background/70 [&_a]:text-brand-pink [&_a]:underline [&_li]:ml-0 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:list-none [&_ol]:list-none [&_ol]:space-y-2 [&_strong]:font-semibold [&_strong]:text-background [&_ul]:list-none [&_ul]:space-y-2">
                    <PortableText value={panel.description} />
                  </div>
                ) : null}
                {panel?.title || panel?.titleHighlight ? (
                  <HighlightedHeading
                    as="p"
                    title={panel?.title}
                    highlight={panel?.titleHighlight}
                    className="font-display text-4xl font-semibold tracking-[-0.06em] sm:text-6xl"
                    accentClassName="text-brand-pink"
                  />
                ) : null}
              </div>

              <div className="flex items-end justify-between">
                {panel?.footer ? (
                  <span className="font-display text-xs uppercase tracking-[0.16em] text-background/50">
                    {panel.footer}
                  </span>
                ) : (
                  <span />
                )}
                <Link
                  href={panelUrl}
                  aria-label="Go to the contact form"
                  className="flex size-12 items-center justify-center rounded-full bg-brand-pink text-foreground transition-transform hover:rotate-12"
                >
                  <MoveUpRightIcon className="size-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
