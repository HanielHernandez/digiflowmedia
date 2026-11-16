import type { PageBlock } from "@/sanity/lib/pages";

// Replace known launch copy only, so later Sanity edits remain authoritative.
export function improveHomeContent(blocks?: PageBlock[]): PageBlock[] | undefined {
  return blocks?.map((block) => {
    if (block._type === "heroSection") {
      return {
        ...block,
        title: block.title === "Build Smarter. Grow Better."
          ? "Websites that turn visitors into customers." : block.title,
        subtitle: block.subtitle === "Websites, digital tools, and smart solutions built to help your business attract customers, save time, and grow."
          ? "We help small businesses attract customers and save time with professional websites, SEO, and practical automation."
          : block.subtitle,
        ...(/free.*(?:analysis|analy[sz]er)/i.test(block.primaryButtonText || "")
          ? { primaryButtonText: "Get My Free Website Analysis", primaryUrl: "/#contact" }
          : {}),
      };
    }
    if (block._type === "bannerBlock" && /free.*analysis/i.test(block.ctaText || "")) {
      return { ...block, ctaText: "Get My Free Website Analysis", ctaLink: "/#contact" };
    }
    if (block._type === "contactFormBlock") {
      return {
        ...block,
        title: /^(?:Lest|Let's) get in touch$/i.test(block.title || "")
          ? "Let's grow your business." : block.title,
        subtitle: /please fill the follwing form/i.test(block.subtitle || "")
          ? "Request your free website analysis or tell us about your next project. We'll reply by email."
          : block.subtitle,
      };
    }
    if (block._type === "serviceBlock") {
      return { ...block, services: block.services?.map((service) => {
        const title = service.title?.replace(/Optiomization/g, "Optimization");
        const text = service.description?.flatMap((paragraph) =>
          paragraph.children?.map((child) => child.text || "") || []
        ).join(" ") || "";
        if (/ecommerce/i.test(title || "") && /Already have a website\?/.test(text) && /Core Web Vitals/.test(text)) {
          return { ...service, title, description: [{
            _type: "block" as const, _key: "ecommerce-intro", style: "normal",
            markDefs: [], children: [{ _type: "span", _key: "text", marks: [],
              text: "Turn your products into an online shopping experience that is easy to browse and buy from. We build eCommerce websites with product catalogs, mobile-friendly storefronts, checkout, and payment integrations tailored to your business." }],
          }] };
        }
        return { ...service, title };
      }) };
    }
    if (block._type === "faqsBlock") {
      // Keep the first duration answer when both launch questions are present.
      const durationQuestions = new Set([
        "how long does it take to build a website?", "how long does a website take?",
      ]);
      const answered = block.faqs?.find((faq) =>
        durationQuestions.has(faq.question?.trim().toLowerCase() || "") && faq.answer?.length
      );
      return { ...block, faqs: block.faqs?.filter((faq) => !answered ||
        !durationQuestions.has(faq.question?.trim().toLowerCase() || "") || faq._id === answered._id) };
    }
    return block;
  });
}
