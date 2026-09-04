import Image from "next/image";

import { cn } from "@/lib/utils";

type RoundedPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function RoundedPhoto({
  src,
  alt,
  className,
  sizes,
  priority,
}: RoundedPhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-border",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}
