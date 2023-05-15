import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { heroVariants } from "./Hero";

type Props = {};

function Book({}: Props) {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex overflow-hidden flex-col text-left
     px-2 md:px-24 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3
        className="mb-5 uppercase tracking-[20px] text-gray-500 text-2xl text-center
      2xl:text-4xl 2xl:top-36"
      >
        Book
      </h3>

      <motion.div
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col space-y-5 md:flex-row md:space-x-5 items-center justify-center z-20
        max-w-7xl 2xl:flex-row 2xl:space-x-16"
      >
        <Image
          src="/img/book-2.jpg"
          alt="book"
          width={300}
          height={300}
          className="w-60 h-auto md:w-auto md:h-auto rounded-lg z-20
          2xl:w-auto 2xl:h-[300px]"
        />
        <div
          className="flex flex-col space-y-3 md:space-y-5 items-start md:text-lg z-20
        2xl:text-2xl"
        >
          <h2
            className="text-lg md:text-xl
          2xl:text-3xl"
          >
            <span className="decoration-emerald-600 underline">
              A Heartfelt Undertaking
            </span>{" "}
          </h2>
          <p>
            In 2019 Bec Lyons travelled to six countries on a Churchill
            Fellowship. She was researching the human relationship to death and
            ceremony through alternative approaches and technologies. It was a
            huge effort and this book is the result.
          </p>
          <p className="hidden md:block">
            Click the learn more button to know more about Bec&apos;s book.
          </p>
          <button
            onClick={() => router.push("/book")}
            className="button
          text-lg"
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Book;
