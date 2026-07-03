import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

function EdwinQuilliam() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>Edwin Quilliam | About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn about Edwin Quilliam, co-founder of Solace End of Life Services, Funeral Celebrant and advocate for honest conversations about dying, death and end-of-life care."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/who-are-we-b.jpg"
          alt="Edwin Quilliam"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl 2xl:text-7xl font-semibold tracking-[8px] px-4 uppercase text-center">
            Edwin Quilliam
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              { label: "About", href: "/about" },
              { label: "Who Are We?", href: "/about/who-we-are" },
              { label: "Edwin Quilliam" },
            ]}
          />

          <div className="py-8 md:py-12">
            <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">
              <motion.aside
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-28"
              >
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                  <div className="px-6 pt-6 pb-2">
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl border-4 border-gray-200 bg-gray-100 shadow-sm">
                      <Image
                        src="/img/edwin.jpg"
                        alt="Edwin Quilliam"
                        fill
                        sizes="280px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-4 md:px-8 md:pb-8">
                    <p className="text-xs font-medium uppercase leading-relaxed tracking-[0.2em] text-emerald-700">
                      Co-founder • Funeral Celebrant
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                      Edwin Quilliam
                    </h2>

                    <div className="mt-6 space-y-3 text-sm text-gray-700">
                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        <a
                          href="mailto:edwin@solaceendoflife.com.au"
                          className="text-emerald-700 underline hover:text-emerald-800"
                        >
                          edwin@solaceendoflife.com.au
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.aside>

              <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                  Raised on the North-West Coast of Tasmania, Edwin is a country
                  boy at heart with a deep respect for family, community and
                  honest conversation.
                </p>

                <div className="mt-8 space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Raised on the North-West coast of Tasmania, Edwin is a
                    country boy at heart who spent his early years in the
                    building industry and on the family farm. In 2003, a desire
                    to help others drew him to Hobart, where he studied
                    counselling and found his way into the funeral industry and
                    into a lasting partnership with Bec.
                  </p>

                  <p>
                    Edwin’s vision for a place where people can find honest,
                    accessible information about death and dying, and ask the
                    questions they’re often afraid to voice gave rise to You n’
                    Taboo. That same belief led Edwin and Bec to build a
                    family-owned, community-based funeral business in 2019,
                    rooted in the belief that end-of-life care deserves genuine
                    compassion and connection.
                  </p>

                  <p>
                    Now semi-retired, Edwin continues working as a Funeral
                    Celebrant and volunteers his time supporting those in his
                    community living with a life-limiting diagnosis. He’s the
                    kind of person you’ll find talking openly about dying and
                    death with family, friends, and strangers alike, because he
                    believes those conversations matter.
                  </p>

                  <p>
                    When he’s not in the funeral space, you’ll find him outdoors
                    on a sunny day, tending his veggie patch or fruit trees, and
                    making time for the people he loves most.
                  </p>
                </div>

                <div className="mt-10">
                  <Link
                    href="/about/who-we-are"
                    className="inline-flex px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back to Who Are We?
                  </Link>
                </div>
              </motion.section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default EdwinQuilliam;
