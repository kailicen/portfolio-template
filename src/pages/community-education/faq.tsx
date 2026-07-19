import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import { getFAQs, isContentfulConfigured } from "@/lib/contentful";
import RichContent from "@/components/RichContent";
import PageHero from "@/components/ui/PageHero";
import SectionIntro from "@/components/ui/SectionIntro";
import ButtonLink from "@/components/ui/ButtonLink";

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
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string | null;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentId = `faq-answer-${id}`;

  return (
    <article
      className="
        overflow-hidden rounded-xl
        border border-solace-100
        bg-solace-surface
        shadow-sm
        transition-all duration-200
        hover:border-solace-300
        hover:shadow-md
      "
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="
          flex w-full items-center justify-between
          px-6 py-5 text-left
          transition-colors
          hover:bg-solace-50
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          focus-visible:ring-solace-400
          md:px-8
        "
      >
        <span className="pr-4 text-lg font-semibold text-solace-ink">
          {question}
        </span>

        <ChevronDownIcon
          className={`w-5 h-5 flex-shrink-0 text-solace-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 leading-relaxed text-slate-600 md:px-8">
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
    <div className="flex min-h-screen flex-col bg-solace-canvas text-solace-ink">
      <Head>
        <title>FAQ | Solace</title>
        <meta
          name="description"
          content="Frequently asked questions about death, dying, funerals, and your rights in Tasmania."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/community-education/faq"
        />
      </Head>

      <Header />

      <PageHero
        title="FAQ"
        image="/img/faqs-b.jpg"
        alt="Frequently asked questions"
      />

      <main className="flex-1">
        <Container>
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
            <section className="py-8">
              <SectionIntro
                align="left"
                eyebrow="Community Education"
                title="Honest answers to common questions about death, dying and funerals."
                description="We believe in open, honest conversations about death and dying. Here are answers to some common questions. If you can’t find what you’re looking for, please contact us."
                className="mb-12"
              />

              <div className="space-y-4">
                {faqs.map((item, index) => (
                  <FAQItemComponent
                    key={item.id}
                    id={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>

              <section className="mt-12 bg-solace-700 text-white rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Can&apos;t find the answer you&apos;re looking for?
                </h2>

                <p className="mt-4 text-solace-50 leading-relaxed max-w-3xl">
                  Every situation is different. If you need guidance, have a
                  specific question, or are unsure where to start, please reach
                  out and we will help where we can.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <ButtonLink href="/contact" variant="outline">
                    Contact Solace
                  </ButtonLink>
                </div>
              </section>

              {!isUsingContentful && (
                <div className="mt-6 bg-solace-50 rounded-lg p-6 border border-solace-100">
                  <p className="text-sm text-slate-600">
                    Showing sample content. Connect Contentful to manage FAQs
                    dynamically.
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
