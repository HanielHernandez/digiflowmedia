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
