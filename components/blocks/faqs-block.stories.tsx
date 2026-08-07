import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FaqsBlock } from "./faqs-block";
import { mockFaqsBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/FAQs Block",
  component: FaqsBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockFaqsBlock,
  },
} satisfies Meta<typeof FaqsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
