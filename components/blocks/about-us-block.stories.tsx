import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AboutUsBlock } from "./about-us-block";
import { mockAboutUsBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/About Us Block",
  component: AboutUsBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockAboutUsBlock,
  },
} satisfies Meta<typeof AboutUsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
