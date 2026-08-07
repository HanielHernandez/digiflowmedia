import Image from "next/image";
import Link from "next/link";
import { Layers3Icon } from "lucide-react";

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
      <div className="mb-16 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">{number}</span>
        {imageUrl ? (
          <div className="relative size-5 overflow-hidden rounded-sm transition-transform group-hover:rotate-12">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="20px"
            />
          </div>
        ) : (
          <Layers3Icon className="size-5 text-primary transition-transform group-hover:rotate-12" />
        )}
      </div>

      {service.title ? (
        <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em]">
          {service.title}
        </h3>
      ) : null}

      {service.description ? (
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">
          {service.description}
        </p>
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
