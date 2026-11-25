import {
  AppWindowIcon,
  ChartColumnIcon,
  EyeIcon,
  GaugeIcon,
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
import { blockId, cn } from "@/lib/utils";

type FeatureCardsBlockProps = {
  block: FeatureCardsBlockType;
  /** Render inside another block (e.g. a banner's right content) without the section wrapper. */
  embedded?: boolean;
};

const FEATURE_ICONS: Record<string, LucideIcon> = {
  gauge: GaugeIcon,
  browser: AppWindowIcon,
  chart: ChartColumnIcon,
  eye: EyeIcon,
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
  eyebrowText: "Analysis categories",
  title: "What we look at",
  features: [
    {
      icon: "gauge",
      title: "Performance",
      description: "How fast and efficiently your website loads.",
    },
    {
      icon: "smartphone",
      title: "Mobile",
      description: "How your website performs on phones and tablets.",
    },
    {
      icon: "search",
      title: "SEO",
      description: "How well your website is structured for search engines.",
    },
    {
      icon: "browser",
      title: "Usability",
      description: "How easy it is for visitors to find what they need.",
    },
    {
      icon: "chart",
      title: "Conversions",
      description: "Where you may be losing potential customers.",
    },
    {
      icon: "eye",
      title: "Visibility",
      description:
        "How effectively your digital presence represents your business.",
    },
  ],
};

export function FeatureCardsBlock({
  block,
  embedded = false,
}: FeatureCardsBlockProps) {
  const cards: BannerFeature[] =
    block.features?.filter((feature) => feature.title || feature.description) ??
    [];


  const grid = cards.length ? (
    <div
      className={cn(
        "grid gap-4",
        embedded ? "grid-cols-1 sm:grid-cols-3" : "sm:grid-cols-2 md:grid-cols-3"
      )}
    >
      {cards.map((feature, index) => {
        const Icon =
          FEATURE_ICONS[feature.icon || ""] ||
          FEATURE_ICONS[feature.title?.toLowerCase().split(" ")[0] || ""] ||
          SparklesIcon;

        return (
          <article
            key={`${feature.title}-${index}`}
            data-animate-item
            className={cn(
              "rounded-2xl  bg-gray-200/20 shadow-sm text-white",
              embedded ? "flex flex-col items-center  gap-3 p-4" : "p-5"
            )}
          >
            <span
              className={cn(
                "flex size- shrink-0 items-center justify-center rounded-full bg-gra/10 text-white",
                !embedded && "mb-4"
              )}
            >
              <Icon className="size-10" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              {feature.title ? (
                <h3 className="text-sm font-semibold text-white">
                  {feature.title}
                </h3>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  ) : null;

  if (embedded) {
    return (
      <div className="w-full min-w-0">

        {grid}
      </div>
    );
  }

  return (
    <section
      id={blockId(block.name) || "analyzer-features"}
      className="w-full bg-muted px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {grid}
      </div>
    </section>
  );
}
