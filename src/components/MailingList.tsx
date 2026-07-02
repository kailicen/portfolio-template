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

  return (
    <section className="w-full bg-emerald-50 py-10">
      <Container>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.14em] text-emerald-700">
            Join our mailing list
          </h2>

          <p className="mt-2 text-lg text-gray-700">
            Receive updates, community news and upcoming events.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_160px]"
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
              className="w-full rounded-lg border border-gray-300 bg-white px-6 py-4 text-gray-700 outline-none transition-colors placeholder:text-gray-500 hover:border-emerald-400 focus:border-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-100"
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
              className="w-full rounded-lg border border-gray-300 bg-white px-6 py-4 text-gray-700 outline-none transition-colors placeholder:text-gray-500 hover:border-emerald-400 focus:border-emerald-500 disabled:cursor-not-allowed disabled:bg-gray-100"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-lg bg-emerald-600 px-6 py-4 font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Joining..." : "Join Now"}
          </button>
        </form>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-sm ${
              status === "success" ? "text-emerald-700" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-4 text-sm text-gray-600">
          By subscribing, you agree to receive email updates from Solace. You
          can unsubscribe at any time.
        </p>
      </Container>
    </section>
  );
}
