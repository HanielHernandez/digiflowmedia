import { AboutUsBlock } from "@/components/blocks/about-us-block";
import { BannerBlock } from "@/components/blocks/banner-block";
import { ContactFormBlock } from "@/components/blocks/contact-form-block";
import { ExtrasBlock } from "@/components/blocks/extras-block";
import { FaqsBlock } from "@/components/blocks/faqs-block";
import { HeroSection } from "@/components/blocks/hero-section";
import { HowItWorksBlock } from "@/components/blocks/how-it-works-block";
import { MetricsBlock } from "@/components/blocks/metrics-block";
import { PlansAndPricingBlock } from "@/components/blocks/plans-and-pricing-block";
import { ServiceBlock } from "@/components/blocks/service-block";
import { TechnologiesBlock } from "@/components/blocks/technologies-block";
import type { PageBlock } from "@/sanity/lib/pages";

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
    default:
      return null;
  }
}

export function PageBlocks({ blocks }: PageBlocksProps) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block) => {
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
