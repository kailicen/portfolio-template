import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      className="min-h-screen flex overflow-hidden flex-col text-left
      px-4 sm:px-6 lg:px-8 justify-center mx-auto items-center scroll-smooth py-16"
    >
      <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4 text-center">
        Contact
      </p>

      <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center max-w-4xl leading-tight">
        Need support or have a question?
      </h3>

      <p className="mt-6 text-gray-600 text-center max-w-3xl text-lg leading-relaxed">
        If something is time sensitive, please don&apos;t wait. Send us a
        message and we will get back to you as soon as possible.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex w-full justify-center"
      >
        <div className="w-full max-w-2xl">
          <ContactForm compact />
        </div>
      </motion.div>
    </section>
  );
}
