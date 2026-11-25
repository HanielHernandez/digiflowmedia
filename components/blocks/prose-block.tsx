import { PortableText, type PortableTextComponents } from "next-sanity";

import type { ProseBlock as ProseBlockType } from "@/sanity/lib/pages";

type ProseBlockProps = {
  block: ProseBlockType;
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
        {children}
      </h3>
    ),
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-2 pl-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-5">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = href.startsWith("http");

      return (
        <a
          href={href}
          className="text-primary underline underline-offset-2 hover:text-brand-purple"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export function ProseBlock({ block }: ProseBlockProps) {
  return (
    <article className="w-full bg-background px-6 py-16 text-foreground lg:px-10 lg:py-24">
      <div className="mx-auto max-w-3xl">
        {block.title ? (
          <h1 className="font-display text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            {block.title}
          </h1>
        ) : null}
        {block.updated ? (
          <p className="mt-5 text-sm italic text-muted-foreground">
            Last updated: {block.updated}
          </p>
        ) : null}
        {block.content?.length ? (
          <div className="mt-8 space-y-4 text-base leading-7 text-foreground/80 [&_strong]:font-semibold [&_strong]:text-foreground">
            <PortableText value={block.content} components={components} />
          </div>
        ) : null}
      </div>
    </article>
  );
}
