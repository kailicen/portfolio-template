import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {};

function HomeFuneral({}: Props) {
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
        Home Funeral in Tas
      </h3>

      <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 items-center justify-center">
        <Image
          src="/img/home-1.jpg"
          alt="home-1"
          width={300}
          height={300}
          className="z-20"
        />
        <div className="flex flex-col space-y-3 md:space-y-5 items-start md:text-lg z-20">
          <h2 className="text-lg md:text-xl">
            WHY SHOULD YOU CONSIDER A{" "}
            <span className="decoration-green-400 underline">
              FAMILY LED APPROACH
            </span>{" "}
            TO HOME FUNERALS?
          </h2>
          <p>
            Choosing to spend time with a person who has died and the option of
            keeping their body at home allows for a home vigil. This is whether
            the person’s body is kept at home right up until the point of burial
            or cremation or for a shorter time; even just a few hours spent with
            your person’s body in a familiar setting can make a huge difference.
            It provides the opportunity for a gentler approach to ‘letting go’.
          </p>
          <p>
            Click the learn more button to see more about Home Funeral in
            Tasmania.
          </p>
          <button
            onClick={() => router.push("/home-funeral-in-tasmania")}
            className="button"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-green-400/10 left-0 h-[500px] skew-y-12 z-0" />
    </motion.div>
  );
}

export default HomeFuneral;