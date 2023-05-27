import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

type Props = {};

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
            src="/img/book-award.jpg"
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
            alt="book-1"
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
      <Footer />
    </div>
  );
}

export default Book;
