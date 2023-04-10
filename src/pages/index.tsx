import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Projects from "@/components/Projects";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="bg-[#001B0B] text-white h-screen snap-y snap-mandatory 
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

      {/* Price packages */}
      <section id="packages" className="snap-center">
        <Packages />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <div className="sticky bottom-5 w-full cursor-pointer flex items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#fff]/50 p-2 text-black font-bold">
            Solace
          </div>
        </div>
      </Link>
    </div>
  );
}
