import { ContactForm } from "@/components/blocks/contact-form";
import { SectionEyebrow } from "@/components/section-eyebrow";
import type { ContactFormBlock as ContactFormBlockType } from "@/sanity/lib/pages";

type ContactFormBlockProps = {
  block: ContactFormBlockType;
};

export function ContactFormBlock({ block }: ContactFormBlockProps) {
  return (
    <section
      id="contact"
      className="w-full bg-foreground px-6 py-20 text-background lg:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          {block.eyebrowText ? (
            <div className="mb-5">
              <SectionEyebrow tone="light">{block.eyebrowText}</SectionEyebrow>
            </div>
          ) : null}
          {block.title ? (
            <h2 className="max-w-lg text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-7xl">
              {block.title.replace(/\bLest\b/i, "Let's")}
            </h2>
          ) : null}
          {block.subtitle ? (
            <p className="mt-8 max-w-sm text-sm leading-6 text-background/60">
              {block.subtitle}
            </p>
          ) : null}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
