"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon, ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
];

const productLinks = [
  { href: "/products/menu-pilot", label: "MenuPilot" },
  { href: "/products/invoice-generator", label: "Invoice Generator" },
];

type NavbarProps = {
  contactEmail?: string;
};

export function Navbar({ contactEmail }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const mailtoHref = contactEmail ? `mailto:${contactEmail}` : "/#contact";

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={productsRef}>
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-haspopup="menu"
              onClick={() => setProductsOpen((open) => !open)}
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
            >
              Our Products
              <ChevronDownIcon
                className={cn(
                  "size-4 transition-transform",
                  productsOpen && "rotate-180"
                )}
              />
            </button>
            {productsOpen ? (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-2xl border border-border bg-card p-2 shadow-lg"
              >
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setProductsOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link
            href="/#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </div>

        <a
          href={mailtoHref}
          className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 md:flex"
        >
          Start a project
          <ArrowUpRightIcon className="size-4" />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-border p-2 md:hidden"
        >
          {menuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="mx-6 flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-purple uppercase">
            Our Products
          </p>
          {productLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="pl-3 text-sm font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-foreground"
          >
            Contact
          </Link>
          <a
            href={mailtoHref}
            onClick={() => setMenuOpen(false)}
            className="font-semibold text-primary"
          >
            Start a project{" "}
            <ArrowUpRightIcon className="inline size-4" />
          </a>
        </div>
      ) : null}
    </header>
  );
}
