import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Review = {
  id: string;
  name: string;
  date: string;
  content: string;
};

const reviews: Review[] = [
  {
    id: "review-1",
    name: "Amy",
    date: "2/02/2023",
    content:
      "An insightful read on how funerals and burials are conducted in different countries, followed by constructive recommendations on how these services can be improved in Australia given the ageing population. Furthermore, transformation of how 'funerals' can be viewed. Often funerals/burials are conducted promptly following a loved one's death, however, Bec's vision on how death can be transformed into a loving journey of remembrance and grief through honoring the dead and by taking one's time in the process is refreshing and encouraging.\n\nThe layout of the book is simple to read, accompanied by personal pictures of Bec and her new friends. Time is needed to savor chapter by chapter to fully comprehend the offerings from this book.",
  },
  {
    id: "review-2",
    name: "Amanda",
    date: "9/05/2023",
    content:
      "This report for the Churchill Fellowship is anything but dry.\nIf you’re “death-curious”, and want to get a glimpse into various death cultures, including some of the latest alternatives, this book will fascinate you, wherever you are in the world.\nThere are plenty of photos as well as accounts of practitioners and approaches from Europe and the Americas.\nRebecca Lyons has an easy-to-read writing style and her sensitive but clear approach to complicated topics makes this book hard to put down.\nCongratulations Rebecca, on creating a significant work that will inform us for a long time to come.\n\nHighly recommended for death doulas, funeral workers, and people interested in alternatives to western, twentieth-century death care.",
  },
  {
    id: "review-3",
    name: "Jennifer Deaton",
    date: "23/12/2023",
    content:
      "This book is a fabulous read, insightful and well written. Touches of the writers personality that are well placed to mitigate a taboo topic and gives insight into her journey to write this book. I use this book in my Death Doulaship work, it truly is a great resource, highly recommend.",
  },
];

const ReviewCard: React.FC<{ review: Review; index: number }> = ({
  review,
  index,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 300;

  const shouldTruncate = review.content.length > maxLength;

  const displayContent =
    isExpanded || !shouldTruncate
      ? review.content
      : `${review.content.substring(0, maxLength)}...`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 hover:border-emerald-200 transition-colors"
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
          <span className="text-yellow-500 text-sm tracking-wide">★★★★★</span>
        </div>

        <time className="text-sm text-gray-500">{review.date}</time>
      </div>

      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
        {displayContent}
      </p>

      {shouldTruncate && (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="mt-4 text-emerald-600 font-medium hover:underline"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </motion.article>
  );
};

export default function Book() {
  return (
    <>
      <Head>
        <title>A Heartfelt Undertaking | Solace</title>
        <meta
          name="description"
          content="Discover A Heartfelt Undertaking by Bec Lyons, a book exploring alternative approaches to death care, ceremony, and end-of-life practices in Australia and around the world."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/book-b.jpg"
          alt="A Heartfelt Undertaking"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Book
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Book" }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="py-8">
              <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <p className="text-sm font-medium text-emerald-600 uppercase tracking-[4px] mb-4">
                    A Heartfelt Undertaking
                  </p>

                  <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-800 mb-6">
                    Exploring death care, ceremony, and what is possible at end
                    of life.
                  </h2>

                  <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p>
                      In 2019 Bec Lyons travelled to six countries on a
                      Churchill Fellowship. She was researching the human
                      relationship to death and ceremony through alternative
                      approaches and technologies. It was a huge effort and this
                      book is the result.
                    </p>

                    <p>
                      Through an extensive process of interviews and site
                      visits, Bec met with and learned from people who are doing
                      death differently – from funeral directors to doulas to
                      health professionals, and everyone in between. This book
                      aims to document what is happening around the world, what
                      is under development, and what is new to the end of life
                      space. – and how it all might work in Australia.
                    </p>

                    <p>
                      Rich with personal reflections, this book will give you a
                      detailed insight into what is possible at end of life,
                      what options are emerging and how they fit into an
                      Australian context.
                    </p>

                    <p>
                      Awarded a Silver Medal in the 2023 Independent Publisher
                      Book Awards in the Australia/New Zealand – Best Regional
                      Non-Fiction Category.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Image
                    src="/img/book-award.png"
                    alt="A Heartfelt Undertaking book award"
                    width={400}
                    height={400}
                    className="w-full max-w-sm rounded-lg shadow-sm border border-gray-200"
                  />
                </div>
              </div>
            </section>

            <section className="py-8">
              <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm border border-gray-200">
                <div className="grid gap-8 md:grid-cols-[200px_1fr] md:items-start">
                  <Image
                    src="/img/book-2.jpg"
                    alt="A Heartfelt Undertaking book cover"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-sm border border-gray-200 mx-auto md:mx-0"
                  />

                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Find the book
                    </h2>

                    <p className="text-gray-600 mb-6 max-w-2xl">
                      Read reviews or purchase a copy through the links below.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="https://www.goodreads.com/book/show/61420148-a-heartfelt-undertaking"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-600 hover:text-white transition"
                      >
                        Goodreads
                      </Link>

                      <Link
                        href="https://www.booktopia.com.au/a-heartfelt-undertaking-rebecca-j-lyons/book/9780645408508.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-600 hover:text-white transition"
                      >
                        Booktopia
                      </Link>

                      <Link
                        href="https://www.amazon.com.au/Heartfelt-Undertaking-Rebecca-J-Lyons/dp/0645408506/ref=sr_1_5?keywords=rebecca+lyons&sr=8-5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-600 hover:text-white transition"
                      >
                        Amazon
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Reader Reviews
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mb-10">
                Reflections from readers interested in death care, ceremony,
                grief, and alternative approaches to end-of-life practice.
              </p>

              <div className="space-y-8">
                {reviews.map((review, index) => (
                  <ReviewCard key={review.id} review={review} index={index} />
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="https://www.goodreads.com/book/show/61420148-a-heartfelt-undertaking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-medium hover:underline"
                >
                  Read all reviews on Goodreads
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
