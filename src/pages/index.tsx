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
      className="bg-[#002A12] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-500/20 
    scrollbar-thumb-[#00FF6A] scrollbar-thin"
    >
      <Head>
        <title>Portfolio template</title>
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
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="bg-[#00FF6A]/20 p-3 rounded-full hover:bg-[#00FF6A]/50">
              You n&apos; Taboo logo
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}
