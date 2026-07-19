import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-solace-600">
        <li>
          <Link
            href="/"
            className="
              flex items-center
              transition-colors
              hover:text-solace-800
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-solace-300
              focus-visible:ring-offset-2
              focus-visible:ring-offset-solace-canvas
            "
            aria-label="Home"
          >
            <HomeIcon className="h-4 w-4" />
          </Link>
        </li>

        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex items-center space-x-2"
          >
            <ChevronRightIcon
              aria-hidden="true"
              className="h-4 w-4 text-solace-300"
            />

            {item.href ? (
              <Link
                href={item.href}
                className="
                  transition-colors
                  hover:text-solace-800
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-solace-300
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-solace-canvas
                "
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="font-semibold text-solace-ink"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
