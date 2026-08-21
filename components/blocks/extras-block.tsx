import { PortableText } from "next-sanity";

import {
  PortableTextTable,
  type TableValue,
} from "@/components/blocks/portable-text-table";
import type { ExtrasBlock as ExtrasBlockType } from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

type ExtrasBlockProps = {
  block: ExtrasBlockType;
};

const portableTextClassName =
  "space-y-3 text-sm leading-6 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc";

export function ExtrasBlock({ block }: ExtrasBlockProps) {
  const table = block.table
    ? ({
        _type: "table" as const,
        hasHeader: block.table.hasHeader,
        rows: block.table.rows,
      } satisfies TableValue)
    : null;

  return (
    <section
      id={blockId(block.name)}
      className="w-full border-y border-border bg-card px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          {block.eyebrowText ? (
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {block.eyebrowText}
            </p>
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

        {table ? (
          <PortableTextTable
            value={table}
            rowClassName="transition-colors hover:bg-muted/70"
            animateRows
            className="my-0 [&_table]:text-base [&_td:last-child]:text-right [&_td:last-child]:font-mono [&_td:last-child]:tracking-[0.04em] [&_th]:border-b-2 [&_th]:border-border [&_th]:pb-4 [&_th]:font-mono [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-[0.18em] [&_th]:text-muted-foreground [&_th:last-child]:text-right [&_tr]:border-border"
          />
        ) : null}
      </div>
    </section>
  );
}
