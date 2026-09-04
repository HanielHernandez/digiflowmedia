import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  BellIcon,
  QrCodeIcon,
  RefreshCwIcon,
  SmartphoneIcon,
  UtensilsIcon,
} from "lucide-react";

import { ArrowCta } from "@/components/arrow-cta";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "MenuPilot",
  description:
    "MenuPilot is a digital menu platform from Digital Flow Media for restaurants and hospitality teams that need menus that update as fast as service.",
};

const features = [
  {
    icon: QrCodeIcon,
    title: "QR menus guests actually use",
    description:
      "A fast, mobile-first menu that looks as good as your dining room and works on every phone.",
  },
  {
    icon: RefreshCwIcon,
    title: "Update in minutes, not reprints",
    description:
      "Change prices, 86 a dish, or launch a special without printing a new menu.",
  },
  {
    icon: UtensilsIcon,
    title: "Built for hospitality",
    description:
      "Sections, photos, allergens, and languages arranged the way a restaurant actually works.",
  },
  {
    icon: BellIcon,
    title: "Keep the floor in sync",
    description:
      "Your team and your guests see the same menu, so service stays clear during a busy night.",
  },
];

export default function MenuPilotPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-28">
        <div>
          <SectionEyebrow>Our Products</SectionEyebrow>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">
            A menu that works as hard as you do.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-7 text-muted-foreground">
            MenuPilot is Digital Flow Media&apos;s digital menu product for
            restaurants, cafes, and hospitality teams. Guests get a beautiful
            menu. You get a tool that keeps up with the floor.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <ArrowCta href="/#contact" color="purple">
              Talk about MenuPilot
            </ArrowCta>
            <Link
              href="/products/invoice-generator"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              See Invoice Generator
              <ArrowUpRightIcon className="ml-1 inline size-4" />
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] bg-foreground p-8 text-background">
          <p className="font-display text-xs tracking-[0.18em] text-brand-pink uppercase">
            Made for hospitality
          </p>
          <p className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
            Tonight&apos;s menu, on every phone.
          </p>
          <div className="mt-8 space-y-3 text-sm text-background/70">
            <p>Share a QR code. Guests open a fast, branded menu.</p>
            <p>Update items from one place instead of reprinting paper.</p>
            <p>Keep photos, prices, and specials aligned across locations.</p>
          </div>
          <SmartphoneIcon className="mt-10 size-10 text-brand-pink" />
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-foreground p-8 text-background sm:grid-cols-2 lg:p-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
            >
              <span className="mb-4 flex size-10 items-center justify-center rounded-full bg-brand-pink/20 text-brand-pink">
                <feature.icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-background/70">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
