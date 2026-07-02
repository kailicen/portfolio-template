import Link from "next/link";
import { motion } from "framer-motion";

const aboutPages = [
  {
    title: "Who Are We?",
    href: "/about/who-we-are",
    eyebrow: "Our people",
    description:
      "Meet Edwin and Bec, the people behind Solace End of Life Services.",
  },
  {
    title: "How Did We Begin?",
    href: "/about/how-did-we-begin",
    eyebrow: "Our story",
    description:
      "Learn how Solace began and why informed, community-led death care matters.",
  },
  {
    title: "Why Death and Dying?",
    href: "/about/why-death-and-dying",
    eyebrow: "Our purpose",
    description:
      "Explore why honest conversations about dying and death are part of life.",
  },
];

function About() {
  return (
    <section
      className="min-h-screen flex overflow-hidden flex-col text-left
      px-4 sm:px-6 lg:px-8 justify-center mx-auto items-center scroll-smooth py-16"
    >
      <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4 text-center">
        About
      </p>

      <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center max-w-4xl leading-tight">
        Honest, compassionate support for dying, death and grief.
      </h3>

      <p className="mt-6 text-gray-600 text-center max-w-3xl text-lg leading-relaxed">
        Learn more about the people, story and purpose behind Solace End of Life
        Services.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl mt-10">
        {aboutPages.map((page, index) => (
          <motion.div
            key={page.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={page.href}
              className="group block h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 hover:border-emerald-500 hover:shadow-md transition-all"
            >
              <p className="uppercase tracking-[0.2em] text-xs text-emerald-700 font-medium">
                {page.eyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                {page.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {page.description}
              </p>

              <span className="inline-flex mt-6 text-emerald-700 font-medium group-hover:text-emerald-800">
                Learn more →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
