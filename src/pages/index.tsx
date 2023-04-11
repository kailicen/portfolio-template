import About from "@/components/About";
import Book from "@/components/Book";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeFuneral from "@/components/HomeFuneral";
import Packages from "@/components/Packages";
import Planning from "@/components/Planning";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="bg-white text-black h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollBar"
    >
      <Head>
        <title>Solace - End of Life Services</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Pricing */}
      <section id="packages" className="snap-center">
        <Packages />
      </section>

      <section id="planning" className="snap-start">
        <Planning />
      </section>

      <section id="home" className="snap-start">
        <HomeFuneral />
      </section>

      <section id="book" className="snap-start">
        <Book />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <div className="sticky bottom-5 w-full cursor-pointer flex items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300/50 p-2 text-black font-bold">
            Solace
          </div>
        </div>
      </Link>
    </div>
  );
}
