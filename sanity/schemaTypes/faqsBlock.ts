import { defineArrayMember, defineField, defineType } from "sanity";

export const faqsBlock = defineType({
  name: "faqsBlock",
  title: "FAQs Block",
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
      name: "subtitle",
      title: "Subtitle",
      type: "text" as const,
      rows: 3,
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array" as const,
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "faqs" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "eyebrowText",
      faqs: "faqs",
    },
    prepare({ title, subtitle, faqs }) {
      const count = Array.isArray(faqs) ? faqs.length : 0;
      return {
        title: title || "FAQs Block",
        subtitle: subtitle || `${count} FAQ${count === 1 ? "" : "s"}`,
      };
    },
  },
});
