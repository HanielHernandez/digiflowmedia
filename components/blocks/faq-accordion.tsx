import { PortableText } from "next-sanity";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/sanity/lib/pages";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  faqs: FaqItem[];
  className?: string;
};

export function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  if (!faqs.length) return null;

  return (
    <Accordion
      className={cn("border-t border-border", className)}
      defaultValue={[faqs[0]._id]}
    >
      {faqs.map((faq) =>
        faq ? (
          <AccordionItem
            key={faq._id}
            value={faq._id}
            className="border-b border-border"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline [&_[data-slot=accordion-trigger-icon]]:text-primary">
              {faq.question}
            </AccordionTrigger>
            {faq.answer?.length ? (
              <AccordionContent className="max-w-2xl pb-6 text-sm leading-6 text-muted-foreground space-y-3 [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_li]:ml-5 [&_ol]:list-decimal [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc">
                <PortableText value={faq.answer} />
              </AccordionContent>
            ) : null}
          </AccordionItem>
        ) : null
      )}
    </Accordion>
  );
}
