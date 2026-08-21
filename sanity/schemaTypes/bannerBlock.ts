import { defineArrayMember, defineType } from "sanity";

import { field } from "./define";

export const bannerBlock = defineType({
  name: "bannerBlock",
  title: "Banner Block",
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
      name: "description",
      title: "Description",
      type: "array",
      of: [
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
                  field({
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
        defineArrayMember({ type: "table" }),
      ],
    }),
    field({
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    }),
    field({
      name: "ctaLink",
      title: "CTA Link",
      type: "url",
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    field({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    field({
      name: "color",
      title: "Color",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Pink", value: "pink" },
        ],
        layout: "radio",
      },
      initialValue: "secondary",
      validation: (rule) => rule.required(),
    }),
    field({
      name: "orientation",
      title: "Orientation",
      type: "string",
      description:
        "Where the text content sits relative to the image (content includes eyebrow, title, description, and CTA).",
      options: {
        list: [
          { title: "Content Left / Image Right", value: "left-to-right" },
          { title: "Content Right / Image Left", value: "right-to-left" },
          { title: "Content Top / Image Bottom", value: "top-to-bottom" },
          { title: "Content Bottom / Image Top", value: "bottom-to-top" },
        ],
        layout: "radio",
      },
      initialValue: "left-to-right",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Banner Block",
        subtitle,
        media,
      };
    },
  },
});
