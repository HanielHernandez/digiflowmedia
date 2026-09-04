import { MetricCounter } from "@/components/metric-counter";
import type {
  MetricColor,
  MetricsBlock as MetricsBlockType,
} from "@/sanity/lib/pages";
import { blockId } from "@/lib/utils";

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

export function MetricsBlock({ block }: MetricsBlockProps) {
  const metrics = block.metrics?.filter(Boolean) ?? [];
  if (!metrics.length) return null;

  const visible =
    metrics.length === 4 ? metrics.slice(0, 3) : metrics;

  return (
    <section
      id={blockId(block.name)}
      className="w-full border-b border-border px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-4 sm:grid-cols-3">
        {visible.map((metric, index) => {
          const color = metric.color || "purple";

          return (
            <MetricCounter
              key={metric._key}
              title={metric.title || ""}
              subtitle={metric.subtitle}
              colorClassName={colorClassMap[color]}
              icon={metric.icon}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}
