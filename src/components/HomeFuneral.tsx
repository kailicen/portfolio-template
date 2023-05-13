import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { heroVariants } from "./Hero";

type Props = {};

function HomeFuneral({}: Props) {
  const router = useRouter();

  return (
    <div
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
     px-2 md:px-24 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl
      2xl:text-4xl 2xl:top-36"
      >
        Home Funeral in Tas
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
          src="/img/home-1.jpg"
          alt="home-1"
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
            WHY SHOULD YOU CONSIDER A{" "}
            <span className="decoration-emerald-600 underline">
              FAMILY LED APPROACH
            </span>{" "}
            TO HOME FUNERALS?
          </h2>
          <p className="hidden md:block">
            Choosing to spend time with a person who has died, and the option of
            keeping their body at home allows for a home vigil. This is whether
            the person’s body is kept at home right up until the point of burial
            or cremation, or for a shorter time; even just a few hours spent
            with your person in a familiar setting can facilitate your grief
            journey. It provides the opportunity for a gentler approach to
            ‘letting go’.
          </p>
          <p className="block md:hidden">
            Choosing to spend time with a person who has died and the option of
            keeping their body at home allows for a home vigil. It provides the
            opportunity for a gentler approach to ‘letting go’.
          </p>
          <p className="hidden md:block">
            Click the &apos;learn more&apos; button to see more about Home
            Funeral in Tasmania.
          </p>
          <button
            onClick={() => router.push("/home-funerals-in-tasmania")}
            className="button
           text-lg"
          >
            Learn More
          </button>
        </div>
      </motion.div>
      <div className="w-full absolute top-[30%] bg-emerald-600/10 left-0 h-[500px] skew-y-12 z-0" />
    </div>
  );
}

export default HomeFuneral;
