import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const aboutSubPages = [
  { title: "Who Are We?", href: "/about/who-we-are" },
  { title: "How Did We Begin?", href: "/about/how-did-we-begin" },
  { title: "Why Death and Dying?", href: "/about/why-death-and-dying" },
];

const educationSubPages = [
  {
    title: "Education & Advocacy",
    href: "/community-education/education-advocacy",
  },
  { title: "Blog", href: "/community-education/blog" },
  { title: "Media Appearances", href: "/community-education/media" },
  { title: "FAQ", href: "/community-education/faq" },
  { title: "Resources", href: "/community-education/resources" },
];

const funeralSubPages = [
  {
    title: "Planning",
    href: "/having-a-funeral-with-solace/planning-a-funeral",
  },
  {
    title: "Home Funerals in Tasmania",
    href: "/having-a-funeral-with-solace/home-funerals-in-tasmania",
  },
];

type SubPage = {
  title: string;
  href: string;
};

function DesktopDropdown({
  label,
  href,
  pages,
  widthClass = "w-64",
}: {
  label: string;
  href: string;
  pages: SubPage[];
  widthClass?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={href}
        className="flex items-center gap-1 font-medium text-gray-800 hover:text-emerald-600 transition-colors"
      >
        {label}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={`absolute left-0 top-full z-40 mt-3 ${widthClass} rounded-xl border border-gray-200 bg-white py-2 shadow-lg`}
          >
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {page.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({
  label,
  overviewHref,
  pages,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  overviewHref: string;
  pages: SubPage[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="border-b border-gray-100 pb-2">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-gray-800 hover:text-emerald-600 transition-colors"
      >
        <span>{label}</span>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-2">
              <Link
                href={overviewHref}
                onClick={onClose}
                className="block px-8 py-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Overview
              </Link>

              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={onClose}
                  className="block px-8 py-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileEducationOpen, setIsMobileEducationOpen] = useState(false);
  const [isMobileFuneralOpen, setIsMobileFuneralOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileEducationOpen(false);
    setIsMobileFuneralOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" onClick={closeMobileMenu} className="flex items-center">
          <Image
            src="/img/solace-white.png"
            alt="Solace logo"
            width={100}
            height={50}
            priority
            className="h-auto w-[100px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-base">
          <DesktopDropdown label="About" href="/about" pages={aboutSubPages} />

          <DesktopDropdown
            label="Community Education"
            href="/community-education"
            pages={educationSubPages}
            widthClass="w-72"
          />

          <DesktopDropdown
            label="Having a Funeral with Solace"
            href="/having-a-funeral-with-solace"
            pages={funeralSubPages}
            widthClass="w-72"
          />

          <Link
            href="/pricing"
            className="font-medium text-gray-800 hover:text-emerald-600 transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/book"
            className="font-medium text-gray-800 hover:text-emerald-600 transition-colors"
          >
            Our Book
          </Link>

          <Link
            href="/contact"
            className="font-medium text-gray-800 hover:text-emerald-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="lg:hidden rounded-lg p-2 text-gray-800 hover:bg-gray-100 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-40 w-full border-t border-gray-100 bg-white p-4 shadow-lg lg:hidden"
          >
            <MobileDropdown
              label="About"
              overviewHref="/about"
              pages={aboutSubPages}
              isOpen={isMobileAboutOpen}
              onToggle={() => setIsMobileAboutOpen((current) => !current)}
              onClose={closeMobileMenu}
            />

            <MobileDropdown
              label="Community Education"
              overviewHref="/community-education"
              pages={educationSubPages}
              isOpen={isMobileEducationOpen}
              onToggle={() => setIsMobileEducationOpen((current) => !current)}
              onClose={closeMobileMenu}
            />

            <MobileDropdown
              label="Having a Funeral with Solace"
              overviewHref="/having-a-funeral-with-solace"
              pages={funeralSubPages}
              isOpen={isMobileFuneralOpen}
              onToggle={() => setIsMobileFuneralOpen((current) => !current)}
              onClose={closeMobileMenu}
            />

            <div className="pt-2">
              <Link
                href="/pricing"
                onClick={closeMobileMenu}
                className="block px-4 py-3 font-medium text-gray-800 hover:text-emerald-600 transition-colors"
              >
                Pricing
              </Link>

              <Link
                href="/book"
                onClick={closeMobileMenu}
                className="block px-4 py-3 font-medium text-gray-800 hover:text-emerald-600 transition-colors"
              >
                Our Book
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block px-4 py-3 font-medium text-gray-800 hover:text-emerald-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
