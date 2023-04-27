import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

type Props = {};

function Header({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="sticky top-0 p-5 flex justify-between bg-gray-300/90 
    mx-auto z-20 items-center shadow-md"
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
        <Link href="/#hero">
          <Image
            src="/img/solace-white.png"
            alt="solance logo"
            width={100}
            height={50}
          />
        </Link>
      </motion.div>

      <div
        className="hidden lg:flex flex-row items-center justify-center space-x-8 
        text-lg"
      >
        <Link className="hover:text-emerald-600 font-semibold" href="/#about">
          About
        </Link>
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
        <Link className="hover:text-emerald-600 font-semibold" href="/#contact">
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
          <Link
            className="block py-2 px-4 hover:underline"
            href="/#about"
            onClick={toggleMenu}
          >
            About
          </Link>
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
            href="/#contact"
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
