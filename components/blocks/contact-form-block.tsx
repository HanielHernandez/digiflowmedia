import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { ContactForm } from "@/components/blocks/contact-form";
import { SectionEyebrow } from "@/components/section-eyebrow";
import type { ContactFormBlock as ContactFormBlockType } from "@/sanity/lib/pages";

type ContactFormBlockProps = {
  block: ContactFormBlockType;
};

function dialHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function whatsappHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

function mapsHref(location: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
}

function SocialIcon({ src }: { src: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block size-5 bg-current"
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 size-5 shrink-0 text-brand-pink" aria-hidden="true" />
      <div>
        <p className="font-semibold text-white">{label}</p>
        <div className="mt-1 space-y-0.5 text-sm leading-6 text-white/75">{children}</div>
      </div>
    </div>
  );
}

const detailLinkClass = "block transition-colors hover:text-white";

export function ContactFormBlock({ block }: ContactFormBlockProps) {
  const hasDetails = Boolean(
    block.email ||
      block.phone ||
      block.whatsapp ||
      block.location ||
      block.hours ||
      block.instagram ||
      block.facebook,
  );
  const callLabel =
    block.phone && block.whatsapp
      ? "Call or WhatsApp"
      : block.whatsapp
        ? "WhatsApp"
        : "Call us";

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
            <p className="mt-8 max-w-sm text-sm leading-6 text-white/70">
              {block.subtitle}
            </p>
          ) : null}
          {hasDetails ? (
            <div className="mt-8 max-w-sm space-y-6">
              {block.email ? (
                <Detail icon={MailIcon} label="Email us">
                  <a href={`mailto:${block.email}`} className={detailLinkClass}>
                    {block.email}
                  </a>
                </Detail>
              ) : null}
              {block.phone || block.whatsapp ? (
                <Detail icon={PhoneIcon} label={callLabel}>
                  {block.phone ? (
                    <a href={dialHref(block.phone)} className={detailLinkClass}>
                      {block.phone}
                    </a>
                  ) : null}
                  {block.whatsapp ? (
                    <a
                      href={whatsappHref(block.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={detailLinkClass}
                    >
                      {block.whatsapp} (WhatsApp)
                    </a>
                  ) : null}
                </Detail>
              ) : null}
              {block.location ? (
                <Detail icon={MapPinIcon} label="Our location">
                  <a
                    href={mapsHref(block.location)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={detailLinkClass}
                  >
                    {block.location}
                  </a>
                </Detail>
              ) : null}
              {block.hours ? (
                <Detail icon={ClockIcon} label="Business hours">
                  <p>{block.hours}</p>
                </Detail>
              ) : null}
              {block.facebook || block.instagram ? (
                <div className="pt-1">
                  <p className="font-semibold text-white">Follow us</p>
                  <div className="mt-4 flex gap-3">
                    {block.facebook ? (
                      <a
                        href={block.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex size-12 items-center justify-center rounded-full bg-white/10 text-brand-pink transition-colors hover:bg-white/15"
                      >
                        <SocialIcon src="/social/facebook.svg" />
                      </a>
                    ) : null}
                    {block.instagram ? (
                      <a
                        href={block.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex size-12 items-center justify-center rounded-full bg-white/10 text-brand-pink transition-colors hover:bg-white/15"
                      >
                        <SocialIcon src="/social/instagram.svg" />
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
