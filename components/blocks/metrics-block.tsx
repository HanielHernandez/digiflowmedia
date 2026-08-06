import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import type {
  MetricColor,
  MetricsBlock as MetricsBlockType,
} from "@/sanity/lib/pages";
import { cn } from "@/lib/utils";

type MetricsBlockProps = {
  block: MetricsBlockType;
};

const colorClassMap: Record<MetricColor, string> = {
  purple: "text-brand-purple",
  blue: "text-brand-blue",
  pink: "text-brand-pink",
  success: "text-success",
  foreground: "text-foreground",
};

export function MetricsBlock({ block }: MetricsBlockProps) {
  if (!block.metrics?.length) return null;

  return (
    <section className="flex w-full flex-col gap-8 py-16">
      {block.name ? (
        <h2 className="font-heading text-h2 text-center">{block.name}</h2>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {block.metrics.map((metric) => {
          const color = metric.color || "purple";

          return (
            <Card
              key={metric._key}
              className="min-w-0 items-center bg-brand-blue overflow-hidden text-center"
            >
              <CardHeader className="w-full min-w-0 items-center px-6">
                <h1
                  className={cn(
                    "font-heading    text-h1 w-full max-w-full text-center wrap-break-word",
                    colorClassMap[color]
                  )}
                >
                  {metric.title}
                </h1>
              </CardHeader>
              {metric.subtitle ? (
                <CardContent className="w-full min-w-0">
                  <CardDescription className="text-body text-primary-foreground text-center wrap-break-word">
                    {metric.subtitle}
                  </CardDescription>
                </CardContent>
              ) : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
