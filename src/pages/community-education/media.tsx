import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Head from "next/head";
import { GetStaticProps } from "next";
import {
  ContentfulAsset,
  getMediaAppearances,
  isContentfulConfigured,
} from "@/lib/contentful";
import RichContent from "@/components/RichContent";
import { formatDateOnly } from "@/lib/date";
import { useRef, useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import PageHero from "@/components/ui/PageHero";
import SectionIntro from "@/components/ui/SectionIntro";

const ITEMS_PER_PAGE = 6;

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
  const [currentPage, setCurrentPage] = useState(1);
  const [mediaItems, setMediaItems] = useState(initialMediaItems);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const listTopRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>Media Appearances | Solace</title>
        <meta
          name="description"
          content="Featured articles, interviews, and news coverage of Solace's work in end of life services."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/community-education/media"
        />
      </Head>

      <Header />

      <PageHero
        title="Media Appearances"
        image="/img/media-b.jpg"
        alt="Media Appearances"
      />

      <main className="flex-1">
        <Container>
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
            <section className="py-8">
              <div ref={listTopRef} />

              <SectionIntro
                align="left"
                eyebrow="Community Education"
                title="Articles, interviews and conversations featuring Solace."
                description="Featured articles, interviews and news coverage highlighting
                our work in end-of-life services, family-led funerals and death
                positive advocacy."
                className="mb-12"
              />

              <div className="space-y-8">
                {isLoading && (
                  <div className="rounded-xl border border-solace-100 bg-solace-surface p-6 text-slate-500">
                    Loading media appearances...
                  </div>
                )}

                {mediaItems.map((item, index) => {
                  const file = item.mediaFile?.fields?.file;
                  const mediaTitle =
                    item.mediaFile?.fields?.title || item.title;
                  const mediaUrl = file?.url ? `https:${file.url}` : null;
                  const contentType = file?.contentType || "";

                  return (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="
                        rounded-2xl
                        border border-solace-100
                        bg-solace-surface
                        p-6
                        shadow-sm
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-solace-300
                        hover:shadow-md
                        md:p-8
                      "
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-solace-100 text-solace-700 text-sm font-medium rounded-full">
                          {item.source}
                        </span>

                        <time className="text-sm text-slate-500">
                          {formatDateOnly(item.publishedDate)}
                        </time>
                      </div>

                      <h3 className="mb-4 text-2xl font-semibold text-solace-ink">
                        {item.title}
                      </h3>

                      <div className="leading-relaxed text-slate-600">
                        <RichContent
                          content={item.content}
                          className="mb-5"
                          variant="article"
                        />
                      </div>

                      {mediaUrl && contentType.startsWith("audio/") && (
                        <div className="mt-6 rounded-xl border border-solace-100 bg-solace-50 p-4">
                          <p className="mb-3 text-sm text-slate-500">
                            {mediaTitle}
                          </p>

                          <audio controls className="w-full">
                            <source src={mediaUrl} type={contentType} />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      )}

                      <div className="mt-5 flex flex-wrap gap-4">
                        {mediaUrl && !contentType.startsWith("audio/") && (
                          <a
                            href={mediaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 font-medium text-solace-700 transition-colors hover:text-solace-800"
                          >
                            <span>Open media file</span>

                            <ArrowTopRightOnSquareIcon
                              aria-hidden="true"
                              className="relative top-px h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                            />
                          </a>
                        )}

                        {item.externalUrl && item.externalUrl !== "#" && (
                          <a
                            href={item.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              group inline-flex items-center gap-2
                              font-semibold text-solace-700
                              transition-colors
                              hover:text-solace-800
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-solace-300
                              focus-visible:ring-offset-2
                              focus-visible:ring-offset-solace-surface
                            "
                          >
                            <span>
                              {getExternalLinkLabel(item.externalUrl)}
                            </span>

                            <ArrowTopRightOnSquareIcon
                              aria-hidden="true"
                              className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={isLoading || currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:border-solace-500 hover:text-solace-600 transition"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        disabled={isLoading}
                        className={`px-4 py-2 rounded-lg border transition ${
                          currentPage === page
                            ? "bg-solace-600 text-white border-solace-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-solace-500 hover:text-solace-600"
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
                    className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:border-solace-500 hover:text-solace-600 transition"
                  >
                    Next
                  </button>
                </div>
              )}

              {!isUsingContentful && (
                <div className="mt-12 bg-solace-50 rounded-lg p-6 md:p-8 border border-solace-100">
                  <p className="text-slate-600">
                    Showing sample content. Connect Contentful to manage media
                    appearances dynamically.
                  </p>
                </div>
              )}
            </section>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const isConfigured = isContentfulConfigured();

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
