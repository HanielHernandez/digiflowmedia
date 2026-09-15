import { AboutUsBlock } from "@/components/blocks/about-us-block";
import { BannerBlock } from "@/components/blocks/banner-block";
import { ContactFormBlock } from "@/components/blocks/contact-form-block";
import { ExtrasBlock } from "@/components/blocks/extras-block";
import { FaqsBlock } from "@/components/blocks/faqs-block";
import {
  defaultFeatureCardsBlock,
  FeatureCardsBlock,
} from "@/components/blocks/feature-cards-block";
import { HeroSection } from "@/components/blocks/hero-section";
import { HowItWorksBlock } from "@/components/blocks/how-it-works-block";
import { MetricsBlock } from "@/components/blocks/metrics-block";
import { PlansAndPricingBlock } from "@/components/blocks/plans-and-pricing-block";
import { ServiceBlock } from "@/components/blocks/service-block";
import { TechnologiesBlock } from "@/components/blocks/technologies-block";
import {
  defaultWebsiteCareBlock,
  WebsiteCareBlock,
} from "@/components/blocks/website-care-block";
import { isAnalyzerBanner } from "@/lib/image-alt";
import type {
  BannerBlock as BannerBlockType,
  FeatureCardsBlock as FeatureCardsBlockType,
  PageBlock,
} from "@/sanity/lib/pages";

type PageBlocksProps = {
  blocks?: PageBlock[] | null;
};

function renderBlock(block: PageBlock) {
  switch (block._type) {
    case "heroSection":
      return <HeroSection block={block} />;
    case "serviceBlock":
      return <ServiceBlock block={block} />;
    case "aboutUsBlock":
      return <AboutUsBlock block={block} />;
    case "metricsBlock":
      return <MetricsBlock block={block} />;
    case "bannerBlock":
      return <BannerBlock block={block} />;
    case "technologiesBlock":
      return <TechnologiesBlock block={block} />;
    case "contactFormBlock":
      return <ContactFormBlock block={block} />;
    case "faqsBlock":
      return <FaqsBlock block={block} />;
    case "howItWorksBlock":
      return <HowItWorksBlock block={block} />;
    case "plansAndPricingBlock":
      return <PlansAndPricingBlock block={block} />;
    case "extrasBlock":
      return <ExtrasBlock block={block} />;
    case "featureCardsBlock":
      return <FeatureCardsBlock block={block} />;
    case "websiteCareBlock":
      return <WebsiteCareBlock block={block} />;
    default:
      return null;
  }
}

function withAnalyzerFeatures(blocks: PageBlock[]): PageBlock[] {
  if (blocks.some((block) => block._type === "featureCardsBlock")) {
    return blocks;
  }

  const analyzerIndex = blocks.findIndex(
    (block) =>
      block._type === "bannerBlock" &&
      isAnalyzerBanner(
        (block as BannerBlockType).title,
        (block as BannerBlockType).name
      )
  );

  if (analyzerIndex < 0) return blocks;

  const analyzer = blocks[analyzerIndex] as BannerBlockType;
  const injected: FeatureCardsBlockType = {
    ...defaultFeatureCardsBlock,
    features:
      analyzer.features?.filter(
        (feature) => feature.title || feature.description
      ).length
        ? analyzer.features
        : defaultFeatureCardsBlock.features,
  };

  return [
    ...blocks.slice(0, analyzerIndex + 1),
    injected,
    ...blocks.slice(analyzerIndex + 1),
  ];
}

function withWebsiteCare(blocks: PageBlock[]): PageBlock[] {
  if (blocks.some((block) => block._type === "websiteCareBlock")) {
    return blocks;
  }

  const extrasIndex = blocks.findIndex((block) => block._type === "extrasBlock");
  const beforeIndex = blocks.findIndex(
    (block) =>
      block._type === "faqsBlock" || block._type === "contactFormBlock"
  );
  const insertAt =
    extrasIndex >= 0
      ? extrasIndex + 1
      : beforeIndex >= 0
        ? beforeIndex
        : blocks.length;

  return [
    ...blocks.slice(0, insertAt),
    defaultWebsiteCareBlock,
    ...blocks.slice(insertAt),
  ];
}

export function PageBlocks({ blocks }: PageBlocksProps) {
  if (!blocks?.length) return null;

  return (
    <>
      {withWebsiteCare(withAnalyzerFeatures(blocks)).map((block) => {
        const content = renderBlock(block);
        if (!content) return null;

        return (
          <div
            key={block._key}
            data-animate-block
            data-block-type={block._type}
            className="reveal w-full"
          >
            {content}
          </div>
        );
      })}
    </>
  );
}
