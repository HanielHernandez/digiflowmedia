import Link from "next/link";

import { Logo } from "@/components/logo";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface shadow-[0_-4px_12px_rgb(0_0_0_/_0.05)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <Link href="/" className="w-fit transition-opacity hover:opacity-80">
              <Logo />
            </Link>
            <p className="text-body-sm text-muted-foreground">
              Digital Flow Media — creative strategy, content, and growth for
              modern brands.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} Digital Flow Media. All rights
            reserved.
          </p>
          <Link
            href="/contact"
            className="text-caption font-medium text-primary transition-opacity hover:opacity-80"
          >
            Get started
          </Link>
        </div>
      </div>
    </footer>
  );
}
