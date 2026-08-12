import Image from "next/image";
import { PortableText } from "next-sanity";

import type { AboutUsBlock as AboutUsBlockType } from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";

type AboutUsBlockProps = {
  block: AboutUsBlockType;
};

export function AboutUsBlock({ block }: AboutUsBlockProps) {
  const imageUrl = block.image
    ? urlFor(block.image).width(1200).height(900).url()
    : null;
  const watermark = (block.name || "DF")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const year = String(new Date().getFullYear()).slice(-2);

  return (
    <section
      id="about"
      className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32"
    >
      <div>
        {block.eyebrowText ? (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">
            {block.eyebrowText}
          </p>
        ) : null}
        <div className="mt-20 hidden text-8xl font-semibold leading-none tracking-[-0.09em] text-primary/15 lg:block">
          {watermark}
          <br />
          {year}
        </div>
      </div>

      <div>
        {block.title ? (
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
            {block.title}
          </h2>
        ) : null}

        {block.content?.length ? (
          <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_li]:ml-5 [&_ol]:list-decimal [&_p]:text-sm [&_p]:leading-6 [&_p]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
            <PortableText value={block.content} />
          </div>
        ) : null}

        {imageUrl ? (
          <div className="relative mt-12 aspect-4/3 overflow-hidden rounded-[2rem]">
            <Image
              src={imageUrl}
              alt={block.title || "About us"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
