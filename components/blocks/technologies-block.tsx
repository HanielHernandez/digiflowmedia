import { TechnologyCard } from "@/components/blocks/technology-card";
import type { TechnologiesBlock as TechnologiesBlockType } from "@/sanity/lib/pages";

type TechnologiesBlockProps = {
  block: TechnologiesBlockType;
};

export function TechnologiesBlock({ block }: TechnologiesBlockProps) {
  const all = block.technologies?.filter(Boolean) ?? [];

  return (
    <section
      id="work"
      className="w-full bg-primary px-6 py-16 text-white lg:px-10 lg:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="sm:w-1/3 sm:shrink-0">
          {block.eyebrowText ? (
            <p className="text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
              {block.eyebrowText}
            </p>
          ) : null}
          {block.title ? (
            <h2 className="text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
              {block.title}
            </h2>
          ) : null}
        </div>

        {all.length ? (
          <>
            <span className="hidden h-8 w-px shrink-0 bg-white/80 sm:block" />
            <div className="flex w-full items-center justify-between gap-3 sm:w-2/3">
              {all.map((tech) =>
                tech ? (
                  <TechnologyCard key={tech._id} technology={tech} />
                ) : null
              )}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
