import { defineArrayMember, defineField, defineType } from "sanity";

export const technologiesBlock = defineType({
  name: "technologiesBlock",
  title: "Technologies Block",
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
      type: "text" as const,
      rows: 3,
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "technology" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "eyebrowText",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Technologies Block",
        subtitle,
      };
    },
  },
});
