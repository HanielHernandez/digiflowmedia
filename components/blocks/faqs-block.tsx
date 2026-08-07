import { FaqAccordion } from "@/components/blocks/faq-accordion";
import type { FaqsBlock as FaqsBlockType } from "@/sanity/lib/pages";

type FaqsBlockProps = {
  block: FaqsBlockType;
};

export function FaqsBlock({ block }: FaqsBlockProps) {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 py-16">
        <div className="flex max-w-3xl flex-col gap-4 text-center">
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

        {block.faqs?.length ? (
          <FaqAccordion
            className="w-full max-w-3xl border-t"
            faqs={block.faqs.filter(Boolean)}
          />
        ) : null}
      </div>
    </section>
  );
}
