import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HowItWorksBlock } from "./how-it-works-block";
import { mockHowItWorksBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/How It Works Block",
  component: HowItWorksBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockHowItWorksBlock,
  },
} satisfies Meta<typeof HowItWorksBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
