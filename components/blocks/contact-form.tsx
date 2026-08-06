"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
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
  "w-full rounded-xl border border-border bg-background px-4 text-body text-foreground",
  "placeholder:text-muted-foreground outline-none transition-colors",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "disabled:cursor-not-allowed disabled:opacity-50"
);

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <form action={formAction} className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-body-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          disabled={pending}
          className={cn(fieldClassName, "h-12")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="about" className="text-body-sm font-medium">
          About
        </label>
        <input
          id="about"
          name="about"
          type="text"
          required
          placeholder="What is this about?"
          disabled={pending}
          className={cn(fieldClassName, "h-12")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-body-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Tell us more about your project..."
          disabled={pending}
          className={cn(fieldClassName, "min-h-32 resize-y py-4")}
        />
      </div>

      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending..." : "Send message"}
      </Button>

      {state.message ? (
        <p
          className={cn(
            "text-body-sm",
            state.ok ? "text-success" : "text-destructive"
          )}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
