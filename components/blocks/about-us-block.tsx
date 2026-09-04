import { PortableText } from "next-sanity";

import { HighlightedHeading } from "@/components/highlighted-heading";
import { RoundedPhoto } from "@/components/rounded-photo";
import { SectionEyebrow } from "@/components/section-eyebrow";
import type { AboutUsBlock as AboutUsBlockType } from "@/sanity/lib/pages";
import { ABOUT_PHOTO, sanityImageAlt } from "@/lib/image-alt";
import { urlFor } from "@/sanity/lib/image";

type AboutUsBlockProps = {
  block: AboutUsBlockType;
};

export function AboutUsBlock({ block }: AboutUsBlockProps) {
  const imageUrl = block.image
    ? urlFor(block.image).width(1200).height(900).url()
    : ABOUT_PHOTO.src;
  const imageAlt = sanityImageAlt(block.image, ABOUT_PHOTO.alt);

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        {block.eyebrowText ? (
          <SectionEyebrow>
            {/about/i.test(block.eyebrowText) ? "About Us" : block.eyebrowText}
          </SectionEyebrow>
        ) : (
          <SectionEyebrow>About Us</SectionEyebrow>
        )}

        <RoundedPhoto
          src={imageUrl}
          alt={imageAlt}
          priority
          className="mt-8 aspect-[16/10] w-full"
          sizes="(max-width: 768px) 100vw, 896px"
        />

        {block.title ? (
          <HighlightedHeading
            as="h2"
            title={block.title}
            highlight={block.titleHighlight}
            className="mt-10 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl"
          />
        ) : null}

        {block.content?.length ? (
          <div className="mt-10 space-y-4 border-t border-border pt-8 [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_h4]:mt-6 [&_h4]:text-lg [&_h4]:font-semibold [&_li]:ml-5 [&_ol]:list-decimal [&_p]:text-sm [&_p]:leading-6 [&_p]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
            <PortableText value={block.content} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
