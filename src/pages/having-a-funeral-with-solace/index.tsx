import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const funeralPages = [
  {
    title: "Planning",
    href: "/having-a-funeral-with-solace/planning-a-funeral",
    eyebrow: "Plan ahead",
    description:
      "Explore funeral wishes, advance care planning, key documents, family-led options, and practical resources to help you make informed decisions.",
  },
  {
    title: "Funeral Pricing",
    href: "/pricing",
    eyebrow: "Costs and services",
    description:
      "View Solace’s pricing, service options and costs so you can understand what support is available and make informed choices.",
  },
  {
    title: "Home Funerals in Tasmania",
    href: "/having-a-funeral-with-solace/home-funerals-in-tasmania",
    eyebrow: "Family-led care",
    description:
      "Learn how family-led home funerals can offer more time, choice and involvement, and how Solace can support you through the process.",
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
          content="Explore funeral planning and family-led home funeral support with Solace, including wishes, advance care planning, practical resources and home funerals in Tasmania."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/having-a-funeral-with-solace-b.jpg"
          alt="Having a Funeral with Solace"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center text-white px-4">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Having a Funeral with Solace
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Having a Funeral with Solace" }]} />

          <div className="py-8 md:py-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                Funeral support
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Practical guidance for planning, choice and family-led care.
              </h2>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Whether you are planning ahead or navigating a death now, Solace
                can help you understand your options, make informed choices and
                create arrangements that feel authentic to the person who has
                died.
              </p>
            </motion.section>

            <div className="grid md:grid-cols-2 gap-6">
              {funeralPages.map((page, index) => (
                <motion.article
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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

                    <p className="mt-4 text-gray-700 leading-relaxed">
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
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default HavingAFuneralWithSolace;
