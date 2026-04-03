import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const services = [
  "Offer a safe space in which to talk about every aspect of death and dying",
  "Provide death and dying Q & A sessions, in groups or one on one",
  "Assist you with a greater understanding of your rights and the options available to you",
  "Help to unravel the 'industry language' which is all too commonly used in the public space but often not well explained",
  "Provide you with a good base of knowledge with which to pursue death and dying options and alternatives for yourself and ways of having the conversation with others",
  "Be a part of the death and dying conversations and planning you and your family are undertaking",
  "Offer a platform and network of like-minded community groups and services who may be able to assist you",
];

export default function EducationAdvocacy() {
  return (
    <>
      <Head>
        <title>Education & Advocacy - Solace</title>
        <meta
          name="description"
          content="Demystifying death and dying through community engagement. We offer safe spaces to discuss death and dying."
        />
      </Head>
      <Header />
      <main className="pt-10 md:pt-28 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto 2xl:max-w-7xl px-4 md:px-5">
          <Breadcrumb
            items={[
              { label: "Community Education", href: "/community-education" },
              { label: "Education & Advocacy" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Education & Advocacy
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                <p className="text-xl text-emerald-700 font-medium mb-6">
                  Have you ever thought, if only I knew someone to ask...?
                </p>
                <p className="text-gray-700 mb-4">Well, ask away!</p>
                <p className="text-gray-600 mb-6">
                  Our years of experience in and around death and dying mean
                  that we are well placed to help with an information flow which
                  can be otherwise all too hard to find!
                </p>
                <p className="text-gray-600">
                  Our aim is to help you with all the aspects of this broad
                  conversation and give you practical suggestions on how to use
                  that information in everyday situations. We want you to know
                  what questions to ask, what discussions to have and who to
                  talk to, so that you are well placed to make truly informed
                  decisions when it comes to death and dying.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                <p className="text-gray-600 mb-6">
                  We will make the time to share our experiences with you and
                  discuss any questions you have, we can provide whatever
                  information is available to us based on our years of
                  accumulated knowledge and experience. We will also let you
                  know of other people and services within the community who may
                  be able to best assist you as well.
                </p>
                <p className="text-gray-600">
                  Demystifying death and dying through community engagement is
                  something we are very passionate about and we are willing and
                  able to book sessions for groups or one on one where we can
                  help to shed light on some of these death taboos. Be it in a
                  formal or informal setting, we hold death and dying sessions
                  where no questions are off limits! We find these sessions are
                  an invaluable way for people to talk to us and each other. By
                  engaging in meaningful and honest conversation in a safe and
                  supported environment we have found that people walk away
                  feeling far more at ease with what was an uncomfortable
                  discussion.
                </p>
              </div>

              <div className="bg-emerald-50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  We can:
                </h2>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-emerald-600 mt-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                <p className="text-gray-600 mb-6">
                  We want everyone to know that there are alternatives out
                  there, that they don&apos;t ever have to just accept what is
                  on offer; the control really is your own.
                </p>
                <p className="text-emerald-700 font-semibold text-lg">
                  We believe this work is vital within the community.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/community-education/faq"
                  className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  View FAQ
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
