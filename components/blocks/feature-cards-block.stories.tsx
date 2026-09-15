import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FeatureCardsBlock, defaultFeatureCardsBlock } from "./feature-cards-block";

const meta = {
  title: "Blocks/Feature Cards Block",
  component: FeatureCardsBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: defaultFeatureCardsBlock,
  },
} satisfies Meta<typeof FeatureCardsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
