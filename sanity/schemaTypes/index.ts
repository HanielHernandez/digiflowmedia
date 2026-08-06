import { type SchemaTypeDefinition } from "sanity";

import { aboutUsBlock } from "./aboutUsBlock";
import { bannerBlock } from "./bannerBlock";
import { contactFormBlock } from "./contactFormBlock";
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
    heroSection,
    serviceBlock,
    aboutUsBlock,
    metricsBlock,
    bannerBlock,
    technologiesBlock,
    contactFormBlock,
  ],
};
