import { TechnologyCard } from "@/components/blocks/technology-card";
import type { TechnologiesBlock as TechnologiesBlockType } from "@/sanity/lib/pages";

type TechnologiesBlockProps = {
  block: TechnologiesBlockType;
};

export function TechnologiesBlock({ block }: TechnologiesBlockProps) {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16">
        <div className="flex max-w-3xl flex-col gap-4">
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

        {block.technologies?.length ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {block.technologies.map((tech) =>
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
