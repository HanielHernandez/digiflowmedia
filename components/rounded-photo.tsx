import Image from "next/image";

import { cn } from "@/lib/utils";

type RoundedPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
};

export function RoundedPhoto({
  src,
  alt,
  className,
  sizes,
  priority,
  objectFit = "cover",
}: RoundedPhotoProps) {
  const contain = objectFit === "contain";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-border",
        contain ? "h-auto" : null,
        className
      )}
    >
      {contain ? (
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1200}
          priority={priority}
          className="h-auto w-full object-contain"
          sizes={sizes}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes}
        />
      )}
    </div>
  );
}
