import React, { useEffect, useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

export type ContactInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ApiResponse = {
  success?: boolean;
  message: string;
};

type ContactFormProps = {
  compact?: boolean;
  className?: string;
};

async function sendContactForm(data: ContactInputs): Promise<ApiResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as ApiResponse;

  if (!response.ok) {
    throw new Error(result.message || "Failed to send your message.");
  }

  return result;
}

export default function ContactForm({
  compact = false,
  className = "",
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInputs>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit: SubmitHandler<ContactInputs> = async (formData) => {
    setStatus("idle");
    setStatusMessage("");

    try {
      const result = await sendContactForm(formData);

      setStatus("success");
      setStatusMessage(result.message || "Your message has been sent.");

      reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  useEffect(() => {
    if (status === "idle") return;

    const timeoutId = window.setTimeout(() => {
      setStatus("idle");
      setStatusMessage("");
    }, 8000);

    return () => window.clearTimeout(timeoutId);
  }, [status]);

  return (
    <div
      className={`w-full ${className || (compact ? "max-w-2xl" : "max-w-3xl")}`}
    >
      <div className="mb-8 flex items-center justify-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50 px-5 py-4">
        <PhoneIcon className="h-6 w-6 shrink-0 text-emerald-600" />

        <p className="text-sm text-gray-700 md:text-base">
          For immediate support, call Bec on{" "}
          <a
            href="tel:0417307658"
            className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-800"
          >
            0417 307 658
          </a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor={`${compact ? "home" : "page"}-contact-name`}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <input
              id={`${compact ? "home" : "page"}-contact-name`}
              type="text"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              {...register("name", {
                required: "Please enter your name.",
                maxLength: {
                  value: 100,
                  message: "Name must be 100 characters or fewer.",
                },
              })}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition-colors placeholder:text-gray-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${compact ? "home" : "page"}-contact-email`}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id={`${compact ? "home" : "page"}-contact-email`}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              {...register("email", {
                required: "Please enter your email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
                maxLength: {
                  value: 254,
                  message: "Email address is too long.",
                },
              })}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition-colors placeholder:text-gray-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor={`${compact ? "home" : "page"}-contact-subject`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Subject
          </label>

          <input
            id={`${compact ? "home" : "page"}-contact-subject`}
            type="text"
            placeholder="How can we help?"
            aria-invalid={Boolean(errors.subject)}
            {...register("subject", {
              required: "Please enter a subject.",
              maxLength: {
                value: 150,
                message: "Subject must be 150 characters or fewer.",
              },
            })}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition-colors placeholder:text-gray-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />

          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${compact ? "home" : "page"}-contact-message`}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Message
          </label>

          <textarea
            id={`${compact ? "home" : "page"}-contact-message`}
            rows={compact ? 4 : 6}
            placeholder="Write your message here..."
            aria-invalid={Boolean(errors.message)}
            {...register("message", {
              required: "Please enter your message.",
              minLength: {
                value: 10,
                message: "Please provide a little more detail.",
              },
              maxLength: {
                value: 5000,
                message: "Message must be 5,000 characters or fewer.",
              },
            })}
            className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition-colors placeholder:text-gray-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />

          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex min-h-[52px] w-full items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <span className="spinner" />
              <span className="sr-only">Sending message</span>
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {statusMessage && (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-lg px-4 py-3 text-sm ${
              status === "success"
                ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {statusMessage}
          </div>
        )}
      </form>
    </div>
  );
}
