import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState, ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getFAQs, isContentfulConfigured } from "@/lib/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";

// Fallback FAQ data when Contentful is not configured
const fallbackFAQs = [
  {
    id: "1",
    question: "DO WE NEED A FUNERAL DIRECTOR?",
    answer:
      "Short answer, No! For too long there has been an air of mystery surrounding the process of what happens when a person dies. The entire subject has become quite taboo within the western world and people no longer feel comfortable to ask the questions that they have. You can keep a person at home with you. You can wash and dress your loved one. You can provide your own coffin or container and transport your loved one to a cemetery or crematorium yourself.",
  },
  {
    id: "2",
    question: "DO WE NEED A COFFIN AND ARE THEY REALLY REUSED?",
    answer:
      "No, you do not need a traditional coffin. There are many alternatives including shrouds, wicker baskets, cardboard containers, or even a simple sheet. Coffins used for viewing at funeral homes are not reused - this is a common misconception. Each family receives a new coffin for their loved one.",
  },
];

interface FAQItem {
  id: string;
  question: string;
  answer: string | Document | null;
}

interface Props {
  faqs: FAQItem[];
  isUsingContentful: boolean;
}

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode) => (
      <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: ReactNode) => (
      <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-600">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: ReactNode) => (
      <ol className="list-decimal pl-6 space-y-2 mb-4 text-gray-600">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_node: any, children: ReactNode) => (
      <li>{children}</li>
    ),
    [BLOCKS.QUOTE]: (_node: any, children: ReactNode) => (
      <blockquote className="border-l-4 border-emerald-600 pl-4 py-2 my-4 bg-gray-50 italic text-gray-700 rounded-r-lg">
        {children}
      </blockquote>
    ),
    [INLINES.HYPERLINK]: (node: any, children: ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

function FAQAnswer({ answer }: { answer: string | Document | null }) {
  if (!answer) return null;

  if (typeof answer === "string") {
    return <p className="text-gray-600 leading-relaxed">{answer}</p>;
  }

  return (
    <div className="text-gray-600">
      {documentToReactComponents(answer, richTextOptions)}
    </div>
  );
}

function FAQItemComponent({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string | Document | null;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left hover:text-emerald-600 transition-colors"
      >
        <span className="font-medium text-gray-800 pr-4">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              <FAQAnswer answer={answer} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ faqs, isUsingContentful }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Head>
        <title>FAQ - Solace</title>
        <meta
          name="description"
          content="Frequently asked questions about death, dying, funerals, and your rights in Tasmania."
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
          <h1 className="text-xl md:text-4xl font-bold tracking-[20px] 2xl:text-7xl">
            FAQ
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full 2xl:max-w-7xl flex-1">
        <div className="max-w-6xl mx-auto 2xl:max-w-7xl px-4 md:px-5">
          <Breadcrumb
            items={[
              { label: "Community Education", href: "/community-education" },
              { label: "FAQ" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="px-4 md:px-10 py-8">
              <p className="text-lg text-gray-600 max-w-3xl mb-12">
                We believe in open, honest conversations about death and dying.
                Here are answers to some common questions. If you can&apos;t
                find what you&apos;re looking for, please contact us.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border border-gray-200">
                {faqs.map((item, index) => (
                  <FAQItemComponent
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>

              <div className="mt-12 p-8 bg-emerald-50 rounded-lg text-center">
                <p className="text-gray-700 mb-4">
                  Can&apos;t find the answer you&apos;re looking for?
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {!isUsingContentful && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
                  <p className="text-sm text-gray-500">
                    Showing sample content. Connect Contentful to manage FAQs
                    dynamically.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const isConfigured = isContentfulConfigured();

  if (isConfigured) {
    try {
      const contentfulFAQs = await getFAQs();

      if (contentfulFAQs.length > 0) {
        return {
          props: {
            faqs: contentfulFAQs.map((faq) => ({
              id: faq.id,
              question: faq.question,
              answer: faq.answer ?? null,
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

  return {
    props: {
      faqs: fallbackFAQs,
      isUsingContentful: false,
    },
  };
};
