import React from "react";
import Image from "next/image";
import MailingList from "@/components/MailingList";
import Container from "@/components/Container";
import Link from "next/link";

function Footer() {
  return (
    <>
      <MailingList />

      <footer className="w-full bg-gray-100 py-5">
        <Container className="flex flex-col divide-y">
          <div className="grid grid-cols-2 items-center gap-4 pb-5 md:grid-cols-5">
            <Link
              href="https://www.ahfa.org.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the Australian Home Funeral Alliance website"
              className="rounded-md transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              <Image
                src="/img/footer-2.jpe"
                alt="Australian Home Funeral Alliance"
                width={300}
                height={300}
                className="h-auto w-full object-contain"
              />
            </Link>

            <Link
              href="https://ndan.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the Natural Death Advocacy Network website"
              className="rounded-md transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              <Image
                src="/img/footer-3.jpg"
                alt="Natural Death Advocacy Network member"
                width={300}
                height={300}
                className="h-auto w-full object-contain"
              />
            </Link>

            <Link
              href="https://nedalliance.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the National End-of-Life Doula Alliance website"
              className="rounded-md transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              <Image
                src="/img/footer-4.jpg"
                alt="National End-of-Life Doula Alliance member"
                width={300}
                height={300}
                className="h-auto w-full object-contain"
              />
            </Link>

            <Link
              href="https://www.ahfa.org.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the Australian Home Funeral Alliance website"
              className="rounded-md transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              <Image
                src="/img/footer-5.jpg"
                alt="Australian Home Funeral Alliance member"
                width={500}
                height={500}
                className="h-auto w-full object-contain"
              />
            </Link>

            <Link
              href="https://held.org.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Holistic End of Life and Deathcare Australia"
              className="rounded-md transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              <Image
                src="/img/footer-7.jpg"
                alt="Holistic End of Life and Deathcare Australia practitioner member"
                width={500}
                height={500}
                className="h-auto w-full object-contain"
              />
            </Link>
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
