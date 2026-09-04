import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

import { SectionEyebrow } from "@/components/section-eyebrow";
import type { WebsiteCareBlock as WebsiteCareBlockType } from "@/sanity/lib/pages";
import { WEBSITE_CARE_PLANS } from "@/lib/site-copy";
import { blockId, cn } from "@/lib/utils";

type WebsiteCareBlockProps = {
  block?: WebsiteCareBlockType | null;
};

const PLAN_THEMES = [
  "from-secondary to-[#6ea8ff]",
  "from-primary to-brand-pink",
  "from-brand-pink to-primary",
];

export const defaultWebsiteCareBlock: WebsiteCareBlockType = {
  _key: "website-care-default",
  _type: "websiteCareBlock",
  name: "WebsiteCare",
  eyebrowText: "Website Care",
  title: "Keep Your Website Running.",
  description:
    "Launching your website is only the beginning. Our Website Care plans keep your website updated, monitored, secure, and performing at its best.",
  ctaText: "Talk about care plans",
  ctaLink: "/#contact",
  plans: WEBSITE_CARE_PLANS.map((plan) => ({
    ...plan,
    features: [...plan.features],
  })),
};

export function WebsiteCareBlock({ block }: WebsiteCareBlockProps) {
  const data = block ?? defaultWebsiteCareBlock;
  const plans =
    data.carePlans?.length
      ? data.carePlans
      : data.plans?.length
        ? data.plans
        : defaultWebsiteCareBlock.plans;

  return (
    <section
      id={blockId(data.name) || "website-care"}
      className="w-full px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          {data.eyebrowText ? (
            <div className="mb-4">
              <SectionEyebrow>{data.eyebrowText}</SectionEyebrow>
            </div>
          ) : null}
          {data.title ? (
            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
              {data.title}
            </h2>
          ) : null}
          {data.description ? (
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              {data.description}
            </p>
          ) : null}
        </div>

        {plans?.length ? (
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.title}
                data-animate-item
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm",
                  plan.featured && "ring-2 ring-primary md:-translate-y-2"
                )}
              >
                <div
                  className={cn(
                    "h-2 w-full bg-linear-to-r",
                    PLAN_THEMES[index % PLAN_THEMES.length]
                  )}
                />
                {plan.badge ? (
                  <span className="absolute top-5 right-5 rounded-full bg-brand-pink px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-foreground uppercase">
                    {plan.badge}
                  </span>
                ) : null}
                <div className="flex flex-1 flex-col p-8 pt-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {plan.title}
                  </h3>
                  <p className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-primary">
                    {plan.price}
                  </p>
                  {plan.description ? (
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {plan.description}
                    </p>
                  ) : null}
                  {plan.features?.length ? (
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-pink" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {data.ctaText && data.ctaLink ? (
          <Link
            href={data.ctaLink}
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            {data.ctaText}
            <ArrowUpRightIcon className="size-4" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
