import { defineArrayMember, defineField, defineType } from "sanity";

const colorOptions = [
  { title: "Purple", value: "purple" },
  { title: "Blue", value: "blue" },
  { title: "Pink", value: "pink" },
  { title: "Success", value: "success" },
  { title: "Foreground", value: "foreground" },
];

export const metricsBlock = defineType({
  name: "metricsBlock",
  title: "Metrics Block",
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
      name: "metrics",
      title: "Metrics",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "object",
          name: "metric",
          title: "Metric Card",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            }),
            defineField({
              name: "color",
              title: "Color",
              type: "string",
              options: {
                list: colorOptions,
                layout: "radio",
              },
              initialValue: "purple",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "subtitle",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      metrics: "metrics",
    },
    prepare({ title, metrics }) {
      const count = Array.isArray(metrics) ? metrics.length : 0;
      return {
        title: title || "Metrics Block",
        subtitle: `${count} metric${count === 1 ? "" : "s"}`,
      };
    },
  },
});
