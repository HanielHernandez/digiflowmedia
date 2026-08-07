import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TechnologyCard } from "./technology-card";
import { mockTechnologyItem } from "./storybook/lorem";

const meta = {
  title: "Blocks/Technology Card",
  component: TechnologyCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
  args: {
    technology: mockTechnologyItem("technology-card"),
  },
} satisfies Meta<typeof TechnologyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutImage: Story = {
  args: {
    technology: {
      ...mockTechnologyItem("technology-card-text"),
      image: undefined,
    },
  },
};
