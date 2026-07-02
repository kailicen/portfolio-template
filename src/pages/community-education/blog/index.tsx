import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import {
  getPaginatedBlogPosts,
  isContentfulConfigured,
} from "@/lib/contentful";
import Image from "next/image";
import { formatDateOnly } from "@/lib/date";
import { useRef, useState } from "react";

const ITEMS_PER_PAGE = 6;

// Fallback blog data when Contentful is not configured
const fallbackBlogPosts = [
  {
    id: "1",
    slug: "role-of-end-of-life-doula",
    title: "The Role of The End of Life Doula in Australia",
    publishedDate: "2025-05-20",
    excerpt:
      "Challenges and opportunities in a modern landscape. It's time for a difficult conversation. We are good at that aren't we? This was a challenging piece to write and I imagine it will be challenging to read. Challenge isn't always bad, it is hard, but good things can come from hard conversations. After all, the role of the End Of Life (EOL) Doula is a challenging one and we tend to operate in the space of things that are layered and complex and hard.",
  },
  {
    id: "2",
    slug: "reimagining-death-care",
    title: "Reimagining Death Care for our Ageing Population",
    publishedDate: "2024-08-20",
    excerpt:
      "What are the policy considerations for integrating medical and social care to transform the way we care for older Australians at the end of life?",
  },
];

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  publishedDate: string;
  excerpt: string;
}

interface Props {
  initialPosts: BlogPost[];
  totalItems: number;
  isUsingContentful: boolean;
}

export default function BlogIndex({
  initialPosts,
  totalItems,
  isUsingContentful,
}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState(initialPosts);
  const [isLoading, setIsLoading] = useState(false);

  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const listTopRef = useRef<HTMLDivElement | null>(null);

  const goToPage = async (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/blog?page=${page}&limit=${ITEMS_PER_PAGE}`,
      );

      const data = await response.json();

      setPosts(data.items || []);
      setCurrentPage(page);

      listTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } catch (error) {
      console.error("Failed to fetch blog page:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Blog | Solace</title>
        <meta
          name="description"
          content="Insights, stories, and discussions about end of life care in Australia."
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
            Blog
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              { label: "Community Education", href: "/community-education" },
              { label: "Blog" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="py-8">
              <div ref={listTopRef} />

              <p className="text-sm font-medium text-emerald-600 uppercase tracking-[4px] mb-4">
                Community Education
              </p>

              <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-800 mb-6 max-w-4xl">
                Stories, reflections, and conversations about end-of-life care.
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
                Insights, stories, and discussions about end-of-life care,
                advocacy, and the movement to bring death and dying back into
                community hands.
              </p>

              <div className="space-y-8">
                {isLoading && (
                  <div className="rounded-lg bg-gray-50 p-6 text-gray-500 border border-gray-200">
                    Loading posts...
                  </div>
                )}

                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 hover:border-emerald-200 transition-colors"
                  >
                    <Link
                      href={`/community-education/blog/${post.slug}`}
                      className="block"
                    >
                      <time className="text-sm text-emerald-600 font-medium">
                        {formatDateOnly(post.publishedDate)}
                      </time>

                      <h3 className="text-2xl font-semibold text-gray-800 mt-2 mb-4 hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-5 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <span className="text-emerald-600 font-medium hover:underline">
                        Read More
                      </span>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center gap-2">
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
                        disabled={isLoading}
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
                <div className="mt-12 bg-emerald-50 rounded-lg p-6 md:p-8 border border-emerald-100">
                  <p className="text-gray-600">
                    Showing sample content. Connect Contentful to manage blog
                    posts dynamically.
                  </p>
                </div>
              )}
            </section>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const isConfigured = isContentfulConfigured();

  if (isConfigured) {
    try {
      const result = await getPaginatedBlogPosts(false, 0, ITEMS_PER_PAGE);

      if (result.items.length > 0) {
        return {
          props: {
            initialPosts: result.items.map((post) => ({
              id: post.id,
              slug: post.slug,
              title: post.title,
              publishedDate: post.publishedDate,
              excerpt: post.excerpt,
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
      initialPosts: fallbackBlogPosts,
      totalItems: fallbackBlogPosts.length,
      isUsingContentful: false,
    },
  };
};
