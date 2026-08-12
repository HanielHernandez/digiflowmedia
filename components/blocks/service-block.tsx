import { ServiceCard } from "@/components/blocks/service-card";
import type { ServiceBlock as ServiceBlockType } from "@/sanity/lib/pages";

type ServiceBlockProps = {
  block: ServiceBlockType;
};

export function ServiceBlock({ block }: ServiceBlockProps) {
  const services = block.services?.filter(Boolean) ?? [];

  return (
    <section
      id="services"
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
          {block.description ? (
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              {block.description}
            </p>
          ) : null}
        </div>

        {services.length ? (
          <div className="grid border-t border-border md:grid-cols-3">
            {services.map((service, index) =>
              service ? (
                <ServiceCard
                  key={service._id}
                  service={service}
                  index={index}
                />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
