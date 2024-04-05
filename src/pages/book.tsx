import Header from "@/components/Header";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

type Props = {};

type Review = {
  id: string;
  name: string;
  date: string;
  content: string;
};

const reviews = [
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

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 300; // Max characters to show before "Show More"

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const renderStars = () => {
    return (
      <div className="text-yellow-500 text-sm md:text-lg ml-2">{"★★★★★"}</div>
    );
  };

  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-md my-5">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h3 className="font-bold text-base md:text-lg">{review.name}</h3>
          {renderStars()}
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-700 whitespace-pre-line">
        {isExpanded || review.content.length <= maxLength
          ? review.content
          : `${review.content.substring(0, maxLength)}...`}
      </p>
      {review.content.length > maxLength && (
        <button
          onClick={toggleIsExpanded}
          className="text-green-600 hover:text-green-800 text-sm mt-2"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

function Book({}: Props) {
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="relative">
        <Image src="/img/book-b.jpg" alt="book-b" width={2300} height={300} />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1
            className="text-xl md:text-4xl font-bold
          tracking-[20px] 2xl:text-7xl"
          >
            BOOK: A HEARTFELT UNDERTAKING
          </h1>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto
      2xl:max-w-7xl 2xl:text-lg md:text-base"
      >
        <div
          className="flex flex-col space-y-5 md:flex-row md:space-x-5 py-5 md:py-10 px-2 md:px-5
        items-center justify-center"
        >
          <div className="flex flex-col space-y-3 md:space-y-5 items-start">
            <h2
              className="text-xl md:text-2xl
            2xl:text-3xl"
            >
              <span className="decoration-green-400 underline">
                A HEARTFELT UNDERTAKING
              </span>
            </h2>
            <p>
              In 2019 Bec Lyons travelled to six countries on a Churchill
              Fellowship. She was researching the human relationship to death
              and ceremony through alternative approaches and technologies. It
              was a huge effort and this book is the result.
            </p>
            <p>
              Through an extensive process of interviews and site visits, Bec
              met with and learned from people who are doing death differently –
              from funeral directors to doulas to health professionals, and
              everyone in between. This book aims to document what is happening
              around the world, what is under development, and what is new to
              the end of life space. – and how it all might work in Australia.
            </p>
            <p>
              Rich with personal reflections, this book will give you a detailed
              insight into what is possible at end of life, what options are
              emerging and how they fit into an Australian context.
            </p>
            <p>
              Awarded a Silver Medal in the 2023 Independent Publisher Book
              Awards in the Australia/New Zealand – Best Regional Non-Fiction
              Category.
            </p>
          </div>
          <Image
            className="w-auto h-auto md:w-[400px] md:h-auto rounded-lg
            2xl:h-[400px] 2xl:w-auto"
            src="/img/book-award.png"
            alt="book-1"
            width={400}
            height={400}
          />
        </div>
        <div
          className="flex flex-col space-y-5 md:flex-row md:space-x-5 py-5 md:pb-10 px-2 md:px-5
        items-center md:items-start justify-start"
        >
          <Image
            className="w-auto h-auto md:w-[200px] md:h-auto rounded-lg
          2xl:h-[200px] 2xl:w-auto"
            src="/img/book-2.jpg"
            alt="book-2"
            width={200}
            height={200}
          />
          <div
            className="flex flex-col space-y-3 md:space-y-5 items-start
        px-2 md:px-5"
          >
            <p>
              Link for reviews -{" "}
              <Link
                href="https://www.goodreads.com/book/show/61420148-a-heartfelt-undertaking"
                target="_blank"
                className="bg-green-100 hover:text-green-500 rounded-lg px-1 pb-1"
              >
                Goodreads
              </Link>
            </p>
            <p>
              Buy on Booktopia -{" "}
              <Link
                href="https://www.booktopia.com.au/a-heartfelt-undertaking-rebecca-j-lyons/book/9780645408508.html"
                target="_blank"
                className="bg-green-100 hover:text-green-500 rounded-lg px-1 pb-1"
              >
                Booktopia
              </Link>
            </p>
            <p>
              Buy on Amazon -{" "}
              <Link
                href="https://www.amazon.com.au/Heartfelt-Undertaking-Rebecca-J-Lyons/dp/0645408506/ref=sr_1_5?keywords=rebecca+lyons&sr=8-5"
                target="_blank"
                className="bg-green-100 hover:text-green-500 rounded-lg px-1 pb-1"
              >
                Amazon
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-2 md:px-5 py-5">
        <h2 className="text-2xl font-semibold my-5">Reader Reviews</h2>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        <a
          href="https://www.goodreads.com/book/show/61420148-a-heartfelt-undertaking"
          target="_blank"
          className="text-green-600 hover:text-green-800 font-semibold"
          rel="noopener noreferrer"
        >
          Read all reviews on Goodreads
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Book;
