import Link from "next/link";
import { PortableText } from "next-sanity";

import { RoundedPhoto } from "@/components/rounded-photo";
import type { ServiceItem } from "@/sanity/lib/pages";
import { fallbackServicePhoto, sanityImageAlt } from "@/lib/image-alt";
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
  const fallback = fallbackServicePhoto(service.title || service.name, index);
  const imageUrl = fallback.src;
  const alt = service.imageAlt || sanityImageAlt(service.image, fallback.alt);
  const href = service.url || (service.slug ? `/${service.slug}` : null);
  const number = String(index + 1).padStart(2, "0");

  const content = (
    <>
      <RoundedPhoto
        src={imageUrl}
        alt={alt}
        className="mb-6 aspect-square w-full transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="font-display text-xs tracking-[0.16em] text-brand-purple uppercase">
          {number}
        </span>
      </div>

      {service.title ? (
        <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-primary">
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
    "group block border-b border-border px-4 py-8 transition-colors md:border-b md:border-r md:px-7 md:first:pl-0",
    "hover:bg-muted/60",
    className
  );

  if (href) {
    return (
      <Link href={href} data-animate-item className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <article data-animate-item className={sharedClassName}>
      {content}
    </article>
  );
}
