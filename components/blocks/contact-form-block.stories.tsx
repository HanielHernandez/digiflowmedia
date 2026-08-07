import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ContactFormBlock } from "./contact-form-block";
import { mockContactFormBlock } from "./storybook/lorem";

const meta = {
  title: "Blocks/Contact Form Block",
  component: ContactFormBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    block: mockContactFormBlock,
  },
} satisfies Meta<typeof ContactFormBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
