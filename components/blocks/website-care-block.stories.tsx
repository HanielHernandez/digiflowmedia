import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WebsiteCareBlock, defaultWebsiteCareBlock } from "./website-care-block";

const meta = {
  title: "Blocks/Website Care Block",
  component: WebsiteCareBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: defaultWebsiteCareBlock,
  },
} satisfies Meta<typeof WebsiteCareBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
