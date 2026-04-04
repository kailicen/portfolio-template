import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
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

function HavingAFuneralWithSolace() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>
          Having a Funeral with Solace | Solace End of Life Services
        </title>
        <meta
          name="description"
          content="Explore funeral planning support from Solace, including planning a funeral and family-led home funerals in Tasmania."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/planning-b.jpg"
          alt="Having a Funeral with Solace"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white px-4">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Having a Funeral with Solace
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full 2xl:max-w-7xl flex-1">
        <Breadcrumb items={[{ label: "Having a Funeral with Solace" }]} />

        <div className="px-4 md:px-10 py-8">
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            Whether you are planning ahead or navigating a death right now, we
            want to help you understand your options clearly. Explore practical
            guidance on funeral planning and learn more about family-led home
            funerals in Tasmania.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {funeralPages.map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
      </div>

      <Footer />
    </div>
  );
}

export default HavingAFuneralWithSolace;
