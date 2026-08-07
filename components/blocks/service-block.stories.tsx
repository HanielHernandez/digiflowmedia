import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ServiceBlock } from "./service-block";
import { mockServiceBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/Service Block",
  component: ServiceBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockServiceBlock,
  },
} satisfies Meta<typeof ServiceBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
