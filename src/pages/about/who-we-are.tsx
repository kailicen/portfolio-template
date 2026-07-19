import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Head from "next/head";
import { motion } from "framer-motion";
import PersonCard from "@/components/ui/PersonCard";
import PageHero from "@/components/ui/PageHero";

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
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
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

      <PageHero
        title="Who Are We?"
        image="/img/who-are-we-b.jpg"
        alt="About Solace End of Life Services"
      />

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
                <motion.div
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
                >
                  <PersonCard {...person} />
                </motion.div>
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
