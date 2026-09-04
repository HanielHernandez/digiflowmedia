import type { SanityImageSource } from "@sanity/image-url";

export type LocalPhoto = {
  src: string;
  alt: string;
};

export const SERVICE_PHOTOS = {
  design: {
    src: "/images/services/website-design.webp",
    alt: "Designer reviewing a custom small-business website layout on a desktop computer",
  },
  optimization: {
    src: "/images/services/website-optimization.webp",
    alt: "Website code on a laptop used to improve speed, Core Web Vitals, and technical performance",
  },
  automation: {
    src: "/images/services/automation.webp",
    alt: "Hands assembling digital automation and workflow tools on a workbench",
  },
  ecommerce: {
    src: "/images/services/ecommerce.webp",
    alt: "Online shopping checkout on a laptop for an eCommerce store",
  },
  seo: {
    src: "/images/services/seo.webp",
    alt: "SEO letter tiles representing search engine optimization for local businesses",
  },
} as const satisfies Record<string, LocalPhoto>;

export const ABOUT_PHOTO: LocalPhoto = {
  src: "/images/about/studio-workspace.webp",
  alt: "Digital studio workspace with a laptop, notebook, and coffee on a white desk",
};

export const ECOMMERCE_PHOTO: LocalPhoto = {
  src: "/images/ecommerce/online-store.webp",
  alt: "Shopping cart and bag representing a custom eCommerce online store",
};

const SERVICE_PHOTO_LIST = [
  SERVICE_PHOTOS.design,
  SERVICE_PHOTOS.optimization,
  SERVICE_PHOTOS.automation,
  SERVICE_PHOTOS.ecommerce,
  SERVICE_PHOTOS.seo,
];

export function sanityImageAlt(
  image: SanityImageSource | undefined,
  fallback: string
): string {
  if (
    image &&
    typeof image === "object" &&
    "alt" in image &&
    typeof (image as { alt?: unknown }).alt === "string"
  ) {
    const alt = (image as { alt: string }).alt.trim();
    if (alt) return alt;
  }

  return fallback;
}

export function fallbackServicePhoto(
  title?: string,
  index = 0
): LocalPhoto {
  const t = (title || "").toLowerCase();

  if (/seo|search visibility|search engine/.test(t)) return SERVICE_PHOTOS.seo;
  if (/e-?commerce|online store|shopify|woocommerce/.test(t)) {
    return SERVICE_PHOTOS.ecommerce;
  }
  if (/automat|digital tool|workflow/.test(t)) return SERVICE_PHOTOS.automation;
  if (/optim/.test(t)) return SERVICE_PHOTOS.optimization;
  if (/design|develop|website/.test(t)) return SERVICE_PHOTOS.design;

  return SERVICE_PHOTO_LIST[index % SERVICE_PHOTO_LIST.length];
}

export function isEcommerceBanner(title?: string, name?: string): boolean {
  return /store|e-?commerce|shopify/i.test(`${title || ""} ${name || ""}`);
}

export function isAnalyzerBanner(title?: string, name?: string): boolean {
  return /analyzer|growth analyzer/i.test(`${title || ""} ${name || ""}`);
}
