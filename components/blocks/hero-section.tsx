import Link from "next/link";
import {
  ArrowUpRightIcon,
  EyeIcon,
  Globe2Icon,
  MoveUpRightIcon,
} from "lucide-react";

import type { HeroSectionBlock } from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

type HeroSectionProps = {
  block: HeroSectionBlock;
};

export function HeroSection({ block }: HeroSectionProps) {
  return (
    <section
      id={blockId(block.name)}
      className="mx-auto w-full max-w-7xl px-6 pb-20 pt-20 lg:px-10 lg:pb-32 lg:pt-28"
    >
      <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {block.name ? (
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="size-2 rounded-full bg-success" />
              {block.name}
            </div>
          ) : null}
          {block.title ? (
            <h1 className="max-w-4xl text-balance text-6xl font-semibold leading-[0.95] tracking-[-0.075em] sm:text-7xl lg:text-[7.8rem]">
              {block.title}
            </h1>
          ) : null}
        </div>

        <div className="flex flex-col gap-7 lg:pb-2">
          {block.subtitle ? (
            <p className="max-w-md text-lg leading-7 text-muted-foreground">
              {block.subtitle}
            </p>
          ) : null}

          {(block.primaryButtonText && block.primaryUrl) ||
          (block.secondaryButtonText && block.secondaryUrl) ? (
            <div className="flex flex-col items-start gap-4">
              {block.primaryButtonText && block.primaryUrl ? (
                <Link
                  href={block.primaryUrl}
                  className="group flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.12em]"
                >
                  {block.primaryButtonText}
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRightIcon className="size-5" />
                  </span>
                </Link>
              ) : null}

              {block.secondaryButtonText && block.secondaryUrl ? (
                <Link
                  href={block.secondaryUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {block.secondaryButtonText}
                  <EyeIcon className="size-4" />
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      <div className="relative mt-20 min-h-[360px] overflow-hidden rounded-[2rem] bg-foreground p-6 text-background sm:min-h-[490px] sm:p-10 lg:mt-28">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e17cf6 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative flex h-full min-h-[310px] flex-col justify-between sm:min-h-[410px]">
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-pink">
              {block.name ? `Signal / ${block.name}` : "Signal / 001"}
            </span>
            <Globe2Icon className="size-6 text-brand-pink" />
          </div>

          <div className="max-w-2xl">
            {block.subtitle ? (
              <p className="mb-5 max-w-lg text-sm leading-6 text-background/60">
                {block.subtitle}
              </p>
            ) : null}
            <div className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
              Good work
              <br />
              <span className="text-brand-pink">travels fast.</span>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-background/50">
              Strategy · Design · Technology
            </span>
            {block.primaryUrl ? (
              <Link
                href={block.primaryUrl}
                className="text-brand-pink transition-transform hover:rotate-12"
              >
                <MoveUpRightIcon className="size-7" />
              </Link>
            ) : (
              <MoveUpRightIcon className="size-7 text-brand-pink" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
