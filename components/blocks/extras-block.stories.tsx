import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ExtrasBlock } from "./extras-block";
import { mockExtrasBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/Extras Block",
  component: ExtrasBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockExtrasBlock,
  },
} satisfies Meta<typeof ExtrasBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
