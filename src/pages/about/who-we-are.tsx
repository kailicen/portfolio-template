import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const people = [
  {
    name: "Edwin Quilliam",
    role: "Co-founder • Funeral Celebrant",
    image: "/img/edwin.jpg",
    href: "/about/edwin-quilliam",
    linkText: "Read Edwin's story",
    imagePosition: "object-center",
    description:
      "Raised on Tasmania’s North-West Coast, Edwin brings warmth, openness and a grounded community spirit to his work in end-of-life care.",
  },
  {
    name: "Rebecca Lyons",
    role: "Co-founder • Funeral Director • End of Life Doula",
    image: "/img/bec.jpg",
    href: "/about/rebecca-lyons",
    linkText: "Read Bec's story",
    imagePosition: "object-center",
    description:
      "Bec is a funeral director, End of Life Doula, educator and advocate for family-led funerals, natural burial and meaningful end-of-life choices.",
  },
];

function WhoWeAre() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Head>
        <title>Who Are We? | About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Meet Edwin Quilliam and Rebecca Lyons, the people behind Solace End of Life Services. Learn about their experience, values and commitment to compassionate, family-led end-of-life care in Tasmania."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/about/who-we-are"
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/who-are-we-b.jpg"
          alt="About Solace End of Life Services"
          width={2300}
          height={300}
          priority
          className="h-48 w-full object-cover md:h-80"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-white">
          <h1 className="text-center text-2xl font-semibold uppercase tracking-[10px] md:text-5xl 2xl:text-7xl">
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
              className="mb-12 max-w-4xl md:mb-14"
            >
              <p className="text-xl font-light leading-relaxed text-gray-800 md:text-2xl">
                Solace End of Life Services is a family-owned, community-based
                funeral home founded by Edwin Quilliam and Rebecca Lyons.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Together, Edwin and Bec bring experience, compassion and a deep
                belief that families deserve honest information, meaningful
                choices and genuine support at the end of life.
              </p>
            </motion.section>

            <div className="grid gap-8 lg:grid-cols-2">
              {people.map((person, index) => (
                <motion.article
                  key={person.href}
                  initial={{
                    opacity: 0,
                    x: index === 0 ? -30 : 30,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md md:p-9"
                >
                  <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                    <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-gray-100 bg-gray-100 shadow-sm md:h-44 md:w-44">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="176px"
                        className={`object-cover ${person.imagePosition}`}
                      />
                    </div>

                    <div className="mt-6 sm:ml-7 sm:mt-2">
                      <p className="text-xs font-medium uppercase leading-relaxed tracking-[0.18em] text-emerald-700">
                        {person.role}
                      </p>

                      <h2 className="mt-3 text-3xl font-semibold text-gray-900">
                        {person.name}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-7 leading-relaxed text-gray-700">
                    {person.description}
                  </p>

                  <Link
                    href={person.href}
                    className="group mt-6 inline-flex items-center gap-2 font-medium text-emerald-700 transition-colors hover:text-emerald-800"
                  >
                    <span>{person.linkText}</span>

                    <ArrowRightIcon
                      aria-hidden="true"
                      className="relative top-px h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    />
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

export default WhoWeAre;
