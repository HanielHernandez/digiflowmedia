import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, SparklesIcon } from "lucide-react";

import type { BannerBlock as BannerBlockType } from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";
import { blockId, cn } from "@/lib/utils";

type BannerBlockProps = {
  block: BannerBlockType;
};

export function BannerBlock({ block }: BannerBlockProps) {
  const imageUrl = block.image
    ? urlFor(block.image).width(400).height(400).url()
    : null;

  return (
    <section id={blockId(block.name)} className="w-full px-6 py-8 lg:px-10">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 rounded-2xl bg-secondary px-6 py-6 text-secondary-foreground sm:flex-row sm:px-8",
          imageUrl && "sm:items-stretch"
        )}
      >
        <div className="flex items-center gap-4">
          {imageUrl ? (
            <div className="relative size-14 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={imageUrl}
                alt={block.title || "Banner"}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
          ) : (
            <SparklesIcon className="size-5 shrink-0 text-brand-pink" />
          )}

          <div className="flex flex-col gap-1">
            {block.eyebrowText ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary-foreground/70">
                {block.eyebrowText}
              </p>
            ) : null}
            {block.title || block.description ? (
              <p className="text-sm font-semibold">
                {block.title || block.description}
                {block.title && block.description ? (
                  <span className="mt-1 block font-normal text-secondary-foreground/80">
                    {block.description}
                  </span>
                ) : null}
              </p>
            ) : null}
          </div>
        </div>

        {block.ctaText && block.ctaLink ? (
          <Link
            href={block.ctaLink}
            className="flex shrink-0 items-center gap-2 text-sm font-bold underline underline-offset-4"
          >
            {block.ctaText}
            <ArrowUpRightIcon className="size-4" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
