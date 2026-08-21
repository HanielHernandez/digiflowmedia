import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BannerBlock } from "./banner-block";
import { mockBannerBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/Banner Block",
  component: BannerBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockBannerBlock,
  },
} satisfies Meta<typeof BannerBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftToRight: Story = {};

export const RightToLeft: Story = {
  args: {
    block: {
      ...mockBannerBlock,
      orientation: "right-to-left",
    },
  },
};

export const TopToBottom: Story = {
  args: {
    block: {
      ...mockBannerBlock,
      orientation: "top-to-bottom",
    },
  },
};

export const BottomToTop: Story = {
  args: {
    block: {
      ...mockBannerBlock,
      orientation: "bottom-to-top",
    },
  },
};

export const Primary: Story = {
  args: {
    block: {
      ...mockBannerBlock,
      color: "primary",
    },
  },
};

export const Pink: Story = {
  args: {
    block: {
      ...mockBannerBlock,
      color: "pink",
    },
  },
};
