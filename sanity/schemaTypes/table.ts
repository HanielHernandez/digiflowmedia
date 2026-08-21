import { defineArrayMember, defineField, defineType } from "sanity";

export const tableRow = defineType({
  name: "tableRow",
  title: "Row",
  type: "object",
  fields: [
    defineField({
      name: "cells",
      title: "Cells",
      type: "array" as const,
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {
      cells: "cells",
    },
    prepare({ cells }) {
      const values = Array.isArray(cells) ? cells.filter(Boolean) : [];
      return {
        title: values.length ? values.join(" | ") : "Empty row",
      };
    },
  },
});

export const table = defineType({
  name: "table",
  title: "Table",
  type: "object",
  fields: [
    defineField({
      name: "hasHeader",
      title: "First row is header",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "rows",
      title: "Rows",
      type: "array" as const,
      of: [defineArrayMember({ type: "tableRow" })],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {
      rows: "rows",
    },
    prepare({ rows }) {
      const count = Array.isArray(rows) ? rows.length : 0;
      return {
        title: "Table",
        subtitle: `${count} row${count === 1 ? "" : "s"}`,
      };
    },
  },
});
