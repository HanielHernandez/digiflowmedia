import { defineArrayMember, defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
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
      name: "primaryButtonText",
      title: "Primary Button Text",
      type: "string",
    }),
    defineField({
      name: "primaryUrl",
      title: "Primary URL",
      type: "url",
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Secondary Button Text",
      type: "string",
    }),
    defineField({
      name: "secondaryUrl",
      title: "Secondary URL",
      type: "url",
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "panel",
      title: "Feature Panel",
      type: "object",
      description: "Dark panel with dotted background below the hero",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          description: 'Top-left label, e.g. "Signal / 001"',
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "array" as const,
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
          ],
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          description: "Main panel headline (first line)",
        }),
        defineField({
          name: "titleHighlight",
          title: "Title Highlight",
          type: "string",
          description: "Accent line shown in brand pink",
        }),
        defineField({
          name: "footer",
          title: "Footer",
          type: "string",
          description: 'Bottom-left text, e.g. "Strategy · Design · Technology"',
        }),
        defineField({
          name: "url",
          title: "URL",
          type: "url",
          description: "Optional link for the panel arrow icon",
          validation: (rule) =>
            rule.uri({
              allowRelative: true,
              scheme: ["http", "https", "mailto", "tel"],
            }),
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
        title: title || "Hero Section",
        subtitle,
      };
    },
  },
});
