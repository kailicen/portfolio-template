import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
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

function AboutIndex() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>About - Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn about Solace End of Life Services, our founders Edwin and Bec, and our mission to change how we approach death and dying."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="About Solace"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-xl md:text-4xl font-bold tracking-[20px] 2xl:text-7xl">
            ABOUT
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full 2xl:max-w-7xl flex-1">
        <Breadcrumb items={[{ label: "About" }]} />

        <div className="px-4 md:px-10 py-8">
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            We come from a place of compassion, honesty, and transparency. Learn
            more about who we are, our journey, and why we are passionate about
            changing the conversation around death and dying.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutPages.map((page, index) => (
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

export default AboutIndex;
