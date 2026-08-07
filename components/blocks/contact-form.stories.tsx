import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ContactForm } from "./contact-form";

const meta = {
  title: "Blocks/Contact Form",
  component: ContactForm,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full max-w-lg bg-foreground p-8 text-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
