import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          What is a{" "}
          <span className="underline decoration-[#00FF6A]/50">
            family lead approach
          </span>{" "}
          to home funeral?
        </h4>
        <p className="text-base">
          In a family led approach to Home Funerals the family, friends and/or
          community of the person who has died remain in control of as much or
          as little of the decisions and happenings as they are comfortable
          doing. This can include everything from the transport and after death
          care of your person through to all of the associated arrangements,
          paperwork, funeral decisions and content of and ceremony or service.
          You are able to do as much or as little as you wish and you can engage
          a funeral director who is content to work at the direction of a family
          in a family led service; assisting only with any of the components you
          ask them to do. However, the family remains in full control of the
          process and their person.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
