import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Digital Flow Media"
      width={200}
      height={54}
      priority
      className={cn("h-11 w-auto rounded-md", className)}
    />
  );
}
