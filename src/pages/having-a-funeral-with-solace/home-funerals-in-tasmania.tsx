import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Emotional empowerment",
    text: "We have no say over when someone will die and those who live on can feel even more powerless by handing everything over to a business. The Family Led approach gives that power back to the family and allows them to be an integral part of the process rather than consigning it to an industry that may provide a beautiful, professional service but is less personal and has reduced family involvement.",
  },
  {
    title: "More options",
    text: "Family Led Funerals provide many more options for every aspect of the funeral process, where contemporary funeral homes often have a limited range of predetermined options. Make sure to ask what all your options are.",
  },
  {
    title: "Lower cost",
    text: "A Family Led process allows family and friends to be involved and the opportunity to cut expenses. While financial concerns are not always the case for everyone, increasingly people are feeling the strain and a family directed approach to end of life can reduce the cost of funeral processes and ceremonies.",
  },
];

const supportItems = [
  "Consultation, planning, advocacy and support before death",
  "Vigil and compassionate family assistance during the dying process",
  "Assist with natural after-death care including cooling, washing, dressing",
  "Offering ceremony options and organisation",
  "Connection with service providers for burial and cremation",
  "Help you honour your cultural or spiritual requirements",
  "You can engage us to help you through the whole process or to do any one part of it for you",
  "Our goal is to leave you with the knowledge of what to do next time – in our perfect world, you’ll only need to engage us once",
];

export default function HomeFuneralsInTas() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>Home Funerals in Tasmania | Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn about family-led home funerals in Tasmania, how Solace supports families, and how home-based death care can offer more time, choice and connection."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/home-b.jpg"
          alt="Home funerals in Tasmania"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Home Funerals in Tasmania
          </h1>
        </div>
      </div>

      <main className="max-w-6xl mx-auto w-full 2xl:max-w-7xl md:text-base 2xl:text-lg flex-1">
        <Breadcrumb
          items={[
            {
              label: "Having a Funeral with Solace",
              href: "/having-a-funeral-with-solace",
            },
            { label: "Home Funerals in Tasmania" },
          ]}
        />

        <div className="px-4 md:px-10 py-8 md:py-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12"
          >
            <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
              A funeral with Solace
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Supporting families to honour their person in a way that feels
              authentic.
            </h2>

            <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                At Solace, we make a point of working with families and
                communities to help them find the best way to honor their
                person, support their grief and bereavement. We believe that
                grief and bereavement is always best served when the
                arrangements made are authentic and honour the life of the
                person who has died. And none of this should cost the earth.
              </p>

              <p>
                We are happy to work with people to support their decisions,
                guide them where needed and co create something special to help
                them bring their wishes to fruition.
              </p>

              <p>
                We believe in honest communication and transparent pricing; all
                our costs are listed on the website. If there is something you
                are not sure about, please reach out and we will be happy to
                chat.
              </p>
            </div>
          </motion.section>

          <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mb-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                Family-led home funerals
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Why should you consider a family-led approach to home funerals?
              </h2>

              <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  First and foremost,{" "}
                  <span className="font-medium text-gray-900">
                    a home funeral is more about service than it is about place
                  </span>
                  . What does that mean? It means that you get the space and the
                  time to decide what feels right and you get to be in control
                  as much as you wish.
                </p>

                <p>
                  This could mean that you want to be with your person when they
                  die and not feel rushed after their death. It could be making
                  sure that they have their favourite boots on or someone&apos;s
                  hair is curled the right way.
                </p>

                <p>
                  Maybe you want to have your person at home for some time;
                  hours or even days. They can stay until the time of a
                  ceremony, burial or cremation.
                </p>

                <p>
                  Choosing to keep the body of your loved one at home allows for
                  a home vigil. This provides the opportunity for a gentler
                  approach to ‘letting go’. It also allows time for the family
                  and community members to gather together, grieve, share
                  stories and memories, comfort each other and if you so choose,
                  plan a farewell.
                </p>

                <p>
                  All these things are acts of service and they can happen in
                  the viewing room of a funeral home, a nursing home, hospital
                  bed or hospice ward. Whatever your choices, we can work with
                  you and support you throughout the journey.
                </p>
              </div>
            </div>

            <Image
              src="/img/home-2.jpg"
              alt="Family-led home funeral support"
              width={500}
              height={500}
              className="w-full rounded-2xl object-cover shadow-sm border border-gray-200"
            />
          </section>

          <section className="grid md:grid-cols-3 gap-5 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </section>

          <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
            <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
              What is involved?
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              What&apos;s involved in a family-led home funeral?
            </h2>

            <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
              <p className="font-medium text-gray-900">
                In a Home Funeral, you are in control of what happens.
              </p>
              <p>
                There are legislative requirements which govern certain elements
                of the Home Funeral process but you will find that you have much
                more control than you may have with a traditional funeral home
                experience.
              </p>

              <p>
                If you are considering caring for your person, please know that
                home does not necessarily mean your home. A Family Led approach
                to Home Funeral could mean working with a funeral director who
                will allow you to go to their premises to wash and dress your
                person, spending time there, perhaps even placing them in a
                coffin or wrapping them in a shroud.
              </p>

              <p>
                If you choose to keep your loved one in your home, or their own
                home, after death, it allows time to consider and organise the
                practical and legislative requirements in a gentler way and in
                familiar surroundings.
              </p>

              <p>
                If you do choose to have your loved one kept in yours or their
                own home after death, it allows time for the consideration and
                organisation of the more practical and legislative requirements
                and processes in a more gentle way and in familiar surroundings.
              </p>

              <p>
                When a Funeral Director is responsible for all these
                arrangements it can seem rather hurried in a relatively short
                interview.
              </p>

              <p>
                With a Home Funeral you can organise a Medical Cause of Death
                Certificate and register the death with the Registry of Births,
                Deaths and Marriages, or you can ask a Funeral Director to do it
                for you. This and the Application for Search (which produces the
                Record of Death for you) can be completed and lodged at Service
                Tasmania.
              </p>

              <p>
                You will also be required to complete a Burial and Cremation
                Permit (which may be available to you from the Crematorium or
                Cemetery Management) and then to make a booking for either
                Burial or Cremation and eventually transport the body to that
                place. Again, you can do this yourself or ask a Funeral Director
                to do it for you.
              </p>

              <p className="font-medium text-gray-900">
                With a Family Led Funeral you remain in control of, and
                responsible for this entire process.
              </p>
            </div>
          </section>

          <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 mb-12 items-center">
            <Image
              src="/img/home-3.jpg"
              alt="Support for family-led home funerals"
              width={500}
              height={500}
              className="w-full rounded-2xl object-cover shadow-sm border border-gray-200"
            />

            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-emerald-700 font-medium mb-4">
                You are not alone
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                A family-led home funeral does&apos;t mean you&apos;re alone!
              </h2>

              <div className="mt-6 space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  If you like the idea of a family led and community based
                  approach but need some help, we offer an affordable End of
                  Life service where we can be engaged before or after death,
                  and we can help you with the practical assistance, emotional
                  support and technical know-how to make your choices a reality.
                </p>

                <p>
                  We provide a peaceful presence, and are able to guide you
                  through the process of creating your own Family Led Funeral.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Some of the things we can do:
            </h2>

            <ul className="grid md:grid-cols-2 gap-4">
              {supportItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex items-start gap-3 bg-white border border-emerald-100 rounded-xl p-4"
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

                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          <section className="bg-emerald-700 text-white rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Learn more about home funerals in Tasmania.
            </h2>

            <p className="mt-4 text-emerald-50 leading-relaxed max-w-3xl">
              The Australian Home Funeral Alliance has detailed information
              about having home funerals in Tasmania, including practical and
              legislative considerations.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="https://www.ahfa.org.au/tasmania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-3 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
              >
                AHFA Tasmania Information
              </Link>

              <Link
                href="/contact"
                className="inline-flex px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Contact Solace
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
