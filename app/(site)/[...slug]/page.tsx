import type { Metadata } from "next";

import { SanityPageView } from "@/components/sanity-page";
import { getPageBySlug, pathToSlug } from "@/sanity/lib/pages";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug: segments } = await params;
  const page = await getPageBySlug(pathToSlug(segments));

  return {
    title: page?.name ?? "Page not found",
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug: segments } = await params;

  return <SanityPageView slug={pathToSlug(segments)} />;
}
