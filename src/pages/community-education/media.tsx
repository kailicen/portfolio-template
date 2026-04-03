import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";
import { GetStaticProps } from "next";
import { getMediaAppearances, isContentfulConfigured } from "@/lib/contentful";

// Fallback media data when Contentful is not configured
const fallbackMediaAppearances = [
  {
    id: "1",
    title: "How 'death planning parties' are shifting the taboo around funeral planning",
    source: "ABC Australia News",
    publishedDate: "2024-07-16",
    excerpt:
      "A group of friends have gathered for a \"death-planning party\" to make plans for their funerals and fill out the documents together, to make it a less \"daunting\" experience. Organiser Dee Stokes says she wants people to be prepared so loved ones aren't left with all the decisions, following the \"confronting and scary\" task of organising her twin sister's funeral. Independent funeral director Bec Lyons, who provides information about funerals to the party attendees, says she is flooded with messages about people wanting a similar party.",
    externalUrl: "#",
  },
  {
    id: "2",
    title: "Australia's first all-natural burial cemetery, Walawaani Way in Bodalla, aims to reforest disused farmland",
    source: "ABC News",
    publishedDate: "2024-06-27",
    excerpt:
      "As a part of NDAN and the advocacy work, Bec Lyons has been consulting with Fiona from Bodalla in NSW as she is setting up what looks to be the first stand alone natural burial site in Australia. She has put years of work and negotiations into this to be able to launch and Bec is heading to see it in person next month!",
    externalUrl: "#",
  },
];

interface MediaAppearance {
  id: string;
  title: string;
  source: string;
  publishedDate: string;
  excerpt: string;
  externalUrl?: string;
}

interface Props {
  mediaItems: MediaAppearance[];
  isUsingContentful: boolean;
}

export default function MediaAppearances({ mediaItems, isUsingContentful }: Props) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
              {mediaItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                      {item.source}
                    </span>
                    <time className="text-sm text-gray-500">
                      {formatDate(item.publishedDate)}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  {item.externalUrl && item.externalUrl !== "#" && (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 font-medium hover:underline"
                    >
                      Read More &rarr;
                    </a>
                  )}
                </motion.article>
              ))}
            </div>

            {!isUsingContentful && (
              <div className="mt-12 p-8 bg-emerald-50 rounded-lg text-center">
                <p className="text-gray-600">
                  Showing sample content. Connect Contentful to manage media appearances dynamically.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const isConfigured = isContentfulConfigured();
  
  if (isConfigured) {
    try {
      const contentfulMedia = await getMediaAppearances();
      if (contentfulMedia.length > 0) {
        return {
          props: {
            mediaItems: contentfulMedia.map((item) => ({
              id: item.id,
              title: item.title,
              source: item.source,
              publishedDate: item.publishedDate,
              excerpt: item.excerpt,
              externalUrl: item.externalUrl || undefined,
            })),
            isUsingContentful: true,
          },
          revalidate: 60,
        };
      }
    } catch (error) {
      console.error("Error fetching from Contentful:", error);
    }
  }
  
  // Fallback to static data
  return {
    props: {
      mediaItems: fallbackMediaAppearances,
      isUsingContentful: false,
    },
  };
};
