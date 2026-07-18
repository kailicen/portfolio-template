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

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen z-0">
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

      <div className="flex flex-col space-y-20">
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
      </div>

      <div className="sticky bottom-5 mb-5 w-full cursor-pointer flex items-center justify-center">
        <div
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300/50 p-2 text-black font-bold"
          onClick={scrollToTop}
        >
          Solace
        </div>
      </div>

      <section>
        <Footer />
      </section>
    </div>
  );
}
