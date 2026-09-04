import { ArrowUpRightIcon } from "lucide-react";
import { PortableText } from "next-sanity";

import { SectionEyebrow } from "@/components/section-eyebrow";
import type {
  PlanItem,
  PlansAndPricingBlock as PlansAndPricingBlockType,
} from "@/sanity/lib/pages";
import { blockId, cn } from "@/lib/utils";
import Link from "next/link";

type PlansAndPricingBlockProps = {
  block: PlansAndPricingBlockType;
};

const portableTextClassName =
  "space-y-3 text-sm leading-6 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc";

const PLAN_THEMES = [
  "from-secondary to-[#6ea8ff]",
  "from-primary to-brand-pink",
  "from-brand-pink to-primary",
];

function isFeatured(plan: PlanItem, index: number, total: number) {
  if (typeof plan.featured === "boolean") return plan.featured;
  if (plan.badge) return true;
  if (/business/i.test(plan.title || plan.name || "")) return true;
  return total === 3 && index === 1;
}

export function PlansAndPricingBlock({ block }: PlansAndPricingBlockProps) {
  const plans = block.plans?.filter(Boolean) ?? [];

  return (
    <section
      id={blockId(block.name) || "pricing"}
      className="w-full border-y border-border bg-card px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            {block.eyebrowText ? (
              <div className="mb-4">
                <SectionEyebrow>{block.eyebrowText}</SectionEyebrow>
              </div>
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
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {plans.map((plan, index) => {
              if (!plan) return null;
              const featured = isFeatured(plan, index, plans.length);
              const badge =
                plan.badge || (featured ? "Most Popular" : undefined);

              return (
                <article
                  key={plan._id}
                  data-animate-item
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-sm",
                    featured && "ring-2 ring-primary md:-translate-y-2"
                  )}
                >
                  <div
                    className={cn(
                      "h-2 w-full bg-linear-to-r",
                      PLAN_THEMES[index % PLAN_THEMES.length]
                    )}
                  />
                  {badge ? (
                    <span className="absolute top-5 right-5 rounded-full bg-brand-pink px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-foreground uppercase">
                      {badge}
                    </span>
                  ) : null}
                  <div className="flex flex-1 flex-col p-8 pt-7">
                    {plan.title ? (
                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                        {plan.title}
                      </h3>
                    ) : null}
                    {plan.price ? (
                      <p className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-primary">
                        {plan.price}
                      </p>
                    ) : null}
                    {plan.description?.length ? (
                      <div className={`mt-5 ${portableTextClassName}`}>
                        <PortableText value={plan.description} />
                      </div>
                    ) : null}
                    {plan.ctaText && plan.ctaLink ? (
                      <Link
                        href={plan.ctaLink}
                        className={cn(
                          "mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5",
                          featured
                            ? "bg-primary text-primary-foreground"
                            : "bg-foreground text-background"
                        )}
                      >
                        {plan.ctaText}
                        <ArrowUpRightIcon className="size-4" />
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
