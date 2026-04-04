import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import {
  ContentfulAsset,
  getMediaAppearances,
  isContentfulConfigured,
} from "@/lib/contentful";
import RichContent from "@/components/RichContent";
import { formatDateOnly } from "@/lib/date";
import { useRef, useState } from "react";

// Fallback media data when Contentful is not configured
const fallbackMediaAppearances = [
  {
    id: "1",
    title:
      "How 'death planning parties' are shifting the taboo around funeral planning",
    source: "ABC Australia News",
    publishedDate: "2024-07-16",
    content:
      'A group of friends have gathered for a "death-planning party" to make plans for their funerals and fill out the documents together, to make it a less "daunting" experience. Organiser Dee Stokes says she wants people to be prepared so loved ones aren\'t left with all the decisions, following the "confronting and scary" task of organising her twin sister\'s funeral. Independent funeral director Bec Lyons, who provides information about funerals to the party attendees, says she is flooded with messages about people wanting a similar party.',
    externalUrl: "#",
  },
  {
    id: "2",
    title:
      "Australia's first all-natural burial cemetery, Walawaani Way in Bodalla, aims to reforest disused farmland",
    source: "ABC News",
    publishedDate: "2024-06-27",
    content:
      "As a part of NDAN and the advocacy work, Bec Lyons has been consulting with Fiona from Bodalla in NSW as she is setting up what looks to be the first stand alone natural burial site in Australia. She has put years of work and negotiations into this to be able to launch and Bec is heading to see it in person next month!",
    externalUrl: "#",
  },
];

interface MediaAppearance {
  id: string;
  title: string;
  source: string;
  publishedDate: string;
  content: any;
  externalUrl?: string;
  mediaFile?: ContentfulAsset;
}

interface Props {
  initialMediaItems: MediaAppearance[];
  totalItems: number;
  isUsingContentful: boolean;
}

export default function MediaAppearances({
  initialMediaItems,
  totalItems,
  isUsingContentful,
}: Props) {
  const ITEMS_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [mediaItems, setMediaItems] = useState(initialMediaItems);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));

  const getExternalLinkLabel = (url?: string) => {
    if (!url) return "Open";

    const lowerUrl = url.toLowerCase();

    if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) {
      return "Watch Video";
    }

    if (lowerUrl.endsWith(".pdf")) {
      return "View PDF";
    }

    if (
      lowerUrl.includes("capitalyarns") ||
      lowerUrl.includes("podcast") ||
      lowerUrl.includes("buzzsprout")
    ) {
      return "Listen Now";
    }

    return "Read Now";
  };

  const goToPage = async (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/media?page=${page}&limit=${ITEMS_PER_PAGE}`,
      );
      const data = await response.json();

      setMediaItems(data.items || []);
      setCurrentPage(page);
      listTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } catch (error) {
      console.error("Failed to fetch media page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const listTopRef = useRef<HTMLDivElement | null>(null);

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
      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="Community Education"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Media Appearances
          </h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto w-full 2xl:max-w-7xl flex-1">
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
          >
            <main className="px-4 md:px-10 py-8">
              {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Media Appearances
              </h1> */}
              <div ref={listTopRef} />

              <p className="text-lg text-gray-600 max-w-3xl mb-12">
                Featured articles, interviews, and news coverage highlighting
                our work in end of life services and death positive advocacy.
              </p>

              <div className="space-y-6">
                {isLoading && (
                  <div className="mb-6 text-center text-gray-500">
                    Loading...
                  </div>
                )}
                {mediaItems.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                        {item.source}
                      </span>
                      <time className="text-sm text-gray-500">
                        {formatDateOnly(item.publishedDate)}
                      </time>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      {item.title}
                    </h2>
                    <RichContent
                      content={item.content}
                      className="mb-4"
                      variant="article"
                    />
                    {(() => {
                      const file = item.mediaFile?.fields?.file;
                      const title = item.mediaFile?.fields?.title || item.title;
                      const url = file?.url ? `https:${file.url}` : null;
                      const contentType = file?.contentType || "";

                      if (!url) return null;

                      if (contentType.startsWith("audio/")) {
                        return (
                          <div className="mb-4">
                            <p className="text-sm text-gray-500 mb-2">
                              {title}
                            </p>
                            <audio controls className="w-full">
                              <source src={url} type={contentType} />
                              Your browser does not support the audio element.
                            </audio>
                          </div>
                        );
                      }

                      return (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 font-medium hover:underline"
                        >
                          Open Media File &rarr;
                        </a>
                      );
                    })()}
                    {item.externalUrl && item.externalUrl !== "#" && (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 font-medium hover:underline"
                      >
                        {getExternalLinkLabel(item.externalUrl)} &rarr;
                      </a>
                    )}
                  </motion.article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={isLoading || currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:border-emerald-500 hover:text-emerald-600 transition"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        className={`px-4 py-2 rounded-lg border transition ${
                          currentPage === page
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-emerald-500 hover:text-emerald-600"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={isLoading || currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:border-emerald-500 hover:text-emerald-600 transition"
                  >
                    Next
                  </button>
                </div>
              )}

              {!isUsingContentful && (
                <div className="mt-12 p-8 bg-emerald-50 rounded-lg text-center">
                  <p className="text-gray-600">
                    Showing sample content. Connect Contentful to manage media
                    appearances dynamically.
                  </p>
                </div>
              )}
            </main>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const isConfigured = isContentfulConfigured();
  const ITEMS_PER_PAGE = 6;

  if (isConfigured) {
    try {
      const result = await getMediaAppearances(false, 0, ITEMS_PER_PAGE);

      if (result.items.length > 0) {
        return {
          props: {
            initialMediaItems: result.items.map((item) => ({
              id: item.id,
              title: item.title,
              source: item.source,
              publishedDate: item.publishedDate,
              content: item.content,
              ...(item.externalUrl ? { externalUrl: item.externalUrl } : {}),
              ...(item.mediaFile ? { mediaFile: item.mediaFile } : {}),
            })),
            totalItems: result.total,
            isUsingContentful: true,
          },
          revalidate: 60,
        };
      }
    } catch (error) {
      console.error("Error fetching from Contentful:", error);
    }
  }

  return {
    props: {
      initialMediaItems: fallbackMediaAppearances,
      totalItems: fallbackMediaAppearances.length,
      isUsingContentful: false,
    },
  };
};
