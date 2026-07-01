import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function Book() {
  return (
    <section
      className="min-h-screen flex overflow-hidden flex-col text-left
      px-4 md:px-24 justify-center mx-auto items-center scroll-smooth py-16"
    >
      <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4 text-center">
        Our Book
      </p>

      <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center max-w-4xl leading-tight">
        A Heartfelt Undertaking.
      </h3>

      <p className="mt-6 text-gray-600 text-center max-w-3xl text-lg leading-relaxed">
        Bec Lyons’ book grew from her Churchill Fellowship research into death,
        ceremony and alternative approaches to end-of-life care.
      </p>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 w-full max-w-6xl mt-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/img/book-2.jpg"
            alt="A Heartfelt Undertaking by Bec Lyons"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto rounded-2xl object-cover shadow-sm border border-gray-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-emerald-700 font-medium">
            By Bec Lyons
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
            A book about death, ceremony and more meaningful approaches to care.
          </h2>

          <div className="mt-5 space-y-4 text-gray-700 leading-relaxed">
            <p>
              In 2019, Bec Lyons travelled to six countries on a Churchill
              Fellowship, researching the human relationship to death and
              ceremony through alternative approaches and technologies.
            </p>

            <p>
              <em>A Heartfelt Undertaking</em> is the result of that research,
              bringing together insight, reflection and a deep commitment to
              changing how we approach dying, death and ceremony.
            </p>
          </div>

          <div className="mt-7">
            <Link
              href="/book"
              className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Learn About the Book
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Book;
