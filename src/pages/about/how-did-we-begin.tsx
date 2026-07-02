import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import Container from "@/components/Container";

function WhereWeComeFrom() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Head>
        <title>How Did We Begin? | About | Solace End of Life Services</title>
        <meta
          name="description"
          content="Learn how Solace began and why we're passionate about community-led death care, informed choice, education and compassionate end-of-life support."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/about-b.jpg"
          alt="About - How Did We Begin?"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white px-4">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            How Did We Begin?
          </h1>
        </div>
      </div>
      <main className="flex-1">
        <Container>
          <Breadcrumb
            items={[
              { label: "About", href: "/about" },
              { label: "How Did We Begin?" },
            ]}
          />
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-8 md:py-12 space-y-8 text-gray-700 leading-relaxed"
          >
            <div>
              <p className="text-xl md:text-2xl text-gray-900 font-medium">
                We have always believed in community.
              </p>

              <p className="text-xl md:text-2xl text-gray-900 font-medium mt-3">
                We have always tried to act from a place of compassion.
              </p>

              <p className="text-xl md:text-2xl text-gray-900 font-medium mt-3">
                And over time, we found ourselves in a place of frustration.
              </p>
            </div>

            <div className="w-16 h-1 bg-emerald-600" />

            <section className="space-y-5">
              <p>
                Funerals are important, they have always been important. We want
                people to know that a funeral can be whatever you want it to be;
                it can be dignified and authentic no matter what it is or where
                it is. It is important for people to have the space to gather,
                to mourn together and support each other in grief, but it does
                not need to cost the earth.
              </p>

              <p>
                We believe that people are capable and resilient and with
                transparent conversation and the right support, family and
                community can do what they feel they need to… because grief is
                always more gentle when the last thing you do for your person is
                an act of service.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                It started with a conversation
              </h2>

              <p>
                In 2016, in response to this, we put together a group of
                like-minded family and friends to start a community conversation
                online and in person with aims of:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Demystifying the taboos surrounding death to encourage
                  increased transparency within the industry and the greater
                  community
                </li>
                <li>Educating people about their rights and choices</li>
                <li>
                  Providing a hub of conversation, connection and information
                </li>
                <li>
                  Advocating for change in how death is thought about and
                  handled
                </li>
                <li>
                  Promoting natural, sustainable options of death care and
                  management
                </li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                Building Solace
              </h2>

              <p>
                In 2017 Bec became an end of life doula to serve the dying (and
                those making preparations) in her community. In 2018 they rolled
                all these things together and have been offering a family led
                and community based funeral service ever since.
              </p>

              <blockquote className="border-l-4 border-emerald-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
                <p className="text-lg italic text-gray-800">
                  We believe that it is through honest conversation, education
                  and advocacy that people can be well positioned to make
                  informed decisions when it comes to dying and death. We are
                  committed to creating a space in the community for
                  conversation and education to challenge the taboos and
                  misconceptions around death and dying.
                </p>
              </blockquote>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                Our vision
              </h2>

              <p>
                And so, we started with a desire to encourage people to make
                good, informed choices that are right for them. The honest truth
                is, that for the most part, you don&apos;t actually need a
                funeral director for the ceremony. If you want one, that&apos;s
                great - we want that to be an intentional and informed choice
                for people, a choice that they make from a place of empowerment
                - not because they don&apos;t know any other way.
              </p>
            </section>

            <div className="my-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Watch Bec&apos;s TEDxHobart talk
              </h2>

              <p className="text-gray-600 mb-6">
                <em>Three Steps into the Heart of Home Funeral</em> explores why
                reclaiming community involvement in death care matters.
              </p>

              <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-black pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/_oQz_8v52a0"
                  title="Three steps into the heart of home funeral | Rebecca Lyons | TEDxHobart"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-900">
                Why this work matters
              </h2>

              <p>We need to do dying and death well in this country.</p>

              <p>
                We have never had more people on the planet than we have at the
                moment and the number of people predicted to die in the next 25
                years far outstrips our current capacity to properly care for
                them.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                Empowering the Dying
              </h2>

              <p>
                Everyone dies. We all will reach the end of our lives one way or
                another. How we arrive at that death and what our dying
                &apos;looks&apos; like are things that we can have input into.
                Through careful conversation and planning we can not only leave
                relevant and detailed instructions about our medical
                circumstances but also about the social and emotional
                circumstances as well.
              </p>

              <p>
                You may be content to leave every decision to those you love and
                trust but on the other hand, you may wish to make your wishes
                known about things such as:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The surroundings and atmosphere of the space like music,
                  people, light, colours, scents etc.
                </li>
                <li>Who we want around us</li>
                <li>Who we would like to be speaking for us</li>
                <li>Where we would like to be</li>
                <li>How we want to be treated both before and after death</li>
                <li>Who will tell our story</li>
                <li>What gifts to make to loved ones</li>
              </ul>

              <p>
                End of life and funeral planning can be a part of all these
                conversations. And, not all these decisions are legal ones -
                although there are very important and relevant legal aspects to
                the planning process, but sometimes it&apos;s just about how you
                want it to be, to feel, and what memories you want to leave
                behind for people as a legacy, memories.
              </p>

              <blockquote className="border-l-4 border-emerald-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
                <p className="italic text-gray-800">
                  It has been astounding to us, the number of people who are
                  uncomfortable with the idea of death and dying, let alone
                  being able to talk about it openly. Often the first
                  conversations people are having about death is after the
                  event, when they walk into a funeral home and say, &quot;I
                  don&apos;t know what to do&quot;.
                </p>
              </blockquote>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                Informing those Left Behind
              </h2>

              <p>
                There are social, emotional and financial implications
                surrounding the decisions made about death care and often they
                are not made as truly informed choices. Increasingly, the
                opportunity to honour the dead is put out of reach for people
                due to the increasing costs associated with
                &apos;traditional&apos; funerals. We are keen to shed light on
                more natural and cost-effective ways of making the process of
                honouring a person&apos;s death more accessible and achievable
                for everyone.
              </p>

              <p>
                People need to reclaim some of the control over our dead that
                has been surrendered in the last 150 years.
              </p>

              <p>And…</p>

              <p>We need to do funerals and ceremonies better than we are.</p>

              <p>
                We advocate for doing things in a way that puts people first.
                Prior to the turn of the century members of the community held
                the knowledge of death care and families regularly cared for
                their people in the home. Today, this isn’t always possible, or
                even desirable for some, but approaching funerals with a family
                and community focus always is. This means everything will be co
                created and family led.
              </p>

              <blockquote className="border-l-4 border-emerald-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
                <p className="italic text-gray-800">
                  Our journey as a family and as a community through grief and
                  bereavement will only ever be made gentler by allowing
                  ourselves the control and choice over how we deal with and
                  spend time with our dead.
                </p>
              </blockquote>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                A Return to Community Care
              </h2>

              <p>
                Only a few generations ago, dying and death used to be a natural
                part of life, a community event involving family, friends and
                neighbours who would grieve and remember together. It was common
                for the dead to stay in the family home and for the families,
                their friends and communities to be an integral part of the
                death care process. Death was an accepted part of life.
              </p>

              <p>
                What we have seen for many years now is people being encouraged
                to hand over the body of a deceased loved one to strangers.
                Through doing so, there has been a loss of community knowledge
                regarding the care of our dead.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-semibold text-gray-900">
                Informed Choices Matter
              </h2>

              <p>
                Death has always begun a person’s final last rite of passage. No
                matter the beliefs or moral conviction of a person, the event of
                someone dying is the last time that person is formally honoured
                in our society.
              </p>

              <p>
                What if people planning a funeral were able to make truly
                informed choices?
              </p>

              <p className="font-medium text-gray-900">
                Would it make a difference?
              </p>

              <p className="font-medium text-gray-900">We think it would.</p>

              <p>That is why we want to talk about dying and death.</p>

              <p>
                That is why we want to support families in their preplanning and
                in creating ceremonies that are beautiful, affordable, dignified
                and unique. When people know their rights, options and possible
                choices they feel confident and capable of making informed
                decisions when they deal with death care professionals. These
                decisions are then based on real and transparent knowledge of
                the death care industry and systems. And that matters.
              </p>

              <p>
                For a long time much of this knowledge has been shrouded in a
                sense of mystery. There are some wonderful funeral directors out
                there who will go above and beyond to help a family they are
                looking after - it is a humbling thing to be invited into a
                family at a vulnerable time after all, and many of the good
                directors feel the weight of this space.
              </p>

              <p>
                It is equally true that some in the funeral industry have
                perpetuated the mystery and taboo around death by orchestrating
                their services in such a way that many of the decisions and much
                of the power is taken away from families. These families are
                often none the wiser; they are made to feel that it is easier to
                go the standard route or that is their only choice.
              </p>

              <p>
                This is often where the problem lies; with the companies and the
                management and systems they have built around them. That is
                where the feeling of ‘cookie cutter’ approaches come from when
                expensive things are pushed that give very little return or
                benefit for the grief and healing journeys of loved ones.
              </p>

              <blockquote className="border-l-4 border-emerald-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
                <p className="text-lg italic text-gray-800">
                  By paring things back and recentering family and community at
                  the heart of the journey, we want to empower, support and
                  facilitate people to do what feels right to them, every time.
                </p>
              </blockquote>
            </section>
          </motion.article>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default WhereWeComeFrom;
