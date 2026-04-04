import Link from "next/link";
import { motion } from "framer-motion";

const funeralPages = [
  {
    title: "Planning a Funeral",
    href: "/planning-a-funeral",
    description:
      "Practical funeral planning guidance, checklists, wishes resources, and information to help you make informed choices.",
  },
  {
    title: "Home Funerals in Tasmania",
    href: "/home-funerals-in-tasmania",
    description:
      "Learn about family-led home funerals in Tasmania, including practical guidance, options, and legal considerations.",
  },
];

function HavingAFuneral() {
  return (
    <div
      className="min-h-screen flex overflow-hidden flex-col text-left
      px-2 md:px-24 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3
        className="mb-5 uppercase tracking-[10px] md:tracking-[10px] text-gray-500 text-2xl text-center
        2xl:text-4xl"
      >
        Having a Funeral with Solace
      </h3>

      <p className="text-gray-600 text-center max-w-3xl">
        Whether you are planning ahead or navigating a death right now, explore
        practical guidance and family-led funeral options to help you understand
        what is possible and make informed choices.
      </p>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
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

export default HavingAFuneral;
