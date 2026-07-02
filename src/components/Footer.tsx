import React from "react";
import Image from "next/image";
import MailingList from "@/components/MailingList";
import Container from "@/components/Container";

function Footer() {
  return (
    <>
      <MailingList />

      <footer className="w-full bg-gray-100 py-5">
        <Container className="flex flex-col divide-y">
          <div className="grid grid-cols-2 items-center gap-4 pb-5 md:grid-cols-5">
            <Image
              src="/img/footer-2.jpe"
              alt="Partner organisation"
              width={300}
              height={300}
              className="h-auto w-full object-contain"
            />

            <Image
              src="/img/footer-3.jpg"
              alt="Partner organisation"
              width={300}
              height={300}
              className="h-auto w-full object-contain"
            />

            <Image
              src="/img/footer-4.jpg"
              alt="Partner organisation"
              width={300}
              height={300}
              className="h-auto w-full object-contain"
            />

            <Image
              src="/img/footer-5.jpg"
              alt="Partner organisation"
              width={500}
              height={500}
              className="h-auto w-full object-contain"
            />

            <Image
              src="/img/footer-7.jpg"
              alt="Partner organisation"
              width={500}
              height={500}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="py-5 text-sm text-gray-700">
            © {new Date().getFullYear()} SOLACE. ALL RIGHTS RESERVED.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
