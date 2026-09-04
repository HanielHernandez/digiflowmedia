"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3Icon,
  PhoneCallIcon,
  ShieldCheckIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type MetricCounterProps = {
  title: string;
  subtitle?: string;
  colorClassName?: string;
  icon?: string;
  index?: number;
};

const ICONS: LucideIcon[] = [
  ShieldCheckIcon,
  PhoneCallIcon,
  BarChart3Icon,
  UsersIcon,
];

const ICON_BY_NAME: Record<string, LucideIcon> = {
  shield: ShieldCheckIcon,
  phone: PhoneCallIcon,
  chart: BarChart3Icon,
  users: UsersIcon,
};

function parseMetric(title: string): {
  prefix: string;
  value: number | null;
  decimals: number;
  suffix: string;
} {
  const match = title.trim().match(/^(.*?)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) {
    return { prefix: "", value: null, decimals: 0, suffix: title };
  }

  const [, prefix, number, suffix] = match;
  const decimals = number.includes(".") ? number.split(".")[1].length : 0;

  return {
    prefix,
    value: Number(number),
    decimals,
    suffix,
  };
}

export function MetricCounter({
  title,
  subtitle,
  colorClassName,
  icon,
  index = 0,
}: MetricCounterProps) {
  const parsed = parseMetric(title);
  const root = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(
    parsed.value === null ? title : `${parsed.prefix}0${parsed.suffix}`
  );

  const Icon =
    (icon && ICON_BY_NAME[icon.toLowerCase()]) || ICONS[index % ICONS.length];

  useGSAP(
    () => {
      if (parsed.value === null || !root.current) return;

      const state = { val: 0 };
      gsap.to(state, {
        val: parsed.value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate: () => {
          setDisplay(
            `${parsed.prefix}${state.val.toFixed(parsed.decimals)}${parsed.suffix}`
          );
        },
      });
    },
    { scope: root, dependencies: [title] }
  );

  return (
    <div
      ref={root}
      data-animate-item
      className="group rounded-2xl px-3 py-6 text-center transition-colors hover:bg-muted/60 sm:px-4"
    >
      <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand-pink/15 text-brand-purple transition-transform group-hover:scale-105">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <p
        className={cn(
          "font-display text-5xl font-semibold tracking-[-0.07em] transition-transform group-hover:scale-[1.03] sm:text-7xl",
          colorClassName
        )}
      >
        {display}
      </p>
      {subtitle ? (
        <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
