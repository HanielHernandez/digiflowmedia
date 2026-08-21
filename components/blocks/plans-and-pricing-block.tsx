import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { PortableText } from "next-sanity";

import type { PlansAndPricingBlock as PlansAndPricingBlockType } from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

type PlansAndPricingBlockProps = {
  block: PlansAndPricingBlockType;
};

const portableTextClassName =
  "space-y-3 text-sm leading-6 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc";

export function PlansAndPricingBlock({ block }: PlansAndPricingBlockProps) {
  const plans = block.plans?.filter(Boolean) ?? [];

  return (
    <section
      id={blockId(block.name)}
      className="w-full border-y border-border bg-card px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            {block.eyebrowText ? (
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {block.eyebrowText}
              </p>
            ) : null}
            {block.title ? (
              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                {block.title}
              </h2>
            ) : null}
          </div>
          {block.description?.length ? (
            <div className={`max-w-xs ${portableTextClassName}`}>
              <PortableText value={block.description} />
            </div>
          ) : null}
        </div>

        {plans.length ? (
          <div className="grid border-t border-border md:grid-cols-3">
            {plans.map((plan) =>
              plan ? (
                <article
                  key={plan._id}
                  data-animate-item
                  className="group flex flex-col gap-4 border-b border-border px-0 py-10 transition-colors hover:bg-muted/60 md:border-b-0 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  {plan.title ? (
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-primary">
                      {plan.title}
                    </h3>
                  ) : null}
                  {plan.price ? (
                    <p className="font-mono text-sm uppercase tracking-[0.12em] text-primary transition-transform group-hover:translate-x-0.5">
                      {plan.price}
                    </p>
                  ) : null}
                  {plan.description?.length ? (
                    <div className={portableTextClassName}>
                      <PortableText value={plan.description} />
                    </div>
                  ) : null}
                  {plan.ctaText && plan.ctaLink ? (
                    <Link
                      href={plan.ctaLink}
                      className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-bold underline underline-offset-4 transition-colors group-hover:text-primary"
                    >
                      {plan.ctaText}
                      <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ) : null}
                </article>
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
