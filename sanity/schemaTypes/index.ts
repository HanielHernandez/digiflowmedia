import { type SchemaTypeDefinition } from "sanity";

import { aboutUsBlock } from "./aboutUsBlock";
import { bannerBlock } from "./bannerBlock";
import { contactFormBlock } from "./contactFormBlock";
import { extrasBlock } from "./extrasBlock";
import { faqs } from "./faqs";
import { faqsBlock } from "./faqsBlock";
import { heroSection } from "./heroSection";
import { howItWorksBlock } from "./howItWorksBlock";
import { metricsBlock } from "./metricsBlock";
import { page } from "./page";
import { plan } from "./plan";
import { plansAndPricingBlock } from "./plansAndPricingBlock";
import { service } from "./service";
import { serviceBlock } from "./serviceBlock";
import { table, tableRow } from "./table";
import { technologiesBlock } from "./technologiesBlock";
import { technology } from "./technology";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    page,
    service,
    technology,
    faqs,
    plan,
    tableRow,
    table,
    heroSection,
    serviceBlock,
    aboutUsBlock,
    metricsBlock,
    bannerBlock,
    technologiesBlock,
    contactFormBlock,
    faqsBlock,
    howItWorksBlock,
    plansAndPricingBlock,
    extrasBlock,
  ],
};
