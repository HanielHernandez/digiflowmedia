import { ArrowCta } from "@/components/arrow-cta";
import { bannerPortableTextComponents } from "@/components/blocks/portable-text-table";
import { RoundedPhoto } from "@/components/rounded-photo";
import { SectionEyebrow } from "@/components/section-eyebrow";
import type {
  BannerBlock as BannerBlockType,
  BannerColor,
  BannerOrientation,
} from "@/sanity/lib/pages";
import {
  ECOMMERCE_PHOTO,
  isEcommerceBanner,
  sanityImageAlt,
} from "@/lib/image-alt";
import { urlFor } from "@/sanity/lib/image";
import { blockId, cn } from "@/lib/utils";
import { PortableText } from "next-sanity";

type BannerBlockProps = {
  block: BannerBlockType;
};

const colorClasses: Record<BannerColor, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  pink: "bg-brand-pink text-foreground",
};

const orientationClasses: Record<BannerOrientation, string> = {
  "left-to-right": "flex-col-reverse lg:flex-row",
  "right-to-left": "flex-col lg:flex-row-reverse",
  "top-to-bottom": "flex-col",
  "bottom-to-top": "flex-col-reverse",
};

export function BannerBlock({ block }: BannerBlockProps) {
  const ecommerce = isEcommerceBanner(block.title, block.name);
  const cmsImageUrl = block.image
    ? urlFor(block.image).width(1600).fit("max").url()
    : null;
  const imageUrl = ecommerce ? ECOMMERCE_PHOTO.src : cmsImageUrl;
  const imageAlt = ecommerce
    ? ECOMMERCE_PHOTO.alt
    : sanityImageAlt(block.image, block.title || "Banner");
  const color = block.color ?? "secondary";
  const orientation = block.orientation ?? "left-to-right";
  const isVertical =
    orientation === "top-to-bottom" || orientation === "bottom-to-top";
  const hasSideImage = Boolean(imageUrl) && !isVertical;

  const media = imageUrl ? (
    <div
      className={cn(
        "w-full min-w-0",
        hasSideImage ? "lg:basis-0 lg:flex-1" : "mx-auto max-w-xl"
      )}
    >
      <RoundedPhoto
        src={imageUrl}
        alt={imageAlt}
        objectFit="contain"
        className="w-full border-none"
        sizes={
          hasSideImage
            ? "(max-width: 1023px) 100vw, 50vw"
            : "(max-width: 640px) 100vw, 560px"
        }
      />
    </div>
  ) : null;

  const content = (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-4",
        isVertical || !imageUrl
          ? "w-full flex-1 items-start text-left"
          : "w-full lg:basis-0 lg:flex-1"
      )}
    >
      {block.eyebrowText ? (
        <SectionEyebrow tone="light">{block.eyebrowText}</SectionEyebrow>
      ) : null}
      {block.title ? (
        <p className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          {block.title}
        </p>
      ) : null}
      {block.description?.length ? (
        <div className="space-y-2 text-sm font-normal leading-6 opacity-80 [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:opacity-100 [&_ul]:list-disc">
          <PortableText
            value={block.description}
            components={bannerPortableTextComponents}
          />
        </div>
      ) : null}
      {block.ctaText && block.ctaLink ? (
        <ArrowCta
          href={block.ctaLink}
          color="pink"
          className="mt-2 text-inherit"
        >
          {block.ctaText}
        </ArrowCta>
      ) : null}
    </div>
  );

  return (
    <section id={blockId(block.name)} className="w-full px-6 py-8 lg:px-10">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center gap-8 rounded-[2rem] px-8 py-8 sm:gap-10 sm:px-10 md:py-12 lg:gap-12 lg:px-12",
          colorClasses[color],
          orientationClasses[orientation]
        )}
      >
        {content}
        {media}
      </div>
    </section>
  );
}
