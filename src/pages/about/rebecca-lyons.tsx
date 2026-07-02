import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";

function RebeccaLyons() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>Rebecca Lyons | About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn about Rebecca Lyons, co-founder of Solace End of Life Services, End of Life Doula, Funeral Director, Churchill Fellow, author and advocate for family-led death care."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="Rebecca Lyons"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl 2xl:text-7xl font-semibold tracking-[8px] px-4 uppercase text-center">
            Rebecca Lyons
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              { label: "About", href: "/about" },
              { label: "Who Are We?", href: "/about/who-we-are" },
              { label: "Rebecca Lyons" },
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
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                  <Image
                    src="/img/bec.jpg"
                    alt="Rebecca Lyons"
                    width={700}
                    height={700}
                    className="w-full aspect-square object-cover"
                  />

                  <div className="p-6">
                    <p className="uppercase tracking-[0.2em] text-xs text-emerald-700 font-medium">
                      Co-founder • Funeral Director • End of Life Doula
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                      Rebecca Lyons
                    </h2>

                    <div className="mt-6 space-y-3 text-sm text-gray-700">
                      <p>
                        <span className="font-medium">Media and info:</span>{" "}
                        <a
                          href="https://linktr.ee/BecLyons"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:text-emerald-800 underline"
                        >
                          BecLyons
                        </a>
                      </p>

                      <p>
                        <span className="font-medium">Email:</span>{" "}
                        <a
                          href="mailto:bec@solaceendoflife.com.au"
                          className="text-emerald-700 hover:text-emerald-800 underline"
                        >
                          bec@solaceendoflife.com.au
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
                  Rebecca Lyons, known to many as Bec, is a funeral director,
                  End of Life Doula, educator, author and long-time advocate for
                  more personal, family-led approaches to death care.
                </p>

                <div className="mt-8 space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Bec hails from the Blue Mountains in NSW but made Tasmania
                    her home in 2006. Over her career she has worked in various
                    industries including finance, real estate and the law, but
                    in 2011 she found her path into the funeral industry and
                    stayed there until mid-2017.
                  </p>

                  <p>
                    During that time she worked across the many roles offered in
                    the contemporary funeral industry; including pre planning,
                    administration, mortuary, funeral arranging and directing.
                    Retraining as an End of Life Doula and becoming an
                    independent Funeral Director, she has worked in home based
                    death care and family led funerals ever since.
                  </p>

                  <p>
                    Bec spent years actively working to educate the community
                    through You n’ Taboo, which is the education and advocacy
                    service she co-founded with Edwin in 2016.
                  </p>

                  <p>
                    In 2018 they began Solace End of Life Services, a local
                    Tasmanian funeral home. Later that year, Bec was awarded a
                    Churchill Fellowship to undertake international research and
                    report on ‘the human relationship to death and ceremony
                    through alternate technologies and approaches’. A link to
                    her Churchill report can be found by{" "}
                    <a
                      href="https://www.churchilltrust.com.au/project/to-investigate-human-relationships-to-death-and-ceremony-through-alternate-approaches-and-technologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 underline"
                    >
                      clicking here
                    </a>
                    .
                  </p>

                  <p>
                    It was the findings from her Churchill research that led her
                    to gather people to form the{" "}
                    <a
                      href="https://www.ahfa.org.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 underline"
                    >
                      Australian Home Funeral Alliance
                    </a>
                    , a charity that was co-founded in 2020 by some brilliant
                    people eager for change.
                  </p>

                  <p>
                    Bec’s Churchill research finally culminated in her book,{" "}
                    <a
                      href="https://solaceendoflife.com.au/book"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 underline"
                    >
                      <em>A Heartfelt Undertaking</em>
                    </a>
                    , and then in 2022 she was selected to give a{" "}
                    <a
                      href="https://youtu.be/_oQz_8v52a0?si=DOEQpB54yPck_mqC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 underline"
                    >
                      TEDx Talk on home funerals
                    </a>
                    .
                  </p>

                  <p>
                    Bec has been the President of the{" "}
                    <a
                      href="https://ndan.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 underline"
                    >
                      Natural Death Advocacy Network
                    </a>{" "}
                    since 2020.
                  </p>

                  <p>
                    In her spare time, she enjoys reading, singing, a good
                    massage, writing, photography, attending the theatre and
                    travelling but what makes her most content is time with her
                    family and chosen communities.
                  </p>

                  <p>
                    She loves being out in the community raising awareness,
                    promoting honest conversations and advocating for positive
                    change.
                  </p>

                  <p>
                    The subjects of death and dying, natural burial and the DIY
                    approach to death care are her passion and she loves being
                    out in the community raising awareness and promoting good
                    honest conversations, she is a dedicated advocate for
                    positive change.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://linktr.ee/BecLyons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Media and Info
                  </a>

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

export default RebeccaLyons;
