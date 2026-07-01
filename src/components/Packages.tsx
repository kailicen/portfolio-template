import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Packages({}: Props) {
  return (
    <section
      className="min-h-screen flex overflow-hidden flex-col text-left
      px-4 md:px-24 justify-center mx-auto items-center scroll-smooth py-16"
    >
      <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4 text-center">
        Pricing
      </p>

      <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center max-w-4xl leading-tight">
        Clear pricing for family-led funeral support.
      </h3>

      <p className="mt-6 text-gray-600 text-center max-w-3xl text-lg leading-relaxed">
        We believe in honest communication and transparent pricing. Our prices
        are listed as individual components and as packages, so families can
        understand their options clearly.
      </p>

      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 w-full max-w-6xl mt-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/img/pricing-1.jpg"
            alt="Solace pricing and family-led funeral support"
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
            Family-led funerals
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
            How much do family-led home funerals cost?
          </h2>

          <div className="mt-5 space-y-4 text-gray-700 leading-relaxed">
            <p>
              We encourage families, friends and communities to be as involved
              in the care of their person, the planning and the decision-making
              as much as they are able and comfortable to be.
            </p>

            <p>
              View our pricing page to see service components, package options
              and how we can tailor support to your family&apos;s needs.
            </p>
          </div>

          <div className="mt-7">
            <Link
              href="/pricing"
              className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Packages;
