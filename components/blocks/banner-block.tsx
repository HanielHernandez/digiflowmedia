import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { PortableText } from "next-sanity";

import type { BannerBlock as BannerBlockType } from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";
import { blockId, cn } from "@/lib/utils";

type BannerBlockProps = {
  block: BannerBlockType;
};

export function BannerBlock({ block }: BannerBlockProps) {
  const imageUrl = block.image
    ? urlFor(block.image).width(800).height(620).url()
    : null;

  return (
    <section id={blockId(block.name)} className="w-full px-6 py-8 lg:px-10">
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 rounded-2xl bg-secondary px-6 py-8 text-secondary-foreground sm:flex-row sm:items-center sm:gap-10 sm:px-8 md:py-14"
        )}
      >
        <div className="flex w-full min-w-0 flex-1 flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          {imageUrl ? (
            <div className="relative aspect-[360/280] w-full max-w-[360px] shrink-0 overflow-hidden rounded-2xl sm:max-w-[420px] lg:max-w-[480px]">
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
              className="w-full max-w-[360px] shrink-0 sm:max-w-[420px] lg:max-w-[480px]"
              priority={false}
            />
          )}

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {block.eyebrowText ? (
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-secondary-foreground/70">
                {block.eyebrowText}
              </p>
            ) : null}
            {block.title ? (
              <p className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {block.title}
              </p>
            ) : null}
            {block.description?.length ? (
              <div className="space-y-2 text-sm font-normal leading-6 text-secondary-foreground/80 [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-secondary-foreground [&_ul]:list-disc">
                <PortableText value={block.description} />
              </div>
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
