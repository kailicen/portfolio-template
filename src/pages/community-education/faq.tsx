import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

// Sample FAQ data - will be replaced with Contentful integration
const faqItems = [
  {
    question: "DO WE NEED A FUNERAL DIRECTOR?",
    answer:
      "Short answer, No! For too long there has been an air of mystery surrounding the process of what happens when a person dies. The entire subject has become quite taboo within the western world and people no longer feel comfortable to ask the questions that they have. You can keep a person at home with you. You can wash and dress your loved one. You can provide your own coffin or container and transport your loved one to a cemetery or crematorium yourself.",
  },
  {
    question: "DO WE NEED A COFFIN AND ARE THEY REALLY REUSED?",
    answer:
      "No, you do not need a traditional coffin. There are many alternatives including shrouds, wicker baskets, cardboard containers, or even a simple sheet. Coffins used for viewing at funeral homes are not reused - this is a common misconception. Each family receives a new coffin for their loved one.",
  },
  {
    question: "WHAT IS A NATURAL BURIAL, HOW DOES IT WORK?",
    answer:
      "A natural burial is an environmentally-friendly burial option where the body is returned to the earth in a way that allows for natural decomposition. This typically means no embalming, using biodegradable containers or shrouds, and burial in a natural setting that may become a conservation area.",
  },
  {
    question: "WHAT CAN I DO MYSELF TOWARDS A FUNERAL?",
    answer:
      "You can do as much or as little as you feel comfortable with. This includes washing and dressing your loved one, keeping them at home, providing your own coffin or container, transporting them yourself, planning and conducting the ceremony, and engaging crematorium or cemetery services directly.",
  },
  {
    question: "CAN I DIE AT HOME?",
    answer:
      "Yes, dying at home is absolutely possible with proper planning and support. Many people prefer to spend their final days in familiar surroundings with loved ones. Palliative care services can provide support to make this a comfortable and peaceful experience.",
  },
  {
    question: "WHAT DO I DO WHEN MY LOVED ONE DIES?",
    answer:
      "There is no rush. You can take time to be with your loved one, call family and friends, and make decisions when you are ready. You are not legally required to call anyone immediately. When you are ready, you may need to have a doctor certify the death and then you can begin making arrangements.",
  },
  {
    question: "WHAT DO WE DO WITH THE CHILDREN?",
    answer:
      "Children can be included in the death and dying process as much as the family feels is appropriate. Being honest with children about death, in age-appropriate ways, can help them process grief. Many families find that including children in saying goodbye can be healing for everyone involved.",
  },
  {
    question: "WHO HAS THE FINAL SAY OVER MY END OF LIFE DECISIONS?",
    answer:
      "In Tasmania, you can document your wishes through an Advance Care Directive. It's important to discuss your wishes with family and appoint someone you trust to make decisions on your behalf if you become unable to do so. Having clear documentation helps ensure your wishes are respected.",
  },
  {
    question: "WHEN IS THE BEST TIME TO START CONSIDERING DEATH AND DYING?",
    answer:
      "The best time is now, while you are healthy and able to have clear conversations. Planning ahead takes the burden off your loved ones and ensures your wishes are known and can be carried out. It's never too early to start the conversation.",
  },
  {
    question: "WHAT IS A SHROUD AND CAN THEY BE USED FOR BURIALS AND CREMATIONS?",
    answer:
      "A shroud is a piece of cloth used to wrap the body. Shrouds can be used for both burials and cremations and are a beautiful, simple, and environmentally-friendly alternative to coffins. They can be plain or decorated, and some families choose to make their own.",
  },
  {
    question: "HOW DOES ORGAN DONATION AND BODY BEQUEST WORK?",
    answer:
      "Organ donation is arranged through DonateLife and decisions are made at the time of death in consultation with family. Body bequest is donating your body to medical science for teaching and research. This requires registration with a specific program before death.",
  },
  {
    question: "HOW DO I CONTACT YOU N' TABOO?",
    answer:
      "You can reach us through our contact page or email us directly. We're here to answer your questions and help you navigate the death and dying conversation in a way that feels comfortable for you.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      <main className="pt-10 md:pt-28 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-5">
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
            className="py-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mb-12">
              We believe in open, honest conversations about death and dying.
              Here are answers to some common questions. If you can&apos;t find
              what you&apos;re looking for, please contact us.
            </p>

            <div className="bg-white rounded-lg shadow-sm">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
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
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
