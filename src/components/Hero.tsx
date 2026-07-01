import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export const heroVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.8,
    },
  },
};

function Hero({}: Props) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-background bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />

      <BackgroundCircles />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <Image
            src="/img/solace-logo.png"
            alt="Solace End of Life Services logo"
            width={700}
            height={300}
            priority
            className="h-auto w-full max-w-[480px] md:max-w-[720px]"
          />

          <p className="mt-4 rounded-full border border-white/50 bg-white/70 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.45em] text-gray-900 shadow-sm backdrop-blur-sm">
            End of Life Services
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Contact Solace
            </Link>

            <Link
              href="/having-a-funeral-with-solace"
              className="inline-flex rounded-lg border border-white bg-white/80 px-6 py-3 font-medium text-emerald-700 transition-colors hover:bg-white"
            >
              Funeral Support
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
