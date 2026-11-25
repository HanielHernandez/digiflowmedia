import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ArrowCtaProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  color?: "purple" | "pink" | "glass";
};

function isAbsoluteHref(href: string) {
  return /^(https?:|tel:|mailto:)/i.test(href);
}

export function ArrowCta({
  href,
  children,
  className,
  color = "purple",
}: ArrowCtaProps) {
  const classNames = cn(
    "group flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.12em]",
    className
  );
  const icon = (
    <span
      className={cn(
        "flex size-11 items-center justify-center rounded-full transition-transform group-hover:rotate-45",
        color === "purple" && "bg-primary text-primary-foreground",
        color === "pink" && "bg-brand-pink text-foreground",
        color === "glass" && "bg-white/20 text-white"
      )}
    >
      <ArrowUpRightIcon className="size-5" />
    </span>
  );

  if (isAbsoluteHref(href)) {
    const external = /^https?:/i.test(href);
    return (
      <a
        href={href}
        className={classNames}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
      {icon}
    </Link>
  );
}
