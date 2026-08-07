import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TechnologyCard } from "./technology-card";
import { mockTechnologyItem } from "./storybook/lorem";

const meta = {
  title: "Blocks/Technology Card",
  component: TechnologyCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex bg-primary p-6 text-primary-foreground">
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
