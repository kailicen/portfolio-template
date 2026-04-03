import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";

// Sample media data - will be replaced with Contentful integration
const mediaAppearances = [
  {
    title:
      "How 'death planning parties' are shifting the taboo around funeral planning",
    source: "ABC Australia News",
    date: "July 16, 2024",
    description:
      "A group of friends have gathered for a \"death-planning party\" to make plans for their funerals and fill out the documents together, to make it a less \"daunting\" experience. Organiser Dee Stokes says she wants people to be prepared so loved ones aren't left with all the decisions, following the \"confronting and scary\" task of organising her twin sister's funeral. Independent funeral director Bec Lyons, who provides information about funerals to the party attendees, says she is flooded with messages about people wanting a similar party.",
    link: "#",
  },
  {
    title:
      "Australia's first all-natural burial cemetery, Walawaani Way in Bodalla, aims to reforest disused farmland",
    source: "ABC News",
    date: "June 27, 2024",
    description:
      "As a part of NDAN and the advocacy work, Bec Lyons has been consulting with Fiona from Bodalla in NSW as she is setting up what looks to be the first stand alone natural burial site in Australia. She has put years of work and negotiations into this to be able to launch and Bec is heading to see it in person next month!",
    link: "#",
  },
];

export default function MediaAppearances() {
  return (
    <>
      <Head>
        <title>Media Appearances - Solace</title>
        <meta
          name="description"
          content="Featured articles, interviews, and news coverage of Solace's work in end of life services."
        />
      </Head>
      <Header />
      <main className="pt-10 md:pt-28 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto 2xl:max-w-7xl px-4 md:px-5">
          <Breadcrumb
            items={[
              { label: "Community Education", href: "/community-education" },
              { label: "Media Appearances" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Media Appearances
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">
              Featured articles, interviews, and news coverage highlighting our
              work in end of life services and death positive advocacy.
            </p>

            <div className="space-y-6">
              {mediaAppearances.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                      {item.source}
                    </span>
                    <time className="text-sm text-gray-500">{item.date}</time>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-medium hover:underline"
                  >
                    Read More &rarr;
                  </a>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 p-8 bg-emerald-50 rounded-lg text-center">
              <p className="text-gray-600">
                More media appearances coming soon. Content will be managed
                through Contentful.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
