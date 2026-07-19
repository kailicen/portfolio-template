import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type NavigationCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
};

export default function NavigationCard({
  href,
  eyebrow,
  title,
  description,
}: NavigationCardProps) {
  return (
    <Link
      href={href}
      className="
        group block h-full rounded-2xl
        border border-solace-100
        bg-solace-surface
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-solace-300
        hover:shadow-[0_16px_40px_rgba(51,64,57,0.10)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-solace-400
        focus-visible:ring-offset-4
        focus-visible:ring-offset-solace-canvas
        md:p-8
      "
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-solace-600">
        {eyebrow}
      </p>

      <h3 className="mt-3 text-2xl font-semibold text-solace-ink transition-colors group-hover:text-solace-forest">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-slate-600">{description}</p>

      <span className="mt-6 inline-flex items-center gap-2 font-semibold text-solace-700 transition-colors group-hover:text-solace-600">
        Learn more
        <ArrowRightIcon
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
