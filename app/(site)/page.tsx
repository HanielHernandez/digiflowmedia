import type { Metadata } from "next";

import { SanityPageView } from "@/components/sanity-page";
import { getPageBySlug } from "@/sanity/lib/pages";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("/");

  return {
    title: page?.name ?? "Home",
  };
}

export default async function HomePage() {
  return <SanityPageView slug="/" />;
}
