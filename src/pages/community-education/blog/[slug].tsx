import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

// Sample blog data - will be replaced with Contentful integration
const blogPosts: Record<
  string,
  { title: string; date: string; content: string }
> = {
  "role-of-end-of-life-doula": {
    title: "The Role of The End of Life Doula in Australia",
    date: "May 20, 2025",
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
    date: "August 20, 2024",
    content: `
      <h2>What are the policy considerations for integrating medical and social care?</h2>
      <p>As Australia's population ages, we face unprecedented challenges and opportunities in how we care for people at the end of their lives. The traditional model of death care—largely medicalized and institutionalized—is being questioned.</p>
      <p>There is growing recognition that a good death involves more than just medical intervention. It requires social support, emotional care, and the opportunity for individuals and families to maintain agency over the dying process.</p>
      <p>Policy makers are beginning to recognize that integrating medical and social care can transform outcomes for older Australians. This means creating systems where healthcare professionals work alongside community support networks, family caregivers, and end of life doulas.</p>
      <p>The goal is not just to extend life, but to ensure quality of life until its natural end, and to support families through grief and bereavement.</p>
    `,
  },
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = slug ? blogPosts[slug as string] : null;

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-10 md:pt-28 min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-5 py-20 text-center">
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
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Solace Blog</title>
        <meta name="description" content={post.title} />
      </Head>
      <Header />
      <main className="pt-10 md:pt-28 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-5">
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
            className="py-10"
          >
            <time className="text-sm text-emerald-600 font-medium">
              {post.date}
            </time>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-8">
              {post.title}
            </h1>

            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-emerald-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/community-education/blog"
                className="text-emerald-600 hover:underline"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}
