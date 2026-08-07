import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MetricsBlock } from "./metrics-block";
import { mockMetricsBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/Metrics Block",
  component: MetricsBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockMetricsBlock,
  },
} satisfies Meta<typeof MetricsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
