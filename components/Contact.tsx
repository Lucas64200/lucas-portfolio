"use client";

import { useState, type FormEvent } from "react";
import { GITHUB_PROFILE_URL } from "@/lib/github";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const CONTACT_EMAIL = "monvoisin.lucas@gmail.com";
// TODO(Lucas): remplace par ton vrai lien LinkedIn.
const LINKEDIN_URL = "https://www.linkedin.com/in/REMPLACE-MOI";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Échec de l'envoi du message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
        Contact
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Un projet d&apos;automatisation ou d&apos;outil IA en tête ? Discutons-en.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 font-medium text-zinc-950 transition-colors hover:border-zinc-400 hover:text-orange-700 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-500 dark:hover:text-orange-400"
        >
          <MailIcon className="h-4 w-4" />
          {CONTACT_EMAIL}
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 font-medium text-zinc-950 transition-colors hover:border-zinc-400 hover:text-orange-700 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-500 dark:hover:text-orange-400"
        >
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 font-medium text-zinc-950 transition-colors hover:border-zinc-400 hover:text-orange-700 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-500 dark:hover:text-orange-400"
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 max-w-lg space-y-4">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-sm outline-none transition-colors focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30 dark:border-zinc-700 dark:focus:border-orange-400 dark:focus:ring-orange-400/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-sm outline-none transition-colors focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30 dark:border-zinc-700 dark:focus:border-orange-400 dark:focus:ring-orange-400/20"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-1 w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-sm outline-none transition-colors focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30 dark:border-zinc-700 dark:focus:border-orange-400 dark:focus:ring-orange-400/20"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-zinc-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          {status === "sending" ? "Envoi..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600 dark:text-green-400">
            Message envoyé, merci !
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}
