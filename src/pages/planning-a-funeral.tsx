import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

type Props = {};

function PlanningAFuneral({}: Props) {
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="relative">
        <Image
          src="/img/planning-b.jpg"
          alt="planning-b"
          width={2300}
          height={300}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1
            className="text-xl md:text-4xl font-bold
          tracking-[20px] 2xl:text-7xl"
          >
            PLANNING A FUNERAL
          </h1>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto
      2xl:max-w-7xl"
      >
        {/* outer info */}
        <div
          className="flex flex-col space-y-3 md:space-y-5 items-start md:text-base 2xl:text-lg
        py-5 md:pt-10 px-2 md:px-5
        2xl:text-lg"
        >
          <p>
            One of the best things you can do when considering funeral planning
            is to think about all the possibilities and write down your wishes.
            A good place to start is by completing a wishes booklet.{" "}
            <Link
              href="/wishes-booklet.pdf"
              target="_blank"
              className="bg-emerald-100 hover:text-emerald-500 rounded-lg px-1 pb-1"
            >
              Click here
            </Link>{" "}
            to download the booklet!
          </p>
          <p>
            The Natural Death Centre UK have provided a list of questions to ask
            your funeral Director.{" "}
            <Link
              href="http://www.naturaldeath.org.uk/uploads/Forms/Questions%20to%20ask%20a%20funeral%20director.pdf"
              target="_blank"
              className="bg-emerald-100 hover:text-emerald-500 rounded-lg px-1 pb-1"
            >
              Click here
            </Link>{" "}
            for the list!
          </p>
          <p>
            The following is taken from the Natural Death Advocacy Network
            (NDAN) -{" "}
            <Link
              href="https://ndan.com.au/resources/funeral-planning"
              target="_blank"
              className="bg-emerald-100 hover:text-emerald-500 rounded-lg px-1 pb-1"
            >
              https://ndan.com.au/resources/funeral-planning
            </Link>
          </p>
        </div>
        {/* start with funeral planning: info + img */}
        <div
          className="flex flex-col space-y-5 md:flex-row md:space-x-5 py-5 md:py-10 px-2 md:px-5
        items-center justify-center"
        >
          <div className="flex flex-col space-y-3 md:space-y-5 items-start md:text-base 2xl:text-lg">
            <h2 className="text-xl md:text-2xl">
              <span className="decoration-emerald-400 underline">
                FUNERAL PLANNING
              </span>{" "}
            </h2>
            <p>
              NDAN is committed to providing you with information which will
              help in the making of informed choices regarding your funeral
              options. From coffins, transport, celebrancy and interment we
              endeavour to outline the options for traditional and contemporary
              funeral choices.
            </p>
            <p>
              This{" "}
              <Link
                href="https://ndan.com.au/images/Factsheets/INFO_SHEET_2_Funeral_Planning.pdf"
                target="_blank"
                className="bg-emerald-100 hover:text-emerald-500 rounded-lg px-1 pb-1"
              >
                factsheet
              </Link>{" "}
              is designed to give you an idea of what options may be available
              to you and, given that knowledge, inform the discussions you have
              with your family, friends, and end of life and death care
              providers.
            </p>
            <p>
              Importantly, this is a process you have the right to take part in
              or govern as much or as little as you choose. See the page on{" "}
              <Link
                href="https://ndan.com.au/resources/family-led-funerals"
                target="_blank"
                className="bg-emerald-100 hover:text-emerald-500 rounded-lg px-1 pb-1"
              >
                Family Led Funerals
              </Link>{" "}
              .
            </p>
          </div>
          <Image
            className="w-auto h-auto md:w-[400px] md:h-auto rounded-lg"
            src="/img/planning-3.jpg"
            alt="planning-3"
            width={400}
            height={400}
          />
        </div>
        <div
          className="flex flex-col space-y-3 md:space-y-5 items-start md:text-base 2xl:text-lg
        py-5 md:pt-10 px-2 md:px-5"
        >
          <h2 className="text-lg md:text-xl">FUNERAL CHECKLIST</h2>
          <p>
            Here is the checklist of possible components and considerations for
            a funeral ceremony. This list is compiled based on the choices given
            when engaging with contemporary funeral businesses.
          </p>
          <p className="font-bold">
            For a family-led funeral, there are some mandatory decisions or
            components in the process. They are as follows:
          </p>
          <ul className="list-disc pl-10">
            <li>
              Conventional Burial, Natural Burial, or Cremation (A body must be
              disposed of. This is the ONLY legal function of a funeral)
            </li>
            <li>Registration of death</li>
            <li>Permit for burial or cremation</li>
            <li>
              Coffin selection – traditional hardwood, particle board, home
              made, woven, no coffin (A body may be required to be transported
              into a cemetery in a coffin but this does not mean it must be
              buried or cremated in one)
            </li>
            <li>
              Transportation of coffin (A coffin will not fit into most cars but
              vans, utes with canopies or a hearse are suitable)
            </li>
            <li>
              Pallbearers (A body is heavy and to safely transport one in a
              coffin/shroud will require multiple people. To lower a coffin into
              a grave will require a MINIMUM of 4 people and 1 to direct.)
            </li>
          </ul>
          <p>
            There are many other options that families may like to consider,
            they can include:
          </p>
          <ul className="list-disc pl-10">
            <li>Date of ceremony (if chosen, not a necessity)</li>
            <li>Place of ceremony – setting, decoration, formal or casual</li>
            <li>Number of people expected</li>
            <li>Wording for death and funeral notice</li>
            <li>
              Which newspapers to place notices and how many times each notice
              is to run
            </li>
            <li>
              Music selection (opening, reflection or montage and closing)
            </li>
            <li>10-12 photos per minute of music (if a montage is required)</li>
            <li>Other AV options including live streaming, recording</li>
            <li>Catering requirements</li>
            <li>
              Celebrant/clergy to take the ceremony (or you can take it
              yourself)
            </li>
            <li>
              Celebrant/clergy to take the ceremony (or you can take it
              yourself)
            </li>
            <li>
              Memorial sheets/signing sheets for attendees and other stationary
            </li>
            <li>Booklet/order of service/bookmark/postcard</li>
            <li>Hearse and/or transportation of family</li>
            <li>
              Care of the body – home based or with a funeral director -
              dressing/make up/jewellery
            </li>
            <li>
              Care of the body – home based or with a funeral director -
              dressing/make up/jewellery
            </li>
            <li>Religious rites</li>
            <li>Vigil or viewing times</li>
            <li>Vigil or viewing times</li>
            <li>Organist/pianist/singers/live music</li>
            <li>Gifts for attendees</li>
            <li>Grave marker (in case of burial)</li>
            <li>Ashes placement (in the case of cremation)</li>
            <li>Plaque/headstone wording (in case of placement)</li>
          </ul>
          <p className="italic">
            Note: the cost of memorialisation is generally not included in
            funeral costs and additional funds will be needed. Some cemeteries
            require the purchase of headstones within specific time frames so
            these enquiries are best made in the initial stages of planning.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PlanningAFuneral;
