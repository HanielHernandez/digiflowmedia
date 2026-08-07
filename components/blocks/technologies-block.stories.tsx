import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TechnologiesBlock } from "./technologies-block";
import { mockTechnologiesBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/Technologies Block",
  component: TechnologiesBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockTechnologiesBlock,
  },
} satisfies Meta<typeof TechnologiesBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
