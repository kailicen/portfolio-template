import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};

function Packages({}: Props) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
     px-2 md:px-24 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Pricing
      </h3>

      <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 items-center justify-center">
        <Image
          src="/img/pricing-1.jpg"
          alt="sue-1"
          width={300}
          height={300}
          className="z-20"
        />
        <div className="flex flex-col space-y-3 md:space-y-5 items-start md:text-lg z-20">
          <h2 className="text-lg md:text-xl">
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
          <p>
            Click the learn more button to see our prices in their individual
            components and together as packages of services.
          </p>
          <button onClick={() => router.push("/pricing")} className="button">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-green-400/10 left-0 h-[500px] skew-y-12 z-0" />
    </motion.div>
  );
}

export default Packages;
