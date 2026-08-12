import { ContactForm } from "@/components/blocks/contact-form";
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
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-brand-pink">
              {block.eyebrowText}
            </p>
          ) : null}
          {block.title ? (
            <h2 className="max-w-lg text-5xl font-semibold text-white leading-[0.95] tracking-[-0.07em] sm:text-7xl">
              {block.title}
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
