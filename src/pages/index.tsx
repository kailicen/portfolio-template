import About from "@/components/About";
import Book from "@/components/Book";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HavingAFuneral from "@/components/HavingAFuneral";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CommunityEducation from "@/components/CommunityEducation";
import Packages from "@/components/Packages";
import Head from "next/head";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-solace-canvas">
      <Head>
        <title>
          Family-Led Funerals & End of Life Services | Solace Tasmania
        </title>

        <meta
          name="description"
          content="Solace provides compassionate funeral support, home funerals, end-of-life guidance and community education for families across Tasmania."
        />

        <link rel="canonical" href="https://solaceendoflife.com.au/" />
      </Head>

      <Header />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="community-education">
          <CommunityEducation />
        </section>

        <section id="funeral">
          <HavingAFuneral />
        </section>

        <section id="packages">
          <Packages />
        </section>

        <section id="book">
          <Book />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to the top"
        className="
          fixed bottom-5 right-5 z-40
          flex h-12 w-12 items-center justify-center
          rounded-full
          border border-solace-300
          bg-solace-surface/90
          text-solace-700
          shadow-md backdrop-blur-sm
          transition-all
          hover:-translate-y-0.5
          hover:bg-white
          hover:text-solace-800
          hover:shadow-lg
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-solace-400
          focus-visible:ring-offset-2
        "
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>

      <Footer />
    </div>
  );
}
