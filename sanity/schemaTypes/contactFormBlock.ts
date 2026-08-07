import { defineType } from "sanity";

import { field } from "./define";

export const contactFormBlock = defineType({
  name: "contactFormBlock",
  title: "Contact Form Block",
  type: "object",
  fields: [
    field({
      name: "name",
      title: "Name",
      type: "string",
      description: "Internal identifier for this block",
      validation: (rule) => rule.required(),
    }),
    field({
      name: "eyebrowText",
      title: "Eyebrow Text",
      type: "string",
    }),
    field({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    field({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact Form Block",
        subtitle,
      };
    },
  },
});
