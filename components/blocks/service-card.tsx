import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ServiceItem } from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const imageUrl = service.image
    ? urlFor(service.image).width(800).height(600).url()
    : null;
  const href = service.url || (service.slug ? `/${service.slug}` : null);

  const card = (
    <Card
      className={cn(
        "h-full min-w-0 overflow-hidden  transition-all ease-in-out hover:-translate-y-5 gap-4  duration-300",
        href && "hover:opacity-90",
        className
      )}
    >

      <CardHeader className="gap-4 px-6 ">

      {imageUrl ? (
        <div className="relative size-20 rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={service.title || service.name || "Service"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : null}
        {service.title ? (
          <CardTitle className="font-heading text-h4">{service.title}</CardTitle>
        ) : null}
      </CardHeader>
      {service.description ? (
        <CardContent className="">
          <CardDescription className="text-body">
            {service.description}
          </CardDescription>
        </CardContent>
      ) : null}
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full min-w-0">
        {card}
      </Link>
    );
  }

  return card;
}
