import {
  ClipboardListIcon,
  HammerIcon,
  RocketIcon,
  SearchIcon,
  TrendingUpIcon,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "next-sanity";

import { SectionEyebrow } from "@/components/section-eyebrow";
import type { HowItWorksBlock as HowItWorksBlockType } from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

type HowItWorksBlockProps = {
  block: HowItWorksBlockType;
};

const portableTextClassName =
  "space-y-3 text-sm leading-6 text-background/70 [&_a]:text-brand-pink [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-background [&_ul]:list-disc";

const STEP_ICONS: LucideIcon[] = [
  SearchIcon,
  ClipboardListIcon,
  HammerIcon,
  RocketIcon,
  TrendingUpIcon,
];

export function HowItWorksBlock({ block }: HowItWorksBlockProps) {
  const steps = block.steps?.filter(Boolean) ?? [];

  return (
    <section
      id={blockId(block.name)}
      className="w-full px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-foreground px-6 py-12 text-background sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            {block.eyebrowText ? (
              <SectionEyebrow tone="light">{block.eyebrowText}</SectionEyebrow>
            ) : null}
            {block.title ? (
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
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
            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = STEP_ICONS[index % STEP_ICONS.length];

                return step ? (
                  <article
                    key={step._key || index}
                    data-animate-item
                    data-animate-from="up"
                    className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                  >
                    <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-brand-pink/20 text-brand-pink">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <p className="font-display text-xs tracking-[0.16em] text-brand-pink uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    {step.title ? (
                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">
                        {step.title}
                      </h3>
                    ) : null}
                    {step.description?.length ? (
                      <div className={`mt-3 ${portableTextClassName}`}>
                        <PortableText value={step.description} />
                      </div>
                    ) : null}
                  </article>
                ) : null;
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
