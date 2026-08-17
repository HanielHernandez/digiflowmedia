import Image from "next/image";
import Link from "next/link";
import { Layers3Icon } from "lucide-react";
import { PortableText } from "next-sanity";

import type { ServiceItem } from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: ServiceItem;
  index?: number;
  className?: string;
};

export function ServiceCard({
  service,
  index = 0,
  className,
}: ServiceCardProps) {
  const imageUrl = service.image
    ? urlFor(service.image).width(160).height(160).url()
    : null;
  const href = service.url || (service.slug ? `/${service.slug}` : null);
  const number = String(index + 1).padStart(2, "0");

  const content = (
    <>
      <div className="mb-16 flex items-start justify-between">
        {imageUrl ? (
          <div className="relative size-6 overflow-hidden transition-transform group-hover:rotate-12">
            <Image
              src={imageUrl}
              alt={service.title || service.name || "Service"}
              fill
              sizes="24px"
            />
          </div>
        ) : (
          <Layers3Icon className="size-6 text-primary transition-transform group-hover:rotate-12" />
        )}
        <span className="font-mono text-xs text-muted-foreground">{number}</span>
      </div>

      {service.title ? (
        <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em]">
          {service.title}
        </h3>
      ) : null}

      {service.description?.length ? (
        <div className="max-w-xs space-y-3 text-sm leading-6 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
          <PortableText value={service.description} />
        </div>
      ) : null}
    </>
  );

  const sharedClassName = cn(
    "group block border-b border-border py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0",
    href && "transition-opacity hover:opacity-90",
    className
  );

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return <article className={sharedClassName}>{content}</article>;
}
