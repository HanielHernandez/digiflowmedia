import { type SchemaTypeDefinition } from "sanity";

import { aboutUsBlock } from "./aboutUsBlock";
import { bannerBlock } from "./bannerBlock";
import { contactFormBlock } from "./contactFormBlock";
import { faqs } from "./faqs";
import { faqsBlock } from "./faqsBlock";
import { heroSection } from "./heroSection";
import { metricsBlock } from "./metricsBlock";
import { page } from "./page";
import { service } from "./service";
import { serviceBlock } from "./serviceBlock";
import { technologiesBlock } from "./technologiesBlock";
import { technology } from "./technology";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    service,
    technology,
    faqs,
    heroSection,
    serviceBlock,
    aboutUsBlock,
    metricsBlock,
    bannerBlock,
    technologiesBlock,
    contactFormBlock,
    faqsBlock,
  ],
};
