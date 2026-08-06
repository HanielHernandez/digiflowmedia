import type { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

import { client } from "./client";
import { PAGE_BY_SLUG_QUERY } from "./queries";

export type HeroSectionBlock = {
  _key: string;
  _type: "heroSection";
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryUrl?: string;
  secondaryButtonText?: string;
  secondaryUrl?: string;
};

export type ServiceItem = {
  _id: string;
  name?: string;
  title?: string;
  description?: string;
  url?: string;
  slug?: string;
  image?: SanityImageSource;
};

export type ServiceBlock = {
  _key: string;
  _type: "serviceBlock";
  name?: string;
  eyebrowText?: string;
  title?: string;
  description?: string;
  services?: ServiceItem[];
};

export type AboutUsBlock = {
  _key: string;
  _type: "aboutUsBlock";
  eyebrowText?: string;
  title?: string;
  content?: PortableTextBlock[];
  image?: SanityImageSource;
};

export type MetricColor =
  | "purple"
  | "blue"
  | "pink"
  | "success"
  | "foreground";

export type MetricItem = {
  _key: string;
  title?: string;
  subtitle?: string;
  color?: MetricColor;
};

export type MetricsBlock = {
  _key: string;
  _type: "metricsBlock";
  name?: string;
  metrics?: MetricItem[];
};

export type BannerOrientation =
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top";

export type BannerBlock = {
  _key: string;
  _type: "bannerBlock";
  eyebrowText?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: SanityImageSource;
  orientation?: BannerOrientation;
};

export type TechnologyItem = {
  _id: string;
  name?: string;
  description?: string;
  image?: SanityImageSource;
};

export type TechnologiesBlock = {
  _key: string;
  _type: "technologiesBlock";
  eyebrowText?: string;
  title?: string;
  subtitle?: string;
  technologies?: TechnologyItem[];
};

export type ContactFormBlock = {
  _key: string;
  _type: "contactFormBlock";
  eyebrowText?: string;
  title?: string;
  subtitle?: string;
};

export type PageBlock =
  | HeroSectionBlock
  | ServiceBlock
  | AboutUsBlock
  | MetricsBlock
  | BannerBlock
  | TechnologiesBlock
  | ContactFormBlock;

export type SanityPage = {
  _id: string;
  name: string;
  slug: string;
  layout?: string;
  blocks?: PageBlock[];
};

/** Convert route segments into a Sanity slug. Empty = home (`/`). */
export function pathToSlug(segments?: string[] | null): string {
  if (!segments || segments.length === 0) return "/";
  return segments.filter(Boolean).join("/");
}

/** Match pages stored as `about` or `/about`; home only as `/`. */
export function slugCandidates(slug: string): string[] {
  if (slug === "/" || slug === "") return ["/"];

  const withoutSlash = slug.replace(/^\/+/, "").replace(/\/+$/, "");
  return Array.from(new Set([withoutSlash, `/${withoutSlash}`]));
}

export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
  return client.fetch(PAGE_BY_SLUG_QUERY, {
    candidates: slugCandidates(slug),
  });
}
