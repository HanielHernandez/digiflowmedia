import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceBlock = defineType({
  name: "serviceBlock",
  title: "Service Block",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
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
      name: "description",
      title: "Description",
      type: "text" as const,
      rows: 3,
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "service" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "name",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Service Block",
        subtitle,
      };
    },
  },
});
