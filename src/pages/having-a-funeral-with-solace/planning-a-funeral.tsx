import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Container from "@/components/Container";

const planningDocuments = [
  "Will",
  "Enduring Guardian",
  "Power of Attorney",
  "Advance Care Plan",
  "Advance Care Directive",
  "Funeral Plan",
  "Medical Goals of Care",
];

const mandatoryDecisions = [
  {
    title:
      "Conventional burial, natural burial, water cremation or flame cremation",
  },
  {
    title: "Registration of death",
  },
  {
    title: "Permit for burial or cremation",
  },
  {
    title: "Coffin or shroud selection",
    detail:
      "Coffins can be traditional hardwood, particle board, or woven, including home-made. No coffin is required if the body is shrouded, however you will need to consider a hard flat base for transport, burial or cremation.",
  },
  {
    title: "Transportation of coffin or shrouded body",
    detail:
      "A coffin will not fit into most cars but vans, utes with canopies or a hearse are suitable.",
  },
  {
    title: "Pallbearers and manual handling",
    detail:
      "Pallbearers, not just for carrying or lifting, but you also need to consider the manual handling in whatever spaces you are in. A body is heavy, and to safely transport one in a coffin/shroud will require multiple people. To lower a coffin into a grave will require a MINIMUM of 4 people and 1 to direct.",
  },
];

const ceremonyChoices = [
  "Date of ceremony (if chosen, not a necessity)",
  "Place of ceremony – setting, decoration, formal or casual",
  "Number of people expected or invited",
  "Wording for death and funeral notice",
  "Which newspapers to place notices and how many times each notice is to run",
  "Is word of mouth and social media sufficient notice for people?",
  "Music selection and how to use it",
  "10-12 photos per minute of music if a montage is chosen",
  "Other AV options including live streaming, recording, projection for large crowds",
  "Catering requirements",
  "Celebrant/clergy/mc to lead the ceremony",
  "Memorial sheets/signing sheets for attendees and other stationary",
  "Booklet/order of service/bookmark/postcard",
  "Transportation of the deceased and family",
  "Care of the body – home based or with a funeral director - dressing/make up/jewellery",
  "Religious rites",
  "Vigil or viewing times",
  "Organist/pianist/singers/live music",
  "Gifts for attendees",
  "Grave marker (in case of burial)",
  "Ashes placement (in the case of cremation)",
  "Plaque/headstone wording (in case of placement)",
];

export default function PlanningAFuneral() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>Planning | Solace End of Life Services</title>
        <meta
          name="description"
          content="Planning guidance for funerals, advance care planning, wishes, family-led funerals and end-of-life documents."
        />
        <link
          rel="canonical"
          href="https://solaceendoflife.com.au/having-a-funeral-with-solace/planning-a-funeral"
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/planning-b.jpg"
          alt="Planning"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Planning
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              {
                label: "Having a Funeral with Solace",
                href: "/having-a-funeral-with-solace",
              },
              { label: "Planning" },
            ]}
          />

          <div className="py-8 md:py-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mb-12"
            >
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                Planning ahead
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Making end-of-life choices clearer, calmer and more informed.
              </h2>

              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                At Solace, we can help with any kind of planning you would like
                to do. If you need a funeral plan, we can help. Stuck for how to
                put together an Advance Care Plan? We can help with that as
                well. It can be hard to get your head around all the end of life
                documents and how they fit together.
              </p>
            </motion.section>

            <section className="grid lg:grid-cols-[1fr_360px] gap-10 mb-12 items-start">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5">
                  Depending on your circumstances, you could consider a-
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">
                  {planningDocuments.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                      className="rounded-xl bg-white border border-gray-200 p-4 text-gray-700 shadow-sm"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              <Image
                className="w-full rounded-2xl object-cover shadow-sm border border-gray-200"
                src="/img/planning-3.jpg"
                alt="Planning resources"
                width={500}
                height={500}
              />
            </section>

            <section className="mb-12">
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 md:p-8">
                <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                  Wishes
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Write down what matters to you.
                </h2>

                <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p>
                    One of the best things you can do when considering funeral
                    planning is to think about all the possibilities and write
                    down your wishes.
                  </p>

                  <p>
                    The Australian Home Funeral Alliance and the Natural Death
                    Advocacy Network have some really useful fact sheets and
                    tips on the various types of planning you could do.
                  </p>

                  <p>
                    A good place to start is by completing a Wishes Booklet
                    which will document all the wishes around the kind of
                    funeral you might like, the ways you want to be treated but
                    also record all the things your executor might need to know
                    to address your estate.
                  </p>

                  <p>
                    The Australian Home Funeral Alliance have provided a list of
                    questions to ask your funeral Director.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="https://www.ahfa.org.au/recording-your-wishes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                  >
                    View Wishes Booklet
                  </Link>

                  <Link
                    href="https://www.ahfa.org.au/questions-to-ask-a-funeral-director"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-6 py-3 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                  >
                    Questions to Ask a Funeral Director
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                Funeral planning
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Knowing your options gives you more choice.
              </h2>

              <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed max-w-4xl">
                <p>
                  The Natural Death Advocacy Network is committed to providing
                  communities with information which will help in the making of
                  informed choices regarding your funeral options. From coffins,
                  transport, celebrancy and interment, NDAN endeavours to
                  outline the options for traditional and contemporary funeral
                  choices.
                </p>

                <p>
                  The Natural Death Advocacy Network has a checklist of things
                  that can be considered when planning a funeral. Here is the
                  checklist of possible components and considerations for a
                  funeral ceremony. This list is compiled based on the choices
                  given when engaging with contemporary funeral businesses.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="https://ndan.com.au/resources/end-of-life-planning/funeral-planning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  View NDAN Funeral Planning Resource
                </Link>

                <Link
                  href="https://www.ahfa.org.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                >
                  Learn About Family-Led Funerals
                </Link>
              </div>
            </section>

            <section className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-5">
                  Family-led funeral decisions
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  For a Family-Led Funeral, there are some mandatory decisions
                  or components in the process. They are as follows:
                </p>

                <ul className="space-y-2">
                  {mandatoryDecisions.map((item, index) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      className="rounded-xl bg-white border border-gray-200 px-4 py-3 md:px-5"
                    >
                      <div className="flex items-start gap-3">
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

                        <div className="flex-1">
                          {item.detail ? (
                            <details className="group">
                              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden text-gray-800 font-medium leading-relaxed flex items-center justify-between gap-4">
                                <span>{item.title}</span>

                                <ChevronDownIcon className="w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                              </summary>

                              <p className="mt-3 text-gray-600 leading-relaxed">
                                {item.detail}
                              </p>
                            </details>
                          ) : (
                            <p className="text-gray-800 font-medium leading-relaxed">
                              {item.title}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-700 text-white rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-5">
                  A note on ceremony
                </h2>

                <div className="space-y-4 text-emerald-50 leading-relaxed">
                  <p>
                    Funerals can be expensive and funeral poverty is a very real
                    problem in Australia.
                  </p>

                  <p>
                    The funeral/memorial ceremony is the only thing we have in
                    Australian culture to weave our grief and bereavement
                    around. By pricing people out of a ceremony they are removed
                    from all the things that a good ceremony can provide; a
                    network of shared grief, peer support and the act of
                    service, namely, showing up and honoring your person.
                  </p>

                  <p>
                    However, in many cases, you will never need a funeral
                    director for any of this. Often, people choose to have a
                    cremation only when someone dies and then plan a memorial
                    gathering themselves at a convenient time.
                  </p>

                  <p>
                    This can be a good way to keep the costs down and still
                    gather community to offer support, grieve and mourn
                    together.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Other ceremony choices to consider
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
                There are many choices that families and communities can make to
                ease the financial burden of funerals and still honor a
                person&apos;s life with authenticity and dignity.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ceremonyChoices.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.025 }}
                    className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="mb-12 bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 md:p-8">
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                Your choices
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Planning on your own terms.
              </h2>

              <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  Knowing what choices are available to you and having the time
                  to consider what feels right, gives you the opportunity to go
                  into that planning from an informed position and it enables
                  you to deal with professionals on your own terms.
                </p>

                <p>
                  You may still want to use a funeral director but you get to
                  pick and choose the tasks you want them to undertake.
                </p>

                <p>
                  NDAN&apos;s funeral planning factsheet is designed to give you
                  an idea of what options may be available to you and, given
                  that knowledge, inform the discussions you have with your
                  family, friends, and end of life and death care providers.
                </p>

                <p>
                  Importantly, this is a process you have the right to take part
                  in or govern as much or as little as you choose. AHFA also
                  provides helpful information about family-led and home funeral
                  requirements.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="https://ndan.com.au/images/Factsheets/INFO_SHEET_2_Funeral_Planning.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  View NDAN Funeral Planning Factsheet
                </Link>

                <Link
                  href="https://www.ahfa.org.au/home-funeral-requirements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                >
                  View AHFA Home Funeral Requirements
                </Link>
              </div>
            </section>

            <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                Advance care planning
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Planning for the care you want.
              </h2>

              <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  The organisation Advance Care Planning Australia is a place
                  where you can access the forms to complete an ACP relevant in
                  your State or Territory. Information specific to Tasmania can
                  be found here.
                </p>

                <p>
                  It can take a lot of intentional thought and consideration to
                  make a robust document that addresses all the things that are
                  important to you. Section 1 is about all the values you hold,
                  both personal and medical, and set the framework for the
                  people who will care for and interact with you. Section 2 can
                  be a good one to talk to your medical people about. This
                  section records all the interventions, medications and
                  treatments you may want to refuse, and the circumstances under
                  which you would refuse them.
                </p>

                <p>
                  The Natural Death Advocacy Network has some more information
                  as well which you can find here.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="https://www.advancecareplanning.org.au/start-planning/record-your-choices/tas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  Tasmania Advance Care Planning Forms
                </Link>

                <Link
                  href="https://ndan.com.au/resources/end-of-life-planning/advance-care-planning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                >
                  NDAN Advance Care Planning
                </Link>
              </div>
            </section>

            <section className="bg-emerald-700 text-white rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Want to do it yourself?
              </h2>

              <p className="mt-4 text-emerald-50 leading-relaxed max-w-3xl">
                If you want to do it yourself, we are always happy to pass on
                our contacts for the people we use when planning funerals. So if
                you&apos;d like options for things like florists, recording and
                live streaming, celebrants, stone masons, grave diggers, and
                caterers, please reach out and ask!
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
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
