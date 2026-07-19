import React, { useEffect, useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { inputClassName } from "./ui/formStyles";

export type ContactInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;

  // Anti-spam fields
  company?: string; // honeypot - real users should never fill this
  formStartedAt: string;
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

function getDefaultValues(): ContactInputs {
  return {
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    formStartedAt: Date.now().toString(),
  };
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
    defaultValues: getDefaultValues(),
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

      reset(getDefaultValues());
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

  const fieldPrefix = compact ? "home" : "page";

  return (
    <div
      className={`w-full ${className || (compact ? "max-w-2xl" : "max-w-3xl")}`}
    >
      <div className="mb-8 flex items-center justify-center gap-3 rounded-xl border border-solace-200 bg-solace-50 px-5 py-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-solace-200">
          <PhoneIcon className="h-5 w-5 text-solace-700" />
        </div>

        <p className="text-sm text-slate-700 md:text-base">
          For immediate support, call Bec on{" "}
          <a
            href="tel:0417307658"
            className="font-semibold text-solace-700 underline decoration-solace-300 underline-offset-4 transition-colors hover:text-solace-600"
          >
            0417 307 658
          </a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5 rounded-2xl border border-solace-200 bg-solace-surface p-6 shadow-[0_18px_45px_rgba(48,64,55,0.08)] md:p-8"
      >
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${fieldPrefix}-contact-company`}>Company</label>
          <input
            id={`${fieldPrefix}-contact-company`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company")}
          />
        </div>

        <input type="hidden" {...register("formStartedAt")} />

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor={`${fieldPrefix}-contact-name`}
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Name
            </label>

            <input
              id={`${fieldPrefix}-contact-name`}
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
              className={inputClassName}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${fieldPrefix}-contact-email`}
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id={`${fieldPrefix}-contact-email`}
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
              className={inputClassName}
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
            htmlFor={`${fieldPrefix}-contact-subject`}
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Subject
          </label>

          <input
            id={`${fieldPrefix}-contact-subject`}
            type="text"
            placeholder="How can we help?"
            aria-invalid={Boolean(errors.subject)}
            {...register("subject", {
              required: "Please enter a subject.",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters.",
              },
              maxLength: {
                value: 150,
                message: "Subject must be 150 characters or fewer.",
              },
            })}
            className={inputClassName}
          />

          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${fieldPrefix}-contact-message`}
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Message
          </label>

          <textarea
            id={`${fieldPrefix}-contact-message`}
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
            className={`${inputClassName} resize-y`}
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
          className="
          flex min-h-[52px] w-full items-center justify-center
          rounded-lg
          bg-solace-600
          px-6 py-3
          font-semibold text-white
          shadow-sm
          transition-all
          hover:bg-solace-700
          hover:shadow-md
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-solace-300
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
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
                ? "border border-solace-200 bg-solace-50 text-solace-800"
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
