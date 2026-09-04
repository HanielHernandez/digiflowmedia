import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  FileTextIcon,
  MailIcon,
  PaletteIcon,
  ReceiptIcon,
  UsersIcon,
} from "lucide-react";

import { ArrowCta } from "@/components/arrow-cta";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Invoice Generator",
  description:
    "Invoice Generator from Digital Flow Media helps small businesses create branded invoices, send them to clients, and get paid faster.",
};

const features = [
  {
    icon: PaletteIcon,
    title: "Look like your business",
    description:
      "Your logo, colors, and details on every invoice so clients recognize you instantly.",
  },
  {
    icon: FileTextIcon,
    title: "Create an invoice in minutes",
    description:
      "Line items, taxes, notes, and due dates without a spreadsheet or a design tool.",
  },
  {
    icon: UsersIcon,
    title: "Save your clients",
    description:
      "Keep client details ready so repeat invoices take seconds instead of a rewrite.",
  },
  {
    icon: MailIcon,
    title: "Send and follow up",
    description:
      "Share a clean PDF or a link, then keep track of what is paid and what is waiting.",
  },
];

export default function InvoiceGeneratorPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-28">
        <div>
          <SectionEyebrow>Our Products</SectionEyebrow>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">
            Professional invoices without the busywork.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-7 text-muted-foreground">
            Invoice Generator is a Digital Flow Media product for small
            businesses that need branded invoices, a simple client list, and a
            faster way to get paid.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <ArrowCta href="/#contact" color="pink">
              Request early access
            </ArrowCta>
            <Link
              href="/products/menu-pilot"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              See MenuPilot
              <ArrowUpRightIcon className="ml-1 inline size-4" />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm">
          <div className="rounded-2xl bg-foreground p-6 text-background">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-xs tracking-[0.16em] text-brand-pink uppercase">
                  Invoice
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">INV-2048</p>
              </div>
              <ReceiptIcon className="size-8 text-brand-pink" />
            </div>
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex justify-between text-background/60">
                <span>Website care — Pro</span>
                <span>$199.00</span>
              </div>
              <div className="flex justify-between text-background/60">
                <span>Landing page</span>
                <span>$300.00</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-3 text-white">
                <span>Total due</span>
                <span>$499.00</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Branded PDFs, saved clients, and a clear total — ready to send.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.5rem] border border-border bg-background p-6"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-brand-pink/15 text-brand-purple">
                <feature.icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
