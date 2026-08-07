"use client";

import { useActionState } from "react";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";

import {
  sendContactEmail,
  type ContactFormState,
} from "@/app/actions/contact";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  ok: false,
  message: "",
};

const fieldClassName = cn(
  "border px-3 rounded-sm py-2 border-background/30 bg-transparent py-3 text-base text-background outline-none transition-colors",
  "placeholder:text-background/30 focus:border-brand-pink",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-medium text-background/60">
          Work email
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            disabled={pending}
            className={fieldClassName}
          />
        </label>

        <label className="flex flex-col gap-2 text-xs font-medium text-background/60">
          About
          <input
            id="about"
            name="about"
            type="text"
            required
            placeholder="What is this about?"
            disabled={pending}
            className={fieldClassName}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-xs font-medium text-background/60">
        What can we help with?
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          placeholder="A new brand, a digital product, a big shift..."
          disabled={pending}
          className={cn(fieldClassName, "resize-none")}
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="mt-4 flex w-fit items-center gap-3 rounded-full bg-brand-pink px-6 py-3 text-sm font-bold text-foreground transition-transform hover:-translate-y-1 disabled:pointer-events-none disabled:opacity-50"
      >
        {pending ? (
          "Sending..."
        ) : state.ok ? (
          <>
            <CheckIcon className="size-4" />
            Message received
          </>
        ) : (
          <>
            Send inquiry
            <ArrowUpRightIcon className="size-4" />
          </>
        )}
      </button>

      {state.message && !state.ok ? (
        <p className="text-sm text-brand-pink" role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
