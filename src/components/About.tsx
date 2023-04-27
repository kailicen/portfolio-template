import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const aboutLeftVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const aboutRightVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-left
   max-w-6xl px-10 justify-evenly mx-auto items-center scroll-smooth
   2xl:max-w-[80%]"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl 
      2xl:text-4xl 2xl:top-36"
      >
        About
      </h3>

      <div
        className="absolute top-36 flex flex-col space-y-3 md:space-y-10 px-3 md:px-10
      2xl:relative 2xl:h-[70vh] 2xl:justify-evenly 2xl:w-full 2xl:px-16"
      >
        {/* Edwin */}
        <motion.div
          variants={aboutLeftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row justify-start items-center space-x-5 h-64
          2xl:h-[100px]"
        >
          <Image
            className="w-32 h-32 md:w-60 md:h-60 rounded
            2xl:w-80 2xl:h-80"
            src="/img/edwin.jpg"
            alt="Edwin"
            width={190}
            height={280}
          />
          <div
            className="flex flex-col space-y-5 h-60 text-sm md:text-base p-3 rounded bg-gray-100
          2xl:h-96 2xl:text-lg 2xl:p-5
            overflow-y-scroll overscroll-contain"
          >
            <p>
              <span
                className="decoration-emerald-600 underline text-lg 
              2xl:text-2xl"
              >
                Edwin Quilliam
              </span>
              , father of three, was born and bred on the North-West coast of
              Tasmania. A country boy at heart he worked building and farming
              until he eventually made the move to Hobart to follow a path of
              helping others. He studied counselling for a while and through
              that fell into the funeral industry. That was 12 years ago and
              where he met Bec.
            </p>
            <p>
              Edwin is now semi-retired but still works casually and enjoys the
              role of Celebrant for Funerals.
            </p>
            <p>
              Away from work, it is time with family and friends that he derives
              most enjoyment from along with travel and a nice sunny day… but
              also those quiet moments, in his big chair reading the Smithton
              Chronicle.
            </p>
            <p>
              You n’ Taboo was Edwin’s brain child and between he and Bec, he
              often finds himself increasingly busy talking to strangers about
              death and dying.
            </p>
          </div>
        </motion.div>

        {/* Bec */}
        <motion.div
          variants={aboutRightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-row justify-start items-center space-x-5 h-64
          2xl:h-[100px]"
        >
          <div
            className="flex flex-col space-y-5 h-60 text-sm md:text-base p-3 rounded bg-gray-100
          2xl:h-96 2xl:text-lg 2xl:p-5
            overflow-y-scroll overscroll-contain"
          >
            <p>
              <span
                className="decoration-emerald-600 underline text-lg 
              2xl:text-2xl"
              >
                Rebecca Lyons
              </span>
              , mother of one, hails from the Blue Mountains in NSW. She started
              her working career in Sydney before making the move to Tasmania 11
              years ago. She had worked in various industries from finance to
              real estate until she found her path into the funeral industry
              through a set of fortuitous circumstances.
            </p>
            <p>
              She made the move out of working for the Industry early in 2017
              and moved on to new adventures, in doing so it has provided her
              the opportunity to advance the mission of You n’ Taboo.
            </p>
            <p>
              She trained as an End of Life Doula and then applied and was
              granted regulated business status in Tasmania to handle human
              remains which allows her the unique position of being able to
              offer additional independent funeral directing services to her
              local community.
            </p>
            <p>
              In her spare time, she enjoys reading, writing, photography,
              camping and travel but what makes her most contented is time
              together as a family. The subject of death and dying is her
              passion and she loves being out in the community raising awareness
              and promoting good honest conversations.
            </p>
            <p>
              <ul>
                <li>
                  <Link
                    href="https://ndan.com.au/"
                    className="underline text-gray-800 hover:text-emerald-600"
                  >
                    - President of Australia&apos;s Natural Death Advocacy
                    Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ahfa.org.au/"
                    className="underline text-gray-800 hover:text-emerald-600"
                  >
                    - Chair of the Australian Home Funeral Alliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://yountaboo.com/a-heartfelt-undertaking/"
                    className="underline text-gray-800 hover:text-emerald-600"
                  >
                    - Author of A Heartfelt Undertaking
                  </Link>
                </li>
              </ul>
            </p>
          </div>
          <Image
            className="w-32 h-32 md:w-60 md:h-60 rounded-lg
            2xl:w-80 2xl:h-80"
            src="/img/bec.jpg"
            alt="Bec"
            width={200}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
