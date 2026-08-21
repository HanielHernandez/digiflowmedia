import { PortableText } from "next-sanity";

import type { HowItWorksBlock as HowItWorksBlockType } from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

type HowItWorksBlockProps = {
  block: HowItWorksBlockType;
};

const portableTextClassName =
  "space-y-3 text-sm leading-6 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc";

export function HowItWorksBlock({ block }: HowItWorksBlockProps) {
  const steps = block.steps?.filter(Boolean) ?? [];

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
        {block.description?.length ? (
          <div className={`mt-6 max-w-md ${portableTextClassName}`}>
            <PortableText value={block.description} />
          </div>
        ) : null}
      </div>

      {steps.length ? (
        <div className="border-t border-border">
          {steps.map((step, index) =>
            step ? (
              <article
                key={step._key || index}
                data-animate-item
                data-animate-from="left"
                className="group grid gap-4 border-b border-border px-0 py-8 transition-colors hover:bg-muted/60 sm:grid-cols-[auto_1fr] sm:gap-8 sm:px-4"
              >
                <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  {step.title ? (
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-primary">
                      {step.title}
                    </h3>
                  ) : null}
                  {step.description?.length ? (
                    <div className={`mt-3 ${portableTextClassName}`}>
                      <PortableText value={step.description} />
                    </div>
                  ) : null}
                </div>
              </article>
            ) : null
          )}
        </div>
      ) : null}
    </section>
  );
}
