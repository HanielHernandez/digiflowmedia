import type { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

import type {
  AboutUsBlock,
  BannerBlock,
  ContactFormBlock,
  FaqItem,
  FaqsBlock,
  HeroSectionBlock,
  MetricsBlock,
  ServiceBlock,
  ServiceItem,
  TechnologiesBlock,
  TechnologyItem,
} from "@/sanity/lib/pages";

export const lorem = {
  eyebrow: "Lorem ipsum",
  title: "Lorem ipsum dolor sit",
  subtitle: "Lorem ipsum dolor sit amet",
  cta: "Lorem ipsum",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  paragraphLong:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export function mockImage(seed: string): SanityImageSource {
  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: `image-${seed}-1200x900-jpg`,
    },
  };
}

export function mockPortableText(text: string): PortableTextBlock[] {
  return [
    {
      _type: "block",
      _key: "block-1",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "span-1",
          marks: [],
          text,
        },
      ],
    },
  ];
}

export const mockHeroBlock: HeroSectionBlock = {
  _key: "hero-1",
  _type: "heroSection",
  name: "Hero",
  title: lorem.title,
  subtitle: lorem.paragraph,
  primaryButtonText: lorem.cta,
  primaryUrl: "/contact",
  secondaryButtonText: "Lorem amet",
  secondaryUrl: "/about",
  panel: {
    label: "Signal / 001",
    description: mockPortableText(lorem.subtitle),
    title: "Good work",
    titleHighlight: "travels fast.",
    footer: "Strategy · Design · Technology",
    url: "/contact",
  },
};

export const mockServiceItem = (id: string): ServiceItem => ({
  _id: id,
  name: lorem.eyebrow,
  title: lorem.title,
  description: mockPortableText(lorem.paragraph),
  url: "/services",
  slug: "lorem-ipsum",
  image: mockImage(id),
});

export const mockServiceBlock: ServiceBlock = {
  _key: "services-1",
  _type: "serviceBlock",
  name: "Services",
  eyebrowText: lorem.eyebrow,
  title: lorem.title,
  description: lorem.paragraph,
  services: [
    mockServiceItem("service-1"),
    mockServiceItem("service-2"),
    mockServiceItem("service-3"),
  ],
};

export const mockAboutUsBlock: AboutUsBlock = {
  _key: "about-1",
  _type: "aboutUsBlock",
  name: "About",
  eyebrowText: lorem.eyebrow,
  title: lorem.title,
  content: mockPortableText(lorem.paragraphLong),
  image: mockImage("about-us"),
};

export const mockMetricsBlock: MetricsBlock = {
  _key: "metrics-1",
  _type: "metricsBlock",
  name: "Metrics",
  metrics: [
    {
      _key: "m1",
      title: "120+",
      subtitle: lorem.subtitle,
      color: "purple",
    },
    {
      _key: "m2",
      title: "45",
      subtitle: lorem.subtitle,
      color: "blue",
    },
    {
      _key: "m3",
      title: "98%",
      subtitle: lorem.subtitle,
      color: "pink",
    },
    {
      _key: "m4",
      title: "24/7",
      subtitle: lorem.subtitle,
      color: "success",
    },
  ],
};

export const mockBannerBlock: BannerBlock = {
  _key: "banner-1",
  _type: "bannerBlock",
  name: "Banner",
  eyebrowText: lorem.eyebrow,
  title: lorem.title,
  description: mockPortableText(lorem.paragraph),
  ctaText: lorem.cta,
  ctaLink: "/contact",
  image: mockImage("banner"),
  orientation: "left-to-right",
};

export const mockTechnologyItem = (id: string): TechnologyItem => ({
  _id: id,
  name: lorem.title,
  description: lorem.paragraph,
  image: mockImage(id),
});

export const mockTechnologiesBlock: TechnologiesBlock = {
  _key: "tech-1",
  _type: "technologiesBlock",
  name: "Technologies",
  eyebrowText: lorem.eyebrow,
  title: lorem.title,
  subtitle: lorem.paragraph,
  technologies: [
    mockTechnologyItem("tech-1"),
    mockTechnologyItem("tech-2"),
    mockTechnologyItem("tech-3"),
    mockTechnologyItem("tech-4"),
  ],
};

export const mockContactFormBlock: ContactFormBlock = {
  _key: "contact-1",
  _type: "contactFormBlock",
  name: "Contact",
  eyebrowText: lorem.eyebrow,
  title: lorem.title,
  subtitle: lorem.paragraph,
};

export const mockFaqItem = (id: string, question?: string): FaqItem => ({
  _id: id,
  question: question || lorem.title,
  answer: mockPortableText(lorem.paragraph),
});

export const mockFaqsBlock: FaqsBlock = {
  _key: "faqs-1",
  _type: "faqsBlock",
  name: "FAQs",
  eyebrowText: lorem.eyebrow,
  title: lorem.title,
  subtitle: lorem.paragraph,
  faqs: [
    mockFaqItem("faq-1", "Lorem ipsum dolor sit amet?"),
    mockFaqItem("faq-2", "Consectetur adipiscing elit?"),
    mockFaqItem("faq-3", "Sed do eiusmod tempor?"),
    mockFaqItem("faq-4", "Ut enim ad minim veniam?"),
  ],
};
