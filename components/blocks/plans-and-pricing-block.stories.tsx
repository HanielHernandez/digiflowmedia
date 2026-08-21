import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PlansAndPricingBlock } from "./plans-and-pricing-block";
import { mockPlansAndPricingBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/Plans and Pricing Block",
  component: PlansAndPricingBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockPlansAndPricingBlock,
  },
} satisfies Meta<typeof PlansAndPricingBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
