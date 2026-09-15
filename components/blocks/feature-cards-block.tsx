import {
  Globe2Icon,
  SearchIcon,
  SmartphoneIcon,
  SparklesIcon,
  TargetIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "next-sanity";

import { SectionEyebrow } from "@/components/section-eyebrow";
import type {
  BannerFeature,
  FeatureCardsBlock as FeatureCardsBlockType,
} from "@/sanity/lib/pages";
import { ANALYZER_FEATURES } from "@/lib/site-copy";
import { blockId } from "@/lib/utils";

type FeatureCardsBlockProps = {
  block?: FeatureCardsBlockType | null;
};

const FEATURE_ICONS: Record<string, LucideIcon> = {
  zap: ZapIcon,
  smartphone: SmartphoneIcon,
  search: SearchIcon,
  sparkles: SparklesIcon,
  target: TargetIcon,
  globe: Globe2Icon,
};

export const defaultFeatureCardsBlock: FeatureCardsBlockType = {
  _key: "feature-cards-default",
  _type: "featureCardsBlock",
  name: "AnalyzerFeatures",
  eyebrowText: "We look at",
  title: "What the Digital Growth Analyzer reviews",
  features: ANALYZER_FEATURES.map((feature) => ({ ...feature })),
};

export function FeatureCardsBlock({ block }: FeatureCardsBlockProps) {
  const data = block ?? defaultFeatureCardsBlock;
  const features =
    data.features?.filter((feature) => feature.title || feature.description) ??
    [];
  const cards: BannerFeature[] = features.length
    ? features
    : defaultFeatureCardsBlock.features ?? [];

  return (
    <section
      id={blockId(data.name) || "analyzer-features"}
      className="w-full bg-muted px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          {data.eyebrowText ? (
            <div className="mb-4">
              <SectionEyebrow tone="purple">{data.eyebrowText}</SectionEyebrow>
            </div>
          ) : null}
          {data.title ? (
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {data.title}
            </h2>
          ) : null}
          {data.description?.length ? (
            <div className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
              <PortableText value={data.description} />
            </div>
          ) : null}
        </div>

        {cards.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((feature, index) => {
              const Icon =
                FEATURE_ICONS[feature.icon || ""] ||
                FEATURE_ICONS[
                  feature.title?.toLowerCase().split(" ")[0] || ""
                ] ||
                SparklesIcon;

              return (
                <article
                  key={`${feature.title}-${index}`}
                  data-animate-item
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {feature.title ? (
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  ) : null}
                  {feature.description ? (
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {feature.description}
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
