import {
  Code2Icon,
  GaugeIcon,
  LayoutTemplateIcon,
  SearchIcon,
  StoreIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react";
import { PortableText } from "next-sanity";

import { ArrowCta } from "@/components/arrow-cta";
import type { ServiceItem } from "@/sanity/lib/pages";
import { SITE_PHONE_HREF } from "@/lib/site";
import { SOLUTION_SERVICES } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: ServiceItem;
  index?: number;
  className?: string;
};

const SERVICE_ICONS: Record<string, LucideIcon> = {
  layout: LayoutTemplateIcon,
  gauge: GaugeIcon,
  workflow: WorkflowIcon,
  store: StoreIcon,
  search: SearchIcon,
  code: Code2Icon,
};

function iconForService(title?: string): LucideIcon {
  const match = SOLUTION_SERVICES.find((item) => item.match.test(title || ""));
  return SERVICE_ICONS[match?.icon || ""] || LayoutTemplateIcon;
}

export function ServiceCard({
  service,
  index = 0,
  className,
}: ServiceCardProps) {
  const href = service.url || SITE_PHONE_HREF;
  const number = String(index + 1).padStart(2, "0");
  const Icon = iconForService(service.title || service.name);

  return (
    <article
      data-animate-item
      className={cn(
        "group flex flex-col border-b border-border px-4 py-8 transition-colors md:border-r md:px-7 md:odd:pl-0 lg:odd:pl-7 lg:[&:nth-child(3n+1)]:pl-0",
        "hover:bg-muted/60",
        className
      )}
    >
      <div className="mb-4 flex justify-end">
        <span className="font-display text-xs tracking-[0.16em] text-brand-purple uppercase">
          {number}
        </span>
      </div>

      <div className="flex items-start gap-5">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="size-8" aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1 pr-4">
          {service.title ? (
            <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em] transition-colors group-hover:text-primary">
              {service.title}
            </h3>
          ) : null}

          <div className="flex items-center justify-between gap-4">
            {service.description?.length ? (
              <div className="max-w-xs space-y-3 text-sm leading-6 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
                <PortableText value={service.description} />
              </div>
            ) : null}

           
          </div>
        </div>

        <ArrowCta href={href} color="pink" className="ml-auto shrink-0 absolute right-6 bottom-6">
              <span className="sr-only">
                Explore {service.title || service.name || "service"}
              </span>
            </ArrowCta>
      </div>
    </article>
  );
}
