import { defineArrayMember, defineField, defineType } from "sanity";

export const websiteCareBlock = defineType({
  name: "websiteCareBlock",
  title: "Website Care Block",
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
      type: "text" as const,
      rows: 3,
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      type: "url",
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "carePlans",
      title: "Care Plans",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "object",
          name: "carePlan",
          title: "Care Plan",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text" as const,
              rows: 2,
            }),
            defineField({
              name: "badge",
              title: "Badge",
              type: "string",
            }),
            defineField({
              name: "featured",
              title: "Featured",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "features",
              title: "Features",
              type: "array" as const,
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "price" },
          },
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
        title: title || "Website Care Block",
        subtitle,
      };
    },
  },
});
