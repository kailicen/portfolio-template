import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-500 pb-2 tracking-[15px]">
          Solace
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          FAMILY LED FUNERALS
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#packages">
            <button className="heroButton">Packages</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Individual Components</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
