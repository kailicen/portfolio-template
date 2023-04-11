import Header from "@/components/Header";
import PackageCard from "@/components/PackageCard";
import React from "react";

type Props = {};

function Pricing({}: Props) {
  return (
    <>
      <Header />
      <p>Pricing Page</p>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollBar"
      >
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </>
  );
}

export default Pricing;
