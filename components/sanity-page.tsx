import { notFound } from "next/navigation";

import { PageBlocks } from "@/components/blocks/page-blocks";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getPageBySlug } from "@/sanity/lib/pages";

export async function renderSanityPage(slug: string) {
  const page = await getPageBySlug(slug);

  if (!page) notFound();

  const pageSlug = page.slug || slug;

  return (
    <main className="flex w-full flex-1 flex-col">
      <ScrollReveal slug={pageSlug}>
        <PageBlocks blocks={page.blocks} />
      </ScrollReveal>
    </main>
  );
}
