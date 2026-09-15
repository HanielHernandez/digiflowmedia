import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PageBlocks } from "./page-blocks";
import {
  mockAboutUsBlock,
  mockBannerBlock,
  mockContactFormBlock,
  mockFaqsBlock,
  mockHeroBlock,
  mockHowItWorksBlock,
  mockMetricsBlock,
  mockPlansAndPricingBlock,
  mockExtrasBlock,
  mockServiceBlock,
  mockTechnologiesBlock,
} from "./storybook/lorem";
import { defaultWebsiteCareBlock } from "./website-care-block";
import { defaultFeatureCardsBlock } from "./feature-cards-block";

const meta = {
  title: "Blocks/Page Blocks",
  component: PageBlocks,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    blocks: [
      mockHeroBlock,
      mockServiceBlock,
      mockAboutUsBlock,
      mockMetricsBlock,
      mockBannerBlock,
      defaultFeatureCardsBlock,
      mockTechnologiesBlock,
      mockHowItWorksBlock,
      mockPlansAndPricingBlock,
      mockExtrasBlock,
      defaultWebsiteCareBlock,
      mockContactFormBlock,
      mockFaqsBlock,
    ],
  },
} satisfies Meta<typeof PageBlocks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllBlocks: Story = {};
