import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ServiceCard } from "./service-card";
import { mockServiceItem } from "./storybook/lorem";

const meta = {
  title: "Blocks/Service Card",
  component: ServiceCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm border-t border-border">
        <Story />
      </div>
    ),
  ],
  args: {
    service: mockServiceItem("service-card"),
    index: 0,
  },
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutLink: Story = {
  args: {
    service: {
      ...mockServiceItem("service-card-plain"),
      url: undefined,
      slug: undefined,
    },
  },
};

export const WithoutImage: Story = {
  args: {
    service: {
      ...mockServiceItem("service-card-text"),
      image: undefined,
    },
  },
};
