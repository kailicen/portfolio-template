import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};

function Planning({}: Props) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
     px-2 md:px-24 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        planning a funeral
      </h3>

      <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 items-center justify-center">
        <Image
          src="/img/planning-2.jpg"
          alt="planning"
          width={300}
          height={300}
          className="w-60 h-auto md:w-auto md:h-auto rounded-lg z-20"
        />
        <div className="flex flex-col space-y-3 md:space-y-5 items-start md:text-lg z-20">
          <h2 className="text-lg md:text-xl">
            HOW DOES{" "}
            <span className="decoration-green-400 underline">
              FUNERAL PLANNING
            </span>{" "}
            WORK?​
          </h2>
          <p>
            One of the best things you can do when considering funeral planning
            is to think about all the possibilities and write down your wishes.
            A good place to start is by completing a wishes booklet.
          </p>
          <p className="hidden md:block">
            Click the learn more button to download the booklet and see more
            funeral planning from Natural Death Advocacy Network (NDAN).
          </p>
          <button
            onClick={() => router.push("/planning-a-funeral")}
            className="button"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#00FF6A]/10 left-0 h-[500px] -skew-y-12 z-0" />
    </motion.div>
  );
}

export default Planning;
