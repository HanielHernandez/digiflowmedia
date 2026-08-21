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

export const plansAndPricingBlock = defineType({
  name: "plansAndPricingBlock",
  title: "Plans and Pricing Block",
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
      name: "plans",
      title: "Plans",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "plan" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Plans and Pricing Block",
        subtitle,
      };
    },
  },
});
