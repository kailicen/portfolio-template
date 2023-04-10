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
          url="https://www.linkedin.com/in/rebecca-lyons-52304339/"
          fgColor="black"
          bgColor="rgba(255,255,255,0.5)"
        />
        <SocialIcon
          url="https://www.instagram.com/you_n_taboo/"
          fgColor="black"
          bgColor="rgba(255,255,255,0.5)"
        />
        <SocialIcon
          url="https://www.facebook.com/yountaboo"
          fgColor="black"
          bgColor="rgba(255,255,255,0.5)"
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
          className="flex flex-row items-center bg-[#fff]/50 rounded-full"
        >
          <SocialIcon network="email" fgColor="black" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex md:pr-3 text-sm text-black font-bold">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
