import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "pink" | "purple" | "light";
};

export function SectionEyebrow({
  children,
  className,
  tone = "pink",
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "font-display inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase",
        tone === "pink" && "bg-brand-pink/15 text-brand-purple",
        tone === "purple" && "bg-primary/10 text-primary",
        tone === "light" && "bg-white/10 text-brand-pink",
        className
      )}
    >
      {children}
    </p>
  );
}
