import React from "react";
import { motion } from "framer-motion";
import { heroVariants } from "./Hero";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-evenly
        overflow-hidden px-2 text-left md:px-24"
    >
      <h3
        className="mb-5 text-center text-2xl uppercase tracking-[10px]
          text-gray-500 2xl:text-4xl"
      >
        Contact
      </h3>

      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="z-20 flex w-full max-w-3xl flex-col items-center justify-center"
      >
        <div className="mb-8 text-center">
          <h2 className="text-lg md:text-xl 2xl:text-3xl">
            TIME SENSITIVE? DON&apos;T WAIT.{" "}
            <span className="underline decoration-emerald-600">
              LET&apos;S TALK.
            </span>
          </h2>

          <p className="mt-4 text-gray-600 md:text-lg">
            Send us a message and we will get back to you as soon as possible.
          </p>
        </div>

        <ContactForm compact />
      </motion.div>
    </div>
  );
}
