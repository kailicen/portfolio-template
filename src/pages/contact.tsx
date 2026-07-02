import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Solace</title>
        <meta
          name="description"
          content="Contact Solace for immediate support, funeral guidance, end-of-life care assistance, or general enquiries."
        />
      </Head>

      <Header />

      <div className="relative">
        <Image
          src="/img/contact-b.jpg"
          alt="Contact Solace"
          width={2300}
          height={300}
          className="w-full h-48 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold tracking-[10px] 2xl:text-7xl px-4 uppercase text-center">
            Contact Us
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <Container>
          <Breadcrumb items={[{ label: "Contact Us" }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <section className="py-8">
              <p className="text-sm font-medium text-emerald-600 uppercase tracking-[4px] mb-4">
                Contact
              </p>

              <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-gray-800 mb-6 max-w-4xl">
                Time sensitive? Don&apos;t wait. Let&apos;s talk.
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mb-10 leading-relaxed">
                Have a question or need support? Send us a message and we will
                get back to you as soon as possible.
              </p>

              <div className="w-full max-w-3xl">
                <ContactForm compact />
              </div>
            </section>
          </motion.div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
