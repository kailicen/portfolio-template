import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Container from "@/components/Container";
import SolaceLogo from "./brand/SolaceLogo";

const aboutSubPages = [
  { title: "Who Are We?", href: "/about/who-we-are" },
  { title: "How Did We Begin?", href: "/about/how-did-we-begin" },
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

const desktopLinkClassName =
  "font-medium text-solace-ink transition-colors hover:text-solace-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solace-300 focus-visible:ring-offset-4 focus-visible:ring-offset-solace-surface";

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
        className={`flex items-center gap-1 ${desktopLinkClassName}`}
      >
        {label}

        <ChevronDownIcon
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className={`
              absolute left-0 top-full z-40 mt-3
              ${widthClass}
              overflow-hidden rounded-xl
              border border-solace-200
              bg-solace-surface
              py-2
              shadow-[0_16px_40px_rgba(48,64,55,0.14)]
            `}
          >
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="
                  block px-4 py-2.5
                  text-sm text-slate-700
                  transition-colors
                  hover:bg-solace-50
                  hover:text-solace-700
                  focus-visible:bg-solace-50
                  focus-visible:text-solace-700
                  focus-visible:outline-none
                "
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
    <div className="border-b border-solace-100 pb-2">
      <button
        type="button"
        onClick={onToggle}
        className="
          flex w-full items-center justify-between
          rounded-lg px-4 py-3
          text-left font-medium text-solace-ink
          transition-colors
          hover:bg-solace-50
          hover:text-solace-700
        "
      >
        <span>{label}</span>

        <ChevronDownIcon
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 ${
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
                className="
                  block rounded-md px-8 py-2
                  text-sm font-medium text-solace-700
                  transition-colors
                  hover:bg-solace-50
                  hover:text-solace-800
                "
              >
                Overview
              </Link>

              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={onClose}
                  className="
                    block rounded-md px-8 py-2
                    text-sm text-slate-600
                    transition-colors
                    hover:bg-solace-50
                    hover:text-solace-700
                  "
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
    <header
      className="
        sticky top-0 z-50 w-full
        border-b border-solace-100
        bg-solace-surface/95
        shadow-[0_4px_18px_rgba(48,64,55,0.06)]
        backdrop-blur-md
      "
    >
      <Container className="flex min-h-[76px] items-center justify-between">
        <Link
          href="/"
          onClick={closeMobileMenu}
          aria-label="Solace home"
          className="
            flex shrink-0 items-center
            rounded-md
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-solace-300
            focus-visible:ring-offset-4
            focus-visible:ring-offset-solace-surface
          "
        >
          <SolaceLogo
            priority
            sizes="(max-width: 640px) 110px, (max-width: 1280px) 120px, 130px"
            className="
              w-[110px] shrink-0
              px-1.5 py-1
              sm:w-[120px]
              xl:w-[130px]
            "
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm xl:gap-7 xl:text-base lg:flex">
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

          <Link href="/pricing" className={desktopLinkClassName}>
            Funeral Pricing
          </Link>

          <Link href="/book" className={desktopLinkClassName}>
            Our Book
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex min-h-[42px] items-center justify-center
              rounded-lg bg-solace-500 px-5 py-2
              text-sm font-semibold text-white
              shadow-sm transition-all
              hover:bg-solace-600 hover:shadow-md
              xl:text-base
            "
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="
            rounded-lg p-2
            text-solace-ink
            transition-colors
            hover:bg-solace-50
            hover:text-solace-700
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-solace-300
            lg:hidden
          "
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="
              absolute left-0 top-full z-40 w-full
              border-t border-solace-100
              bg-solace-surface
              p-4
              shadow-[0_16px_35px_rgba(48,64,55,0.14)]
              lg:hidden
            "
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

            <div className="space-y-1 pt-3">
              <Link
                href="/pricing"
                onClick={closeMobileMenu}
                className="
                  block rounded-lg px-4 py-3
                  font-medium text-solace-ink
                  transition-colors
                  hover:bg-solace-50
                  hover:text-solace-700
                "
              >
                Funeral Pricing
              </Link>

              <Link
                href="/book"
                onClick={closeMobileMenu}
                className="
                  block rounded-lg px-4 py-3
                  font-medium text-solace-ink
                  transition-colors
                  hover:bg-solace-50
                  hover:text-solace-700
                "
              >
                Our Book
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="
                  mt-3 flex min-h-[48px] items-center justify-center
                  rounded-lg bg-solace-500 px-5 py-3
                  font-semibold text-white
                  transition-colors
                  hover:bg-solace-600
                "
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
