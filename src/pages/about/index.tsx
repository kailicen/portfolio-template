import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

const aboutPages = [
  {
    title: "Who Are We?",
    href: "/about/who-we-are",
    eyebrow: "Our people",
    description:
      "Meet Edwin and Bec, the people behind Solace End of Life Services, and learn about the experience and values they bring to this work.",
  },
  {
    title: "How Did We Begin?",
    href: "/about/how-did-we-begin",
    eyebrow: "Our story",
    description:
      "Learn how Solace began, and why community-led death care, education, advocacy and informed choice sit at the heart of what we do.",
  },
];

function AboutIndex() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn about Solace End of Life Services, our founders Edwin and Bec, our story, and our commitment to changing how we approach dying, death and grief."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="About Solace End of Life Services"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            About
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "About" }]} />

          <div className="py-8 md:py-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mb-12"
            >
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                About Solace
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Compassionate, honest and community-centred end-of-life care.
              </h2>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Solace comes from a place of compassion, honesty and
                transparency. Learn more about who we are, how we began, and why
                we are passionate about changing the conversation around dying,
                death and grief.
              </p>
            </motion.section>

            <div className="grid md:grid-cols-2 gap-6">
              {aboutPages.map((page, index) => (
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

                    <span className="inline-flex mt-6 text-emerald-700 font-medium group-hover:text-emerald-800">
                      Learn more →
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

export default AboutIndex;
