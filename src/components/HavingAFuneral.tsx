import Link from "next/link";
import { motion } from "framer-motion";

const funeralPages = [
  {
    title: "Planning",
    href: "/having-a-funeral-with-solace/planning-a-funeral",
    eyebrow: "Plan ahead",
    description:
      "Guidance around wishes, advance care planning, funeral planning and practical choices.",
  },
  {
    title: "Home Funerals in Tasmania",
    href: "/having-a-funeral-with-solace/home-funerals-in-tasmania",
    eyebrow: "Family-led care",
    description:
      "Explore home funerals, home vigils, family-led care and how Solace can support you.",
  },
];

function HavingAFuneral() {
  return (
    <section
      className="min-h-screen flex overflow-hidden flex-col text-left
      px-4 sm:px-6 lg:px-8 justify-center mx-auto items-center scroll-smooth py-16"
    >
      <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4 text-center">
        Having a Funeral with Solace
      </p>

      <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center max-w-4xl leading-tight">
        Support for planning, choice and family-led funerals.
      </h3>

      <p className="mt-6 text-gray-600 text-center max-w-3xl text-lg leading-relaxed">
        Whether you are planning ahead or need support now, explore practical
        guidance and family-led funeral options to help you understand what is
        possible.
      </p>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mt-10">
        {funeralPages.map((page, index) => (
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

export default HavingAFuneral;
