import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  return (
    <div
      className="bg-hero-background bg-cover bg-center
      h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <div className="flex flex-col items-center">
        <Image
          src="/img/solace-logo.png"
          alt="solance logo"
          width={700}
          height={300}
        />
        <h2
          className="text-xl md:text-2xl font-bold md:font-extrabold uppercase 
        text-black bg-white/80 rounded-full py-2 px-5 tracking-[15px]"
        >
          End of Life Services
        </h2>
      </div>
    </div>
  );
}

export default Hero;
