import type { StorybookConfig } from "@storybook/nextjs-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  async viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias = [
      {
        find: "@/sanity/lib/image",
        replacement: path.resolve(dirname, "./mocks/sanity-image.ts"),
      },
      {
        find: "@",
        replacement: path.resolve(dirname, ".."),
      },
      ...(Array.isArray(config.resolve.alias)
        ? config.resolve.alias
        : Object.entries(config.resolve.alias ?? {}).map(([find, replacement]) => ({
            find,
            replacement: String(replacement),
          }))),
    ];
    return config;
  },
};

export default config;
