import { defineField, defineType } from "sanity";

export const bannerBlock = defineType({
  name: "bannerBlock",
  title: "Banner Block",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "orientation",
      title: "Orientation",
      type: "string",
      options: {
        list: [
          { title: "Left to Right", value: "left-to-right" },
          { title: "Right to Left", value: "right-to-left" },
          { title: "Top to Bottom", value: "top-to-bottom" },
          { title: "Bottom to Top", value: "bottom-to-top" },
        ],
        layout: "radio",
      },
      initialValue: "left-to-right",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "orientation",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Banner Block",
        subtitle: subtitle,
        media,
      };
    },
  },
});
