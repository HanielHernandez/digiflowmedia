import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: 'Use "/" for the home page. Other pages use paths like "about".',
      options: {
        source: "name",
        maxLength: 96,
        slugify: (input) => {
          const value = input.trim().toLowerCase();
          if (value === "/" || value === "home" || value === "homepage") {
            return "/";
          }

          return value
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-/]+/g, "")
            .replace(/^\/+|\/+$/g, "")
            .slice(0, 96);
        },
      },
      validation: (rule) =>
        rule.required().custom((slug) => {
          if (!slug?.current) return "Slug is required";
          return true;
        }),
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
    }),
    defineField({
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "serviceBlock" },
        { type: "aboutUsBlock" },
        { type: "metricsBlock" },
        { type: "bannerBlock" },
        { type: "technologiesBlock" },
        { type: "contactFormBlock" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
    },
  },
});
