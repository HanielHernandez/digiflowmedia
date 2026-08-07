import Link from "next/link";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  FolderKanbanIcon,
  MailIcon,
  UsersIcon,
} from "lucide-react";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services", icon: BriefcaseIcon },
  { href: "/work", label: "Work", icon: FolderKanbanIcon },
  { href: "/about", label: "About", icon: UsersIcon },
  { href: "/contact", label: "Contact", icon: MailIcon },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "sm" }),
            "hidden sm:inline-flex"
          )}
        >
          Get started
          <ArrowRightIcon data-icon="inline-end" />
        </Link>
      </div>
    </header>
  );
}
