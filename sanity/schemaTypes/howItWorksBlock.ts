import { defineArrayMember, defineField, defineType } from "sanity";

const richTextBlocks = [
  defineArrayMember({
    type: "block",
    styles: [{ title: "Normal", value: "normal" }],
    lists: [
      { title: "Bullet", value: "bullet" },
      { title: "Numbered", value: "number" },
    ],
    marks: {
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
        { title: "Underline", value: "underline" },
      ],
      annotations: [
        {
          name: "link",
          type: "object",
          title: "Link",
          fields: [
            defineField({
              name: "href",
              type: "url",
              title: "URL",
              validation: (rule) =>
                rule.uri({
                  allowRelative: true,
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            }),
          ],
        },
      ],
    },
  }),
];

export const howItWorksBlock = defineType({
  name: "howItWorksBlock",
  title: "How It Works Block",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Internal identifier for this block",
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
      type: "array" as const,
      of: richTextBlocks,
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "object",
          name: "step",
          title: "Step",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "array" as const,
              of: richTextBlocks,
            }),
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      steps: "steps",
    },
    prepare({ title, subtitle, steps }) {
      const count = Array.isArray(steps) ? steps.length : 0;
      return {
        title: title || "How It Works Block",
        subtitle: subtitle || `${count} step${count === 1 ? "" : "s"}`,
      };
    },
  },
});
