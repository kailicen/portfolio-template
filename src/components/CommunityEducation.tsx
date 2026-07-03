import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const educationSubPages = [
  {
    title: "Education & Advocacy",
    href: "/community-education/education-advocacy",
    eyebrow: "Ask away",
    description:
      "Q&A sessions, workshops and honest conversations about dying, death and care.",
  },
  {
    title: "Resources",
    href: "/community-education/resources",
    eyebrow: "Helpful links",
    description:
      "Useful organisations, planning tools, legislation and information to support informed choices.",
  },
  {
    title: "FAQ",
    href: "/community-education/faq",
    eyebrow: "Common questions",
    description:
      "Straightforward answers about dying, death, funerals, rights and options.",
  },
];

function CommunityEducation() {
  return (
    <section
      className="min-h-screen flex overflow-hidden flex-col text-left
      px-4 sm:px-6 lg:px-8 justify-center mx-auto items-center scroll-smooth py-16"
    >
      <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4 text-center">
        Community Education
      </p>

      <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center max-w-4xl leading-tight">
        Honest conversations make better end-of-life choices possible.
      </h3>

      <p className="mt-6 text-gray-600 text-center max-w-3xl text-lg leading-relaxed">
        Explore education, advocacy and resources designed to help people feel
        more informed, prepared and at ease when talking about dying and death.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl mt-10">
        {educationSubPages.map((page, index) => (
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

              <span className="mt-6 inline-flex items-center gap-2 font-medium text-emerald-700 transition-colors group-hover:text-emerald-800">
                <span>Learn more</span>

                <ArrowRightIcon
                  aria-hidden="true"
                  className="relative top-px h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/community-education"
          className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
        >
          View All Community Education
        </Link>
      </div>
    </section>
  );
}

export default CommunityEducation;
