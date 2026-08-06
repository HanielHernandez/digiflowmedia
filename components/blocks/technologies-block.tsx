import Image from "next/image";

import type { TechnologiesBlock as TechnologiesBlockType } from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";

type TechnologiesBlockProps = {
  block: TechnologiesBlockType;
};

export function TechnologiesBlock({ block }: TechnologiesBlockProps) {
  return (
    <section className="flex w-full flex-col gap-10 py-16">
      <div className="flex max-w-3xl flex-col gap-4">
        {block.eyebrowText ? (
          <p className="text-badge text-primary uppercase tracking-[0.08em]">
            {block.eyebrowText}
          </p>
        ) : null}
        {block.title ? (
          <h2 className="font-heading text-h2">{block.title}</h2>
        ) : null}
        {block.subtitle ? (
          <p className="text-body-lg text-muted-foreground">{block.subtitle}</p>
        ) : null}
      </div>

      {block.technologies?.length ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {block.technologies.map((tech) => {
            if (!tech) return null;

            const imageUrl = tech.image
              ? urlFor(tech.image).width(400).height(400).url()
              : null;

            return (
              <div key={tech._id} className="flex flex-col items-start gap-4">
                {imageUrl ? (
                  <div className="relative size-16 overflow-hidden rounded-xl">
                    <Image
                      src={imageUrl}
                      alt={tech.name || "Technology"}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                ) : null}
                {tech.name ? (
                  <h3 className="font-heading text-h5">{tech.name}</h3>
                ) : null}
                {tech.description ? (
                  <p className="text-body-sm text-muted-foreground">
                    {tech.description}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
