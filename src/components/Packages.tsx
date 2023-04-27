import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { heroVariants } from "./Hero";

type Props = {};

function Packages({}: Props) {
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
        Pricing
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
          className="w-60 h-auto md:w-auto md:h-auto rounded-lg z-20
          2xl:w-auto 2xl:h-[300px]"
          src="/img/pricing-1.jpg"
          alt="sue-1"
          width={300}
          height={300}
        />
        <div
          className="flex flex-col space-y-3 md:space-y-5 items-start md:text-lg z-20
        2xl:text-2xl"
        >
          <h2
            className="text-lg md:text-xl
          2xl:text-3xl"
          >
            HOW MUCH DO{" "}
            <span className="decoration-green-400 underline">
              FAMILY LED HOME
            </span>{" "}
            FUNERALS COST?​
          </h2>
          <p>
            We encourage families, friends and communities to be as involved in
            the care of their person, the planning and all decision making as
            much as they are able and content to do so.
          </p>
          <p className="hidden md:block">
            Click the learn more button to see our prices in their individual
            components and together as packages of services.
          </p>
          <button
            onClick={() => router.push("/pricing")}
            className="button
          text-lg"
          >
            Learn More
          </button>
        </div>
      </motion.div>
      <div className="w-full absolute top-[30%] bg-green-400/10 left-0 h-[500px] skew-y-12 z-0" />
    </div>
  );
}

export default Packages;
