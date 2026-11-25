import type { Metadata } from "next";

import { renderSanityPage } from "@/components/sanity-page";
import { getPageBySlug } from "@/sanity/lib/pages";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("analyzer");

  return {
    title: page?.name ?? "Digital Growth Analyzer",
    description:
      "Discover what's working, what's missing, and where your business can improve.",
  };
}

export default async function AnalyzerPage() {
  return renderSanityPage("analyzer");
}
