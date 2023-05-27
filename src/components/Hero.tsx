import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export const heroVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

function Hero({}: Props) {
  return (
    <div
      className="bg-hero-background bg-cover bg-center
      min-h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <Image
          src="/img/solace-logo.png"
          alt="solance logo"
          width={700}
          height={300}
        />
        <h2
          className="text-xl md:text-2xl font-bold md:font-extrabold uppercase 
        text-black bg-white/80 rounded-full py-2 px-5 tracking-[15px]"
        >
          End of Life Services
        </h2>
      </motion.div>
    </div>
  );
}

export default Hero;
