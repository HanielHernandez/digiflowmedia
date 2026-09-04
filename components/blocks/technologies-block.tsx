import { TechnologyCard } from "@/components/blocks/technology-card";
import { SectionEyebrow } from "@/components/section-eyebrow";
import type { TechnologiesBlock as TechnologiesBlockType } from "@/sanity/lib/pages";
import { EXTRA_TECHNOLOGIES } from "@/lib/site-copy";

type TechnologiesBlockProps = {
  block: TechnologiesBlockType;
};

export function TechnologiesBlock({ block }: TechnologiesBlockProps) {
  const technologies = block.technologies?.filter(Boolean) ?? [];
  const existing = new Set(
    technologies.map((tech) => tech?.name?.trim().toLowerCase()).filter(Boolean)
  );
  const extras = EXTRA_TECHNOLOGIES.filter(
    (name) => !existing.has(name.toLowerCase())
  ).map((name) => ({
    _id: `extra-${name}`,
    name,
  }));
  const all = [...technologies, ...extras];

  return (
    <section
      id="work"
      className="w-full bg-primary px-6 py-16 text-primary-foreground lg:px-10 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          {block.eyebrowText ? (
            <div className="mb-5">
              <SectionEyebrow tone="light">{block.eyebrowText}</SectionEyebrow>
            </div>
          ) : null}
          {block.title ? (
            <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
              {block.title}
            </h2>
          ) : null}
          {block.subtitle ? (
            <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/70">
              {block.subtitle}
            </p>
          ) : null}
        </div>

        {all.length ? (
          <div className="flex flex-wrap gap-3">
            {all.map((tech) =>
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
