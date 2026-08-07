import { PortableText } from "next-sanity";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/sanity/lib/pages";

type FaqAccordionProps = {
  faqs: FaqItem[];
  className?: string;
};

export function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  if (!faqs.length) return null;

  return (
    <Accordion className={className} defaultValue={[faqs[0]._id]}>
      {faqs.map((faq) =>
        faq ? (
          <AccordionItem key={faq._id} value={faq._id}>
            <AccordionTrigger className="font-heading text-body-lg text-foreground">
              {faq.question}
            </AccordionTrigger>
            {faq.answer?.length ? (
              <AccordionContent className="text-body text-muted-foreground space-y-3 [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_h3]:font-heading [&_h3]:text-h3 [&_h3]:text-foreground [&_h4]:font-heading [&_h4]:text-h4 [&_h4]:text-foreground [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
                <PortableText value={faq.answer} />
              </AccordionContent>
            ) : null}
          </AccordionItem>
        ) : null
      )}
    </Accordion>
  );
}
