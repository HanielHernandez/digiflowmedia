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
    <section className="w-full bg-secondary">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-16">
        {block.name ? (
          <h2 className="font-heading text-h2 text-center">{block.name}</h2>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {block.metrics.map((metric) => {
            const color = metric.color || "purple";

            return (
              <Card
                key={metric._key}
                className="min-w-0 items-center overflow-hidden border-0 bg-brand-blue text-center shadow-brand-blue/50 transition-all duration-300 ease-in-out hover:shadow-brand-blue"
              >
                <CardHeader className="w-full min-w-0 items-center px-6">
                  <h1
                    className={cn(
                      "font-heading text-h1 w-full max-w-full text-center wrap-break-word",
                      colorClassMap[color]
                    )}
                  >
                    {metric.title}
                  </h1>
                </CardHeader>
                {metric.subtitle ? (
                  <CardContent className="w-full min-w-0">
                    <CardDescription className="text-body text-center text-primary-foreground wrap-break-word">
                      {metric.subtitle}
                    </CardDescription>
                  </CardContent>
                ) : null}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
