import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FaqAccordion } from "./faq-accordion";
import { mockFaqsBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/FAQ Accordion",
  component: FaqAccordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl border-t">
        <Story />
      </div>
    ),
  ],
  args: {
    faqs: mockFaqsBlock.faqs ?? [],
  },
} satisfies Meta<typeof FaqAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
