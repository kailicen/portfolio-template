import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

const services = [
  "Offer a safe space in which to talk about every aspect of dying and death",
  "Provide dying and death Q&A sessions, in groups or one-on-one",
  "Assist you with a greater understanding of your rights and options",
  "Help to unravel the 'industry language' that is often used but not well explained",
  "Assist with Advance Care Planning",
  "Help with funeral planning",
  "Provide you with a good base of knowledge with which to engage in conversation on dying and death with others",
];

const topics = [
  "Home funerals",
  "End of Life Doulas",
  "Advance care planning",
  "Enduring Guardians, Powers of Attorney and Wills",
  "Natural burial",
  "Water cremation, human composting and other options",
  "Death traditions and customs around the world",
  "Ceremony and ritual",
  "How to DIY and save money",
];

export default function EducationAdvocacy() {
  return (
    <>
      <Head>
        <title>Education & Advocacy | Solace End of Life Services</title>
        <meta
          name="description"
          content="Solace offers education and advocacy around dying, death care, advance care planning, home funerals, natural burial and family-led funeral options."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/community-education/education-advocacy"
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/education-advocacy-b.jpg"
          alt="Community Education"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Education & Advocacy
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
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
            className="py-8 md:py-12"
          >
            <section className="max-w-4xl mb-8">
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                Ask away
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Helping our community speak more openly about dying, death and
                care.
              </h2>

              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                Have you ever thought, <em>if only I knew someone to ask?</em>
              </p>

              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Well, ask away!
              </p>
            </section>

            <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 mb-12">
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Our years of experience in and around dying and death mean
                  that we are well placed to help with an information flow which
                  can otherwise be all too hard to find!
                </p>
                <p>
                  Quite aside from running a funeral home, we are both dedicated
                  to community education and raising the death literacy rate in
                  our local community and across the country.
                </p>
                <blockquote className="border-l-4 border-emerald-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
                  <p className="italic text-gray-800">
                    Demystifying death and dying through community engagement is
                    something we are very passionate about. Much of the money
                    that we make in our business goes towards funding the many
                    and varied community education events, workshops and
                    engagements that we offer.
                  </p>
                </blockquote>

                <p>
                  We offer paid and unpaid sessions on such subjects as advance
                  care planning, end of life doulas, home funeral and community
                  based care. We offer our time to organisations such as of the
                  Australian Home Funeral Alliance and the Natural Death
                  Advocacy Network.
                </p>

                <p>
                  Our work in this space is to help skill our community in the
                  area of dying and death care. It is to give you the knowledge
                  to know the questions to ask, the discussions to have and who
                  to talk to, so that you are well placed to make truly informed
                  decisions when it comes to dying and death.
                </p>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 md:p-8 h-fit">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Do you want to know more?
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  We book sessions for groups, families or individuals where we
                  can help shed light on the various conversations that happen
                  around dying and death. We are just as comfortable in a formal
                  or informal setting.
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed font-medium">
                  No questions are off limits!
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  We find these sessions are an invaluable way for people to
                  talk to us and each other. By engaging in meaningful and
                  honest conversation in a safe and supported environment we
                  have found that people walk away feeling far more at ease with
                  what was an uncomfortable discussion.
                </p>
              </div>
            </section>

            <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                We can:
              </h2>

              <ul className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-emerald-600 mt-1 shrink-0">
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

                    <span className="text-gray-700 leading-relaxed">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Some of the things we educate about include:
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="rounded-xl border border-gray-200 bg-white p-4 text-gray-700 shadow-sm"
                  >
                    {topic}
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="bg-emerald-700 text-white rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Ask us how we can help you!
              </h2>

              <p className="mt-4 text-emerald-50 leading-relaxed max-w-3xl">
                In the unlikely event that we can&apos;t help, we will also
                inform you of other people and services within the community who
                may be better able to assist you.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                >
                  Contact Solace
                </Link>

                <Link
                  href="/community-education/faq"
                  className="inline-block px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  View FAQ
                </Link>
              </div>
            </section>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
