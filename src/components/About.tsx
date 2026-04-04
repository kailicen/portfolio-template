import Link from "next/link";
import { motion } from "framer-motion";

const aboutPages = [
  {
    title: "Who Are We?",
    href: "/about/who-we-are",
    description:
      "Meet Edwin and Bec, the founders of Solace End of Life Services.",
  },
  {
    title: "Where Have We Come From?",
    href: "/about/where-we-come-from",
    description:
      "Our journey from compassion and frustration to advocacy and change.",
  },
  {
    title: "Why Death and Dying?",
    href: "/about/why-death-and-dying",
    description:
      "Making the conversation about death and dying just another part of life.",
  },
];

function About() {
  return (
    <div
      className="min-h-screen flex overflow-hidden flex-col text-left
     px-2 md:px-24 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3
        className="mb-5 uppercase tracking-[10px] text-gray-500 text-2xl text-center
      2xl:text-4xl 2xl:top-36"
      >
        About
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
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
              className="block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all group h-full"
            >
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-3">
                {page.title}
              </h2>
              <p className="text-gray-600">{page.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
