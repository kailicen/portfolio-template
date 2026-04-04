import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

function WhoWeAre() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>Who Are We? - About - Solace End of Life Services</title>
        <meta
          name="description"
          content="Meet Edwin Quilliam and Rebecca Lyons, the founders of Solace End of Life Services in Tasmania."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="About - Who We Are"
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

      <div className="max-w-6xl mx-auto w-full 2xl:max-w-7xl 2xl:text-lg md:text-base flex-1">
        <Breadcrumb
          items={[{ label: "About", href: "/about" }, { label: "Who Are We?" }]}
        />

        <div className="flex flex-col space-y-8 py-5 px-4 md:px-10 items-center justify-center">
          {/* Edwin */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-start items-center md:items-start gap-5"
          >
            <Image
              className="w-40 h-40 md:w-60 md:h-60 rounded-lg object-cover 2xl:w-80 2xl:h-80 flex-shrink-0"
              src="/img/edwin.jpg"
              alt="Edwin Quilliam"
              width={240}
              height={240}
            />
            <div className="flex flex-col space-y-4 text-sm md:text-base p-4 md:p-6 rounded-lg bg-gray-50 2xl:text-lg">
              <h2 className="text-xl md:text-2xl font-semibold text-emerald-700">
                Edwin Quilliam
              </h2>
              <p>
                Father of three, Edwin was born and bred on the North-West coast
                of Tasmania. A country boy at heart, he worked building and
                farming until he eventually made the move to Hobart in 2005 to
                follow a path of helping others. He studied counselling for a
                while and through that fell into the funeral industry where he
                met Bec.
              </p>
              <p>
                Edwin is now semi-retired but still works casually and enjoys
                the role of Celebrant for Funerals.
              </p>
              <p>
                Away from work, it is time with family and friends that he
                derives most enjoyment from along with travel and a nice sunny
                day... but also those quiet moments, in his big chair reading
                the Smithton Chronicle.
              </p>
              <p>
                You n&apos; Taboo was Edwin&apos;s brain child and between he
                and Bec, he often finds himself increasingly busy talking to
                strangers about death and dying.
              </p>
            </div>
          </motion.div>

          {/* Bec */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row-reverse justify-start items-center md:items-start gap-5"
          >
            <Image
              className="w-40 h-40 md:w-60 md:h-60 rounded-lg object-cover 2xl:w-80 2xl:h-80 flex-shrink-0"
              src="/img/bec.jpg"
              alt="Rebecca Lyons"
              width={240}
              height={240}
            />
            <div className="flex flex-col space-y-4 text-sm md:text-base p-4 md:p-6 rounded-lg bg-gray-50 2xl:text-lg">
              <h2 className="text-xl md:text-2xl font-semibold text-emerald-700">
                Rebecca Lyons
              </h2>
              <p>
                Mother of one, Rebecca hails from the Blue Mountains in NSW. She
                started her working career in Sydney before making the move to
                Tasmania in 2006. She had worked in various industries from
                finance to real estate until she found her path into the funeral
                industry through a set of fortuitous circumstances.
              </p>
              <p>
                She made the move out of working for the industry early in 2017
                and moved on to new adventures. In doing so it has provided her
                the opportunity to advance the mission of You n&apos; Taboo.
              </p>
              <p>
                She trained as an End of Life Doula and then applied and was
                granted regulated business status in Tasmania to handle human
                remains which allows her the unique privilege of being able to
                offer additional independent funeral directing services to her
                local community.
              </p>
              <p>
                In her spare time, she enjoys reading, writing, photography,
                camping and travel, but what makes her most contented is time
                together as a family. The subject of death and dying is her
                passion and she loves being out in the community raising
                awareness and promoting good honest conversations.
              </p>
              <div className="pt-2">
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="https://ndan.com.au/"
                      className="underline text-gray-800 hover:text-emerald-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - President of Australia&apos;s Natural Death Advocacy
                      Network
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.ahfa.org.au/"
                      className="underline text-gray-800 hover:text-emerald-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - Chair of the Australian Home Funeral Alliance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://yountaboo.com/a-heartfelt-undertaking/"
                      className="underline text-gray-800 hover:text-emerald-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      - Author of A Heartfelt Undertaking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default WhoWeAre;
