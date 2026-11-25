import { defineArrayMember, defineField, defineType } from "sanity";

export const productsBlock = defineType({
  name: "productsBlock",
  title: "Products Block",
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
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "object",
          name: "productCard",
          title: "Product",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({
                  name: "alt",
                  title: "Alternative text",
                  type: "string",
                  description: "SEO-friendly description of the image",
                }),
              ],
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
            defineField({ name: "ctaText", title: "CTA Text", type: "string" }),
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
          ],
          preview: {
            select: { title: "title", subtitle: "ctaLink", media: "image" },
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
        title: title || "Products Block",
        subtitle,
      };
    },
  },
});
