import { TechnologyCard } from "@/components/blocks/technology-card";
import type { TechnologiesBlock as TechnologiesBlockType } from "@/sanity/lib/pages";

type TechnologiesBlockProps = {
  block: TechnologiesBlockType;
};

export function TechnologiesBlock({ block }: TechnologiesBlockProps) {
  const technologies = block.technologies?.filter(Boolean) ?? [];

  return (
    <section
      id="work"
      className="w-full bg-primary px-6 py-16 text-primary-foreground lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          {block.eyebrowText ? (
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
              {block.eyebrowText}
            </p>
          ) : null}
          {block.title ? (
            <h2 className="text-4xl text-white font-semibold tracking-[-0.06em] sm:text-6xl">
              {block.title}
            </h2>
          ) : null}
          {block.subtitle ? (
            <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/70">
              {block.subtitle}
            </p>
          ) : null}
        </div>

        {technologies.length ? (
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) =>
              tech ? (
                <TechnologyCard key={tech._id} technology={tech} />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
