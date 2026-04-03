import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

function WhyDeathAndDying() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>
          Why Death and Dying? - About - Solace End of Life Services
        </title>
        <meta
          name="description"
          content="Making the conversation about death and dying just another part of life. Learn why we are passionate about death care advocacy."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="About - Why Death and Dying"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white px-4">
          <h1 className="text-xl md:text-4xl font-bold tracking-[10px] md:tracking-[20px] 2xl:text-7xl text-center">
            WHY DEATH AND DYING?
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full 2xl:max-w-7xl 2xl:text-lg md:text-base flex-1">
        <Breadcrumb
          items={[
            { label: "About", href: "/about" },
            { label: "Why Death and Dying?" },
          ]}
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 md:px-10 py-8 space-y-6 text-gray-700 leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Making the Conversation about Death and Dying, Just Another Part of
            Life
          </h2>

          <p>
            Edwin and Bec have worked in and around the death care industry for
            many years and have been constantly astonished by the amount of
            people unprepared when confronted by their own inevitable death or
            that of a family member or friend. In 2016, in response to this, we
            put together a group of like-minded family and friends to start a
            community conversation online and in person with aims of:
          </p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>
              Demystifying the taboos surrounding death to encourage increased
              transparency within the industry and the greater community
            </li>
            <li>Educating people about their rights and choices</li>
            <li>Providing a hub of conversation, connection and information</li>
            <li>
              Advocating for change in how death is thought about and handled
            </li>
            <li>
              Promoting natural, sustainable options of death care and
              management
            </li>
          </ul>

          <p>
            We believe that it is through honest conversation, education and
            advocacy that people can be well positioned to make informed
            decisions when it comes to death and dying. We are committed to
            creating a space in the community for conversation and education to
            challenge the taboos and misconceptions around death and dying.
          </p>

          <div className="w-16 h-1 bg-emerald-600 my-8" />

          <p>
            Everyone dies. We all will reach the end of our lives one way or
            another. How we arrive at that death and what our dying
            &apos;looks&apos; like are things that we can have input into.
            Through careful conversation and planning we can not only leave
            relevant and detailed instructions about our medical circumstances
            but also about the social and emotional circumstances as well.
          </p>

          <p>
            We can have as much or as little a say as we like about things such
            as:
          </p>

          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>
              The circumstances around us (music, people, light, colours etc)
            </li>
            <li>Who we want around us</li>
            <li>Who we would like to speaking for us</li>
            <li>Where we would like to be</li>
            <li>How we want to be treated (touched, visited, left alone)</li>
          </ul>

          <p>
            Not all these decisions are legal ones - although there are very
            important and relevant legal aspects to the planning process, but
            sometimes it&apos;s just about how you want it to be, to feel, and
            what you want to leave behind for people as a legacy.
          </p>

          <blockquote className="border-l-4 border-emerald-600 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
            <p className="text-lg italic text-gray-800">
              It has been astounding to us, the amount of people who are
              uncomfortable with the idea of death and dying, let alone being
              able to talk openly about it. Often the first conversations people
              are having about death is after the event, when they walk into a
              funeral home and say, &quot;I don&apos;t know what to do&quot;.
            </p>
          </blockquote>

          <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
            A Return to Community Care
          </h3>

          <p>
            Only a few generations ago, death and dying used to be a natural
            part of life, a community event involving family, friends and
            neighbours who would grieve and remember together. It was common for
            the dead to stay in the family home and for the families, their
            friends and communities to have an integral part of the death care
            process. Death was an accepted part of life.
          </p>

          <p>
            Death has always been the last rite of passage for a person&apos;s
            journey on earth. No matter the religion or moral conviction of a
            person, the event of someone dying is the last time that person is
            formally honoured in our society. What we have seen more recently is
            a kind of removal from that, where for many years now people have
            been encouraged to hand over the body of a deceased loved one to
            strangers... Through doing so there has been a loss of the knowledge
            around what that really means.
          </p>

          <p>
            There are social, emotional and financial implications surrounding
            the decisions made about death and dying and often they are not made
            as truly informed choices. Increasingly, the opportunity to honour
            the dead is put out of reach for people due to the increasing costs
            associated with &apos;traditional&apos; funerals. We are keen to
            shed light on more natural and cost-effective ways of making the
            process of honouring a person&apos;s death more accessible and
            achievable for everyone.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
            Informed Choices Matter
          </h3>

          <p>
            But, what if they were truly informed choices? Would it make a
            difference? We think it would and so that is what we aim to do. That
            is why we want to talk about death and dying. So that people can
            make informed decisions because they know their rights and options,
            know what choices are actually theirs to make and can make them
            based on real and transparent knowledge of the death care industry.
          </p>

          <p>
            For a long time much of this knowledge has been shrouded in a sense
            of mystery. There are some wonderful funeral directors out there who
            will personally go above and beyond to help a family they are
            looking after - it is a humbling thing to be invited into a family
            at a vulnerable time and many of the good directors feel the weight
            of this space.
          </p>

          <p>
            It is equally true that the funeral industry has perpetuated the
            mystery and taboo around death by orchestrating their services in
            such a way that has resulted in many of the decisions and power
            being taken away from the families; the families are often none the
            wiser, or they are made to feel as though it is easier to go the
            standard route - or their only choice.
          </p>
        </motion.article>

        <div className="px-4 md:px-10">
          <div className="rounded-2xl bg-emerald-700 text-white px-6 py-8 md:px-10 md:py-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase leading-tight">
              Our aim is to hand some of that power back to families by
              providing them with the opportunity to make truly informed
              decisions.
            </h3>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-emerald-50 max-w-4xl">
              What is right for you is always going to be a personal choice, and
              if it is right for you, it is right. We are working towards
              building our collective community knowledge base to a point where
              people will no longer find themselves saying &quot;I wish I&apos;d
              known that was possible...&quot;
            </p>

            <div className="mt-6">
              <Link
                href="/community-education/education-advocacy"
                className="inline-block rounded-lg border border-white px-6 py-3 text-sm md:text-base font-medium tracking-wide uppercase text-white transition hover:bg-white hover:text-emerald-700"
              >
                Find out how we can help you
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default WhyDeathAndDying;
