import { defineType } from "sanity";

import { field } from "./define";

export const contactFormBlock = defineType({
  name: "contactFormBlock",
  title: "Contact Form Block",
  type: "object",
  fields: [
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
      title: "title",
      subtitle: "eyebrowText",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact Form Block",
        subtitle,
      };
    },
  },
});
