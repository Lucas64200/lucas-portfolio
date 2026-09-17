"use client";

import { useState, type FormEvent } from "react";
import { GITHUB_PROFILE_URL } from "@/lib/github";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import ScrollGroup from "@/components/ScrollGroup";

const CONTACT_EMAIL = "monvoisin.lucas@gmail.com";
// TODO(Lucas): remplace par ton vrai lien LinkedIn.
const LINKEDIN_URL = "https://www.linkedin.com/in/REMPLACE-MOI";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "mt-1 w-full rounded-2xl border-2 border-card-border bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-neon";

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
    <section id="contact" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-neon p-8 text-neon-foreground sm:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold italic sm:text-4xl">
              Un projet en tête ?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed opacity-80">
              Un projet d&apos;automatisation ou d&apos;outil IA en tête ?
              Discutons-en.
            </p>

            <ScrollGroup className="mt-8 flex flex-col gap-3 text-sm font-semibold">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ "--i": 0 } as React.CSSProperties}
                className="stagger-item inline-flex items-center gap-2 hover:underline"
              >
                <MailIcon className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--i": 1 } as React.CSSProperties}
                className="stagger-item inline-flex items-center gap-2 hover:underline"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--i": 2 } as React.CSSProperties}
                className="stagger-item inline-flex items-center gap-2 hover:underline"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </ScrollGroup>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Nom
              </label>
              <input id="name" name="name" type="text" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input id="email" name="email" type="email" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-bg px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Envoi..." : "Envoyer"}
            </button>

            {status === "success" && (
              <p className="text-sm font-semibold">Message envoyé, merci !</p>
            )}
            {status === "error" && (
              <p className="text-sm font-semibold">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
