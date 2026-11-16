"use client";

import { useActionState, useState } from "react";
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
  const [requestType, setRequestType] = useState("Free website analysis");
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-5" aria-busy={pending}>
      <label className="flex flex-col gap-2 text-xs font-medium text-background/60">
        Your name
        <input name="name" type="text" autoComplete="name" required maxLength={120}
          placeholder="Jane Smith" disabled={pending} className={fieldClassName} />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-medium text-background/60">
          Work email
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="jane@company.com"
            disabled={pending}
            className={fieldClassName}
          />
        </label>

        <label className="flex flex-col gap-2 text-xs font-medium text-background/60">
          I would like
          <select
            id="about"
            name="about"
            required
            value={requestType}
            onChange={(event) => setRequestType(event.target.value)}
            disabled={pending}
            className={fieldClassName}
          >
            <option className="bg-foreground" value="Free website analysis">Free website analysis</option>
            <option className="bg-foreground" value="Project inquiry">Discuss a project</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2 text-xs font-medium text-background/60">
        Website URL {requestType === "Project inquiry" ? "(optional)" : ""}
        <input name="website" type="url" autoComplete="url" maxLength={2048}
          required={requestType === "Free website analysis"} placeholder="https://yourbusiness.com"
          disabled={pending} className={fieldClassName} />
      </label>

      <label className="flex flex-col gap-2 text-xs font-medium text-background/60">
        What can we help with? {requestType === "Free website analysis" ? "(optional)" : ""}
        <textarea
          id="description"
          name="description"
          required={requestType === "Project inquiry"}
          maxLength={5000}
          rows={4}
          placeholder="Tell us about your business and what you would like to improve."
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
            {requestType === "Free website analysis" ? "Get My Free Website Analysis" : "Send inquiry"}
            <ArrowUpRightIcon className="size-4" />
          </>
        )}
      </button>

      <p className="text-sm text-brand-pink" role="status" aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
