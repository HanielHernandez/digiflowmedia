import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { TechnologyItem } from "@/sanity/lib/pages";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

type TechnologyCardProps = {
  technology: TechnologyItem;
  className?: string;
};

export function TechnologyCard({ technology, className }: TechnologyCardProps) {
  const imageUrl = technology.image
    ? urlFor(technology.image).width(400).height(400).url()
    : null;

  return (
    <Card className={cn("h-full min-w-0 gap-4", className)}>
      <CardHeader className="gap-4 px-6">
        {imageUrl ? (
          <div className="relative size-16 mx-auto overflow-hidden rounded-xl">
            <Image
              src={imageUrl}
              alt={technology.name || "Technology"}
              fill
              className="object-cover mx-auto"
              sizes="64px"
            />
          </div>
        ) : null}
        {technology.name ? (
          <CardTitle className="font-heading text-h5">
            {technology.name}
          </CardTitle>
        ) : null}
      </CardHeader>
      {technology.description ? (
        <CardContent className="px-6">
          <CardDescription className="text-body-sm">
            {technology.description}
          </CardDescription>
        </CardContent>
      ) : null}
    </Card>
  );
}
