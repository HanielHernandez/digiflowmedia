import { defineArrayMember, defineType } from "sanity";

import { field } from "./define";

export const aboutUsBlock = defineType({
  name: "aboutUsBlock",
  title: "About Us Block",
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
      name: "titleHighlight",
      title: "Title Highlight",
      type: "string",
      description: "Optional accent phrase shown in brand pink",
    }),
    field({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
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
      name: "differentiators",
      title: "Differentiators",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "differentiator",
          fields: [
            field({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Compass", value: "compass" },
                  { title: "Lightbulb", value: "lightbulb" },
                  { title: "Target", value: "target" },
                  { title: "Person", value: "user" },
                  { title: "Puzzle", value: "puzzle" },
                  { title: "CPU", value: "cpu" },
                  { title: "Sparkles", value: "sparkles" },
                  { title: "Trending up", value: "trending" },
                  { title: "Layers", value: "layers" },
                  { title: "Shield", value: "shield" },
                  { title: "Zap", value: "zap" },
                  { title: "Heart", value: "heart" },
                ],
              },
            }),
            field({ name: "title", title: "Title", type: "string" }),
            field({
              name: "description",
              title: "Description",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        }),
      ],
    }),
    field({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        field({
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "SEO-friendly description of the image",
        }),
      ],
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
        title: title || "About Us Block",
        subtitle,
        media,
      };
    },
  },
});
