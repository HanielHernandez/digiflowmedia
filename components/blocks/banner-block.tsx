import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { PortableText } from "next-sanity";

import type {
  BannerBlock as BannerBlockType,
  BannerColor,
  BannerOrientation,
} from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";
import { blockId, cn } from "@/lib/utils";

type BannerBlockProps = {
  block: BannerBlockType;
};

const colorClasses: Record<BannerColor, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  pink: "bg-brand-pink text-foreground",
};

const orientationClasses: Record<BannerOrientation, string> = {
  "left-to-right": "flex-col sm:flex-row",
  "right-to-left": "flex-col sm:flex-row-reverse",
  "top-to-bottom": "flex-col",
  "bottom-to-top": "flex-col-reverse",
};

export function BannerBlock({ block }: BannerBlockProps) {
  const imageUrl = block.image
    ? urlFor(block.image).width(800).height(620).url()
    : null;
  const color = block.color ?? "secondary";
  const orientation = block.orientation ?? "left-to-right";
  const isVertical =
    orientation === "top-to-bottom" || orientation === "bottom-to-top";

  const media = imageUrl ? (
    <div
      className={cn(
        "relative aspect-[360/280] w-full shrink-0 overflow-hidden rounded-2xl",
        isVertical
          ? "max-w-[480px] sm:max-w-[560px]"
          : "max-w-[360px] sm:max-w-[420px] lg:max-w-[480px]"
      )}
    >
      <Image
        src={imageUrl}
        alt={block.title || "Banner"}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 100vw, 480px"
      />
    </div>
  ) : (
    <Image
      src="/growth-analyzer.svg"
      alt="Digital Growth Analyzer"
      width={360}
      height={280}
      className={cn(
        "w-full shrink-0",
        isVertical
          ? "max-w-[480px] sm:max-w-[560px]"
          : "max-w-[360px] sm:max-w-[420px] lg:max-w-[480px]"
      )}
      priority={false}
    />
  );

  const content = (
    <div
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-4",
        isVertical ? "w-full items-start text-left" : "sm:max-w-xl"
      )}
    >
      {block.eyebrowText ? (
        <p className="font-mono text-xs uppercase tracking-[0.18em] opacity-70">
          {block.eyebrowText}
        </p>
      ) : null}
      {block.title ? (
        <p className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
          {block.title}
        </p>
      ) : null}
      {block.description?.length ? (
        <div className="space-y-2 text-sm font-normal leading-6 opacity-80 [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:opacity-100 [&_ul]:list-disc">
          <PortableText value={block.description} />
        </div>
      ) : null}
      {block.ctaText && block.ctaLink ? (
        <Link
          href={block.ctaLink}
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-bold underline underline-offset-4"
        >
          {block.ctaText}
          <ArrowUpRightIcon className="size-4" />
        </Link>
      ) : null}
    </div>
  );

  return (
    <section id={blockId(block.name)} className="w-full px-6 py-8 lg:px-10">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-8 rounded-2xl px-6 py-8 sm:gap-10 sm:px-8 md:py-14",
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
