import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getBlogPosts,
  getBlogPostBySlug,
  isContentfulConfigured,
  ContentfulAsset,
} from "@/lib/contentful";
import Image from "next/image";
import RichContent from "@/components/RichContent";
import { formatDateOnly } from "@/lib/date";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaLink,
} from "react-icons/fa6";
import { useState } from "react";

// Fallback blog data when Contentful is not configured
const fallbackBlogPosts: Record<
  string,
  { title: string; publishedDate: string; content: string; excerpt: string }
> = {
  "role-of-end-of-life-doula": {
    title: "The Role of The End of Life Doula in Australia",
    publishedDate: "2025-05-20",
    excerpt: "Challenges and opportunities in a modern landscape.",
    content: `
      <h2>Challenges and opportunities in a modern landscape</h2>
      <p>It's time for a difficult conversation. We are good at that aren't we? This was a challenging piece to write and I imagine it will be challenging to read. Challenge isn't always bad, it is hard, but good things can come from hard conversations.</p>
      <p>After all, the role of the End Of Life (EOL) Doula is a challenging one and we tend to operate in the space of things that are layered and complex and hard. Talk to anyone who has done the work of an EOL doula authentically for any length of time, and they will tell you it is the hardest and best, most exhausting and rewarding work they have done.</p>
      <p>People come to the role of EOL doula from many different paths and with many different motivations. Some come from healthcare backgrounds, others from spiritual or pastoral care. Some have experienced profound personal loss that sparked a calling to help others navigate similar journeys.</p>
      <p>The landscape of end of life care in Australia is evolving, and with it, the role of the EOL Doula continues to be defined and redefined. We are advocates, companions, educators, and sometimes simply a calm presence in the storm of dying.</p>
    `,
  },
  "reimagining-death-care": {
    title: "Reimagining Death Care for our Ageing Population",
    publishedDate: "2024-08-20",
    excerpt:
      "What are the policy considerations for integrating medical and social care?",
    content: `
      <h2>What are the policy considerations for integrating medical and social care?</h2>
      <p>As Australia's population ages, we face unprecedented challenges and opportunities in how we care for people at the end of their lives. The traditional model of death care—largely medicalized and institutionalized—is being questioned.</p>
      <p>There is growing recognition that a good death involves more than just medical intervention. It requires social support, emotional care, and the opportunity for individuals and families to maintain agency over the dying process.</p>
      <p>Policy makers are beginning to recognize that integrating medical and social care can transform outcomes for older Australians. This means creating systems where healthcare professionals work alongside community support networks, family caregivers, and end of life doulas.</p>
      <p>The goal is not just to extend life, but to ensure quality of life until its natural end, and to support families through grief and bereavement.</p>
    `,
  },
};

interface BlogPost {
  title: string;
  publishedDate: string;
  excerpt: string;
  content: any;
  featuredImages?: ContentfulAsset[] | null;
}

interface Props {
  post: BlogPost | null;
  slug: string;
  isFallbackHtml?: boolean;
}

export default function BlogPost({ post, slug }: Props) {
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <>
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
            <h1 className="text-xl md:text-4xl font-bold tracking-[10px] 2xl:text-7xl">
              BLOG
            </h1>
          </div>
        </div>

        <Container className="flex-1">
          <div className="max-w-4xl mx-auto py-20 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Post not found
            </h1>
            <Link
              href="/community-education/blog"
              className="text-emerald-600 hover:underline"
            >
              Return to Blog
            </Link>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const postUrl = `${siteUrl}/community-education/blog/${slug}`;
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post?.title);
  const encodedExcerpt = encodeURIComponent(post?.excerpt || "");

  return (
    <>
      <Head>
        <title>{post.title} - Solace Blog</title>
        <meta name="description" content={post.excerpt} />
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
            {post.title}
          </h1>
        </div>
      </div>

      <Container className="flex-1">
          <Breadcrumb
            items={[
              { label: "Community Education", href: "/community-education" },
              { label: "Blog", href: "/community-education/blog" },
              { label: post.title },
            ]}
          />

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="py-8">
              <div className="mb-5 inline-flex flex-wrap items-center gap-2">
                {/* <span className="text-sm font-medium text-gray-500 mr-1">
                  Share
                </span> */}

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  title="Share on Facebook"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1877F2] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <FaFacebookF className="text-lg" />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  title="Share on LinkedIn"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0A66C2] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  title="Share on X"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <FaXTwitter className="text-lg" />
                </a>

                <a
                  href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  title="Share on WhatsApp"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#25D366] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <FaWhatsapp className="text-lg" />
                </a>

                <a
                  href={`mailto:?subject=${encodedTitle}&body=${encodedExcerpt}%0A%0A${encodedUrl}`}
                  aria-label="Share by Email"
                  title="Share by Email"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <FaEnvelope className="text-lg" />
                </a>

                <button
                  type="button"
                  onClick={async () => {
                    await navigator.clipboard.writeText(postUrl);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  aria-label="Copy link"
                  title="Copy link"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-emerald-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <FaLink className="text-lg" />
                </button>
                {copied && (
                  <span className="text-sm text-emerald-600 font-medium">
                    Link copied
                  </span>
                )}
              </div>

              <div>
                <time className="text-sm text-emerald-600 font-medium">
                  {formatDateOnly(post.publishedDate)}
                </time>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-8">
                {post.title}
              </h1>

              <RichContent content={post.content} variant="article" />

              {post.featuredImages && (
                <div className="mb-8 space-y-6">
                  {post.featuredImages.map((asset, index) => {
                    const file = asset?.fields?.file;
                    const title =
                      asset?.fields?.title ||
                      `${post.title} media ${index + 1}`;
                    const url = file?.url ? `https:${file.url}` : null;
                    const contentType = file?.contentType || "";

                    if (!url) return null;

                    if (contentType.startsWith("image/")) {
                      return (
                        <div key={index}>
                          <Image
                            src={url}
                            alt={title}
                            width={file?.details?.image?.width || 1200}
                            height={file?.details?.image?.height || 700}
                            className="w-full h-auto rounded-lg object-cover"
                          />
                        </div>
                      );
                    }

                    if (contentType.startsWith("audio/")) {
                      return (
                        <div
                          key={index}
                          className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                        >
                          <p className="text-sm text-gray-500 mb-2">{title}</p>
                          <audio controls className="w-full">
                            <source src={url} type={contentType} />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={index}
                        className="rounded-lg border border-gray-200 bg-gray-50 p-4"
                      >
                        <p className="text-gray-700 mb-2">
                          Featured media: {title}
                        </p>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:underline"
                        >
                          Open file
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/community-education/blog"
                  className="text-emerald-600 hover:underline"
                >
                  &larr; Back to Blog
                </Link>
              </div>
            </div>
          </motion.article>
        </Container>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const isConfigured = isContentfulConfigured();

  if (isConfigured) {
    try {
      const posts = await getBlogPosts();
      if (posts.length > 0) {
        return {
          paths: posts.map((post) => ({
            params: { slug: post.slug },
          })),
          fallback: "blocking",
        };
      }
    } catch (error) {
      console.error("Error fetching paths from Contentful:", error);
    }
  }

  return {
    paths: Object.keys(fallbackBlogPosts).map((slug) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const isConfigured = isContentfulConfigured();

  if (isConfigured) {
    try {
      const contentfulPost = await getBlogPostBySlug(slug);

      if (contentfulPost) {
        return {
          props: {
            post: {
              title: contentfulPost.title,
              publishedDate: contentfulPost.publishedDate,
              excerpt: contentfulPost.excerpt,
              content: contentfulPost.content ?? null,
              featuredImages: contentfulPost.featuredImages ?? null,
            },
            slug,
          },
          revalidate: 60,
        };
      }
    } catch (error) {
      console.error("Error fetching post from Contentful:", error);
    }
  }

  const fallbackPost = fallbackBlogPosts[slug];

  return {
    props: {
      post: fallbackPost
        ? {
            ...fallbackPost,
            featuredImages: null,
          }
        : null,
      slug,
    },
  };
};
