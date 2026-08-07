import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HeroSection } from "./hero-section";
import { mockHeroBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/Hero Section",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockHeroBlock,
  },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    block: {
      ...mockHeroBlock,
      subtitle: undefined,
      primaryButtonText: undefined,
      secondaryButtonText: undefined,
    },
  },
};
