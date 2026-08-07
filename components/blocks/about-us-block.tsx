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

  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-4">
          {block.eyebrowText ? (
            <p className="text-badge text-primary uppercase tracking-[0.08em]">
              {block.eyebrowText}
            </p>
          ) : null}
          {block.title ? (
            <h2 className="font-heading text-h2">{block.title}</h2>
          ) : null}
          {block.content?.length ? (
            <div className="text-body-lg text-muted-foreground space-y-4 [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_h3]:font-heading [&_h3]:text-h3 [&_h3]:text-foreground [&_h4]:font-heading [&_h4]:text-h4 [&_h4]:text-foreground [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
              <PortableText value={block.content} />
            </div>
          ) : null}
        </div>

        {imageUrl ? (
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt={block.title || "About us"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
