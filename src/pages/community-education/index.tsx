import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

const educationSubPages = [
  {
    title: "Education & Advocacy",
    href: "/community-education/education-advocacy",
    description:
      "Demystifying death and dying through community engagement, Q&A sessions, and honest conversations.",
  },
  {
    title: "Blog",
    href: "/community-education/blog",
    description:
      "Insights, stories, and discussions about end of life care in Australia.",
  },
  {
    title: "Media Appearances",
    href: "/community-education/media",
    description:
      "Featured articles, interviews, and news coverage of our work.",
  },
  {
    title: "FAQ",
    href: "/community-education/faq",
    description:
      "Frequently asked questions about death, dying, funerals, and your rights.",
  },
  {
    title: "Resources",
    href: "/community-education/resources",
    description:
      "Links to training providers, legislation, and end of life tools.",
  },
];

export default function CommunityEducationIndex() {
  return (
    <>
      <Head>
        <title>Community Education - Solace</title>
        <meta
          name="description"
          content="Community education and advocacy for end of life services in Tasmania."
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
            Community Education
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full 2xl:max-w-7xl flex-1">
        <Breadcrumb items={[{ label: "Community Education" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="px-4 md:px-10 py-8">
            <p className="text-lg text-gray-600 max-w-3xl mb-12">
              We believe that demystifying death and dying through community
              engagement is vital. Explore our educational resources, blog
              posts, media appearances, and frequently asked questions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationSubPages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={page.href}
                    className="block h-full p-6 bg-white rounded-lg border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all group"
                  >
                    <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                      {page.title}
                    </h2>
                    <p className="text-gray-600">{page.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
