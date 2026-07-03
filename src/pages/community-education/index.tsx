import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Container from "@/components/Container";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const educationSubPages = [
  {
    title: "Education & Advocacy",
    href: "/community-education/education-advocacy",
    eyebrow: "Ask away",
    description:
      "Learn how we support community education, death literacy, Q&A sessions, workshops and honest conversations about dying and death.",
  },
  {
    title: "Blog",
    href: "/community-education/blog",
    eyebrow: "Thoughts & stories",
    description:
      "Read reflections, insights and discussions about end-of-life care, death literacy, community care and meaningful choice.",
  },
  {
    title: "Media Appearances",
    href: "/community-education/media",
    eyebrow: "In the media",
    description:
      "Explore articles, interviews and media coverage about our work in death care, education, advocacy and community-led funerals.",
  },
  {
    title: "FAQ",
    href: "/community-education/faq",
    eyebrow: "Common questions",
    description:
      "Find answers to frequently asked questions about dying, death, funerals, rights, choices and what may be possible.",
  },
  {
    title: "Resources",
    href: "/community-education/resources",
    eyebrow: "Helpful links",
    description:
      "Access useful resources, organisations, legislation, planning tools and information to support informed end-of-life choices.",
  },
];

export default function CommunityEducationIndex() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>Community Education | Solace End of Life Services</title>
        <meta
          name="description"
          content="Community education, advocacy and resources to help people speak more openly about dying, death, funerals, rights and end-of-life choices."
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Community Education
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Community Education" }]} />

          <div className="py-8 md:py-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mb-12"
            >
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                Community education
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Helping people ask better questions about dying, death and care.
              </h2>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                We believe demystifying dying and death through community
                engagement is vital. Through education, advocacy, resources and
                honest conversation, we help people understand their rights,
                options and choices.
              </p>
            </motion.section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationSubPages.map((page, index) => (
                <motion.article
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    href={page.href}
                    className="group block h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 hover:border-emerald-500 hover:shadow-md transition-all"
                  >
                    <p className="uppercase tracking-[0.2em] text-xs text-emerald-700 font-medium">
                      {page.eyebrow}
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {page.title}
                    </h2>

                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {page.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 font-medium text-emerald-700 transition-colors group-hover:text-emerald-800">
                      <span>Learn more</span>

                      <ArrowRightIcon
                        aria-hidden="true"
                        className="relative top-px h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
