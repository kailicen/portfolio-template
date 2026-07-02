import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Packages({}: Props) {
  return (
    <section
      className="min-h-screen flex overflow-hidden flex-col text-left
      px-4 sm:px-6 lg:px-8 justify-center mx-auto items-center scroll-smooth py-16"
    >
      <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.25em] text-emerald-700">
        Funeral Pricing
      </p>

      <h3 className="max-w-4xl text-center text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
        Clear and transparent funeral pricing.
      </h3>

      <p className="mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
        We believe families should have clear information about costs and the
        freedom to choose the support that suits their circumstances.
      </p>

      <div className="mt-10 grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/img/pricing-1.jpg"
            alt="Solace funeral pricing and support"
            width={500}
            height={500}
            className="mx-auto w-full max-w-md rounded-2xl border border-gray-200 object-cover shadow-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-700">
            Flexible funeral support
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">
            How much does a funeral cost?
          </h2>

          <div className="mt-5 space-y-4 leading-relaxed text-gray-700">
            <p>
              Our pricing page lists individual service components and our
              cremation-only option, with all prices shown exclusive of GST.
            </p>

            <p>
              We can also meet with you for an initial consultation and create a
              tailored service or package based on your family&apos;s needs.
            </p>
          </div>

          <div className="mt-7">
            <Link
              href="/pricing"
              className="inline-flex rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
            >
              View Funeral Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Packages;
