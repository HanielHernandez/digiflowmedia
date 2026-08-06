import Image from "next/image";
import Link from "next/link";

import type { ServiceBlock as ServiceBlockType } from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";

type ServiceBlockProps = {
  block: ServiceBlockType;
};

export function ServiceBlock({ block }: ServiceBlockProps) {
  return (
    <section className="flex w-full flex-col gap-10 py-16">
      <div className="flex max-w-3xl flex-col gap-4">
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {block.services.map((service) => {
            if (!service) return null;

            const imageUrl = service.image
              ? urlFor(service.image).width(800).height(600).url()
              : null;

            const content = (
              <>
                {imageUrl ? (
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                    <Image
                      src={imageUrl}
                      alt={service.title || service.name || "Service"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col gap-2">
                  {service.title ? (
                    <h3 className="font-heading text-h4">{service.title}</h3>
                  ) : null}
                  {service.description ? (
                    <p className="text-body text-muted-foreground">
                      {service.description}
                    </p>
                  ) : null}
                </div>
              </>
            );

            const href = service.url || (service.slug ? `/${service.slug}` : null);

            return href ? (
              <Link
                key={service._id}
                href={href}
                className="flex flex-col gap-4 transition-opacity hover:opacity-80"
              >
                {content}
              </Link>
            ) : (
              <div key={service._id} className="flex flex-col gap-4">
                {content}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
