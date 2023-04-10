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
      <div className="z-20 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-extrabold uppercase text-gray-100 py-2 tracking-[15px]">
          End of Life Services
        </h2>
        <Image
          src="/img/solace-logo.png"
          alt="solance logo"
          width={700}
          height={300}
        />

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#packages">
            <button className="heroButton">Pricing</button>
          </Link>
          <Link href="#packages">
            <button className="heroButton">Planning a Funeral</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Home Funerals in Tasmania</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Book</button>
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
