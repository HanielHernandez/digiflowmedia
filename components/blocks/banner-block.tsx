import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type {
  BannerBlock as BannerBlockType,
  BannerOrientation,
} from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

type BannerBlockProps = {
  block: BannerBlockType;
};

const layoutClassMap: Record<BannerOrientation, string> = {
  "left-to-right": "md:grid-cols-2",
  "right-to-left": "md:grid-cols-2",
  "top-to-bottom": "grid-cols-1",
  "bottom-to-top": "grid-cols-1",
};

const contentOrderClassMap: Record<BannerOrientation, string> = {
  "left-to-right": "order-1",
  "right-to-left": "order-2",
  "top-to-bottom": "order-1",
  "bottom-to-top": "order-2",
};

const imageOrderClassMap: Record<BannerOrientation, string> = {
  "left-to-right": "order-2",
  "right-to-left": "order-1",
  "top-to-bottom": "order-2",
  "bottom-to-top": "order-1",
};

export function BannerBlock({ block }: BannerBlockProps) {
  const orientation = block.orientation || "left-to-right";
  const imageUrl = block.image
    ? urlFor(block.image).width(1400).height(900).url()
    : null;

  return (
    <section
      className={cn(
        "grid w-full items-center gap-10 py-16 md:gap-16",
        layoutClassMap[orientation]
      )}
    >
      <div
        className={cn(
          "flex flex-col items-start gap-4",
          contentOrderClassMap[orientation]
        )}
      >
        {block.eyebrowText ? (
          <p className="text-badge text-primary uppercase tracking-[0.08em]">
            {block.eyebrowText}
          </p>
        ) : null}
        {block.title ? (
          <h2 className="font-heading text-h2 max-w-2xl">{block.title}</h2>
        ) : null}
        {block.description ? (
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            {block.description}
          </p>
        ) : null}
        {block.ctaText && block.ctaLink ? (
          <Link
            href={block.ctaLink}
            className={cn(buttonVariants({ size: "default" }), "mt-2")}
          >
            {block.ctaText}
          </Link>
        ) : null}
      </div>

      {imageUrl ? (
        <div
          className={cn(
            "relative aspect-4/3 overflow-hidden rounded-2xl",
            imageOrderClassMap[orientation]
          )}
        >
          <Image
            src={imageUrl}
            alt={block.title || "Banner"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : null}
    </section>
  );
}
