import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Head from "next/head";

export default function ContactPage() {
  return (
    <div className="bg-white text-black">
      <Head>
        <title>Contact Us | Solace</title>
        <meta
          name="description"
          content="Contact Solace for immediate support, funeral guidance, end-of-life care assistance, or general enquiries."
        />
      </Head>

      <Header />

      <main>
        <div className="relative">
          <Image
            src="/img/contact-b.jpg"
            alt="Contact Solace"
            width={2300}
            height={300}
            className="h-48 w-full object-cover md:h-80"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex items-center justify-center text-white">
            <h1 className="px-4 text-center text-2xl font-semibold uppercase tracking-[10px] md:text-5xl 2xl:text-7xl">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 2xl:max-w-7xl">
          <Breadcrumb items={[{ label: "Contact Us" }]} />

          <section className="py-12 md:py-16">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                TIME SENSITIVE? DON&apos;T WAIT.{" "}
                <span className="underline decoration-emerald-600">
                  LET&apos;S TALK.
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-lg">
                Have a question or need support? Send us a message and we will
                get back to you as soon as possible.
              </p>
            </div>

            <div className="flex justify-center">
              <ContactForm />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
