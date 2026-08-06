import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text" as const,
      rows: 3,
    }),
    defineField({
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    }),
    defineField({
      name: "primaryUrl",
      title: "Primary URL",
      type: "url",
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    }),
    defineField({
      name: "secondaryUrl",
      title: "Secondary URL",
      type: "url",
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Hero Section",
        subtitle: subtitle,
      };
    },
  },
});
