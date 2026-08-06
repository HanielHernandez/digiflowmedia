import { defineField, defineType } from "sanity";

export const contactFormBlock = defineType({
  name: "contactFormBlock",
  title: "Contact Form Block",
  type: "object",
  fields: [
    defineField({
      name: "eyebrowText",
      title: "Eyebrow Text",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
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
