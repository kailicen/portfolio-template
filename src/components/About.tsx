import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-left
   max-w-6xl px-10 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        About
      </h3>

      <div className="absolute top-36 flex flex-col space-y-10 px-3 md:px-10">
        <div className="flex flex-row justify-start items-center space-x-5 h-64">
          <Image
            className="w-32 h-32 md:w-60 md:h-60 rounded"
            src="/img/edwin.jpg"
            alt="Edwin"
            width={190}
            height={280}
          />
          <div
            className="flex flex-col space-y-5 h-60 text-sm md:text-base p-3 rounded bg-green-950
          overflow-y-scroll overscroll-contain scrollBar"
          >
            <p>
              <span className="decoration-[#00FF6A]/50 underline text-lg">
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
        </div>
        <div className="flex flex-row justify-start items-center space-x-5 h-64">
          <div
            className="flex flex-col space-y-5 h-60 text-sm md:text-base p-3 rounded bg-green-950
          overflow-y-scroll overscroll-contain scrollBar"
          >
            <p className="text-xs md:text-base">
              <span className="decoration-[#00FF6A]/50 underline text-lg">
                Rebecca Lyons
              </span>
              , mother of one, hails from the Blue Mountains in NSW. She started
              her working career in Sydney before making the move to Tasmania 11
              years ago. She had worked in various industries from finance to
              real estate until she found her path into the funeral industry
              through a set of fortuitous circumstances.
            </p>
            <p className="text-xs md:text-base">
              She made the move out of working for the Industry early in 2017
              and moved on to new adventures, in doing so it has provided her
              the opportunity to advance the mission of You n’ Taboo.
            </p>
            <p className="text-xs md:text-base">
              She trained as an End of Life Doula and then applied and was
              granted regulated business status in Tasmania to handle human
              remains which allows her the unique position of being able to
              offer additional independent funeral directing services to her
              local community.
            </p>
            <p className="text-xs md:text-base">
              In her spare time, she enjoys reading, writing, photography,
              camping and travel but what makes her most contented is time
              together as a family. The subject of death and dying is her
              passion and she loves being out in the community raising awareness
              and promoting good honest conversations.
            </p>
            <p className="text-xs md:text-base">
              <ul>
                <li>
                  <Link
                    href="https://ndan.com.au/"
                    className="underline text-gray-200 hover:text-[#00FF6A]"
                  >
                    - President of Australia&apos;s Natural Death Advocacy
                    Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.ahfa.org.au/"
                    className="underline text-gray-200 hover:text-[#00FF6A]"
                  >
                    - Chair of the Australian Home Funeral Alliance
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://yountaboo.com/a-heartfelt-undertaking/"
                    className="underline text-gray-200 hover:text-[#00FF6A]"
                  >
                    - Author of A Heartfelt Undertaking
                  </Link>
                </li>
              </ul>
            </p>
          </div>
          <Image
            className="w-32 h-32 md:w-60 md:h-60 rounded border-8 border-white"
            src="/img/bec.jpg"
            alt="Bec"
            width={200}
            height={300}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
