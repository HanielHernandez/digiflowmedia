import {
  Globe2Icon,
  SearchIcon,
  SmartphoneIcon,
  SparklesIcon,
  TargetIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";

import { ArrowCta } from "@/components/arrow-cta";
import { bannerPortableTextComponents } from "@/components/blocks/portable-text-table";
import { RoundedPhoto } from "@/components/rounded-photo";
import { SectionEyebrow } from "@/components/section-eyebrow";
import type {
  BannerBlock as BannerBlockType,
  BannerColor,
  BannerFeature,
  BannerOrientation,
} from "@/sanity/lib/pages";
import {
  ECOMMERCE_PHOTO,
  isAnalyzerBanner,
  isEcommerceBanner,
  sanityImageAlt,
} from "@/lib/image-alt";
import { ANALYZER_FEATURES } from "@/lib/site-copy";
import { urlFor } from "@/sanity/lib/image";
import { blockId, cn } from "@/lib/utils";
import { PortableText } from "next-sanity";

type BannerBlockProps = {
  block: BannerBlockType;
};

const colorClasses: Record<BannerColor, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  pink: "bg-brand-pink text-foreground",
};

const orientationClasses: Record<BannerOrientation, string> = {
  "left-to-right": "flex-col sm:flex-row",
  "right-to-left": "flex-col sm:flex-row-reverse",
  "top-to-bottom": "flex-col",
  "bottom-to-top": "flex-col-reverse",
};

const FEATURE_ICONS: Record<string, LucideIcon> = {
  zap: ZapIcon,
  smartphone: SmartphoneIcon,
  search: SearchIcon,
  sparkles: SparklesIcon,
  target: TargetIcon,
  globe: Globe2Icon,
};

function FeatureGrid({
  features,
  inverted,
}: {
  features: BannerFeature[];
  inverted?: boolean;
}) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon =
          FEATURE_ICONS[feature.icon || ""] ||
          FEATURE_ICONS[feature.title?.toLowerCase().split(" ")[0] || ""] ||
          SparklesIcon;

        return (
          <article
            key={`${feature.title}-${feature.description}`}
            className={cn(
              "rounded-2xl p-4",
              inverted ? "bg-white/10" : "bg-background/15"
            )}
          >
            <span className="mb-3 flex size-10 items-center justify-center rounded-full bg-brand-pink/20 text-brand-pink">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            {feature.title ? (
              <h3 className="text-sm font-semibold">{feature.title}</h3>
            ) : null}
            {feature.description ? (
              <p className="mt-1 text-xs leading-5 opacity-80">
                {feature.description}
              </p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

export function BannerBlock({ block }: BannerBlockProps) {
  const analyzer = isAnalyzerBanner(block.title, block.name);
  const ecommerce = isEcommerceBanner(block.title, block.name);
  const cmsImageUrl = block.image
    ? urlFor(block.image).width(800).height(800).url()
    : null;
  const imageUrl = ecommerce
    ? ECOMMERCE_PHOTO.src
    : cmsImageUrl;
  const imageAlt = ecommerce
    ? ECOMMERCE_PHOTO.alt
    : sanityImageAlt(block.image, block.title || "Banner");
  const color = block.color ?? "secondary";
  const orientation = block.orientation ?? "left-to-right";
  const isVertical =
    orientation === "top-to-bottom" || orientation === "bottom-to-top";
  const features =
    block.features?.filter((feature) => feature.title || feature.description) ??
    [];
  const analyzerFeatures: BannerFeature[] =
    features.length > 0
      ? features
      : analyzer
        ? ANALYZER_FEATURES.map((feature) => ({ ...feature }))
        : [];

  const media = imageUrl ? (
    <RoundedPhoto
      src={imageUrl}
      alt={imageAlt}
      className={cn(
        "aspect-square w-full shrink-0",
        isVertical
          ? "max-w-[480px] sm:max-w-[560px]"
          : "max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]"
      )}
      sizes="(max-width: 640px) 100vw, 360px"
    />
  ) : null;

  const content = (
    <div
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-4",
        isVertical || !imageUrl ? "w-full items-start text-left" : "sm:max-w-xl"
      )}
    >
      {block.eyebrowText ? (
        <SectionEyebrow tone="light">{block.eyebrowText}</SectionEyebrow>
      ) : null}
      {block.title ? (
        <p className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          {block.title}
        </p>
      ) : null}
      {block.description?.length ? (
        <div className="space-y-2 text-sm font-normal leading-6 opacity-80 [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:opacity-100 [&_ul]:list-disc">
          <PortableText
            value={block.description}
            components={bannerPortableTextComponents}
          />
        </div>
      ) : null}
      {analyzerFeatures.length ? (
        <FeatureGrid features={analyzerFeatures} inverted />
      ) : null}
      {block.ctaText && block.ctaLink ? (
        <ArrowCta
          href={block.ctaLink}
          color="pink"
          className="mt-2 text-inherit"
        >
          {block.ctaText}
        </ArrowCta>
      ) : null}
    </div>
  );

  return (
    <section id={blockId(block.name)} className="w-full px-6 py-8 lg:px-10">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-8 rounded-[2rem] px-6 py-8 sm:gap-10 sm:px-8 md:py-14",
          colorClasses[color],
          orientationClasses[orientation]
        )}
      >
        {content}
        {media}
      </div>
    </section>
  );
}
