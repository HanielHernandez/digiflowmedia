import { ServiceCard } from "@/components/blocks/service-card";
import type { ServiceBlock as ServiceBlockType } from "@/sanity/lib/pages";

type ServiceBlockProps = {
  block: ServiceBlockType;
};

export function ServiceBlock({ block }: ServiceBlockProps) {
  return (
    <section className="w-full bg-accent">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16">
        <div className="flex max-w-3xl flex-col gap-4 text-center">
          {block.eyebrowText ? (
            <p className="text-badge text-primary uppercase tracking-[0.08em]">
              {block.eyebrowText}
            </p>
          ) : null}
          {block.title ? (
            <h2 className="font-heading text-h2">{block.title}</h2>
          ) : null}
          {block.description ? (
            <p className="text-body-lg text-muted-foreground">
              {block.description}
            </p>
          ) : null}
        </div>

        {block.services?.length ? (
          <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
            {block.services.map((service) =>
              service ? (
                <ServiceCard key={service._id} service={service} />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
