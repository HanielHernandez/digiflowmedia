import { defineType } from "sanity";

import { field } from "./define";

export const contactFormBlock = defineType({
  name: "contactFormBlock",
  title: "Contact Form Block",
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
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    }),
    field({
      name: "phone",
      title: "Phone",
      type: "string",
      description: "Shown as a call link, for example +1 305-320-9637",
    }),
    field({
      name: "email",
      title: "Email",
      type: "string",
      description: "Shown as a mailto link",
    }),
    field({
      name: "instagram",
      title: "Instagram",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    field({
      name: "facebook",
      title: "Facebook",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    field({
      name: "whatsapp",
      title: "WhatsApp",
      type: "string",
      description: "Shown under Call or WhatsApp, for example +1 (786) 600-4983",
    }),
    field({
      name: "location",
      title: "Location",
      type: "string",
    }),
    field({
      name: "hours",
      title: "Business hours",
      type: "string",
      description: "For example Monday – Friday | 8:00 AM – 5:00 PM",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Contact Form Block",
        subtitle,
      };
    },
  },
});
