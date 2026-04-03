import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

// Sample blog data - will be replaced with Contentful integration
const blogPosts = [
  {
    slug: "role-of-end-of-life-doula",
    title: "The Role of The End of Life Doula in Australia",
    date: "May 20, 2025",
    excerpt:
      "Challenges and opportunities in a modern landscape. It's time for a difficult conversation. We are good at that aren't we? This was a challenging piece to write and I imagine it will be challenging to read. Challenge isn't always bad, it is hard, but good things can come from hard conversations. After all, the role of the End Of Life (EOL) Doula is a challenging one and we tend to operate in the space of things that are layered and complex and hard.",
  },
  {
    slug: "reimagining-death-care",
    title: "Reimagining Death Care for our Ageing Population",
    date: "August 20, 2024",
    excerpt:
      "What are the policy considerations for integrating medical and social care to transform the way we care for older Australians at the end of life?",
  },
];

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog - Solace</title>
        <meta
          name="description"
          content="Insights, stories, and discussions about end of life care in Australia."
        />
      </Head>
      <Header />
      <main className="pt-10 md:pt-28 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto 2xl:max-w-7xl px-4 md:px-5">
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
            className="py-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">
              Insights, stories, and discussions about end of life care,
              advocacy, and the movement to bring death and dying back into
              community hands.
            </p>

            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors"
                >
                  <Link href={`/community-education/blog/${post.slug}`}>
                    <time className="text-sm text-emerald-600 font-medium">
                      {post.date}
                    </time>
                    <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-4 hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="text-emerald-600 font-medium hover:underline">
                      Read More
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="mt-12 p-8 bg-emerald-50 rounded-lg text-center">
              <p className="text-gray-600">
                More blog posts coming soon. Content will be managed through
                Contentful.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
