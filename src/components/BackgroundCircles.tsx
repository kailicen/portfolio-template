import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.5],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 10,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#00FF6A] rounded-full h-[200px] w-[200px] mt-64 animate-ping" />
      <div className="absolute border border-[#00FF6A] rounded-full h-[300px] w-[300px] mt-64 animate-ping" />
      <div className="absolute border border-[#00FF6A] rounded-full h-[500px] w-[500px] mt-64 animate-ping" />
      {/* <div className="absolute border-4 border-[#00FF6A] opacity-20 rounded-full h-[500px] md:h-[700px] w-[500px] md:w-[700px] mt-64 animate-pulse" /> */}
      <div className="absolute border border-[#00FF6A] rounded-full h-[800px] w-[800px] mt-64 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
