import { notFound } from "next/navigation";

import { PageBlocks } from "@/components/blocks/page-blocks";
import { getPageBySlug } from "@/sanity/lib/pages";

export async function renderSanityPage(slug: string) {
  const page = await getPageBySlug(slug);

  if (!page) notFound();

  return (
    <main className="flex w-full flex-1 flex-col">
      <PageBlocks blocks={page.blocks} />
    </main>
  );
}
