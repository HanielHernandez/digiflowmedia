import {
  CompassIcon,
  CpuIcon,
  HeartIcon,
  LayersIcon,
  LightbulbIcon,
  PuzzleIcon,
  ShieldIcon,
  SparklesIcon,
  TargetIcon,
  TrendingUpIcon,
  UserRoundIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "next-sanity";

import { HighlightedHeading } from "@/components/highlighted-heading";
import { RoundedPhoto } from "@/components/rounded-photo";
import { SectionEyebrow } from "@/components/section-eyebrow";
import type { AboutUsBlock as AboutUsBlockType } from "@/sanity/lib/pages";
import { ABOUT_PHOTO } from "@/lib/image-alt";

type AboutUsBlockProps = {
  block: AboutUsBlockType;
};

const DIFFERENTIATOR_ICONS: Record<string, LucideIcon> = {
  compass: CompassIcon,
  lightbulb: LightbulbIcon,
  target: TargetIcon,
  user: UserRoundIcon,
  puzzle: PuzzleIcon,
  cpu: CpuIcon,
  sparkles: SparklesIcon,
  trending: TrendingUpIcon,
  layers: LayersIcon,
  shield: ShieldIcon,
  zap: ZapIcon,
  heart: HeartIcon,
};

export function AboutUsBlock({ block }: AboutUsBlockProps) {
  const points =
    block.differentiators?.filter((item) => item.title || item.description) ??
    [];

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto">
        <div className="flex flex-col items-center md:items-start  md:flex-row  justify-center gap-16">
          <div className="flex flex-col ">
            {block.eyebrowText ? (
              <SectionEyebrow>{block.eyebrowText}</SectionEyebrow>
            ) : (
              <SectionEyebrow>Who We Are</SectionEyebrow>
            )}

            {block.title ? (
              <HighlightedHeading
                as="h2"
                title={block.title}
                highlight={block.titleHighlight}
                className="mt-10 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl"
              />
            ) : null}

            {block.content?.length ? (
              <div className="mt-10 space-y-4 border-t border-border pt-8 [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_li]:ml-5 [&_ol]:list-decimal [&_p]:text-sm [&_p]:leading-6 [&_p]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
                <PortableText value={block.content} />
              </div>
            ) : null}
          </div>

          <RoundedPhoto
            src={ABOUT_PHOTO.src}
            alt={ABOUT_PHOTO.alt}
            priority
            className="mt-8 aspect-[16/10] w-full "
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        {points.length ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {points.map((item, index) => {
              const Icon = item.icon ? DIFFERENTIATOR_ICONS[item.icon] : null;

              return (
              <article
                key={`${item.title}-${index}`}
                data-animate-item
                className="rounded-2xl border border-border bg-card p-5"
              >
                {Icon ? (
                  <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                ) : null}
                {item.title ? (
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                ) : null}
                {item.description ? (
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                ) : null}
              </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
