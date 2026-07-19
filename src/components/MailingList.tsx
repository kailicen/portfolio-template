import React, { FormEvent, useState } from "react";
import Container from "@/components/Container";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function MailingList() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/mailchimp/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to join the mailing list.");
      }

      setStatus("success");
      setMessage(
        result.message ||
          "Thanks for joining. Please check your email to confirm your subscription.",
      );

      setName("");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const inputClassName =
    "w-full rounded-lg border border-white/20 bg-white px-6 py-4 text-solace-ink outline-none transition-all placeholder:text-slate-400 hover:border-solace-300 focus:border-solace-300 focus:ring-2 focus:ring-solace-300/30 disabled:cursor-not-allowed disabled:bg-solace-100";

  return (
    <section className="w-full bg-solace-forest py-14 text-white">
      <Container>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-solace-200">
            Stay connected
          </p>

          <h2 className="mt-3 text-2xl font-medium md:text-3xl">
            Join our mailing list
          </h2>

          <p className="mt-3 text-lg leading-relaxed text-solace-100">
            Receive updates, community news and upcoming events.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_170px]"
        >
          <div>
            <label htmlFor="mailing-list-name" className="sr-only">
              Name
            </label>

            <input
              id="mailing-list-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              autoComplete="name"
              maxLength={100}
              disabled={status === "submitting"}
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="mailing-list-email" className="sr-only">
              Email
            </label>

            <input
              id="mailing-list-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              autoComplete="email"
              maxLength={254}
              required
              disabled={status === "submitting"}
              className={inputClassName}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="
              rounded-lg
              bg-solace-surface
              px-6 py-4
              font-semibold text-solace-800
              shadow-sm
              transition-all
              hover:bg-solace-100
              hover:shadow-md
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-solace-forest
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {status === "submitting" ? "Joining..." : "Join Now"}
          </button>
        </form>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-sm ${
              status === "success" ? "text-solace-100" : "text-red-200"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-4 text-sm text-solace-100">
          By subscribing, you agree to receive email updates from Solace. You
          can unsubscribe at any time.
        </p>
      </Container>
    </section>
  );
}
