import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        INDIVIDUAL
        <br />
        COMPONENTS
      </h3>

      <div
        className="w-full flex overflow-x-auto snap-x
      snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#00FF6A] scrollbar"
      >
        <div
          className="flex flex-col items-center space-y-4 flex-shrink-0 
    w-[400px] md:w-[600px] xl:w-[600px] snap-center p-10 
    hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
        </div>
        <div
          className="flex flex-col items-center space-y-4 flex-shrink-0 
    w-[400px] md:w-[600px] xl:w-[600px] snap-center p-10 
    hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
        </div>
        <div
          className="flex flex-col items-center space-y-4 flex-shrink-0 
    w-[400px] md:w-[600px] xl:w-[600px] snap-center p-10
    hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
          <div className="flex justify-between w-full px-10">
            <p>PROFESSIONAL SERVICE</p>
            <p>$1,920 +GST</p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#00FF6A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
