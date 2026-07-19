import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type PersonCardProps = {
  name: string;
  role: string;
  image: string;
  href: string;
  linkText: string;
  description: string;
  imagePosition?: string;
};

export default function PersonCard({
  name,
  role,
  image,
  href,
  linkText,
  description,
  imagePosition = "object-center",
}: PersonCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-solace-100 bg-solace-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-solace-300 hover:shadow-[0_16px_40px_rgba(51,64,57,0.10)] md:p-9">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-solace-100 bg-solace-50 shadow-sm md:h-44 md:w-44">
          <Image
            src={image}
            alt={name}
            fill
            sizes="176px"
            className={`object-cover ${imagePosition}`}
          />
        </div>

        <div className="mt-6 sm:ml-7 sm:mt-2">
          <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-solace-600">
            {role}
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-solace-ink">
            {name}
          </h2>
        </div>
      </div>

      <p className="mt-7 leading-relaxed text-slate-600">{description}</p>

      <Link
        href={href}
        className="group mt-6 inline-flex items-center gap-2 font-semibold text-solace-700 transition-colors hover:text-solace-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solace-300 focus-visible:ring-offset-4"
      >
        {linkText}

        <ArrowRightIcon
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}
