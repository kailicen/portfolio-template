import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

type Props = {};

function About({}: Props) {
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="relative">
        <Image src="/img/about-b.jpg" alt="about-b" width={2300} height={300} />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1
            className="text-xl md:text-4xl font-bold
          tracking-[20px] 2xl:text-7xl"
          >
            ABOUT: EDWIN & BEC
          </h1>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto
      2xl:max-w-7xl 2xl:text-lg md:text-base"
      >
        <div
          className="flex flex-col space-y-5 py-5 px-2
        items-center justify-center"
        >
          {/* Edwin */}
          <div className="flex flex-row justify-start items-center space-x-5">
            <Image
              className="w-32 h-32 md:w-60 md:h-60 rounded
            2xl:w-80 2xl:h-80"
              src="/img/edwin.jpg"
              alt="Edwin"
              width={190}
              height={280}
            />
            <div
              className="flex flex-col space-y-5 text-sm md:text-base p-3 rounded bg-gray-100
           2xl:text-lg 2xl:p-5 2xl:my-10"
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
                until he eventually made the move to Hobart in 2005 to follow a
                path of helping others. He studied counselling for a while and
                through that fell into the funeral industry where he met Bec.
              </p>
              <p>
                Edwin is now semi-retired but still works casually and enjoys
                the role of Celebrant for Funerals.
              </p>
              <p>
                Away from work, it is time with family and friends that he
                derives most enjoyment from along with travel and a nice sunny
                day… but also those quiet moments, in his big chair reading the
                Smithton Chronicle.
              </p>
              <p>
                You n’ Taboo was Edwin’s brain child and between he and Bec, he
                often finds himself increasingly busy talking to strangers about
                death and dying.
              </p>
            </div>
          </div>

          {/* Bec */}
          <div className="flex flex-row justify-start items-center space-x-5">
            <div
              className="flex flex-col space-y-5 text-sm md:text-base p-3 rounded bg-gray-100
           2xl:text-lg 2xl:p-5"
            >
              <p>
                <span
                  className="decoration-emerald-600 underline text-lg 
              2xl:text-2xl"
                >
                  Rebecca Lyons
                </span>
                , mother of one, hails from the Blue Mountains in NSW. She
                started her working career in Sydney before making the move to
                Tasmania in 2006. She had worked in various industries from
                finance to real estate until she found her path into the funeral
                industry through a set of fortuitous circumstances.
              </p>
              <p>
                She made the move out of working for the industry early in 2017
                and moved on to new adventures. In doing so it has provided her
                the opportunity to advance the mission of You n’ Taboo.
              </p>
              <p>
                She trained as an End of Life Doula and then applied and was
                granted regulated business status in Tasmania to handle human
                remains which allows her the unique privilege of being able to
                offer additional independent funeral directing services to her
                local community.
              </p>
              <p>
                In her spare time, she enjoys reading, writing, photography,
                camping and travel, but what makes her most contented is time
                together as a family. The subject of death and dying is her
                passion and she loves being out in the community raising
                awareness and promoting good honest conversations.
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
