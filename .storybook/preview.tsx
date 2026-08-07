import type { Preview } from "@storybook/nextjs-vite";
import { Geist_Mono, Inter, Sora } from "next/font/google";

import "../app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        className={`${inter.variable} ${sora.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "padded",
    backgrounds: {
      options: {
        light: { name: "Light", value: "#ffffff" },
        surface: { name: "Surface", value: "#f8fafc" },
        dark: { name: "Dark", value: "#0f0728" },
      },
    },
    a11y: {
      test: "todo",
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
  },
};

export default preview;
