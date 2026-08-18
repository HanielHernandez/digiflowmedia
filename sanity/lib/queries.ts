import { defineQuery } from "next-sanity";

export const PAGE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "page" && slug.current in $candidates][0]{
    _id,
    name,
    "slug": slug.current,
    layout,
    blocks[]{
      _key,
      _type,
      name,
      title,
      subtitle,
      description,
      content,
      eyebrowText,
      image,
      ctaText,
      ctaLink,
      orientation,
      primaryButtonText,
      primaryUrl,
      secondaryButtonText,
      secondaryUrl,
      panel{
        label,
        description,
        title,
        titleHighlight,
        footer,
        url
      },
      metrics[]{
        _key,
        title,
        subtitle,
        color
      },
      services[]->{
        _id,
        name,
        title,
        description,
        url,
        "slug": slug.current,
        image
      },
      technologies[]->{
        _id,
        name,
        description,
        image
      },
      faqs[]->{
        _id,
        question,
        answer
      },
      steps[]{
        _key,
        title,
        description
      }
    }
  }
`);
