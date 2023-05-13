import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { heroVariants } from "./Hero";

type Props = {};

function Planning({}: Props) {
  const router = useRouter();

  return (
    <div
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
     px-2 md:px-24 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center
      2xl:text-4xl 2xl:top-36"
      >
        planning a funeral
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
          src="/img/planning-2.jpg"
          alt="planning"
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
            HOW DOES{" "}
            <span className="decoration-emerald-600 underline">
              FUNERAL PLANNING
            </span>{" "}
            WORK?​
          </h2>
          <p>
            One of the best things you can do when considering funeral planning
            is to think about all the possibilities and write down your wishes.
            A good place to start is by completing a Wishes Booklet.
          </p>
          <p className="hidden md:block">
            Click the &apos;learn more&apos; button to download the booklet and
            see more funeral planning from Natural Death Advocacy Network
            (NDAN).
          </p>
          <button
            onClick={() => router.push("/planning-a-funeral")}
            className="button
            text-lg"
          >
            Learn More
          </button>
        </div>
      </motion.div>

      <div className="w-full absolute top-[30%] bg-[#00FF6A]/10 left-0 h-[500px] -skew-y-12 z-0" />
    </div>
  );
}

export default Planning;
