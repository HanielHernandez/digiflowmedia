import { notFound } from "next/navigation";

import { PageBlocks } from "@/components/blocks/page-blocks";
import { getPageBySlug } from "@/sanity/lib/pages";

type SanityPageViewProps = {
  slug: string;
};

export async function SanityPageView({ slug }: SanityPageViewProps) {
  const page = await getPageBySlug(slug);

  if (!page) notFound();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6">
      <PageBlocks blocks={page.blocks} />
    </main>
  );
}
