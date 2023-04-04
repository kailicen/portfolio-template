import React from "react";
import { motion } from "framer-motion";
import PackageCard from "./PackageCard";

type Props = {};

function Packages({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Packages
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar-track-gray-400/20 scrollbar-thumb-[#00FF6A] scrollbar-thin"
      >
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </motion.div>
  );
}

export default Packages;
