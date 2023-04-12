import React from "react";
import Image from "next/image";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex w-full bg-gray-100 items-center justify-center py-5 px-3 mt-10">
      <div className="max-w-6xl divide-y flex flex-col space-y-3">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
          <Image
            src="/img/footer-1.png"
            alt="footer-1"
            width={300}
            height={300}
          />
          <Image
            src="/img/footer-2.jpe"
            alt="footer-2"
            width={300}
            height={300}
          />
          <Image
            src="/img/footer-3.jpg"
            alt="footer-3"
            width={300}
            height={300}
          />
          <Image
            src="/img/footer-4.jpg"
            alt="footer-4"
            width={300}
            height={300}
          />
          <Image
            src="/img/footer-5.jpg"
            alt="footer-5"
            width={500}
            height={500}
            className="col-span-2 md:col-span-1"
          />
        </div>
        <div className="py-5">2023 SOLACE. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
}

export default Footer;
