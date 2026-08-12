import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Logo } from "@/components/logo";

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-foreground px-6 pb-8 text-background lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-background/15 pt-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Logo className="h-8 brightness-0 invert" />
            </Link>
            <p className="mt-3 text-xs text-background/50">
              Digital Flow Media — creative strategy, content, and growth for
              modern brands.
            </p>
          </div>

          <div className="flex gap-5 text-xs text-background/60">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-background"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#" className="hover:text-background">
              Back to top <ArrowUpRightIcon className="inline size-3" />
            </Link>
          </div>
        </div>

        <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.15em] text-background/40">
          © {new Date().getFullYear()} Digital Flow Media. Make something worth
          sharing.
        </p>
      </div>
    </footer>
  );
}
