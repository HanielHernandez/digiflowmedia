import { FaqAccordion } from "@/components/blocks/faq-accordion";
import type { FaqsBlock as FaqsBlockType } from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

type FaqsBlockProps = {
  block: FaqsBlockType;
};

export function FaqsBlock({ block }: FaqsBlockProps) {
  return (
    <section
      id={blockId(block.name)}
      className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28"
    >
      <div>
        {block.eyebrowText ? (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {block.eyebrowText}
          </p>
        ) : null}
        {block.title ? (
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
            {block.title}
          </h2>
        ) : null}
        {block.subtitle ? (
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            {block.subtitle}
          </p>
        ) : null}
      </div>

      {block.faqs?.length ? (
        <FaqAccordion faqs={block.faqs.filter(Boolean)} />
      ) : null}
    </section>
  );
}
