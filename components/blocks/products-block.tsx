import { ArrowCta } from "@/components/arrow-cta";
import { RoundedPhoto } from "@/components/rounded-photo";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { sanityImageAlt } from "@/lib/image-alt";
import { blockId } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type { ProductsBlock as ProductsBlockType } from "@/sanity/lib/pages";

type ProductsBlockProps = {
  block: ProductsBlockType;
};

export function ProductsBlock({ block }: ProductsBlockProps) {
  const products =
    block.products?.filter((product) => product.title || product.description) ??
    [];

  return (
    <section
      id={blockId(block.name) || "products"}
      className="w-full px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            {block.eyebrowText ? (
              <div className="mb-4">
                <SectionEyebrow>{block.eyebrowText}</SectionEyebrow>
              </div>
            ) : null}
            {block.title ? (
              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                {block.title}
              </h2>
            ) : null}
          </div>
          {block.description ? (
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              {block.description}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {products.map((product, index) => (
            <article
              key={`${product.title}-${index}`}
              data-animate-item
              className="flex flex-col gap-6 rounded-[2rem] border border-border bg-card p-7 transition-colors hover:bg-muted/60 sm:flex-row sm:items-center"
            >
              {product.image ? (
                <RoundedPhoto
                  src={urlFor(product.image).width(1200).fit("max").url()}
                  alt={sanityImageAlt(product.image, product.title || "Product")}
                  className="aspect-video w-full shrink-0 rounded-lg sm:w-[45%]"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 45vw, 22vw"
                />
              ) : null}
              <div className="flex min-w-0 flex-1 flex-col">
                {product.title ? (
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {product.title}
                  </h3>
                ) : null}
                {product.description ? (
                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>
                ) : null}
                {product.ctaText && product.ctaLink ? (
                  <ArrowCta href={product.ctaLink} color="pink" className="mt-6">
                    {product.ctaText}
                  </ArrowCta>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
