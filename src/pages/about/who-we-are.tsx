import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import Container from "@/components/Container";

function WhoWeAre() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>Who Are We? | About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Meet Edwin Quilliam and Rebecca Lyons, the people behind Solace End of Life Services. Learn about their experience, values and commitment to compassionate, family-led end-of-life care in Tasmania."
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
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Who Are We?
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              { label: "About", href: "/about" },
              { label: "Who Are We?" },
            ]}
          />

          <div className="py-8 md:py-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-14 max-w-4xl"
            >
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                Solace End of Life Services is a family-owned, community-based
                funeral home founded by Edwin Quilliam and Rebecca Lyons.
              </p>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Together, Edwin and Bec bring experience, compassion and a deep
                belief that families deserve honest information, meaningful
                choices and genuine support at the end of life.
              </p>
            </motion.section>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.article
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src="/img/edwin.jpg"
                  alt="Edwin Quilliam"
                  width={700}
                  height={700}
                  className="w-full h-80 object-cover"
                />

                <div className="p-7 md:p-8">
                  <p className="uppercase tracking-[0.2em] text-xs text-emerald-700 font-medium">
                    Co-founder • Funeral Celebrant
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold text-gray-900">
                    Edwin Quilliam
                  </h2>

                  <p className="mt-5 text-gray-700 leading-relaxed">
                    Raised on Tasmania’s North-West Coast, Edwin brings warmth,
                    openness and a grounded community spirit to his work in
                    end-of-life care.
                  </p>

                  <Link
                    href="/about/edwin-quilliam"
                    className="inline-flex mt-6 text-emerald-700 font-medium hover:text-emerald-800"
                  >
                    Read Edwin&apos;s story →
                  </Link>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src="/img/bec.jpg"
                  alt="Rebecca Lyons"
                  width={700}
                  height={700}
                  className="w-full h-80 object-cover"
                />

                <div className="p-7 md:p-8">
                  <p className="uppercase tracking-[0.2em] text-xs text-emerald-700 font-medium">
                    Co-founder • Funeral Director • End of Life Doula
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold text-gray-900">
                    Rebecca Lyons
                  </h2>

                  <p className="mt-5 text-gray-700 leading-relaxed">
                    Bec is a funeral director, End of Life Doula, educator and
                    advocate for family-led funerals, natural burial and
                    meaningful end-of-life choices.
                  </p>

                  <Link
                    href="/about/rebecca-lyons"
                    className="inline-flex mt-6 text-emerald-700 font-medium hover:text-emerald-800"
                  >
                    Read Bec&apos;s story →
                  </Link>
                </div>
              </motion.article>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default WhoWeAre;
