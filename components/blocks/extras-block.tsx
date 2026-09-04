import { PortableText } from "next-sanity";

import { SectionEyebrow } from "@/components/section-eyebrow";
import type { ExtrasBlock as ExtrasBlockType } from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

type ExtrasBlockProps = {
  block: ExtrasBlockType;
};

const portableTextClassName =
  "space-y-3 text-sm leading-6 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc";

export function ExtrasBlock({ block }: ExtrasBlockProps) {
  const rows = block.table?.rows?.filter(Boolean) ?? [];
  const hasHeader = block.table?.hasHeader !== false;
  const dataRows = hasHeader ? rows.slice(1) : rows;

  return (
    <section
      id={blockId(block.name)}
      className="w-full border-y border-border bg-card px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          {block.eyebrowText ? (
            <div className="mb-4">
              <SectionEyebrow>{block.eyebrowText}</SectionEyebrow>
            </div>
          ) : null}
          {block.title ? (
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              {block.title}
            </h2>
          ) : null}
          {block.description?.length ? (
            <div className={`mt-5 ${portableTextClassName}`}>
              <PortableText value={block.description} />
            </div>
          ) : null}
        </div>

        {dataRows.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dataRows.map((row, index) => {
              const [name, price] = row.cells ?? [];
              if (!name) return null;

              return (
                <article
                  key={row._key || `addon-${index}`}
                  data-animate-item
                  className="relative overflow-hidden rounded-[1.5rem] border border-border bg-background p-6 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-primary to-brand-pink" />
                  <h3 className="pr-4 text-lg font-semibold tracking-[-0.03em]">
                    {name}
                  </h3>
                  {price ? (
                    <p className="mt-3 font-display text-2xl font-semibold text-primary">
                      {price}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
