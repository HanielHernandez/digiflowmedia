import { ContactForm } from "@/components/blocks/contact-form";
import type { ContactFormBlock as ContactFormBlockType } from "@/sanity/lib/pages";

type ContactFormBlockProps = {
  block: ContactFormBlockType;
};

export function ContactFormBlock({ block }: ContactFormBlockProps) {
  return (
    <section className="w-full">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-6 py-16 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-4">
          {block.eyebrowText ? (
            <p className="text-badge text-primary uppercase tracking-[0.08em]">
              {block.eyebrowText}
            </p>
          ) : null}
          {block.title ? (
            <h2 className="font-heading text-h2">{block.title}</h2>
          ) : null}
          {block.subtitle ? (
            <p className="text-body-lg text-muted-foreground">{block.subtitle}</p>
          ) : null}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
