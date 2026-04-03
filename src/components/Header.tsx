import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {};

const aboutSubPages = [
  { title: "Who Are We?", href: "/about/who-we-are" },
  { title: "Where Have We Come From?", href: "/about/where-we-come-from" },
  { title: "Why Death and Dying?", href: "/about/why-death-and-dying" },
];

const educationSubPages = [
  { title: "Education & Advocacy", href: "/community-education/education-advocacy" },
  { title: "Blog", href: "/community-education/blog" },
  { title: "Media Appearances", href: "/community-education/media" },
  { title: "FAQ", href: "/community-education/faq" },
  { title: "Resources", href: "/community-education/resources" },
];

function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileEducationOpen, setIsMobileEducationOpen] = useState(false);
  const [headerBgColor, setHeaderBgColor] = useState("bg-gray-200/80");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 20; // Adjust this value as needed

      if (scrollTop > threshold) {
        setHeaderBgColor("bg-white");
      } else {
        setHeaderBgColor("bg-gray-200/80");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky md:fixed top-0 left-0 right-0 p-5 flex justify-between ${headerBgColor}
    mx-auto z-20 items-center`}
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* logo */}
        <Link href="/">
          <Image
            src="/img/solace-white.png"
            alt="solance logo"
            width={100}
            height={50}
            onClick={scrollToTop}
            className="cursor-pointer"
          />
        </Link>
      </motion.div>

      <div
        className="hidden lg:flex flex-row items-center justify-center space-x-8 
        text-lg"
      >
        {/* About Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <Link
            href="/about"
            className="hover:text-emerald-600 font-semibold flex items-center gap-1"
          >
            About
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${
                isAboutOpen ? "rotate-180" : ""
              }`}
            />
          </Link>
          <AnimatePresence>
            {isAboutOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-30"
              >
                {aboutSubPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
                  >
                    {page.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Community Education Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsEducationOpen(true)}
          onMouseLeave={() => setIsEducationOpen(false)}
        >
          <Link
            href="/community-education"
            className="hover:text-emerald-600 font-semibold flex items-center gap-1"
          >
            Community Education
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform ${
                isEducationOpen ? "rotate-180" : ""
              }`}
            />
          </Link>
          <AnimatePresence>
            {isEducationOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-30"
              >
                {educationSubPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
                  >
                    {page.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link className="hover:text-emerald-600 font-semibold" href="/pricing">
          Pricing
        </Link>
        <Link
          className="hover:text-emerald-600 font-semibold"
          href="/planning-a-funeral"
        >
          Planning a Funeral
        </Link>
        <Link
          className="hover:text-emerald-600 font-semibold"
          href="/home-funerals-in-tasmania"
        >
          Home Funerals in Tasmania
        </Link>
        <Link className="hover:text-emerald-600 font-semibold" href="/book">
          Book
        </Link>
        <Link className="hover:text-emerald-600 font-semibold" href="/contact">
          Contact
        </Link>
      </div>

      <Bars3Icon
        onClick={toggleMenu}
        className="block lg:hidden h-8 w-8 text-black cursor-pointer"
      />
      {isMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="absolute top-20 right-0 w-full p-4 bg-white z-20 flex flex-col items-end"
        >
          {/* Mobile About Dropdown */}
          <div className="w-full">
            <button
              className="flex items-center justify-end w-full py-2 px-4 hover:underline"
              onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
            >
              About
              <ChevronDownIcon
                className={`w-4 h-4 ml-1 transition-transform ${
                  isMobileAboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isMobileAboutOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <Link
                    className="block py-2 px-8 text-sm text-gray-600 hover:text-emerald-600"
                    href="/about"
                    onClick={toggleMenu}
                  >
                    Overview
                  </Link>
                  {aboutSubPages.map((page) => (
                    <Link
                      key={page.href}
                      className="block py-2 px-8 text-sm text-gray-600 hover:text-emerald-600"
                      href={page.href}
                      onClick={toggleMenu}
                    >
                      {page.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Community Education Dropdown */}
          <div className="w-full">
            <button
              className="flex items-center justify-end w-full py-2 px-4 hover:underline"
              onClick={() => setIsMobileEducationOpen(!isMobileEducationOpen)}
            >
              Community Education
              <ChevronDownIcon
                className={`w-4 h-4 ml-1 transition-transform ${
                  isMobileEducationOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isMobileEducationOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <Link
                    className="block py-2 px-8 text-sm text-gray-600 hover:text-emerald-600"
                    href="/community-education"
                    onClick={toggleMenu}
                  >
                    Overview
                  </Link>
                  {educationSubPages.map((page) => (
                    <Link
                      key={page.href}
                      className="block py-2 px-8 text-sm text-gray-600 hover:text-emerald-600"
                      href={page.href}
                      onClick={toggleMenu}
                    >
                      {page.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            className="block py-2 px-4 hover:underline"
            href="/pricing"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            className="block py-2 px-4 hover:underline"
            href="/planning-a-funeral"
            onClick={toggleMenu}
          >
            Planning a Funeral
          </Link>
          <Link
            className="block py-2 px-4 hover:underline"
            href="/home-funerals-in-tasmania"
            onClick={toggleMenu}
          >
            Home Funerals in Tasmania
          </Link>
          <Link
            className="block py-2 px-4 hover:underline"
            href="/book"
            onClick={toggleMenu}
          >
            Book
          </Link>
          <Link
            className="block py-2 px-4 hover:underline"
            href="/contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
}

export default Header;
