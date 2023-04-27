import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

type Props = {};

function Pricing({}: Props) {
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="relative">
        <Image
          src="/img/pricing-b.jpg"
          alt="pricing-b"
          width={2300}
          height={300}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1
            className="text-xl md:text-4xl font-bold 
          tracking-[20px] 2xl:text-7xl"
          >
            PRICING
          </h1>
        </div>
      </div>
      <div
        className="max-w-6xl mx-auto
      2xl:max-w-7xl"
      >
        <div
          className="flex flex-col space-y-5 md:flex-row md:space-x-5 py-5 md:py-10 px-2 md:px-5
        items-center justify-center"
        >
          <div
            className="flex flex-col space-y-3 md:space-y-5 items-start md:text-base
          2xl:text-lg"
          >
            <h2
              className="text-xl md:text-2xl
            2xl:text-3xl"
            >
              HOW MUCH DO{" "}
              <span className="decoration-emerald-600 underline">
                FAMILY LED HOME
              </span>{" "}
              FUNERALS COST?​
            </h2>
            <p>
              Our prices in their individual components and together as packages
              of services are listed below.
            </p>
            <p>
              We approach our work with the hope that we can empower and skill
              families to care for their person. We encourage families, friends
              and communities to be as involved in the care of their person, the
              planning and all decision making as much as they are able and
              content to do so. All Packages outlined below include our
              Professional fee component, giving you 24 hour support, the
              initial consultation and up to three home visits (these visits are
              not included in the cremation only option). The transport costs
              included below encompass travel within a 50km radius of Hobart.
            </p>
            <p>
              We are happy to meet with you for an initial consultation and
              create a tailored service for you.
            </p>
          </div>
          <Image
            className="w-auto h-auto md:w-[400px] md:h-auto rounded-lg
            2xl:h-[400px] 2xl:w-auto"
            src="/img/pricing-3.jpg"
            alt="sue-1"
            width={400}
            height={400}
          />
        </div>
        <div
          className="flex flex-col space-y-3 md:space-y-5 items-start md:text-base
        py-5 md:py-10 px-2 md:px-5"
        >
          <h2 className="text-xl md:text-2xl">
            <span className="decoration-emerald-600 underline">
              INDIVIDUAL COMPONENTS
            </span>
          </h2>
          <div
            className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory
       p-3 md:p-5 text-base 2xl:text-lg 
       scrollbar scrollbar-h-5 scrollbar-track-gray-200 scrollbar-thumb-rounded-full
       scrollbar-thumb-emerald-600"
          >
            <article
              className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 
    w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-emerald-100 px-3 py-5 md:p-10 
    hover:opacity-100 opacity-80 transition-opacity duration-200 overflow-hidden
"
            >
              <table className="w-auto md:w-[500px]">
                <tr>
                  <td>Professional Service</td>
                  <td>$1,980.00</td>
                </tr>
                <tr>
                  <td>Transfer Home from place of death</td>
                  <td>$260.00</td>
                </tr>
                <tr>
                  <td>Hire Techniice - 3 days</td>
                  <td>$390.00</td>
                </tr>
                <tr>
                  <td>Hire Table - 3 days</td>
                  <td>$160.00</td>
                </tr>
                <tr>
                  <td>Viewing in our viewing room</td>
                  <td>$150.00</td>
                </tr>
                <tr>
                  <td>Natural Preparation (inc. shrouding)</td>
                  <td>$295.00</td>
                </tr>
                <tr>
                  <td>Traditional Preparation</td>
                  <td>$580.00</td>
                </tr>
                <tr>
                  <td>Doctors Authorisation</td>
                  <td>$120.00</td>
                </tr>
                <tr>
                  <td>Prepare Permit, inc. Record of Death</td>
                  <td>$75.00</td>
                </tr>
              </table>
            </article>
            <article
              className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 
    w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-emerald-100 px-3 py-5 md:p-10 
    hover:opacity-100 opacity-80 transition-opacity duration-200 overflow-hidden"
            >
              <table className="w-auto md:w-[500px]">
                <tr>
                  <td>Funeral Co-ordination/conducting</td>
                  <td>$800.00</td>
                </tr>
                <tr>
                  <td>Celebrant, full service</td>
                  <td>$500.00</td>
                </tr>
                <tr>
                  <td>Celebrant Consultancy - 2hrs</td>
                  <td>$200.00</td>
                </tr>
                <tr>
                  <td>Multimedia Production</td>
                  <td>$215.00</td>
                </tr>
                <tr>
                  <td>Transfer to Burial/Cremation</td>
                  <td>$260.00</td>
                </tr>
                <tr>
                  <td>Cremation</td>
                  <td>$800.00</td>
                </tr>
                <tr>
                  <td>Shroud Carrier</td>
                  <td>$200.00</td>
                </tr>
                <tr>
                  <td>Design of Order of Service (up to 8 pages)</td>
                  <td>$130.00</td>
                </tr>
              </table>
            </article>
          </div>
        </div>

        <div
          className="flex flex-col space-y-3 md:space-y-5 items-start md:text-base
        py-5 md:py-10 px-2 md:px-5"
        >
          <h2 className="text-xl md:text-2xl">
            <span className="decoration-emerald-600 underline">PACKAGES</span>
          </h2>
          <div
            className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory
       p-3 md:p-5 text-sm md:text-base 2xl:text-lg
       scrollbar scrollbar-h-5 scrollbar-track-gray-200 scrollbar-thumb-rounded-full
       scrollbar-thumb-emerald-600"
          >
            <article
              className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 
    w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-emerald-100 px-3 py-5 md:p-10 
    hover:opacity-100 opacity-80 transition-opacity duration-200 overflow-hidden"
            >
              <div className="px-0 md:px-10">
                <h4 className="text-2xl md:text-4xl font-light">
                  Cremation only Package
                </h4>
                <p className="font-bold text-xl md:text-2xl mt-5">
                  $2,495.00 +GST
                </p>
                <p className="my-3">
                  Transport from home or place of death to crematorium,
                  shrouding/dressing, cremation, return of ashes, prepare permit
                  and obtain record of death, shroud carrier or cardboard coffin
                  for cremation, doctors authorisation.
                </p>
                <p className="italic">
                  (this does not include transport from place of death to home
                  if required, and home vigil or death care and external costs
                  such as material for shroud, newspaper advertising, coffin in
                  place of shroud carrier or flowers)
                </p>
              </div>
            </article>
            <article
              className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 
    w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-emerald-100 px-3 py-5 md:p-10 
    hover:opacity-100 opacity-80 transition-opacity duration-200 overflow-hidden"
            >
              <div className="px-0 md:px-10">
                <h4 className="text-2xl md:text-4xl font-light">
                  Cremation and Home Vigil Package
                </h4>
                <p className="font-bold text-xl md:text-2xl mt-5">
                  $4,540.00 +GST
                </p>
                <p className="my-3">
                  Family supported to vigil at home, hire of Techniice and table
                  (3 days), provide after death care (natural) including
                  shrouding/dressing, transport from home to crematorium,
                  cremation, return of ashes, prepare permit and obtain record
                  of death, shroud carrier or cardboard coffin for cremation,
                  doctor’s authorisation.
                </p>
                <p className="italic">
                  (this does not include transport from place of death to home
                  if required and external costs such as material for shroud,
                  newspaper advertising, coffin in place of shroud carrier or
                  flowers)
                </p>
              </div>
            </article>
            <article
              className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 
    w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-emerald-100 px-3 py-5 md:p-10 
    hover:opacity-100 opacity-80 transition-opacity duration-200 overflow-hidden"
            >
              <div className="px-0 md:px-10">
                <h4 className="text-2xl md:text-4xl font-light">
                  Cremation, Home Vigil and Ceremony Package
                </h4>
                <p className="font-bold text-xl md:text-2xl mt-5">
                  $6,185.00 +GST
                </p>
                <p className="my-3">
                  Family supported to vigil at home, hire of Techniice and table
                  (3 days), provide after death care (natural) including
                  shrouding/dressing, transfer from home to place of service and
                  place of cremation, prepare permit and obtain record of death,
                  funeral arranging and co-ordination, full celebrant service,
                  multimedia production (30-50 photos), shroud carrier or
                  cardboard coffin for cremation, cremation, return of ashes,
                  doctor’s authorisation.
                </p>
                <p className="italic">
                  (this does not include transport from place of death to home
                  if required and external costs such as material for shroud,
                  newspaper advertising, order of service design and printing,
                  coffin in place of shroud carrier, flowers, catering, venue or
                  equipment hire)
                </p>
              </div>
            </article>
            <article
              className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 
    w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-emerald-100 px-3 py-5 md:p-10 
    hover:opacity-100 opacity-80 transition-opacity duration-200 overflow-hidden"
            >
              <div className="px-0 md:px-10">
                <h4 className="text-2xl md:text-4xl font-light">
                  Burial and Home Vigil Package
                </h4>
                <p className="font-bold text-xl md:text-2xl mt-5">
                  $4,420.00 +GST
                </p>
                <p className="my-3">
                  Family supported to vigil at home, hire of Techniice and table
                  (3 days), provide after death care (natural) including
                  shrouding/dressing, transport from home to cemetery within a
                  50km radius of Hobart, conduct of burial including small
                  graveside committal, prepare permit and obtain record of
                  death, shroud carrier or cardboard coffin for burial.
                </p>
                <p className="italic">
                  (this does not include transport from place of death to home
                  if required prior to burial, excess travel over 50km radius
                  and external costs such as material for shroud, newspaper
                  advertising, coffin in place of shroud carrier, cost of grave
                  and digging, hire of pallbearers if required, any formal
                  funeral ceremony or flowers)
                </p>
              </div>
            </article>
            <article
              className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 
    w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-emerald-100 px-3 py-5 md:p-10 
    hover:opacity-100 opacity-80 transition-opacity duration-200 overflow-hidden"
            >
              <div className="px-0 md:px-10">
                <h4 className="text-2xl md:text-4xl font-light">
                  Burial, Home Vigil and Ceremony Package
                </h4>
                <p className="font-bold text-xl md:text-2xl mt-5">
                  $5,800.00 +GST
                </p>
                <p className="my-3">
                  Family supported to vigil at home, hire of Techniice and table
                  (3 days), provide after death care (natural) including
                  shrouding/dressing, transport from home to place of service
                  and then to cemetery within a 50km radius of Hobart, burial,
                  prepare permit and obtain record of death, shroud carrier or
                  cardboard coffin for burial, funeral arranging and
                  co-ordination, full celebrant service, multimedia production
                  (30-50 photos).
                </p>
                <p className="italic">
                  (this does not include transport from place of death to home
                  if required, excess travel over 50km radius and external costs
                  such as material for shroud, newspaper advertising, order of
                  service design and printing, coffin in place of shroud
                  carrier, flowers, catering, cost of grave and digging, venue
                  or equipment hire)
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
