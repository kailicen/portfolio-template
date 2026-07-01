import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getFAQs, isContentfulConfigured } from "@/lib/contentful";
import Image from "next/image";
import RichContent from "@/components/RichContent";

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
  answer: string | null;
}

interface Props {
  faqs: FAQItem[];
  isUsingContentful: boolean;
}

function FAQItemComponent({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string | null;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:border-emerald-200 transition-colors overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-gray-800 pr-4">
          {question}
        </span>

        <ChevronDownIcon
          className={`w-5 h-5 flex-shrink-0 text-emerald-600 transition-transform ${
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
            <div className="px-6 md:px-8 pb-6 text-gray-600 leading-relaxed">
              <RichContent content={answer} variant="compact" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function FAQ({ faqs, isUsingContentful }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Head>
        <title>FAQ | Solace</title>
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
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            FAQ
          </h1>
        </div>
      </div>

      <main className="max-w-6xl mx-auto w-full 2xl:max-w-7xl flex-1">
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
            <section className="px-4 md:px-10 py-8">
              <p className="text-sm font-medium text-emerald-600 uppercase tracking-[4px] mb-4">
                Community Education
              </p>

              <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-800 mb-6 max-w-4xl">
                Honest answers to common questions about death, dying, and
                funerals.
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mb-12 leading-relaxed">
                We believe in open, honest conversations about death and dying.
                Here are answers to some common questions. If you can&apos;t
                find what you&apos;re looking for, please contact us.
              </p>

              <div className="space-y-4">
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

              <section className="mt-12 bg-emerald-700 text-white rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Can&apos;t find the answer you&apos;re looking for?
                </h2>

                <p className="mt-4 text-emerald-50 leading-relaxed max-w-3xl">
                  Every situation is different. If you need guidance, have a
                  specific question, or are unsure where to start, please reach
                  out and we will help where we can.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                  >
                    Contact Solace
                  </Link>
                </div>
              </section>

              {!isUsingContentful && (
                <div className="mt-6 bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                  <p className="text-sm text-gray-600">
                    Showing sample content. Connect Contentful to manage FAQs
                    dynamically.
                  </p>
                </div>
              )}
            </section>
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
