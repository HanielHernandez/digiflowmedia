import { ContactForm } from "@/components/blocks/contact-form";
import type { ContactFormBlock as ContactFormBlockType } from "@/sanity/lib/pages";

type ContactFormBlockProps = {
  block: ContactFormBlockType;
};

export function ContactFormBlock({ block }: ContactFormBlockProps) {
  return (
    <section className="grid w-full items-start gap-10 py-16 md:grid-cols-2 md:gap-16">
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
    </section>
  );
}
