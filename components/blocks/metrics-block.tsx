import type {
  MetricColor,
  MetricsBlock as MetricsBlockType,
} from "@/sanity/lib/pages";
import { blockId, cn } from "@/lib/utils";

type MetricsBlockProps = {
  block: MetricsBlockType;
};

const colorClassMap: Record<MetricColor, string> = {
  purple: "text-primary",
  blue: "text-secondary",
  pink: "text-brand-pink",
  success: "text-success",
  foreground: "text-foreground",
};

function renderMetricTitle(title: string) {
  const match = title.match(/^(.*?)([%x×])$/i);
  if (!match) return title;

  const [, value, suffix] = match;
  return (
    <>
      {value}
      <span className="text-brand-pink">{suffix}</span>
    </>
  );
}

export function MetricsBlock({ block }: MetricsBlockProps) {
  if (!block.metrics?.length) return null;

  return (
    <section
      id={blockId(block.name)}
      className="w-full border-b border-border px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 md:grid-cols-4">
        {block.metrics.map((metric) => {
          const color = metric.color || "purple";

          return (
            <div key={metric._key} className="text-center">
              {metric.title ? (
                <p
                  className={cn(
                    "text-5xl font-semibold tracking-[-0.07em] sm:text-7xl",
                    colorClassMap[color]
                  )}
                >
                  {renderMetricTitle(metric.title)}
                </p>
              ) : null}
              {metric.subtitle ? (
                <p className="mt-2 text-sm text-muted-foreground">
                  {metric.subtitle}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
