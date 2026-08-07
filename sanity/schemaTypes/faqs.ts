import { defineArrayMember, defineField, defineType } from "sanity";

export const faqs = defineType({
  name: "faqs",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array" as const,
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
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "question",
      answer: "answer",
    },
    prepare({ title, answer }) {
      const plain =
        Array.isArray(answer)
          ? answer
              .filter((block) => block?._type === "block")
              .map((block) =>
                Array.isArray(block.children)
                  ? block.children.map((child: { text?: string }) => child.text || "").join("")
                  : ""
              )
              .join(" ")
              .trim()
          : "";

      return {
        title: title || "FAQ",
        subtitle: plain.slice(0, 80) || undefined,
      };
    },
  },
});
