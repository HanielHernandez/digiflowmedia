import { AboutUsBlock } from "@/components/blocks/about-us-block";
import { BannerBlock } from "@/components/blocks/banner-block";
import { ContactFormBlock } from "@/components/blocks/contact-form-block";
import { HeroSection } from "@/components/blocks/hero-section";
import { MetricsBlock } from "@/components/blocks/metrics-block";
import { ServiceBlock } from "@/components/blocks/service-block";
import { TechnologiesBlock } from "@/components/blocks/technologies-block";
import type { PageBlock } from "@/sanity/lib/pages";

type PageBlocksProps = {
  blocks?: PageBlock[] | null;
};

export function PageBlocks({ blocks }: PageBlocksProps) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case "heroSection":
            return <HeroSection key={block._key} block={block} />;
          case "serviceBlock":
            return <ServiceBlock key={block._key} block={block} />;
          case "aboutUsBlock":
            return <AboutUsBlock key={block._key} block={block} />;
          case "metricsBlock":
            return <MetricsBlock key={block._key} block={block} />;
          case "bannerBlock":
            return <BannerBlock key={block._key} block={block} />;
          case "technologiesBlock":
            return <TechnologiesBlock key={block._key} block={block} />;
          case "contactFormBlock":
            return <ContactFormBlock key={block._key} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
