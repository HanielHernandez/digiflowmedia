import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ArrowCtaProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  color?: "purple" | "pink";
};

export function ArrowCta({
  href,
  children,
  className,
  color = "purple",
}: ArrowCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.12em]",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-full transition-transform group-hover:rotate-45",
          color === "purple" && "bg-primary text-primary-foreground",
          color === "pink" && "bg-brand-pink text-foreground"
        )}
      >
        <ArrowUpRightIcon className="size-5" />
      </span>
    </Link>
  );
}
