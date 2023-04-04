import React from "react";
import { motion } from "framer-motion";

type Props = {};

function PackageCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[350px] md:w-[600px] xl:w-[800px] snap-center bg-green-900 p-5 md:p-10 
    hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          CREMATION ONLY PACKAGE
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-5">$2,425 + GST</p>
        <p className="text-sm md:text-base my-3">
          Transport from home or place of death to crematorium,
          shrouding/dressing, cremation, return of ashes, prepare permit and
          obtain record of death, shroud carrier or cardboard coffin for
          cremation, doctors authorisation.
        </p>
        <p className="text-sm md:text-base italic">
          (this does not include transport from place of death to home if
          required, home vigil and external costs such as material for shroud,
          newspaper advertising, coffin in place of shroud carrier or flowers)
        </p>
      </div>
    </article>
  );
}

export default PackageCard;
