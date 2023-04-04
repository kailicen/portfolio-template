import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between 
    max-w-6xl mx-auto z-20 xl:items-center "
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
        {/* Social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/kaili-cen-1975b4197/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/kailicen1/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/kailicen/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://medium.com/@kailicen226"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        {/* Get in touch */}
        <motion.div
          initial={{
            x: 500,
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
          className="flex flex-row items-center text-white cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;